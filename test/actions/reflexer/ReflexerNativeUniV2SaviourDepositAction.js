const dfs = require('../../../umd');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: ReflexerNativeUniV2SaviourDepositAction', () => {
  let action;
  const RAI_WETH_UNI_V2_LP_TOKEN_ADDR = '0x8aE720a71622e824F576b4A8C03031066548A3B1';
  const testAcc = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';

  context('Deposit lp tokens to saviour', () => {
    it('constructor', () => {
      action = new dfs.actions.reflexer.ReflexerNativeUniV2SaviourDepositAction(
        testAcc,
        100,
        assetAmountInWei(10, 'WETH'),
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, RAI_WETH_UNI_V2_LP_TOKEN_ADDR);
      assert.equal(assetOwnerPairs[0].owner, testAcc);
    })
  })


})
