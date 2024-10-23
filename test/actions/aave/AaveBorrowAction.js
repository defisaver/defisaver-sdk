const dfs = require('../../../src');
const {getAaveV2MarketInfo, assetAmountInWei,getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: AaveBorrowAction', () => {
  let action;

  context('Borrow 1 DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveBorrowAction(
        getAaveV2MarketInfo('v2default').lendingPoolAddressProvider,
        getAssetInfo('DAI').address,
        assetAmountInWei(1, 'DAI'),
        1,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
      assert.equal(action.args[5], dfs.getAddr('Empty'));
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

  context('Borrow 1 ETH on behalf of', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveBorrowAction(
        getAaveV2MarketInfo('v2default').lendingPoolAddressProvider,
        getAssetInfo('WETH').address,
        assetAmountInWei(1, 'WETH'),
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
        action = new dfs.actions.aave.AaveBorrowAction(
          getAaveV2MarketInfo('v2default').lendingPoolAddressProvider,
          getAssetInfo('WETH').address,
          assetAmountInWei(1, 'WETH'),
          1,
          '0x0000000000000000000000000000000000000000',
          '0xdeafbeefdeadbeefdeafbeefdeadbeefdeafbeef',
        );
      });
    });
  })
})
