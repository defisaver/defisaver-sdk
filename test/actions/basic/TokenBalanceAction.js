const dfs = require('../../../src');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: TokenBalanceAction', () => {
  let action;
  const holder = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';

  context('Checks token balance', () => {
    it('constructor', () => {
      action = new dfs.actions.basic.TokenBalanceAction(
        dfs.getAddr('BalancerToken'),
        holder,
      )
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })
})
