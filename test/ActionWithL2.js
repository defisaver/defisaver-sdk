const dfs = require('../umd');
const {encodeForDsProxyCall, encodeForRecipe} = require('./_actionUtils');
const {assert} = require('chai');

const MAXUINT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';
const MAXUINT_HEX = 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
describe('ActionWithL2', () => {

  context('Basic', () => {
    let action;
    it('Constructor', () => {
      action = new dfs.ActionWithL2('MockSwap', '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f', ['uint256', 'address'], [MAXUINT, '0x6b175474e89094c44da98b954eedeac495271d0f'])
    })
    it('numberToBytes32', () => {
      assert(MAXUINT_HEX === action.numberToBytes32(MAXUINT));
    });
  });
  context('AaveV3WithdrawAction', () => {
    let action;
    it('Constructor', () => {
      action = new dfs.actions.aaveV3.AaveV3WithdrawAction(true, '0xa97684ead0e402dC232d5A977953DF7ECBaB3CDb', MAXUINT, "0x6b175474e89094c44da98b954eedeac495271d0f", 9);
    })
    it('numberToBytes32', () => {
      assert(action.encodeForL2DsProxyCall() === '0x2895f3aa000901ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6b175474e89094c44da98b954eedeac495271d0f');
    });
  });
})
