const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

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
      [['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes']],
      [[tokens, amounts, [], getAddr('Empty'), flParamGetterAddr, flParamGetterData, []]]
    );
  }
}

module.exports = BalancerFlashLoanAction;
