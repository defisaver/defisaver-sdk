const dfs = require('../../../src');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: EulerV2CollateralSwitchAction', () => {
    let action;
    context('Enable collateral', () => {
        it('constructor', () => {
            const usdcVault = '0x797DD80692c3b2dAdabCe8e30C07fDE5307D48a9';
            const account = '0x968Cc941aD9074EE687E0423a33E6f2D33d7c327';
            const enableAsCollateral = true;
            action = new dfs.actions.eulerV2.EulerV2CollateralSwitchAction(
                usdcVault,
                account,
                enableAsCollateral
            );
            assert.equal(action.args[0], usdcVault);
            assert.equal(action.args[1], account);
            assert.equal(action.args[2], enableAsCollateral);
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
    })
})
