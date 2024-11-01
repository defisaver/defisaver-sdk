const dfs = require('../../../src');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: EulerV2ClaimRewards', () => {
    let action;
    context('Claim rewards', () => {
        it('constructor', () => {
            const to = '0x968Cc941aD9074EE687E0423a33E6f2D33d7c327';
            const claimAll = true;
            const allowRemainderLoss = false;
            const lockTimestamps = [
                '1730217689',
                '1730217643242',
                '173021132',
                '34243', 
                '1'
            ];
            action = new dfs.actions.eulerV2.EulerV2ClaimRewardsAction(
                to,
                claimAll,
                allowRemainderLoss,
                lockTimestamps
            );
            assert.equal(action.args[0], to);
            assert.equal(action.args[1], claimAll);
            assert.equal(action.args[2], allowRemainderLoss);
            assert.equal(action.args[3], lockTimestamps);
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
    })
})