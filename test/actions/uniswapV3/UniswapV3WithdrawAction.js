const dfs = require('../../../src');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {assert} = require('chai');

describe('Action: UniswapV3WithdrawAction', () => {
  let action;

  context('Burn liquidity and collect tokens from a position', () => {
    it('constructor', () => {
      action = new dfs.actions.uniswapV3.UniswapV3WithdrawAction(
            '1000',
            '10000000',
            '1000000',
            '1000000',
            Date.now() + 1000 * 60 * 10,
            '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
            '5000000',
            '5000000',
            '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].tokenId, '1000');
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
      assert.equal(assetOwnerPairs[0].nft, dfs.getAddr('UniswapV3PositionManager'),);
      
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(assetAmountInEth(ethValue), '0');
    }) 
  })

})
