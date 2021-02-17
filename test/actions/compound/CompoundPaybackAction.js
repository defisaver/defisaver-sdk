const dfs = require('../../../index.js');
const {getIlkInfo, assetAmountInWei, assetAmountInEth, getAssetInfo} = require("@defisaver/tokens");
const {encodeForCall, encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: CompoundPaybackAction', () => {
  let action;

  context('Pay back 1 DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.compound.CompoundPaybackAction(
        getAssetInfo('cDAI').address,
        assetAmountInWei(1, 'DAI'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
      );
      assert.equal(action.args[2], '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('encodeForCall', () => encodeForCall(action));
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
      action = new dfs.actions.compound.CompoundPaybackAction(
        getAssetInfo('cETH').address,
        assetAmountInWei(1, 'ETH'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
      );
      assert.equal(action.args[2], '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
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

})
