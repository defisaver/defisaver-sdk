import AbiCoder from 'web3-eth-abi';
import { keccak256, padLeft, toHex } from 'web3-utils';
import { CONFIG } from './config';
import ActionAbi from './abis/Action.json';
import { AccessLists as _AccessLists, AccessListItem, EthAddress } from './types';
import { AccessLists } from '../AccessLists';

type ParamTypes = Array<string | Array<any>>;
type Args = Array<any>;

/**
 * Single action that can be executed directly, or combined into a set (ie. supply a vault)
 *
 * @category Base Classes
 */
export class Action {
  contractAddress : EthAddress;

  paramTypes: ParamTypes;

  name: string;

  args: Args;

  mappableArgs: Args;

  /**
   * @param name
   * @param contractAddress
   * @param paramTypes
   * @param args
   */
  constructor(name: string, contractAddress: EthAddress, paramTypes : ParamTypes, args : Args) {
    // if (new.target === Action) throw new TypeError("Actions are instantiated using derived classes");

    if (paramTypes.length !== args.length) throw new Error('Parameters/arguments length mismatch');

    this.contractAddress = contractAddress;
    this.paramTypes = paramTypes;
    this.name = name;
    this.args = args;
    this.mappableArgs = args; // TODO change to class method
  }

  /**
   *
   */
  getId() : string {
    return keccak256(this.name).substr(0, 10);
  }

  /**
   *
   */
  #_getArgumentMappingWithSlots(subSlots: Args) : Array<number> {
    return this.mappableArgs.map(arg => {
      if (new RegExp(/\$\d+/).test(arg)) {
        if (Array.isArray(arg)) throw TypeError('Input can\'t be mapped to arrays (tuples/structs). Specify `mappableArgs` array in constructor.');
        // eslint-disable-next-line
        return parseInt(arg.substr(1));
      }

      // Handle SubSlots placeholder values in strategies
      if (new RegExp(/&\w+/).test(arg)) {
        if (arg === '&proxy') return 254;
        if (arg === '&eoa') return 255;
        // eslint-disable-next-line
        return parseInt(subSlots[arg].index);
      }

      return 0;
    });
  }

  /**
   *
   */
  _getArgumentMapping() : Args {
    return this.mappableArgs.map(arg => {
      if (new RegExp(/\$\d+/).test(arg)) {
        if (Array.isArray(arg)) throw TypeError('Input can\'t be mapped to arrays (tuples/structs). Specify `mappableArgs` array in constructor.');
        // eslint-disable-next-line
        return parseInt(arg.substr(1));
      }
      return 0;
    });
  }

  /**
   * @param type
   *
   */
  #_getPlaceholderForType(type: string) : string {
    // TODO handle arrays?
    // eslint-disable-next-line
    if (type.startsWith('bytes')) return `0x${'0'.repeat(parseInt(type.substr(5)) * 2)}`;
    if (type === 'address') return `0x${'0'.repeat(40)}`;
    if (type === 'string') return '';
    return '0';
  }

  _parseParamType(paramType:string | ParamTypes, arg:Args) {
    if (typeof (paramType) === 'string') {
      if (paramType.startsWith('(')) {
        let _paramType = paramType.replace('(', '');
        _paramType = _paramType.replace(')', '');
        return _paramType.split(',');
      }
      if (paramType.endsWith('[]')) {
        return Array.from(Array(arg.length).fill(paramType.replace('[]', '')));
      }
    }
    return paramType;
  }

  /**
   *
   */
  _replaceWithPlaceholders(arg: Args, paramType: string | ParamTypes) : any {
    const paramTypeParsed = this._parseParamType(paramType, arg);
    if (Array.isArray(arg)) return arg.map((_arg, i) => this._replaceWithPlaceholders(_arg, paramTypeParsed[i]));
    if (typeof (paramType) === 'string') {
      if (new RegExp(/\$\d+/).test(arg)) return this.#_getPlaceholderForType(paramType);
      if (new RegExp(/&\w+/).test(arg)) return this.#_getPlaceholderForType(paramType);
    }
    return arg;
  }

  /**
   *
   */
  _formatType(paramType: string | ParamTypes) : string {
    if (Array.isArray(paramType)) return `(${paramType.map((_paramType) => this._formatType(_paramType))})`;
    return paramType;
  }

  /**
   * Encode arguments for calling the action directly
   * @returns bytes-encoded args
   *
   */
  _encodeForCall() : Array<string> {
    const _arg = this._replaceWithPlaceholders(this.args, this.paramTypes);
    const _paramType = this._formatType(this.paramTypes);
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
   * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
   */
  encodeForDsProxyCall() : Array<string | string[]> {
    if (CONFIG.chainId === 1) {
      const executeActionDirectAbi : any = (ActionAbi.find(({ name }:{ name: string }) => name === 'executeActionDirect'))!;
      return [
        this.contractAddress,
        AbiCoder.encodeFunctionCall(executeActionDirectAbi, this._encodeForCall()),
      ];
    }
    return [this.contractAddress, this.encodeForL2DsProxyCall()];
  }

  /**
   * Encodes action for Recipe call
   */
  encodeForRecipe() : Array<string | string[] | number[]> {
    return [
      this._encodeForCall()[0], // actionCallData
      '0x0000000000000000000000000000000000000000000000000000000000000000', // subData
      this.getId(), // actionIds
      this._getArgumentMapping(), // paramMappings
    ];
  }

  encodeForStrategy(subSlots: any) : Array<(string | number[])> {
    return [
      this.getId(),
      this.#_getArgumentMappingWithSlots(subSlots), // paramMappings
    ];
  }

  /**
   * Assets requiring approval to be used by DsProxy
   * Approval is done from owner to DsProxy
   */
  async getAssetsToApprove(): Promise<Array<{ owner?: string, asset?: string, specialApproveLabel?: string, [key: string]:any } | { owner: string, nft: EthAddress, tokenId: string, specialApproveLabel?: string, [key: string]:any }>> {
    return [];
  }

  /**
   * ETH value to be sent with transaction
   * @returns ETH value in wei
   */
  async getEthValue() : Promise<string> {
    return '0';
  }

  /**
   * Access list for single action
   */
  getAccessList(chainId: number) : Array<AccessListItem> {
    if (chainId !== 1) return [];
    return [
      [this.contractAddress, []],
      ...(AccessLists[this.name as keyof _AccessLists] || []),
    ].map(([address, storageKeys]) => ({
      address,
      storageKeys: storageKeys.map((num: number) => padLeft(toHex(num), 64)),
    }));
  }
}
