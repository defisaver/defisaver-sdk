const Action = require('./Action');
const Dec = require('decimal.js');

class L2Action extends Action {
    /**
   * Encode arguments for calling the action via DsProxy
   * @returns {string}
   */
  encodeForL2DsProxyCall() {
    return this.encodeInputs();
  }

  encodeInputs(){
    throw new Error('Use implementation from specific L2Action');
  }

  addressToBytes20(address){
      return address.slice(2);
  }

  boolToBytes1(bool){
      if (bool) {
          return '01';
      } else {
          return '00';
      }
  }

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
module.exports = L2Action;
