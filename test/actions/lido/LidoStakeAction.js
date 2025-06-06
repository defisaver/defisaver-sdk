const dfs = require('../../../src');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: LidoStakeAction', () => {
  let action;

  const testAcc = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';

  context('Stake 1 ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.lido.LidoStakeAction(
        assetAmountInWei(1, 'WETH'),
        testAcc,
        testAcc,
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('WETH').address);
      assert.equal(assetOwnerPairs[0].owner, testAcc);
    })
  })


})
