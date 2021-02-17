const dfs = require('../../../index.js');
const {getIlkInfo, assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForCall, encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: AaveSupplyAction', () => {
  let action;

  context('Supply 1 ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveSupplyAction(
        getAddr('AaveDefaultMarket'),
        getAssetInfo('ETH').address,
        assetAmountInWei(1, 'ETH'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
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
      assert.equal(assetAmountInEth(ethValue), '1');
    })
  })

  context('Supply 1 ETH on behalf of', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveSupplyAction(
        getAddr('AaveDefaultMarket'),
        getAssetInfo('ETH').address,
        assetAmountInWei(1, 'ETH'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0xdeafbeefdeadbeefdeafbeefdeadbeefdeafbeef',
      );
      assert.equal(action.args[4], '0xdeafbeefdeadbeefdeafbeefdeadbeefdeafbeef');
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
      assert.equal(assetAmountInEth(ethValue), '1');
    })
  })

  context('Supply 1 WBTC', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveSupplyAction(
        getAddr('AaveDefaultMarket'),
        getAssetInfo('WBTC').address,
        assetAmountInWei(1, 'WBTC'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0xdeafbeefdeadbeefdeafbeefdeadbeefdeafbeef',
      );
    })
    it('encodeForCall', () => encodeForCall(action));
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('WBTC').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })
})
