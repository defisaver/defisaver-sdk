const dfs = require('../index.js');

describe('Strategy', () => {

  context('Yearn Repay', () => {
    let repayStrategy;

    it('Constructor', () => {
      repayStrategy = new dfs.Strategy('McdYearnRepayStrategy');

      repayStrategy.addSubSlot('&vaultId', 'uint256');
      repayStrategy.addSubSlot('&targetRatio', 'uint256');
      repayStrategy.addSubSlot('&daiAddr', 'address');
      repayStrategy.addSubSlot('&mcdManager', 'address');

      const mcdRatioTrigger = new dfs.triggers.MakerRatioTrigger('0', '0', '0');
      repayStrategy.addTrigger(mcdRatioTrigger);

      const yearnWithdrawAction = new dfs.actions.yearn.YearnWithdrawAction(
        '%yDaiAddr',
        '%amount',
        '&proxy',
        '&proxy',
      );

      const feeTakingAction = new dfs.actions.basic.GasFeeAction(
        '0', '&daiAddr', '$1',
      );

      const mcdPaybackAction = new dfs.actions.maker.MakerPaybackAction(
        '&vaultId',
        '$2',
        '&proxy',
        '&mcdManager',
      );

      repayStrategy.addAction(yearnWithdrawAction);
      repayStrategy.addAction(feeTakingAction);
      repayStrategy.addAction(mcdPaybackAction);
    })

    it('encodeForDsProxyCall', () => repayStrategy.encodeForDsProxyCall());
  })
})
