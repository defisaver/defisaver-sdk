const dfs = require('../../../src');
const {getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: EtherFiUnwrap', () => {
    let action;
    const from = '0x80788de454ad3681d357dc7FcB13c72333f684a7';
    const to = '0x968Cc941aD9074EE687E0423a33E6f2D33d7c327';
    context('Unwrap 100 weETH tokens', () => {
        it('constructor', () => {
            const amount = 100;
            action = new dfs.actions.etherfi.EtherFiUnwrapAction(
                amount,
                from,
                to,
            );
            assert.equal(action.args[0], amount);
            assert.equal(action.args[1], from);
            assert.equal(action.args[2], to);
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
        it('getAssetsToApprove', async () => {
            const assetOwnerPairs = await action.getAssetsToApprove();
            assert.lengthOf(assetOwnerPairs, 1);
            assert.equal(assetOwnerPairs[0].asset, getAssetInfo('weETH').address);
            assert.equal(assetOwnerPairs[0].owner, from);
          })
    })
})