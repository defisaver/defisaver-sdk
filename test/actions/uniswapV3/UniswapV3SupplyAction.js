const dfs = require('../../../umd');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {getAssetInfo, assetAmountInWei, assetAmountInEth} = require("@defisaver/tokens");
const {assert} = require('chai');

describe('Action: UniswapV3SupplyAction', () => {
  let action;

  context('Supply DAI/WETH position', () => {
    it('constructor', () => {
      action = new dfs.actions.uniswapV3.UniswapV3SupplyAction(
        '1000',
        assetAmountInWei('3000', 'DAI'),
        assetAmountInWei('1', 'WETH'),
        assetAmountInWei('3000', 'DAI'),
        assetAmountInWei('1', 'WETH'),
        Date.now() + 1000 * 60 * 10,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        getAssetInfo('DAI').address,
        getAssetInfo('WETH').address,
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 2);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('DAI').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
      assert.equal(assetOwnerPairs[1].asset, getAssetInfo('WETH').address);
      assert.equal(assetOwnerPairs[1].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(assetAmountInEth(ethValue), '0');
    }) 
  })

  context('Supply USDC/DAI position', () => {
    it('constructor', () => {
      action = new dfs.actions.uniswapV3.UniswapV3SupplyAction(
        '1000',
        assetAmountInWei('1000', 'USDC'),
        assetAmountInWei('1000', 'DAI'),
        assetAmountInWei('1000', 'DAI'),
        assetAmountInWei('1000', 'DAI'),
        Date.now() + 1000 * 60 * 10,
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        getAssetInfo('USDC').address,
        getAssetInfo('DAI').address,
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 2);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('USDC').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
      assert.equal(assetOwnerPairs[1].asset, getAssetInfo('DAI').address);
      assert.equal(assetOwnerPairs[1].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })
})
