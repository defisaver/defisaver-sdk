const dfs = require('../../../index.js');
const {getIlkInfo, assetAmountInWei,getAssetInfo} = require("@defisaver/tokens");
const {encodeForCall, encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: MakerWithdrawAction', () => {
  let action;

  context('Withdraw 1 ETH without specifying CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerWithdrawAction(
        '1234',
        assetAmountInWei(1, 'ETH'),
        getIlkInfo('ETH-A').join,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
      assert.equal(action.args[4], getAddr('McdCdpManager'));
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

  context('Withdraw 1 ETH without via specific CdpManager', () => {
    it('constructor', () => {
      action = new dfs.actions.maker.MakerWithdrawAction(
        '1234',
        assetAmountInWei(1, 'ETH'),
        getIlkInfo('ETH-A').join,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        getAddr('BCdpManager'),
      );
      assert.equal(action.args[4], getAddr('BCdpManager'));
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
