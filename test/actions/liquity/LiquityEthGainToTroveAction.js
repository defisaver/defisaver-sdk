const dfs = require('../../../src');
const { getAssetInfo } = require("@defisaver/tokens");
const { encodeForDsProxyCall, encodeForRecipe } = require('../../_actionUtils');
const { assert } = require('chai');


describe('Action: LiquityEthGainToTroveAction', () => {
    let action;

    context('Withdraw earned ETH gains to the users Trove', () => {
        
        it('constructor', () => {
            action = new dfs.actions.liquity.LiquityEthGainToTroveAction(
                '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', '0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000',
            );
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getAssetsToApprove', async () => {
            const assetOwnerPairs = await action.getAssetsToApprove();
            assert.lengthOf(assetOwnerPairs, 0);
        })
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
    })
})
