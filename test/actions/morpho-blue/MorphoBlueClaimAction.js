const dfs = require('../../../src');
const {getAssetInfo} = require("@defisaver/tokens");
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: MorphoBlueClaimAction', () => {
    let action;
    context('Claim encoding', () => {
        it('constructor', () => {
            const to = '0xC093dFcC2cBc4e9488589B7c2245a7F1DA043389';
            const claimable = '4809093062235489680';
            const rewardToken = '0x58d97b57bb95320f9a05dc918aef65434969c2b2';
            const distributorContract = '0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb';
            const proofs = [
                '0xd496d2a15cf30a2af545b0fd4ced50fb4224bb54e7c9add4885c7b7408c907a1',
                '0x6a8fc6432934b1f2c9f9aed040f4389c0450dd94aff92b16864060e95fba4290',
                '0xb7491e5e898e774e11c50044140df4c1c74bf9cd7855bac78f0709699ed0e6b7',
                '0xc8cd758ed1b442458a4bf192598e1bc6409b4c7c234a89d343ca47e35c027a58',
                '0x67ad524dd5256feff4322b22e13d2b169bce720accedaf441b5151d03eede9ea',
                '0x01c9e73be64a955a74b847b5d842be13815b8c057c96793df609581cf744a303',
                '0x48056ed0d5975f309d2cfa166f5ef7e0a927445708aa04bd2c572cd583a6a6c9',
                '0x1ca9e9f414cdc19dd87fa5a78225cce4a8b2ca332a814e2240172c82159ba86e',
                '0x98290a0226d9dcca1fa16f5187393edd00bba4cae92a41ea608739ae804d41f0',
                '0x5c4b48ece06d268a3a151db9392dff6b087a041eb002e4f41f04e98b6a9350ea',
                '0xb18f55aa8bf9d073eab748bb54f7629551df5a8df04f03d677b1005c8b606ec1',
                '0x844d1e6cac34639fc9e192fc7d94015472661d264f640df6e56d47ff800b66ed',
                '0xef63a6a4f186536ca66dbd3af102630029e7bf10830268d6d90bc4415e0238e2',
                '0x9b2fc088dde10283dc02fef8e9eb1a76c22ca3df5bfaec0ba88d712dac926ce5',
                '0xf7889f06c88c1c1006a7b9710fb95745b8df7279cdca977331a75aac7f9416cd',
            ];
            action = new dfs.actions.morphoblue.MorphoBlueClaimAction(
                to,
                rewardToken,
                distributorContract,
                claimable,
                proofs,
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