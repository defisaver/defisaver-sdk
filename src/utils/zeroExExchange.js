/**
 * @module utils.zeroExExchange
 */

const Dec = require('decimal.js');
const axios = require('axios');
const {assetAmountInWei, getAssetInfo} = require('@defisaver/tokens');

const SellAction = require('../actions/basic/SellAction');
const BuyAction = require('../actions/basic/BuyAction');
const {parsePriceFromContract, formatPriceForContract} = require('./general');
const API_URL = 'https://api.0x.org/swap/v1/';
const ZEROX_WRAPPER = '0x0c4e16899f2059F4e41ddB164317414a5c0d2988';

/**
 * Gets price estimate from 0x API.
 *
 * @param _sellToken {String}
 * @param _buyToken {String}
 * @param _amount {String}
 * @param convertAmountToWei {Boolean} should amount be converted to wei
 * @param infoOnly {Boolean} should be true if just for showing price
 * @param acceptedSlippagePercent {Number} Slippage percentage tolerated [0-100]
 * @param shouldSell {Boolean} look for price to sell or to buy
 * @returns {Promise<{data: string, price: string, guaranteedPrice: string, protocolFee: string, to: EthAddress, value: string, wrapper: EthAddress, allowanceTarget: EthAddress, estimatedGas: string}>}
 *
 * @private
 */
const get0xPrice = async (_sellToken, _buyToken, _amount, convertAmountToWei = true, infoOnly = false, acceptedSlippagePercent = 3, shouldSell = true) => {
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
  console.log(data);

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
 * @param amount {String} sellAmount or buyAmount, depending on `shouldSell` (not in wei)
 * @param sellToken {String} Symbol for asset being sold
 * @param buyToken {String} Symbol for asset being bought
 * @param [shouldSell=true] {Boolean} Look for price to sell or to buy
 * @returns {Promise<string>}
 *
 * @private
 */
const estimatePrice = async (amount, sellToken, buyToken, shouldSell = true) => {
  if (!amount || !parseFloat(amount)) return '0';
  if (sellToken === buyToken) return '1';
  const zeroxData = await get0xPrice(sellToken, buyToken, amount, true, true, 0, shouldSell);
  return parsePriceFromContract(zeroxData.price, sellToken, buyToken);
}

/**
 * Gets price estimate for selling a specific amount.
 * Example: getBestExchangePrice('1', 'ETH', 'DAI') - swapping 1 ETH for some DAI
 *
 * @param sellAmount {String} amount of sellToken (not in wei)
 * @param sellToken {String} Symbol for asset being sold
 * @param buyToken {String} Symbol for asset being bought
 * @returns {Promise<string>} price of sellToken in buyToken
 */
module.exports.estimateSellPrice = async (sellAmount, sellToken, buyToken) => estimatePrice(sellAmount, sellToken, buyToken, true);

/**
 * Gets price estimate for buying a specific amount.
 * Example: estimateBuyPrice('1000', 'DAI', 'ETH') - swapping 1000 DAI for some ETH
 *
 * @param buyAmount {String} amount of buyToken (not in wei)
 * @param buyToken {String} Symbol for asset being bought
 * @param sellToken {String} Symbol for asset being sold
 * @returns {Promise<string>} price of sellToken in buyToken
 */
module.exports.estimateBuyPrice = async (buyAmount, buyToken, sellToken) => estimatePrice(buyAmount, sellToken, buyToken, false);

/**
 * @param sellToken {string} Symbol for asset being sold ('ETH')
 * @param buyToken {string} Symbol for asset being bought ('DAI')
 * @param sellAmount {string} Amount of asset being sold ('1.5') - '0' if buying
 * @param buyAmount {string} Amount of asset being bought ('1500.123') - '0' if selling
 * @param expectedPrice {string} Price received from estimatePrice (so minPrice can be calculated based on what user saw)
 * @param acceptedSlippagePercent {string|Number} Slippage percentage tolerated [0-100]
 * @param shouldSell {Boolean} look for price to sell or to buy (if false sellToken becomes becomes buyToken and vice-versa)
 * @param fromAccount {EthAddress} Withdraw funds from this addr
 * @param toAccount {EthAddress} Send funds to this addr
 * @return {Promise<(SellAction|BuyAction)>} SellAction or BuyAction
 *
 * @private
 */
const createExchangeAction = async (
  sellToken,
  buyToken,
  sellAmount,
  buyAmount,
  expectedPrice,
  acceptedSlippagePercent,
  shouldSell = true,
  fromAccount,
  toAccount,
) => {
  const sellTokenData = getAssetInfo(sellToken);
  const buyTokenData = getAssetInfo(buyToken);

  const minPrice = new Dec(expectedPrice)
    .mul(100 - acceptedSlippagePercent)
    .div(100)
    .toString();

  const zeroExData = await get0xPrice(sellTokenData.symbol, buyTokenData.symbol, shouldSell ? sellAmount : buyAmount, true, false, acceptedSlippagePercent, shouldSell);

  let extraGas = parseInt(zeroExData.estimatedGas);

  let protocolFee = zeroExData.protocolFee;

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
  console.log(orderData);
  return shouldSell
    ? new SellAction(orderData, fromAccount, toAccount, protocolFee)
    : new BuyAction(orderData, fromAccount, toAccount, protocolFee)
};

/**
 * Fetches prices and creates order ready to be passed to transaction.
 * This should only be called when before sending tx, not to be used for just querying the price.
 * For that purpose, the estimateSellPrice method can be used.
 *
 * @param sellAmount {string} Amount of asset being sold ('1.5')
 * @param sellToken {string} Symbol for asset being sold ('ETH')
 * @param buyToken {string} Symbol for asset being bought ('DAI')
 * @param expectedPrice {string} Price received from estimatePrice (so minPrice can be calculated based on what user saw)
 * @param acceptedSlippagePercent {string|Number} Slippage percentage tolerated [0-100]
 * @param fromAccount {EthAddress} Withdraw funds from this addr
 * @param toAccount {EthAddress} Send funds to this addr
 * @return {Promise<SellAction>}
 */
module.exports.createSellAction = async (
  sellAmount,
  sellToken,
  buyToken,
  expectedPrice,
  acceptedSlippagePercent,
  fromAccount,
  toAccount,
) => createExchangeAction(
  sellToken,
  buyToken,
  sellAmount,
  '0',
  expectedPrice,
  acceptedSlippagePercent,
  true,
  fromAccount,
  toAccount,
);


/**
 * Fetches prices and creates order ready to be passed to transaction.
 * This should only be called when before sending tx, not to be used for just querying the price.
 * For that purpose, the estimateBuyPrice method can be used.
 *
 * @param buyAmount {string} Amount of asset being bought ('1500.123')
 * @param buyToken {string} Symbol for asset being bought ('DAI')
 * @param sellToken {string} Symbol for asset being sold ('ETH')
 * @param expectedPrice {string} Price received from estimatePrice (so minPrice can be calculated based on what user saw)
 * @param acceptedSlippagePercent {string|Number} Slippage percentage tolerated [0-100]
 * @param fromAccount {EthAddress} Withdraw funds from this addr
 * @param toAccount {EthAddress} Send funds to this addr
 * @return {Promise<BuyAction>}
 */
module.exports.createBuyAction = async (
  buyAmount,
  buyToken,
  sellToken,
  expectedPrice,
  acceptedSlippagePercent,
  fromAccount,
  toAccount,
) => createExchangeAction(
  sellToken,
  buyToken,
  '0',
  buyAmount,
  expectedPrice,
  acceptedSlippagePercent,
  false,
  fromAccount,
  toAccount,
);
