const dfs = require('../../../umd');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: ReflexerNativeUniV2SaviourGetReservesAction', () => {
  let action;

  const testAcc = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';

  context('Withdraw lp tokens from saviour', () => {
    it('constructor', () => {
      action = new dfs.actions.reflexer.ReflexerNativeUniV2SaviourGetReservesAction(
        testAcc,
        100,
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 0);
    })
  })


})