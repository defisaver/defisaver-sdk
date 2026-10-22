const dfs = require('../../../src');
const { assert } = require('chai');
const { encodeForDsProxyCall, encodeForRecipe } = require('../../_actionUtils');

describe('Action: AaveV3SetEModeAction', () => {
  const market = '0x24a42fD28C976A61Df5D00D0599C34c4f90748c8';
  const onBehalf = '0x1111111111111111111111111111111111111111';
  const categoryId = 1;

  it('defaults onBehalf to the empty address', () => {
    const action = new dfs.actions.aaveV3.AaveV3SetEModeAction(
      true,
      market,
      categoryId,
    );

    assert.equal(action.args[3], dfs.getAddr('Empty'));
    assert.deepEqual(action.mappableArgs, [market, dfs.getAddr('Empty')]);
    assert.equal(
      action.encodeInputs(),
      `0x2895f3aa0101${dfs.getAddr('Empty').slice(2)}`,
    );
  });

  it('encodes an explicit onBehalf after a custom market', () => {
    const action = new dfs.actions.aaveV3.AaveV3SetEModeAction(
      false,
      market,
      categoryId,
      onBehalf,
    );

    assert.equal(action.args[3], onBehalf);
    assert.deepEqual(action.mappableArgs, [market, onBehalf]);
    assert.equal(
      action.encodeInputs(),
      `0x2895f3aa0100${market.slice(2)}${onBehalf.slice(2)}`,
    );
    encodeForDsProxyCall(action);
    encodeForRecipe(action);
  });
});
