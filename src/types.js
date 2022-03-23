/**
 * Ethereum address
 * @typedef {string} EthAddress
 */

/**
 * Chain ID number of the Network
 * @typedef {number} chainId
 */

/**
 * Maker vault ID
 * @typedef {(string|number)} VaultId
 */

/**
 * Access list item
 * @typedef {Object} AccessListItem
 * @property {string} address
 * @property {Array<string>} storageKeys
 */

/**
 * @typedef {Array<AccessListItem>} AccessList
 */

/**
 * Global configuration object
 * @typedef {Object.<string, any>} Config
 * @property {chainId}
 */

/**
 * @typedef {object} NativeCurrency
 * @property {string} name
 * @property {string} symbol
 * @property {number} decimals
 */

/**
 * @typedef {object} Network
 * @property {chainId} chainId
 * @property {string} chainName
 * @property {array<string>} blockExplorerUrls
 * @property {array<string>} iconUrls
 * @property {array<string>} rpcUrls
 * @property {NativeCurrency} nativeCurrency
 */

/**
 * @typedef Networks
 * @type {Object.<string, Network>}
 */
