const dfs = require('../../../src');
const { encodeForDsProxyCall, encodeForRecipe } = require('../../_actionUtils');
const { assert } = require('chai');
const AbiCoder = require('web3-eth-abi');
const { keccak256 } = require('web3-utils');

const assertActionEncoding = (action, name, paramTypes, args) => {
    assert.equal(action.name, name);
    assert.deepEqual(action.paramTypes, paramTypes);
    assert.deepEqual(action.mappableArgs, args);
    assert.equal(
        action.encodeForRecipe()[0],
        AbiCoder.encodeParameter(`(${paramTypes.join(',')})`, args),
    );
    assert.equal(action.getId(), keccak256(name).slice(0, 10));
};

describe('Action: FtDnmmSupplyAction', () => {
    let action;
    const asset = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
    const from = '0x00000000000000000000000000000000000000bb';

    context('FtDnmmSupplyAction', () => {
        it('constructor', () => {
            action = new dfs.actions.ftdnmm.FtDnmmSupplyAction(asset, '1000', from);
            assert.equal(action.args[0], asset);
            assert.equal(action.args[1], '1000');
            assert.equal(action.args[2], from);
            assertActionEncoding(
                action,
                'FtDnmmSupply',
                ['address', 'uint256', 'address'],
                [asset, '1000', from],
            );
        });
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getAssetsToApprove', async () => {
            const approvals = await action.getAssetsToApprove();
            assert.equal(approvals[0].asset, asset);
            assert.equal(approvals[0].owner, from);
        });
    });
});

describe('Action: FtDnmmWithdrawAction', () => {
    let action;
    const asset = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
    const to = '0x00000000000000000000000000000000000000aa';

    context('FtDnmmWithdrawAction', () => {
        it('constructor', () => {
            action = new dfs.actions.ftdnmm.FtDnmmWithdrawAction(asset, '500', to);
            assert.equal(action.args[0], asset);
            assert.equal(action.args[1], '500');
            assert.equal(action.args[2], to);
            assertActionEncoding(
                action,
                'FtDnmmWithdraw',
                ['address', 'uint256', 'address'],
                [asset, '500', to],
            );
        });
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('does not require asset approval', async () => {
            assert.deepEqual(await action.getAssetsToApprove(), []);
        });
    });
});

describe('Action: FtDnmmBorrowAction', () => {
    let action;
    const asset = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
    const to = '0x00000000000000000000000000000000000000aa';

    context('FtDnmmBorrowAction', () => {
        it('constructor', () => {
            action = new dfs.actions.ftdnmm.FtDnmmBorrowAction(asset, '250', to);
            assert.equal(action.args[0], asset);
            assert.equal(action.args[1], '250');
            assert.equal(action.args[2], to);
            assertActionEncoding(
                action,
                'FtDnmmBorrow',
                ['address', 'uint256', 'address'],
                [asset, '250', to],
            );
        });
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('does not require asset approval', async () => {
            assert.deepEqual(await action.getAssetsToApprove(), []);
        });
    });
});

describe('Action: FtDnmmPaybackAction', () => {
    let action;
    const asset = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
    const from = '0x00000000000000000000000000000000000000bb';

    context('FtDnmmPaybackAction', () => {
        it('constructor', () => {
            action = new dfs.actions.ftdnmm.FtDnmmPaybackAction(asset, '100', from);
            assert.equal(action.args[0], asset);
            assert.equal(action.args[1], '100');
            assert.equal(action.args[2], from);
            assertActionEncoding(
                action,
                'FtDnmmPayback',
                ['address', 'uint256', 'address'],
                [asset, '100', from],
            );
        });
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
        it('getAssetsToApprove', async () => {
            const approvals = await action.getAssetsToApprove();
            assert.equal(approvals[0].asset, asset);
            assert.equal(approvals[0].owner, from);
        });
    });
});

describe('Action: FtDnmmRatioCheckAction', () => {
    let action;
    const user = '0x00000000000000000000000000000000000000cc';

    context('FtDnmmRatioCheckAction', () => {
        it('constructor', () => {
            action = new dfs.actions.checkers.FtDnmmRatioCheckAction(user, '0', '150');
            assert.equal(action.args[0], user);
            assert.equal(action.args[1], '0');
            assert.equal(action.args[2], '150');
            assertActionEncoding(
                action,
                'FtDnmmRatioCheck',
                ['address', 'uint8', 'uint256'],
                [user, '0', '150'],
            );
        });
        it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
        it('encodeForRecipe', () => encodeForRecipe(action));
    });
});

describe('Trigger: FtDnmmRatioTrigger', () => {
    it('constructor and id', () => {
        const user = '0x00000000000000000000000000000000000000cc';
        const trigger = new dfs.triggers.FtDnmmRatioTrigger(user, '150', '1');
        assert.equal(trigger.args[0][0], user);
        assert.equal(trigger.args[0][1], '150');
        assert.equal(trigger.args[0][2], '1');
        assert.deepEqual(trigger.paramTypes, [['address', 'uint256', 'uint8']]);
        assert.equal(
            trigger.encodeForRecipe()[0],
            AbiCoder.encodeParameter('(address,uint256,uint8)', [user, '150', '1']),
        );
        assert.equal(trigger.getId(), keccak256('FtDnmmRatioTrigger').slice(0, 10));
    });
});
