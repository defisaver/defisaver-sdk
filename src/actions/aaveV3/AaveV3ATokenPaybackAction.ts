import { getAssetInfoByAddress } from '@defisaver/tokens';
import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import {
  EthAddress, uint8, uint16, uint256,
} from '../../types';

/**
 * AaveV3ATokenPaybackAction - Repay Aave V3 debt using aTokens
 *
 * @category AaveV3
 */
export class AaveV3ATokenPaybackAction extends ActionWithL2 {
  addressForApproval: EthAddress;

  /**
   * @param useDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param amount Amount of tokens to be payed back (uint.max for full debt)
   * @param from Where are we pulling the payback aTokens from
   * @param rateMode Type of borrow debt [Stable: 1, Variable: 2]
   * @param aTokenAddr address of the aToken to be pulled
   * @param assetId The id of the underlying asset to be repaid
   */
  constructor(useDefaultMarket: boolean, market: EthAddress, amount: uint256, from: EthAddress, rateMode: uint8, aTokenAddr: EthAddress, assetId: uint16) {
    super('AaveV3ATokenPayback', getAddr('AaveV3ATokenPayback'),
      ['uint256', 'address', 'uint8', 'uint16', 'bool', 'address'],
      [amount, from, rateMode, assetId, useDefaultMarket, market],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[5],
    ];
    this.addressForApproval = aTokenAddr;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.addressForApproval);
    if (asset.symbol !== 'ETH') return [{ asset: this.addressForApproval, owner: this.args[1] }];
    return [];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = '0x2895f3aa';
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0]));
    // from
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[1]));
    // rateMode
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[2]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[3]));
    // useDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[4]));
    if (!this.args[4]) {
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[5]));
    }
    return encodedInput;
  }
}
