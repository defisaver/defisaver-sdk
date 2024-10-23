const dfs = require('../../../src');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: AaveCollateralSwitchAction', () => {
  let action;

  context('Enable one token, disable other token with AaveCollSwitch Action', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveCollateralSwitchAction(
          dfs.getAddr('AaveDefaultMarket'),
          [dfs.getAddr('RaiWethUniV2LPToken'), dfs.getAddr('BalancerToken')],
          [true, false],
      )
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })
})
