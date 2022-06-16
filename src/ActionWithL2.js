const Action = require('./Action');
const Dec = require('decimal.js');

class ActionWithL2 extends Action {
  /**
   * Encode arguments for calling the action via DsProxy
   * @returns {string}
   */
  encodeForL2DsProxyCall() { return this.encodeInputs(); }

  encodeForL2Recipe() { return `0x${this.encodeInputs().slice(10)}`; } // cut the method id

  encodeInputs() { throw new Error('Use implementation from specific ActionWithL2'); }

  addressToBytes20(address) { return address.slice(2); }

  boolToBytes1(bool) { return bool ? '01' : '00' }

  async getEthValue() { return '0'; }

  numberToBytes2(number){
    const hexNumber = number.toString(16);
    return hexNumber.padStart(4, '0');
  }

  numberToBytes1(number){
    const hexNumber = number.toString(16);
    return hexNumber.padStart(2, '0');
  }

  numberToBytes32(number){
    let hexNumber = new Dec(number).toHex();
    hexNumber = hexNumber.slice(2);

    return hexNumber.padStart(64, '0');
  }
}
module.exports = ActionWithL2;
