import Dec from 'decimal.js';
import {getAssetInfo} from '@defisaver/tokens';

export const requireAddress = (address:string) => {
  if (address.startsWith('%') || address.startsWith('&')) return;

  if (typeof address !== 'string') throw new Error('Address is not a string');
  if (address === '') throw new Error('Address is empty string');
  if (address.length < 42) throw new Error(`Address too short (${address.length} instead of 42)`);
  if (new RegExp(/^0x0+$/).test(address)) throw new Error('Address is empty bytes');
  if (!(new RegExp(/^0x[0-9a-fA-F]{40}$/).test(address))) throw new Error('Address invalid');
};


/**
 * @param price Price returned by contract or getOffchainPrice
 * @param from Symbol for asset being sold
 * @param to Symbol for asset being bought
 * @returns Price in expected format (11000.00 for WBTC->USDT, 0.98 for USDc->DAI, etc)
 *
 */
export const parsePriceFromContract = (price : string, from : string, to : string) : string=> new Dec(price)
  .div(10 ** getAssetInfo(to).decimals)
  .div(10 ** (18 - getAssetInfo(from).decimals))
  .toString();

/**
 * @param price Price returned by parsePriceFromContract
 * @param from Symbol for asset being sold
 * @param to Symbol for asset being bought
 * @returns Price formatted like contract output (can be used for contract input for exchange v2)
 * 
 */
export const formatPriceForContract = (price : string, from : string, to : string) : string=> new Dec(price)
  .mul(10 ** getAssetInfo(to).decimals)
  .mul(10 ** (18 - getAssetInfo(from).decimals))
  .floor()
  .toString();
