import AbiCoder from 'web3-eth-abi';
import { getAssetInfoByAddress } from '@defisaver/tokens';
import ActionAbi from '../../abis/Action.json';
import { ActionWithL2 } from '../../ActionWithL2';
import { requireAddress } from '../../utils/general';
import { getAddr } from '../../addresses';
import { EthAddress, uint256 } from '../../types';

/**
 * Limit sell action used as part of the LimitSell Strategy
 *
 * @category BasicActions
 */
export class LimitSellAction extends ActionWithL2 {
  protocolFee:string;

  /**
   * @param exchangeOrder Standard DFS Exchange data
   * @param from Order sender
   * @param to Order recipient
   * @param gasUsed Amount of gas spent as part of the strategy
   * @param protocolFee 0x fee (amount of ETH in Wei)
   */
  constructor(exchangeOrder:Array<any>, from:EthAddress, to:EthAddress, gasUsed: uint256, protocolFee = '0') {
    requireAddress(to);
    super(
      'LimitSell',
      getAddr('LimitSell'),
      [
        ['address', 'address', 'uint256', 'uint256', 'uint256', 'uint256', 'address', 'address', 'bytes', ['address', 'address', 'address', 'uint256', 'uint256', 'bytes']],
        'address',
        'address',
        'uint256',
      ],
      [exchangeOrder, from, to, gasUsed],
    );

    this.protocolFee = protocolFee;

    this.mappableArgs = [
      this.args[0][0],
      this.args[0][1],
      this.args[0][2],
      this.args[1],
      this.args[2],
    ];
  }

  encodeInputs() {
    const executeActionDirectAbi: any = (ActionAbi.find(({ name }) => name === 'executeActionDirect'))!;
    return AbiCoder.encodeFunctionCall(executeActionDirectAbi, this._encodeForCall());
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.args[0][0]);
    if (asset.symbol !== 'ETH') return [{ asset: this.args[0][0], owner: this.args[1] }];
    return [];
  }

  async getEthValue() {
    return this.protocolFee || '0';
  }
}