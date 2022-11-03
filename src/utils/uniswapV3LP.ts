/**
 * @module utils.uniV3
 */
import uniV3PositionManagerAbi from '../abis/UniV3PositionManager.json';
const uniV3PositionManagerAddress = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';

/**
 * @param web3 Web3 instance
 * @param tokenId
 */
export const getAssetAddrByTokenId = async (web3 : any, tokenId: string): Promise<string[]> => {
    const positionManager = new web3.eth.Contract(uniV3PositionManagerAbi, uniV3PositionManagerAddress);
    const positionInfo = await positionManager.methods.positions(tokenId).call();
    return [ positionInfo[2], positionInfo[3] ];
}
