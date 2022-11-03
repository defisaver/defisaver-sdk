import AbiCoder from 'web3-eth-abi';
import { keccak256, padLeft, toHex } from 'web3-utils';
import { CONFIG } from './config';
import ActionAbi from './abis/Action.json';
import { AccessLists as _AccessLists,AccessListItem} from './types';
import { AccessLists } from '../AccessLists';

/**
 * Single action that can be executed directly, or combined into a set (ie. supply a vault)
 * 
 * @category Base Classes
 */
export class Action {

  contractAddress : string;
  paramTypes: Array<string | Array<any>>;
  name: string;
  args: Array<any>;
  mappableArgs: Array<any>;

  /**
   * @param name {string}
   * @param contractAddress {string}
   * @param paramTypes {Array<string>}
   * @param args {Array<*>}
   */
  constructor(name: string, contractAddress: string, paramTypes : Array<string | Array<any>>, args : Array<any>) {
    // if (new.target === Action) throw new TypeError("Actions are instantiated using derived classes");

    if (paramTypes.length !== args.length) throw new Error('Parameters/arguments length mismatch')

    this.contractAddress = contractAddress;
    this.paramTypes = paramTypes;
    this.name = name;
    this.args = args;
    this.mappableArgs = args; // TODO change to class method
  }

  /**
   * @returns {string}
   * @private
   */
  getId() : string {
    return keccak256(this.name).substr(0, 10);
  }

  /**
   * @returns {Array<number>}
   * @private
   */
  _getArgumentMappingWithSlots(subSlots: Array<any>) : Array<number>{
    return this.mappableArgs.map(arg => {
      if (new RegExp(/\$\d+/).test(arg)) {
        if (Array.isArray(arg)) throw TypeError('Input can\'t be mapped to arrays (tuples/structs). Specify `mappableArgs` array in constructor.');
        return parseInt(arg.substr(1))
      }

      // Handle SubSlots placeholder values in strategies
      if (new RegExp(/\&\w+/).test(arg)) {
        if (arg === '&proxy') return 254;
        if (arg === '&eoa') return 255;
        return parseInt(subSlots[arg].index);
      }

      return 0;
    });
  }

   /**
   * @returns {Array<number>}
   * @private
   */
    _getArgumentMapping() : Array<number> {
      return this.mappableArgs.map(arg => {
        if (new RegExp(/\$\d+/).test(arg)) {
          if (Array.isArray(arg)) throw TypeError('Input can\'t be mapped to arrays (tuples/structs). Specify `mappableArgs` array in constructor.');
          return parseInt(arg.substr(1))
        }
        return 0;
      });
    }

  /**
   * @param type {string}
   * @private
   */
  _getPlaceholderForType(type: string) : string {
    // TODO handle arrays?
    if (type.startsWith('bytes')) return `0x${'0'.repeat(parseInt(type.substr(5)))}`;
    if (type === 'address') return `0x${'0'.repeat(40)}`;
    if (type === 'string') return '';
    return '0';
  }

  /**
   * @private
   */
  _replaceWithPlaceholders(arg: any, paramType: string | Array<any>) : any {
    if (Array.isArray(arg)) return arg.map((_arg, i) => this._replaceWithPlaceholders(_arg, paramType[i]));
    if(typeof(paramType) === 'string'){
        if (new RegExp(/\$\d+/).test(arg)) return this._getPlaceholderForType(paramType);
        if (new RegExp(/\&\w+/).test(arg)) return this._getPlaceholderForType(paramType);
    }
    return arg;
  }

  /**
   * @private
   */
  _formatType(paramType: string | Array<any>) : string {
    if (Array.isArray(paramType)) return `(${paramType.map((_paramType) => this._formatType(_paramType))})`;
    return paramType;
  }

  /**
   * Encode arguments for calling the action directly
   * @returns {Array<string>} bytes-encoded args
   * @private
   */
  _encodeForCall() : Array<string> {
    let _arg = this._replaceWithPlaceholders(this.args, this.paramTypes);
    let _paramType = this._formatType(this.paramTypes);
    return [AbiCoder.encodeParameter(_paramType, _arg)];
  }

  encodeForL2DsProxyCall() {
    return this._encodeForCall()[0];
  }

  encodeForL2Recipe() {
    return this._encodeForCall()[0];
  }

  /**
   * Encode arguments for calling the action via DsProxy
   * @returns {Array<string>} `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
   */
  encodeForDsProxyCall() : Array<string | string[]>{
    if (CONFIG.chainId === 1) {
      const executeActionDirectAbi : any = (ActionAbi.find(({ name }:{name: string}) => name === 'executeActionDirect'))!;
      return [
        this.contractAddress,
        AbiCoder.encodeFunctionCall(executeActionDirectAbi, this._encodeForCall()),
      ];
    } else {
      return [this.contractAddress, this.encodeForL2DsProxyCall()];
    }
  }

  /**
   * Encodes action for Recipe call
   * @returns {Array<string>}
   */
  encodeForRecipe() : Array<string | string[] | number[]> {
      return [
        this._encodeForCall()[0],  // actionCallData
        "0x0000000000000000000000000000000000000000000000000000000000000000", // subData
        this.getId(),              // actionIds
        this._getArgumentMapping(), // paramMappings
      ]
  }

  encodeForStrategy(subSlots: any) : Array<(string | number[])>{
    return [
      this.getId(),
      this._getArgumentMappingWithSlots(subSlots), // paramMappings
    ]
  }

  /**
   * Assets requiring approval to be used by DsProxy
   * Approval is done from owner to DsProxy
   * @returns {Promise<Array<{owner: string, asset: string,[key: string]:any}>>}
   */
  async getAssetsToApprove(): Promise<Array<{owner?: string, asset?: string,[key: string]:any}>> {
    return [];
  }

  /**
   * ETH value to be sent with transaction
   * @returns {Promise<string>} ETH value in wei
   */
  async getEthValue() : Promise<string> {
    return '0';
  }

  /**
   * Access list for single action
   * @returns {AccessList}
   */
  getAccessList() : Array<AccessListItem> {
    return [
      [this.contractAddress, []],
      ...(AccessLists[this.name as keyof _AccessLists] || []),
    ].map(([address, storageKeys]) => ({
      address: address,
      storageKeys: storageKeys.map((num: number) => padLeft(toHex(num), 64)),
    }));
  }
}
