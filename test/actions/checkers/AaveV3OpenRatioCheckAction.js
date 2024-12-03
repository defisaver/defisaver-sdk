
const dfs = require('../../../src');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: AaveV3OpenRatioCheckAction', () => {
    let action;
    context('AaveV3OpenRatioCheckAction', () => {
        it('constructor', () => {
            const targetRatio = '150'
            const market = '0x24a42fD28C976A61Df5D00D0599C34c4f90748c8';
            action = new dfs.actions.checkers.AaveV3OpenRatioCheckAction(
                targetRatio,
                market
            );
            assert.equal(action.args[0], targetRatio);
            assert.equal(action.args[1], market);
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
    })
})
