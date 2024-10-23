const dfs = require('../../../src');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: CompoundCollateralSwitchAction', () => {
  let action;

  context('Enable one token, disable other token with CompoundCollSwitch Action', () => {
    it('constructor', () => {
      action = new dfs.actions.compound.CompoundCollateralSwitchAction(
          [dfs.getAddr('RaiWethUniV2LPToken'), dfs.getAddr('BalancerToken')],
          [true, false],
      )
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })
})
