const AbiCoder = require('web3-eth-abi');
const Web3Utils = require('web3-utils');

const ActionAbi = require('./abis/Action.json');

/**
 * Single action that can be executed directly, or combined into a set (ie. supply a vault)
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
   * @private
   */
  _getId() {
    return Web3Utils.keccak256(this.name);
  }

  /**
   * @returns {Array<*>}
   * @private
   */
  _getMappableArgs() {
    return this.args;
  }

  /**
   * @returns {Array<*>}
   * @private
   */
  getArgsFromReturnVals(returnValues) {
    return [...this.args].map((arg, ) => {
      if (new RegExp(/\$\d+/).test(arg)) return returnValues[parseInt(arg.substr(1)) - 1];
      return arg;
    })
  }

  /**
   * @returns {Array<Number>}
   * @private
   */
  _getArgumentMapping() {
    return this._getMappableArgs().map(arg => {
      if (new RegExp(/\$\d+/).test(arg)) {
        if (Array.isArray(arg)) throw TypeError('Input can\'t be mapped to arrays (tuples/structs). Override `_getMappableArgs` function in constructor.');
        return parseInt(arg.substr(1))
      }
      return 0;
    });
  }

  /**
   * @param type {string}
   * @private
   */
  _getPlaceholderForType(type) {
    // TODO handle arrays?
    if (type.startsWith('bytes')) return `0x${'0'.repeat(parseInt(type.substr(5)))}`;
    if (type === 'address') return `0x${'0'.repeat(40)}`;
    if (type === 'string') return '';
    return '0';
  }

  /**
   * @private
   */
  _replaceWithPlaceholders(arg, paramType) {
    if (Array.isArray(arg)) return arg.map((_arg, i) => this._replaceWithPlaceholders(_arg, paramType[i]));
    if (new RegExp(/\$\d+/).test(arg)) return this._getPlaceholderForType(paramType);
    return arg;
  }

  /**
   * @private
   */
  _formatType(paramType) {
    if (Array.isArray(paramType)) return `(${paramType.map((_paramType) => this._formatType(_paramType))})`;
    return paramType;
  }

  /**
   * @param recipeBalance
   * @param returnValues
   * @returns {{returnValue: String, recipeBalance: Object}}
   */
  async getAfterValues(recipeBalance = {}, returnValues = []) {
    return {
      recipeBalance,
      returnValue: '0',
    }
  }

  /**
   * Encode arguments for calling the action directly
   * @returns {Array<Array<String>>} bytes-encoded args
   */
  encodeForCall() {
    const bytesEncodedArgs = this.args.map((arg, i) => {
      let paramType = this.paramTypes[i];
      let _arg = this._replaceWithPlaceholders(arg, paramType);
      let _paramType = this._formatType(paramType);
      return AbiCoder.encodeParameter(_paramType, _arg);
    });
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
      this._getId(),              // actionIds
      this._getArgumentMapping(), // paramMappings
    ]
  }
}

module.exports = Action;
