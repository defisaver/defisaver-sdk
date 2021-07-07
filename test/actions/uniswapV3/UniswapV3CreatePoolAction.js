const dfs = require('../../../index.js');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {getAssetInfo, assetAmountInWei, assetAmountInEth} = require("@defisaver/tokens");
const {assert} = require('chai');

describe('Action: UniswapV3CreatePoolAction', () => {
  let action;

  context('Mint DAI/WETH position', () => {
    it('constructor', () => {
      action = new dfs.actions.uniswapV3.UniswapV3CreatePoolAction(
        getAssetInfo('DAI').address,
        getAssetInfo('WETH').address,
        '3000',
        '-109260',
        '-84000',
        assetAmountInWei('3000', 'DAI'),
        assetAmountInWei('1', 'WETH'),
        assetAmountInWei('3000', 'DAI'),
        assetAmountInWei('1', 'WETH'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        Date.now() + 1000 * 60 * 10,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '33613440923724446628483',
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 2);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('DAI').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
      assert.equal(assetOwnerPairs[1].asset, getAssetInfo('WETH').address);
      assert.equal(assetOwnerPairs[1].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(assetAmountInEth(ethValue), '0');
    }) 
  })
})
