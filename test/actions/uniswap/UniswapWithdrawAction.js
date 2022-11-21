const dfs = require('../../../umd');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {getAssetInfo, assetAmountInWei} = require("@defisaver/tokens");
const {assert} = require('chai');

describe('Action: UniswapSupplyAction', () => {
  let action;

  context('Withdraw USDC/DAI', () => {
    it('constructor', () => {
      action = new dfs.actions.uniswap.UniswapWithdrawAction(
        getAssetInfo('USDC').address,
        getAssetInfo('DAI').address,
        '1',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        assetAmountInWei('1000', 'USDC'),
        assetAmountInWei('1000', 'DAI'),
        Date.now() + 1000 * 60 * 10,
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, '0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5');
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })
})
