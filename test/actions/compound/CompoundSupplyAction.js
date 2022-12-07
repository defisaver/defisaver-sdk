const dfs = require('../../../umd');
const {getIlkInfo, assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: CompoundSupplyAction', () => {
  let action;

  context('Supply 1 ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.compound.CompoundSupplyAction(
        getAssetInfo('cETH').address,
        assetAmountInWei(1, 'ETH'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        true,
      );
      assert.equal(action.args[2], '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(assetAmountInEth(ethValue), '0');
    })
  })

  context('Supply 1 WBTC', () => {
    it('constructor', () => {
      action = new dfs.actions.compound.CompoundSupplyAction(
        getAssetInfo('cWBTC').address,
        assetAmountInWei(1, 'WBTC'),
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        true,
      );
      assert.equal(action.args[2], '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('WBTC').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })
})
