const dfs = require('../../../index.js');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');
const { getAddr } = require('../../../src/addresses.js');

describe('Action: InstPullTokensAction', () => {
  let action;

  const dsaAddress = '0x63bf1D484d7D799722b1BA9c91f5ffa6d416D60A';
  const to = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';


  context('InstPullTokensAction action test', () => {
    it('constructor', () => {
      action = new dfs.actions.insta.InstPullTokensAction(
        dsaAddress,
        [getAddr('RaiWethUniV2LPToken'), getAddr('BalancerToken')],
        ['10000', '32000'],
        to
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 1);
    })
  })


})
