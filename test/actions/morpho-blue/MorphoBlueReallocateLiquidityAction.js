const dfs = require('../../../src');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: MorphoBlueReallocateLiquidityAction', () => {
    let action;
    context('MorphoBlueReallocateLiquidityAction', () => {
        it('constructor', () => {
            const market = [
                '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
                '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
                '0x2a01eb9496094da03c4e364def50f5ad1280ad72',
                '0x870aC11D48B15DB9a138Cf899d20F13F79Ba00BC',
                '945000000000000000',
            ];
            const amount = 10000000;
            const vault = '0x80788de454ad3681d357dc7FcB13c72333f684a7';
            action = new dfs.actions.morphoblue.MorphoBlueReallocateLiquidityAction(
                market[0],
                market[1],
                market[2],
                market[3],
                market[4],
                [vault, vault, vault],
                [
                    [
                        [market,amount],
                        [market,amount],
                    ],
                    [
                        [market,amount],
                        [market,amount],
                        [market,amount],
                    ],
                ]
            );
            assert.equal(action.mappableArgs[0], market[0]);
            assert.equal(action.mappableArgs[1], market[1]);
            assert.equal(action.mappableArgs[2], market[2]);
            assert.equal(action.mappableArgs[3], market[3]);
            assert.equal(action.mappableArgs[4], market[4]);
        });
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getEthValue', async () => {
            const ethValue = await action.getEthValue();
            assert.equal(ethValue, '0');
        })
    })
})