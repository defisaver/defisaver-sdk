const dfs = require('../../../index.js');
const {assetAmountInEth} = require("@defisaver/tokens");
const {assetAmountInWei} = require("@defisaver/tokens");
const {getAssetInfo} = require("@defisaver/tokens");
const {encodeForCall, encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: Sell', () => {
  let action;

  context('Without param mappings', () => {
    it('constructor', () => {
      action = new dfs.actions.basic.SellAction(
        [getAssetInfo('DAI').address, '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 1000000000000, 0, 0, 0, '0x0000000000000000000000000000000000000000', '0x6403BD92589F825FfeF6b62177FCe9149947cb9f', '0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', ['0x0000000000000000000000000000000000000000','0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', 0, 0, []]],
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
    })
    it('encodeForCall', () => encodeForCall(action));
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
      assert.equal(assetOwnerPairs[0].asset, getAssetInfo('DAI').address);
      assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
    })
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      // TODO add 0x fee
      assert.isAbove(+assetAmountInEth(ethValue, 'ETH'), 0);
    })
  })

  context('With param mappings inside tuple', () => {
    it('constructor', () => {
      action = new dfs.actions.basic.SellAction(
        ['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', '$1', 0, 0, 0, '0x0000000000000000000000000000000000000000', '0x6403BD92589F825FfeF6b62177FCe9149947cb9f', '0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', ['0x0000000000000000000000000000000000000000','0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', 0, 0, []]],
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
    })
    it('encodeForCall', () => encodeForCall(action));
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })

  context('Selling ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.basic.SellAction(
        [getAssetInfo('ETH').address, getAssetInfo('DAI').address, assetAmountInWei('0.1', 'ETH'), 0, 0, 0, '0x0000000000000000000000000000000000000000', '0x6403BD92589F825FfeF6b62177FCe9149947cb9f', '0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', ['0x0000000000000000000000000000000000000000','0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', 0, 0, []]],
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
      );
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
      // TODO add 0x fee
      assert.equal(assetAmountInEth(ethValue, 'ETH'), '0.1');
    })
  })

})
