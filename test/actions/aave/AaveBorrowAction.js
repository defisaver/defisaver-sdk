const dfs = require('../../../index.js');
const {getIlkInfo, assetAmountInWei,getAssetInfo} = require("@defisaver/tokens");
const {encodeForCall, encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: AaveBorrowAction', () => {
  let action;

  context('Generate 1 DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveBorrowAction(
        getAddr('AaveDefaultMarket'),
        getAssetInfo('ETH').address,
        assetAmountInWei(1, 'ETH'),
        1,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
      assert.equal(action.args[5], getAddr('Empty'));
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


  context('Generate 1 ETH on behalf of', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveBorrowAction(
        getAddr('AaveDefaultMarket'),
        getAssetInfo('ETH').address,
        assetAmountInWei(1, 'ETH'),
        1,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0xdeafbeefdeadbeefdeafbeefdeadbeefdeafbeef',
      );
      assert.equal(action.args[5], '0xdeafbeefdeadbeefdeafbeefdeadbeefdeafbeef');
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
