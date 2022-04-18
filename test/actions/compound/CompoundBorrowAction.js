const dfs = require('../../../index.js');
const {getIlkInfo, assetAmountInWei, getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const {getAddr} = require('../../../src/addresses.js');

describe('Action: CompoundBorrowAction', () => {
  let action;

  context('Borrow 1 DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.compound.CompoundBorrowAction(
        getAssetInfo('cDAI').address,
        assetAmountInWei(1, 'cDAI'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
      assert.equal(action.args[0][2], '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
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


  context('Borrow 1 ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.compound.CompoundBorrowAction(
        getAssetInfo('cETH').address,
        assetAmountInWei(1, 'cETH'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
      );
      assert.equal(action.args[0][2], '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
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

  context('Borrow 1 ETH to invalid address', () => {
    it('constructor throws', () => {
      assert.throws(() => {
        action = new dfs.actions.compound.CompoundBorrowAction(
          getAssetInfo('cETH').address,
          assetAmountInWei(1, 'cETH'),
          '0x0000000000000000000000000000000000000000',
        );
      });
    });
  })
})
