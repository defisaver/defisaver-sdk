/**
 * @module utils.uniswapLP
 */

const { pack, keccak256 } = require('@ethersproject/solidity');
const { getCreate2Address } = require('@ethersproject/address');
const {getAssetInfo} = require("@defisaver/tokens");

const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
const INIT_CODE_HASH = '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f'

/**
 * Computes deterministic LP address.
 * Source: https://uniswap.org/docs/v2/javascript-SDK/getting-pair-addresses/#typescript
 *
 * @param tokenA {EthAddress} Use WETH for ETH
 * @param tokenB {EthAddress} Use WETH for ETH
 * @returns {EthAddress}
 */
module.exports.getPoolAddressByAddresses = (tokenA, tokenB) => {
  // TODO validate
  // requireAddress(tokenA)
  // requireAddress(tokenB)
  const tokens = [tokenA, tokenB].sort();
  const pool = getCreate2Address(
    FACTORY_ADDRESS,
    keccak256(['bytes'], [pack(['address', 'address'], [tokens[0], tokens[1]])]),
    INIT_CODE_HASH
  );
  // requireAddress(pool)
  return pool;
}

/**
 * @param symbolA {string}
 * @param symbolB {string}
 * @returns {EthAddress}
 */
module.exports.getPoolAddressBySymbols = (symbolA, symbolB) => {
  return module.exports.getPoolAddressByAddresses(
    getAssetInfo(symbolA.replace(/^ETH$/, 'WETH')).address,
    getAssetInfo(symbolB.replace(/^ETH$/, 'WETH')).address,
  )
}

