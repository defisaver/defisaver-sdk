const dfs = require('../../../src');
const {getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: EulerV2SupplyAction', () => {
    let action;
    const from = '0x80788de454ad3681d357dc7FcB13c72333f684a7';
    context('Supply 100 USDC', () => {
        it('constructor', () => {
            const usdcVault = '0x797DD80692c3b2dAdabCe8e30C07fDE5307D48a9';
            const account = '0x968Cc941aD9074EE687E0423a33E6f2D33d7c327';
            const amount = 100;
            const enableAsCollateral = true;
            action = new dfs.actions.eulerV2.EulerV2SupplyAction(
                usdcVault,
                getAssetInfo('USDC').address,
                account,
                from,
                amount,
                enableAsCollateral
            );
            assert.equal(action.args[0], usdcVault);
            assert.equal(action.args[1], account);
            assert.equal(action.args[2], from);
            assert.equal(action.args[3], amount);
            assert.equal(action.args[4], enableAsCollateral);
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
            assert.equal(assetOwnerPairs[0].asset, getAssetInfo('USDC').address);
            assert.equal(assetOwnerPairs[0].owner, from);
          })
    })
})