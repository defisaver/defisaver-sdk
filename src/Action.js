const AbiCoder = require('web3-eth-abi');
const Web3Utils = require('web3-utils');

/**
 * Single action that can be executed directly, or combined into a set (ie. supply a vault)
 * @private
 */
class Action {
  /**
   * @param name {String}
   * @param contractAddress {String}
   * @param paramTypes {Array<String>}
   * @param args {Array<*>}
   */
  constructor(name, contractAddress, paramTypes, args) {
    // if (new.target === Action) throw new TypeError("Actions are instantiated using derived classes");

    if (paramTypes.length !== args.length) throw new Error('Parameters/arguments length mismatch on executeActionDirect')

    this.contractAddress = contractAddress;
    this.paramTypes = paramTypes;
    this.name = name;
    this.args = args;
  }

  /**
   * @returns {String}
   */
  getId() {
    return Web3Utils.keccak256(this.name);
  }

  /**
   * @returns {Array<Number>}
   */
  getArgumentMapping() {
    return this.args.map(arg => new RegExp(/\$\d+/).test(arg) ? parseInt(arg.substr(1)) : 0);
  }

  /**
   * Encode arguments for calling the action directly
   * @returns {Array<String>} bytes-encoded args
   */
  encodeForCall() {
    return this.args
      .map(arg => new RegExp(/\$\d+/).test(arg) ? 0 : arg)
      .map((arg, i) => AbiCoder.encodeParameter(this.paramTypes[i], arg));
  }

  /**
   * Encode arguments for calling the action directly via DSProxy
   * @returns {Array<String>} array to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
   */
  encodeForDsProxyCall() {
    return [
      this.contractAddress,
      AbiCoder.encodeParameter('bytes', this.encodeForCall()),
    ];
  }

  /**
   * Encodes action for ActionSet call
   * @returns {Array<String>}
   */
  encodeForActionSet() {
    return [
      this.getId(),
      this.encodeForCall(),
      this.getArgumentMapping(),
    ]
  }
}

module.exports = Action;
