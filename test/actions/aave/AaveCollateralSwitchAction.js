const dfs = require('../../../index.js');
const {assetAmountInWei, getAssetInfo, assetAmountInEth} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: AaveCollateralSwitchAction', () => {
  let action;

  context('Enable one token, disable other token with AaveCollSwitch Action', () => {
    it('constructor', () => {
      action = new dfs.actions.aave.AaveCollateralSwitchAction(
          getAddr('AaveDefaultMarket'),
          [getAddr('RaiWethUniV2LPToken'), getAddr('BalancerToken')],
          [true, false],
      )
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })
})
