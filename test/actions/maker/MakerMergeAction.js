const dfs = require('../../../index.js');
const {getIlkInfo, assetAmountInWei,getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: MakerMergeAction', () => {
  let action;

  context('Merge vaults without specifying CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerMergeAction(
        '1234',
        '1235',
      );
      assert.equal(action.args[2], getAddr('McdCdpManager'));
    })
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

  context('Merge vaults via specific CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerMergeAction(
        '1234',
        '1235',
        getAddr('BCdpManager'),
      );
      assert.equal(action.args[2], getAddr('BCdpManager'));
    })
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
