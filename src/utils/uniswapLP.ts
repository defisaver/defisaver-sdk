/**
 * @module utils.uniswapLP
 */

import { pack, keccak256 } from '@ethersproject/solidity';
import { getCreate2Address } from '@ethersproject/address';
import { getAssetInfo } from '@defisaver/tokens';
import { requireAddress } from './general';
import { EthAddress } from '../types';

const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';
const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f';

/**
 * Computes deterministic LP address.
 * Source: https://uniswap.org/docs/v2/javascript-SDK/getting-pair-addresses/#typescript
 *
 * @param tokenA Use WETH for ETH
 * @param tokenB Use WETH for ETH
 * @returns Address of pool
 */
export const getPoolAddressByAddresses = (tokenA: EthAddress, tokenB: EthAddress): EthAddress => {
  requireAddress(tokenA);
  requireAddress(tokenB);
  const tokens = [tokenA, tokenB].sort();
  const pool = getCreate2Address(
    FACTORY_ADDRESS,
    keccak256(['bytes'], [pack(['address', 'address'], [tokens[0], tokens[1]])]),
    INIT_CODE_HASH,
  );
  requireAddress(pool);
  return pool;
};

/**
 * @param symbolA
 * @param symbolB
 * @returns Address of pool
 */
export const getPoolAddressBySymbols = (symbolA: string, symbolB: string):EthAddress => getPoolAddressByAddresses(
  getAssetInfo(symbolA.replace(/^ETH$/, 'WETH')).address,
  getAssetInfo(symbolB.replace(/^ETH$/, 'WETH')).address,
);

