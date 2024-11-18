const dfs = require('../../../src');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: MorphoTokenWrapAction', () => {
    let action;
    context('Wraps 100 MORPHO tokens', () => {
        it('constructor', () => {
            const to = '0x80788de454ad3681d357dc7FcB13c72333f684a7';
            const amount = 100;
            action = new dfs.actions.morphoblue.MorphoTokenWrapAction(to, amount);
            assert.equal(action.args[0], to);
            assert.equal(action.args[1], amount);
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
    })
    context('Wraps MaxUint256 MORPHO tokens', () => {
        it('constructor', () => {
            const to = '0x80788de454ad3681d357dc7FcB13c72333f684a7';
            const amount = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
            action = new dfs.actions.morphoblue.MorphoTokenWrapAction(to, amount);
            assert.equal(action.args[0], to);
            assert.equal(action.args[1], amount);
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
    })
})