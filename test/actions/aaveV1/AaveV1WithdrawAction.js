const dfs = require('../../../index.js');
const {getIlkInfo, assetAmountInWei,getAssetInfo} = require("@defisaver/tokens");
const {encodeForCall, encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: AaveV1WithdrawAction', () => {
  let action;

  context('Withdraw 1 ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.aaveV1.AaveV1WithdrawAction(
        getAssetInfo('ETH').address,
        assetAmountInWei(1, 'ETH'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
    })
    it('encodeForCall', () => encodeForCall(action));
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
