const dfs = require('../../../umd');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: CompoundGetDebtAction', () => {
  let action;
  const debtor = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';

  context('Checks token balance', () => {
    it('constructor', () => {
      action = new dfs.actions.compound.CompoundGetDebtAction(
        dfs.getAddr('BalancerToken'),
        debtor,
      )
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })
})
