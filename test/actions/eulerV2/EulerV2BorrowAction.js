const dfs = require('../../../src');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: EulerV2BorrowAction', () => {
    let action;
    context('Borrow 100 USDC', () => {
        it('constructor', () => {
            const usdcVault = '0x797DD80692c3b2dAdabCe8e30C07fDE5307D48a9';
            const account = '0x968Cc941aD9074EE687E0423a33E6f2D33d7c327';
            const receiver = '0x80788de454ad3681d357dc7FcB13c72333f684a7';
            const amount = 100;
            action = new dfs.actions.eulerV2.EulerV2BorrowAction(
                usdcVault,
                account,
                receiver,
                amount
            );
            assert.equal(action.args[0], usdcVault);
            assert.equal(action.args[1], account);
            assert.equal(action.args[2], receiver);
            assert.equal(action.args[3], amount);
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
    })
})