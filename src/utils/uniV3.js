/**
 * @module utils.uniV3
 */
const web3 = require('web3');
const uniV3PositionManagerAbi = require('../abis/UniV3PositionManager.json');
const uniV3PositionManagerAddress = '0x0';

module.exports.getAssetAddrByTokenId = async(tokenId) => {
    const positionManager = new web3.eth.Contract(uniV3PositionManagerAbi, uniV3PositionManagerAddress );
    const positionInfo = await positionManager.methods.positions(tokenId).call();
    result = [ positionInfo[2], positionInfo[3] ];
    return result;
}
