import AbiCoder from 'web3-eth-abi';
import { toBN } from 'web3-utils';
import { getAssetInfo, utils } from '@defisaver/tokens';
import { Action } from './Action';
import { getAddr } from './addresses';
import RecipeAbi from './abis/Recipe.json';
import { AccessListItem, EthAddress, TxRelayData } from './types';
import { CONFIG } from './config';

/**
 * Set of Actions to be performed sequentially in a single transaction
 *
 * @category Base Classes
 */
export class Recipe {
  name: string;

  actions: Array<Action>;

  recipeExecutorAddress: string;

  extraGas: number;

  /**
   * @param name
   * @param actions
   */
  constructor(name: string, actions: Array<Action> = []) {
    actions.forEach((action: Action) => {
      if (!(action instanceof Action)) throw new TypeError('Supplied action does not inherit Action');
    });

    this.name = name;
    this.actions = actions;

    this.extraGas = 0;
    this.recipeExecutorAddress = getAddr('RecipeExecutor', CONFIG.chainId);
  }

  /**
   * @param action
   */
  addAction(action: Action) : Recipe {
    if (!(action instanceof Action)) throw new TypeError('Supplied action does not inherit Action');
    this.actions.push(action);
    return this;
  }

  /**
   * Encode arguments for calling the action set directly
   *
   */
  #_encodeForCall(): Array<string | Array<any>> {
    const encoded = this.actions.map(action => action.encodeForRecipe());
    const transposed = encoded[0].map((_, colIndex) => encoded.map(row => row[colIndex]));
    const taskStruct = [
      this.name,
      ...transposed,
    ];
    return [taskStruct];
  }

  /**
   * Encode arguments for calling the action set via DsProxy
   * @returns `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`
   */
  encodeForDsProxyCall() : Array<string> {
    const executeTaskAbi : any = RecipeAbi.find(({ name }:{ name: string }) => name === 'executeRecipe');
    const encoded = this.#_encodeForCall();
    return [
      this.recipeExecutorAddress,
      // @ts-expect-error Interface of AbiCoder is wrong :(
      AbiCoder.encodeFunctionCall(executeTaskAbi, encoded),
    ];
  }

  encodeForTxRelayCall(data: TxRelayData): Array<string> {
    const executeTaskAbi : any = RecipeAbi.find(({ name }:{ name: string }) => name === 'executeRecipeFromTxRelay');
    const encodedRecipe = this.#_encodeForCall()[0];
    const encodedTxRelayData = [
      data.additionalGasUsed,
      data.maxGasPrice,
      data.maxTxCostInFeeToken,
      data.feeToken,
    ];
    const encoded = [encodedRecipe, encodedTxRelayData];
    return [
      this.recipeExecutorAddress,
      // @ts-expect-error
      AbiCoder.encodeFunctionCall(executeTaskAbi, encoded),
    ];
  }

  /**
   * Logs parameter mapping in verbose format for validation. Used for testing in development.
   */
  _validateParamMappings() {
    this.actions.forEach((action : Action, i : number) => {
      action._getArgumentMapping().forEach((source, j) => {
        if (source) console.log(`${this.actions[i].name} takes argument #${j + 1} from ${this.actions[source - 1].name} (action #${source})`);
      });
    });
  }

  /**
   * Assets requiring approval to be used by DsProxy
   * Approval is done from owner to DsProxy
   */
  async getAssetsToApprove() : Promise<Array<{ owner: string, asset: string, specialApproveLabel?: string } | { owner: string, nft: EthAddress, tokenId: string, specialApproveLabel?: string }>> {
    const uniqueAssetOwnerPairs : Array<{ owner: string, asset: string, specialApproveLabel?: string, tokenId?: string } | { owner: string, nft: EthAddress, tokenId: string, specialApproveLabel?: string, [key: string]:any }> = [];
    const assetOwnerPairs = await Promise.all(this.actions.map(a => a.getAssetsToApprove()));
    for (const pairsPerAction of assetOwnerPairs) {
      for (const pair of pairsPerAction) {
        const isNft = !pair.asset;
        if (!uniqueAssetOwnerPairs.find(_pair => _pair.owner === pair.owner && (isNft ? _pair.tokenId === pair.tokenId : _pair.asset === pair.asset))) {
          if (isNft) {
            uniqueAssetOwnerPairs.push({
              owner: pair.owner!,
              nft: pair.nft!,
              tokenId: pair.tokenId!,
              specialApproveLabel: pair.specialApproveLabel!,
            });
          } else {
            uniqueAssetOwnerPairs.push({ owner: pair.owner!, asset: pair.asset!, specialApproveLabel: pair.specialApproveLabel! });
          }
        }
      }
    }
    return uniqueAssetOwnerPairs.filter(({ asset }) => !utils.compare(asset, getAssetInfo('ETH').address));
  }

  /**
   * ETH value to be sent with transaction
   * @returns ETH value in wei
   */
  async getEthValue():Promise<string> {
    return (await Promise.all(this.actions.map(a => a.getEthValue())))
      .reduce((acc, val) => acc.add(toBN(val)), toBN(0))
      .toString();
  }

  /**
   * Generates an access list for the recipe
   */
  getAccessList(): Array<AccessListItem> {
    const addressMapping : any = {
      [getAddr('RecipeExecutor', CONFIG.chainId)]: [],
      [getAddr('DFSRegistry', CONFIG.chainId)]: [],
    };
    this.actions.forEach((action) => {
      const accessList = action.getAccessList(CONFIG.chainId);
      accessList.forEach(({ address, storageKeys }:{ address: EthAddress, storageKeys: Array<string> }) => {
        addressMapping[address] = new Set([...storageKeys, ...(addressMapping[address] || [])]);
      });
    });
    return Object.keys(addressMapping).map((address) => ({
      address,
      storageKeys: [...addressMapping[address]],
    }));
  }
}
