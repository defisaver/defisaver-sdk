const dfs = require('../../../umd');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: YearnWithdraw', () => {
  let action;

  const testAcc = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';
  const yWeth = '0xe1237aa7f535b0cc33fd973d66cbf830354d16c7';

  context('Withdraw 1 yWETH', () => {
    it('constructor', () => {
      action = new dfs.actions.yearn.YearnSupplyAction(
        yWeth,
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
      assert.equal(assetOwnerPairs[0].asset, yWeth);
      assert.equal(assetOwnerPairs[0].owner, testAcc);
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(assetAmountInEth(ethValue), '0');
    })
  })


})
