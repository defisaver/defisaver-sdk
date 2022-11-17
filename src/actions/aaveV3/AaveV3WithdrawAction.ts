import {ActionWithL2} from "../../ActionWithL2";
import { getAddr } from '../../addresses';
import {EthAddress,uint16,uint256} from '../../types';
import { requireAddress } from "../../utils/general";


/**
 * AaveV3WithdrawAction - Withdraw a previously supplied token from a position in AaveV3
 *
 * @category AaveV3
 */
export class AaveV3WithdrawAction extends ActionWithL2 {
  /**
   * @param useDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param amount Amount of tokens to be withdrawn -> send type(uint).max for whole amount
   * @param to Where the withdrawn tokens will be sent
   * @param assetId The id of the token to be deposited
   */
  constructor(useDefaultMarket:boolean, market:EthAddress, amount:uint256, to:EthAddress,assetId:uint16) {
    requireAddress(to);
    super('AaveV3Withdraw', getAddr('AaveV3Withdraw'),
    ['uint16','bool','uint256','address','address'],
    [assetId, useDefaultMarket, amount, to, market]
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
    ];
  }
  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = "0x2895f3aa";
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[0]));
    // useOnDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[1]))
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[2]));
    // from
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[3]));
    if (!this.args[1]){
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[4]));
    }
    return encodedInput;
  }
}
