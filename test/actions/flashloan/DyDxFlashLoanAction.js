const dfs = require('../../../index.js');
const {encodeForCall, encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {getAssetInfo, assetAmountInWei} = require("defisaver-tokens");
const {assert} = require('chai');

describe('Action: DyDxFlashLoanAction', () => {
  let action;

  context('Flashloan DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.flashloan.DyDxFlashLoanAction(
        assetAmountInWei(100, 'DAI'),
        getAssetInfo('DAI').address,
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

  context('Manually pay back flashloaned DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.flashloan.DyDxFlashLoanPaybackAction(
        assetAmountInWei(100, 'DAI'),
        getAssetInfo('DAI').address,
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

  context('Flashloan ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.flashloan.DyDxFlashLoanAction(
        assetAmountInWei(100, 'ETH'),
        getAssetInfo('ETH').address,
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

  context('Manually pay back flashloaned ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.flashloan.DyDxFlashLoanPaybackAction(
        assetAmountInWei(100, 'ETH'),
        getAssetInfo('ETH').address,
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
      assert.equal(ethValue, assetAmountInWei(100, 'ETH'));
    })
  })
})
