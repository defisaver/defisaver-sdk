const dfs = require('../../../index.js');
const {getIlkInfo, assetAmountInWei,getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: MakerGenerateAction', () => {
  let action;

  context('Generate 1 DAI without specifying CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerGenerateAction(
        '1234',
        assetAmountInWei(1, 'DAI'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
      assert.equal(action.args[3], getAddr('McdCdpManager'));
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

  context('Generate 1 DAI via specific CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerGenerateAction(
        '1234',
        assetAmountInWei(1, 'DAI'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        getAddr('BCdpManager'),
      );
      assert.equal(action.args[3], getAddr('BCdpManager'));
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

  context('Generate DAI to invalid address', () => {
    it('constructor throws', () => {
      assert.throws(() => {
        action = new dfs.actions.maker.MakerGenerateAction(
          '1234',
          assetAmountInWei(1, 'DAI'),
          '0x0000000000000000000000000000000000000000',
        );
      });
    });
  })
})
