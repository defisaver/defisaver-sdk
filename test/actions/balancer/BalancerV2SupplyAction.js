const dfs = require('../../../index.js');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {getAssetInfo, assetAmountInWei, assetAmountInEth} = require("@defisaver/tokens");
const {assert} = require('chai');

describe('Action: BalancerV2SupplyAction', () => {
  let action;

  context('Supply ETH/DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.balancer.BalancerV2SupplyAction(
        '0x06df3b2bbb68adc8b0e302443692037ed9f91b42000000000000000000000063',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        [getAssetInfo('DAI').address, getAssetInfo('USDC').address, getAssetInfo('USDT').address],
        ['1000','1000','1000'],
        'placeholder'
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 3);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('DAI').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
      assert.equal(assetOwnerPairs[1].asset, getAssetInfo('USDC').address);
      assert.equal(assetOwnerPairs[1].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
      assert.equal(assetOwnerPairs[1].asset, getAssetInfo('USDT').address);
      assert.equal(assetOwnerPairs[1].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('test mappable args', async () => {
        assert.lengthOf(action.mappableArgs, 5);
    })
  })
})
