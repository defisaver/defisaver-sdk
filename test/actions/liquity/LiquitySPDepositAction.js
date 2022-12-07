
const dfs = require('../../../umd');
const { getAssetInfo } = require("@defisaver/tokens");
const { encodeForDsProxyCall, encodeForRecipe } = require('../../_actionUtils');
const { assert } = require('chai');


describe('Action: LiquitySPDepositAction', () => {
    let action;

    context('Deposit lusd to Stability Pool', () => {
        
        it('constructor', () => {
            action = new dfs.actions.liquity.LiquitySPDepositAction(
                '1234', '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
            );
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getAssetsToApprove', async () => {
            const assetOwnerPairs = await action.getAssetsToApprove();
            assert.lengthOf(assetOwnerPairs, 1);
            assert.equal(assetOwnerPairs[0].asset, getAssetInfo('LUSD').address);
            assert.equal(assetOwnerPairs[0].owner, '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f');
        })
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
    })
})
