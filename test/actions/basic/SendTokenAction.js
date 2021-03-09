const dfs = require('../../../index.js');
const {assetAmountInWei} = require("@defisaver/tokens");
const {getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: SendToken', () => {
  let action;

  context('Transfer DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.basic.SendTokenAction(
        getAssetInfo('DAI').address,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        assetAmountInWei(1, 'DAI')
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 0);
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })

  context('Transfer ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.basic.SendTokenAction(
        getAssetInfo('ETH').address,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        assetAmountInWei(1, 'ETH')
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 0);
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })
})
