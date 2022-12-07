const dfs = require('../../../umd');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: AaveClaimStkAaveAction', () => {
  let action;
  const to = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';

  context('Claims stkAave from incentives controller', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveClaimStkAaveAction(
        [dfs.getAddr('Empty')],
        '1000',
        to,
      )
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })
})
