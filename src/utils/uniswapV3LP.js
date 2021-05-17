/**
 * @module utils.uniV3
 */
const uniV3PositionManagerAbi = require('../abis/UniV3PositionManager.json');
const uniV3PositionManagerAddress = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';

/**
 * @param web3 {Object} Web3 instance
 * @param tokenId {string}
 * @returns {Promise<string[]>}
 */
module.exports.getAssetAddrByTokenId = async(web3, tokenId) => {
    const positionManager = new web3.eth.Contract(uniV3PositionManagerAbi, uniV3PositionManagerAddress);
    const positionInfo = await positionManager.methods.positions(tokenId).call();
    return [ positionInfo[2], positionInfo[3] ];
}
