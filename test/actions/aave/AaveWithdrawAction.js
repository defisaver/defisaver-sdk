const dfs = require('../../../index.js');
const {getAaveV2MarketInfo, assetAmountInWei,getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: AaveWithdrawAction', () => {
  let action;

  context('Withdraw 1 ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveWithdrawAction(
        getAaveV2MarketInfo('v2default').lendingPoolAddressProvider,
        getAssetInfo('ETH').address,
        assetAmountInWei(1, 'ETH'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
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

  context('Withdraw 1 ETH to invalid address', () => {
    it('constructor throws', () => {
      assert.throws(() => {
        action = new dfs.actions.aave.AaveWithdrawAction(
          getAaveV2MarketInfo('v2default').lendingPoolAddressProvider,
          getAssetInfo('WETH').address,
          assetAmountInWei(1, 'WETH'),
          '0x0000000000000000000000000000000000000000',
        );
      });
    });
  })
})
