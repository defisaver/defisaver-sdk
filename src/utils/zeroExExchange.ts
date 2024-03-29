/**
 * @module utils.zeroExExchange
 */

import Dec from 'decimal.js';
import axios from 'axios';
import { assetAmountInWei, getAssetInfo } from '@defisaver/tokens';
import { EthAddress } from '../types';

import { SellAction } from '../actions/basic';
import { parsePriceFromContract, formatPriceForContract } from './general';

const API_URL = 'https://api.0x.org/swap/v1/';
const ZEROX_WRAPPER = '0x0c4e16899f2059F4e41ddB164317414a5c0d2988';

/**
 * Gets price estimate from 0x API.
 *
 * @param _sellToken
 * @param _buyToken
 * @param _amount
 * @param convertAmountToWei should amount be converted to wei
 * @param infoOnly should be true if just for showing price
 * @param acceptedSlippagePercent Slippage percentage tolerated [0-100]
 * @param shouldSell look for price to sell or to buy
 *
 */
const get0xPrice = async (_sellToken: string, _buyToken: string, _amount: string, convertAmountToWei = true, infoOnly = false, acceptedSlippagePercent = 3, shouldSell = true): Promise<{ data: string; price: string; guaranteedPrice: string; protocolFee: string; to: EthAddress; value: string; wrapper: EthAddress; allowanceTarget: EthAddress; estimatedGas: string; }> => {
  // 0x API expects WETH symbol
  const buyToken = _buyToken.replace(/^ETH$/, 'WETH');
  const sellToken = _sellToken.replace(/^ETH$/, 'WETH');

  const amount = convertAmountToWei
    ? assetAmountInWei(_amount, shouldSell ? sellToken : buyToken)
    : _amount;

  const formattedSlippage = new Dec(acceptedSlippagePercent).div(100).toFixed(2);

  let url = shouldSell
    ? `${API_URL}${infoOnly ? 'price' : 'quote'}?sellToken=${sellToken}&buyToken=${buyToken}&sellAmount=${amount}&affiliateAddress=0x322d58b9E75a6918f7e7849AEe0fF09369977e08&takerAddress=${ZEROX_WRAPPER}`
    : `${API_URL}${infoOnly ? 'price' : 'quote'}?sellToken=${sellToken}&buyToken=${buyToken}&buyAmount=${amount}&affiliateAddress=0x322d58b9E75a6918f7e7849AEe0fF09369977e08&takerAddress=${ZEROX_WRAPPER}`;

  if (!infoOnly) {
    url += `&intentOnFilling=true&skipValidation=true&slippagePercentage=${formattedSlippage}&shouldSellEntireBalance=true`;
  }
  const res = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      // '0x-API-KEY': zeroxToken, // TODO let users supply token for RFQ support
    },
  });

  if (res.status !== 200) throw new Error(JSON.stringify(res.data));

  const data = res.data;

  // convert price to be able to compare with other prices onchain
  if (!shouldSell) {
    data.price = new Dec(1).div(data.price).toString();
    if (data.guaranteedPrice) data.guaranteedPrice = new Dec(1).div(data.guaranteedPrice).toString();
  }
  data.price = formatPriceForContract(data.price, sellToken, buyToken);
  if (new Dec(data.protocolFee).gt(0)) {
    data.protocolFee = new Dec(data.protocolFee).mul(150).div(100).toString();
  }
  data.value = sellToken === 'WETH'
    ? new Dec(data.value).plus(amount).toString()
    : data.value;
  data.wrapper = ZEROX_WRAPPER;

  return data;
};

/**
 * Gets price estimate.
 * Example: getBestExchangePrice('1', 'ETH', 'DAI') for selling 1 ETH for DAI
 * Example: getBestExchangePrice('1000', 'ETH', 'DAI', false) for buying 1000 DAI while selling ETH
 *
 * @param amount sellAmount or buyAmount, depending on `shouldSell` (not in wei)
 * @param sellToken Symbol for asset being sold
 * @param buyToken Symbol for asset being bought
 * @param shouldSell=true Look for price to sell or to buy
 *
 */
const estimatePrice = async (amount: string, sellToken: string, buyToken: string, shouldSell = true): Promise<string> => {
  if (!amount || !parseFloat(amount)) return '0';
  if (sellToken === buyToken) return '1';
  const zeroxData = await get0xPrice(sellToken, buyToken, amount, true, true, 0, shouldSell);
  return parsePriceFromContract(zeroxData.price, sellToken, buyToken);
};

