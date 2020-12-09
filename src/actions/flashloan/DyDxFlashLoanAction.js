const Dec = require('decimal.js');
const { getAssetInfoByAddress, assetAmountInEth } = require('defisaver-tokens');
const Action = require("../../Action");

/**
 * DyDxFlashLoanAction - Gets a flashloan from DyDx
 */
class DyDxFlashLoanAction extends Action {
  /**
   * @param loanAmount {String}
   * @param tokenAddr {String}
   */
  constructor(loanAmount, tokenAddr) {
    super('FLDyDx', '0x0', ['uint256','address', 'uint256'], [loanAmount, tokenAddr, 0]);
  }

  async getAfterValues(_recipeBalance = {}, returnValues = []) {
    const asset = getAssetInfoByAddress(this.args[1]).symbol;
    const amount = assetAmountInEth(this.args[0], asset);
    const recipeBalance = { ..._recipeBalance };
    recipeBalance[asset] = new Dec(recipeBalance[asset] || 0).minus(amount).toString();
    recipeBalance[`dydx_${asset}`] = new Dec(recipeBalance[`dydx_${asset}`] || 0).plus(amount).toString();
    return {
      recipeBalance,
      returnValue: this.args[0],
    };
  }
}

module.exports = DyDxFlashLoanAction;
