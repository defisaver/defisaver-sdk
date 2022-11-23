const dfs = require('../../../umd');
const {getIlkInfo, assetAmountInWei,getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: MakerGiveAction', () => {
  let action;

  context('Give vault without specifying CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerGiveAction(
        '1234',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        true,
      );
      assert.equal(action.args[3], dfs.getAddr('McdCdpManager'));
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

  context('Give vault via specific CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerGiveAction(
        '1234',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        true,
        dfs.getAddr('BCdpManager'),
      );
      assert.equal(action.args[3], dfs.getAddr('BCdpManager'));
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

  context('Give vault DAI to invalid address', () => {
    it('constructor throws', () => {
      assert.throws(() => {
        action = new dfs.actions.maker.MakerGiveAction(
          '1234',
          '0x0000000000000000000000000000000000000000',
          true,
        );
      });
    });
  })
})
