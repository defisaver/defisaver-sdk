const dfs = require('../../../src');
const {assetAmountInWei} = require("@defisaver/tokens");
const {getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: SendTokensAndUnwrap', () => {
  let action;
  context('Transfer DAI/USDC', () => {
    const tokens = [getAssetInfo('DAI').address, getAssetInfo('USDC').address];
    const amounts = [assetAmountInWei(1, 'DAI'), assetAmountInWei(1, 'USDC')];
    const receivers = ['0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', '0xf0e1a5f7445211E47faa6D267Fc5A214884557aa'];
    it('constructor', () => {
      action = new dfs.actions.basic.SendTokensAndUnwrapAction(
        tokens,
        receivers,
        amounts
      );
      assert.equal(action.mappableArgs[0], getAssetInfo('DAI').address);
      assert.equal(action.mappableArgs[1], getAssetInfo('USDC').address);
      assert.equal(action.mappableArgs[2], receivers[0]);
      assert.equal(action.mappableArgs[3], receivers[1]);
      assert.equal(action.mappableArgs[4], assetAmountInWei(1, 'DAI'));
      assert.equal(action.mappableArgs[5], assetAmountInWei(1, 'USDC'));      
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })

  context('Transfer DAI/WETH', () => {
    const tokens = [
      getAssetInfo('DAI').address,
      getAssetInfo('WETH').address,
      getAssetInfo('WETH').address
    ];
    const amounts = [
      assetAmountInWei(1, 'DAI'),
      assetAmountInWei(1, 'WETH'),
      assetAmountInWei(100, 'WETH'),
    ];
    const receivers = [
      '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
      '0xf0e1a5f7445211E47faa6D267Fc5A214884557aa',
      '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
    ];
    it('constructor', () => {
      action = new dfs.actions.basic.SendTokensAndUnwrapAction(
        tokens,
        receivers,
        amounts
      );
        action.mappableArgs[0] = getAssetInfo('DAI').address;
        action.mappableArgs[1] = getAssetInfo('WETH').address;
        action.mappableArgs[2] = getAssetInfo('WETH').address;
        action.mappableArgs[3] = receivers[0];
        action.mappableArgs[4] = receivers[1];
        action.mappableArgs[5] = receivers[2];
        action.mappableArgs[6] = assetAmountInWei(1, 'DAI');
        action.mappableArgs[7] = assetAmountInWei(1, 'WETH');
        action.mappableArgs[8] = assetAmountInWei(100, 'WETH');
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getEthValue', async () => {
      const ethValue = await action.getEthValue();
      assert.equal(ethValue, '0');
    })
  })
})
