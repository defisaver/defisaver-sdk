const dfs = require('../../../src');
const {getAaveV2MarketInfo, assetAmountInWei, assetAmountInEth, getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: AavePaybackAction', () => {
  let action;

  context('Pay back 1 DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AavePaybackAction(
        getAaveV2MarketInfo('v2default').lendingPoolAddressProvider,
        getAssetInfo('DAI').address,
        assetAmountInWei(1, 'DAI'),
        1,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
      );
      assert.equal(action.args[5], dfs.getAddr('Empty'));
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('DAI').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })

  context('Pay back 1 DAI on behalf', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AavePaybackAction(
        getAaveV2MarketInfo('v2default').lendingPoolAddressProvider,
        getAssetInfo('DAI').address,
        assetAmountInWei(1, 'DAI'),
        1,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0xdeafbeefdeadbeefdeafbeefdeadbeefdeafbeef',
      );
      assert.equal(action.args[5], '0xdeafbeefdeadbeefdeafbeefdeadbeefdeafbeef');
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('DAI').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })

  context('Pay back 1 ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AavePaybackAction(
        getAaveV2MarketInfo('v2default').lendingPoolAddressProvider,
        getAssetInfo('WETH').address,
        assetAmountInWei(1, 'WETH'),
        1,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('WETH').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(assetAmountInEth(ethValue), '0');
    })
  })

})
