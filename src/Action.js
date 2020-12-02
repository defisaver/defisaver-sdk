const AbiCoder = require('web3-eth-abi');
const Web3Utils = require('web3-utils');

const ActionAbi = require('./abis/Action.json');

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

    if (paramTypes.length !== args.length) throw new Error('Parameters/arguments length mismatch')

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
   * @returns {Array<Array<String>>} bytes-encoded args
   */
  encodeForCall() {
    const bytesEncodedArgs = this.args
      .map(arg => new RegExp(/\$\d+/).test(arg) ? 0 : arg)
      .map((arg, i) => AbiCoder.encodeParameter(this.paramTypes[i], arg));
    return [bytesEncodedArgs];
  }

  /**
   * Encode arguments for calling the action via DsProxy
   * @returns {Array<String>} `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
   */
  encodeForDsProxyCall() {
    const executeActionDirectAbi = ActionAbi.find(({ name }) => name === 'executeActionDirect');
    return [
      this.contractAddress,
      AbiCoder.encodeFunctionCall(executeActionDirectAbi, this.encodeForCall()),
    ];
  }

  /**
   * Encodes action for ActionSet call
   * @returns {Array<String>}
   */
  encodeForActionSet() {
    return [
      this.encodeForCall()[0],   // actionCallData
      [],                        // subData
      this.getId(),              // actionIds
      this.getArgumentMapping(), // paramMappings
    ]
  }
}

module.exports = Action;
