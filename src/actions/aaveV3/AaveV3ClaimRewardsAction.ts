import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import { EthAddress, uint8, uint256 } from '../../types';
import { requireAddress } from '../../utils/general';


/**
 *  AaveV3ClaimRewardsAction
 *
 * @category AaveV3
 */
export class AaveV3ClaimRewardsAction extends ActionWithL2 {
  /**
   * @param assetsLength Address provider for specific market
   * @param amount length of two arrays
   * @param to Address where claimed tokens will end up on .
   * @param reward
   * @param assets
   */
  constructor(assetsLength:uint8, amount:uint256, to:EthAddress, reward:EthAddress, assets:Array<EthAddress>) {
    requireAddress(to);
    super(
      'AaveV3ClaimRewards',
      getAddr('AaveV3ClaimRewards'),
      ['uint8', 'uint256', 'address', 'address', 'address[]'],
      [assetsLength, amount, to, reward, assets],
    );
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = '0x2895f3aa';
    // assetsLength
    encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0]));
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[1]));
    // to
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[2]));
    // reward
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[3]));
    // assets
    const arrayLength = this.args[0];
    for (let i = 0; i < arrayLength; i++) {
      // assets[i]
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[4][i]));
    }

    return encodedInput;
  }
}