/**
 * Gets price estimate for selling a specific amount.
 * Example: getBestExchangePrice('1', 'ETH', 'DAI') - swapping 1 ETH for some DAI
 *
 * @param sellAmount amount of sellToken (not in wei)
 * @param sellToken Symbol for asset being sold
 * @param buyToken Symbol for asset being bought
 * @returns price of sellToken in buyToken
 */
export const estimateSellPrice = async (sellAmount: string, sellToken: string, buyToken: string): Promise<string> => estimatePrice(sellAmount, sellToken, buyToken, true);

/**
 * Gets price estimate for buying a specific amount.
 * Example: estimateBuyPrice('1000', 'DAI', 'ETH') - swapping 1000 DAI for some ETH
 *
 * @param buyAmount amount of buyToken (not in wei)
 * @param buyToken Symbol for asset being bought
 * @param sellToken Symbol for asset being sold
 * @returns price of sellToken in buyToken
 */
export const estimateBuyPrice = async (buyAmount: string, buyToken: string, sellToken: string): Promise<string> => estimatePrice(buyAmount, sellToken, buyToken, false);

/**
 * @param sellToken Symbol for asset being sold ('ETH')
 * @param buyToken Symbol for asset being bought ('DAI')
 * @param sellAmount Amount of asset being sold ('1.5') - '0' if buying
 * @param buyAmount Amount of asset being bought ('1500.123') - '0' if selling
 * @param expectedPrice Price received from estimatePrice (so minPrice can be calculated based on what user saw)
 * @param acceptedSlippagePercent Slippage percentage tolerated [0-100]
 * @param shouldSell look for price to sell or to buy (if false sellToken becomes becomes buyToken and vice-versa)
 * @param fromAccount Withdraw funds from this addr
 * @param toAccount Send funds to this addr
 * @return SellAction
 *
 */
const createExchangeAction = async (
  sellToken: string,
  buyToken: string,
  sellAmount: string,
  buyAmount: string,
  expectedPrice: string,
  acceptedSlippagePercent: number,
  shouldSell = true,
  fromAccount: EthAddress,
  toAccount: EthAddress,
): Promise<SellAction> => {
  const sellTokenData = getAssetInfo(sellToken);
  const buyTokenData = getAssetInfo(buyToken);

  const zeroExData = await get0xPrice(sellTokenData.symbol, buyTokenData.symbol, shouldSell ? sellAmount : buyAmount, true, false, acceptedSlippagePercent, shouldSell);

  const protocolFee = zeroExData.protocolFee;

  // let value = zeroExData.protocolFee;
  // if (withValue && sellTokenData.symbol === 'ETH') {
  //   value = new Dec(value).add(window._web3.utils.toWei(srcAmount.toString())).toFixed(0);
  // }

  const offchainDataArray = [
    zeroExData.wrapper,
    zeroExData.to,
    zeroExData.allowanceTarget,
    zeroExData.price,
    zeroExData.protocolFee,
    zeroExData.data,
  ];

  const orderData = [
    sellTokenData.address,
    buyTokenData.address,
    assetAmountInWei(sellAmount, sellToken),
    assetAmountInWei(buyAmount, buyToken),
    formatPriceForContract(zeroExData.guaranteedPrice, sellTokenData.symbol, buyTokenData.symbol),
    0, // set by contract
    '0x0000000000000000000000000000000000000000', // set by contract
    '0x0000000000000000000000000000000000000000', // onchain wrapper
    '0x', // wrapperData,
    offchainDataArray,
  ];
  return new SellAction(orderData, fromAccount, toAccount, protocolFee);
};

/**
 * Fetches prices and creates order ready to be passed to transaction.
 * This should only be called when before sending tx, not to be used for just querying the price.
 * For that purpose, the estimateSellPrice method can be used.
 *
 * @param sellAmount Amount of asset being sold ('1.5')
 * @param sellToken Symbol for asset being sold ('ETH')
 * @param buyToken Symbol for asset being bought ('DAI')
 * @param expectedPrice Price received from estimatePrice (so minPrice can be calculated based on what user saw)
 * @param acceptedSlippagePercent Slippage percentage tolerated [0-100]
 * @param fromAccount Withdraw funds from this addr
 * @param toAccount Send funds to this addr
 */
export const createSellAction = async (
  sellAmount: string,
  sellToken: string,
  buyToken: string,
  expectedPrice: string,
  acceptedSlippagePercent: string | number,
  fromAccount: EthAddress,
  toAccount: EthAddress,
): Promise<SellAction> => createExchangeAction(
  sellToken,
  buyToken,
  sellAmount,
  '0',
  expectedPrice,
  typeof (acceptedSlippagePercent) === 'string' ? parseFloat(acceptedSlippagePercent) : acceptedSlippagePercent,
  true,
  fromAccount,
  toAccount,
);

