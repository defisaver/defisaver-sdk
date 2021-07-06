const dfs = require('../../../index.js');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: ReflexerNativeUniV2SaviourDepositAction', () => {
  let action;

  const testAcc = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';

  context('Deposit lp tokens to saviour', () => {
    it('constructor', () => {
      action = new dfs.actions.reflexer.ReflexerNativeUniV2SaviourDepositAction(
        testAcc,
        100,
        assetAmountInWei(10, 'WETH'),
        '0x8aE720a71622e824F576b4A8C03031066548A3B1',
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, '0x8aE720a71622e824F576b4A8C03031066548A3B1');
      assert.equal(assetOwnerPairs[0].owner, testAcc);
    })
  })


})
