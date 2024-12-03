const dfs = require('../../../src');
const {assetAmountInWei} = require("@defisaver/tokens");
const {getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: ChangeProxyOwner', () => {
  let action;

  context('ChangeProxyOwner', () => {
    it('constructor', () => {
      action = new dfs.actions.basic.ChangeProxyOwnerAction(
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
      );
    });

    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })

});
