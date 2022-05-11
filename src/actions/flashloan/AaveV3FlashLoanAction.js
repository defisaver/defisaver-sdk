const ActionWithL2 = require("../../ActionWithL2");
const { getAddr } = require('../../addresses.js');

/**
 * Gets a flashloan from Aave v2
 */
class AaveV3FlashLoanAction extends ActionWithL2 {
  /**
   * @param loanAmounts {Array<string>}
   * @param tokens {Array<EthAddress>}
   * @param modes {Array<number>}
   * @param loanPayer {EthAddress}
   * @param flParamGetterAddr {EthAddress}
   * @param flParamGetterData {bytes}
   */
  constructor(loanAmounts, tokens, modes, loanPayer, flParamGetterAddr = getAddr('Empty'), flParamGetterData= []) {
    super(
      'FLAaveV3',
      getAddr('FLAaveV3'),
      [['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes']],
      [[tokens, loanAmounts, modes, loanPayer, flParamGetterAddr, flParamGetterData, []]]
    );
  }
}

module.exports = AaveV3FlashLoanAction;
