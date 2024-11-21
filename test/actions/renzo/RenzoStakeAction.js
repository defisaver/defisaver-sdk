const dfs = require('../../../src');
const {getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: RenzoStakeAction', () => {
    let action;
    const from = '0x80788de454ad3681d357dc7FcB13c72333f684a7';
    const to = '0x968Cc941aD9074EE687E0423a33E6f2D33d7c327';
    context('Stake 100 WETH tokens without wrapping', () => {
        it('constructor', () => {
            const amount = 100;
            action = new dfs.actions.renzo.RenzoStakeAction(
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
            assert.equal(assetOwnerPairs[0].asset, getAssetInfo('WETH').address);
            assert.equal(assetOwnerPairs[0].owner, from);
          })
    })
    context('Stake maxUint256 WETH with wrapping', () => {
        it('constructor', () => {
            const amount = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
            action = new dfs.actions.renzo.RenzoStakeAction(
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
            assert.equal(assetOwnerPairs[0].asset, getAssetInfo('WETH').address);
            assert.equal(assetOwnerPairs[0].owner, from);
          })
    })
})