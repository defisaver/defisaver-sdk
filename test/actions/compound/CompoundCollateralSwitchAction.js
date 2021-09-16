const dfs = require('../../../index.js');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: CompoundCollateralSwitchAction', () => {
  let action;

  context('Enable one token, disable other token with CompoundCollSwitch Action', () => {
    it('constructor', () => {
      action = new dfs.actions.compound.CompoundCollateralSwitchAction(
          [getAddr('RaiWethUniV2LPToken'), getAddr('BalancerToken')],
          [true, false],
      )
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })
})
