const Action = require("@defisaver/sdk/src/Action");
const { getAddr } = require('@defisaver/sdk/src/addresses');

/**
 * Gets a flashloan from Balancer
 */
class BalancerFlashLoanAction extends Action {
  /**
   * @param tokens {EthAddress[]}
   * @param amounts {string[]}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(tokens, amounts, flParamGetterAddr = getAddr('Empty'), flParamGetterData= []) {
    super(
      'FLBalancer',
      getAddr('FLBalancer'),
      [['address[]', 'uint256[]', 'address', 'bytes'], 'uint256'],
      [[... arguments], 0]
    );
  }
}

module.exports = BalancerFlashLoanAction;
