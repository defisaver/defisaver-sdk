const dfs = require('../../../src');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: UniswapClaimAction', () => {
    let action;
    context('Claim encoding', () => {
        it('constructor', () => {
            const index = '137';
            const to = '0xC093dFcC2cBc4e9488589B7c2245a7F1DA043389';
            const amount = '4809093062235489680';
            const merkleProof = [
                '0xd496d2a15cf30a2af545b0fd4ced50fb4224bb54e7c9add4885c7b7408c907a1',
                '0x6a8fc6432934b1f2c9f9aed040f4389c0450dd94aff92b16864060e95fba4290',
                '0xb7491e5e898e774e11c50044140df4c1c74bf9cd7855bac78f0709699ed0e6b7',
            ];
            action = new dfs.actions.uniswap.UniswapClaimAction(
                index,
                to,
                amount,
                merkleProof,
            );
        })
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
    })
})
