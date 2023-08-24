import { getAssetInfoByAddress } from '@defisaver/tokens';
import { ActionWithL2 } from '../../ActionWithL2';
import { getAddr } from '../../addresses';
import { EthAddress, uint16, uint256 } from '../../types';

/**
 * SparkSupplyAction - Supply token to an Spark position
 *
 * @category Spark
 */
export class SparkSupplyAction extends ActionWithL2 {
  tokenForApproval: EthAddress;

  /**
   * @param useDefaultMarket If this is true it defaults to the hardcoded market in contract
   * @param market Address provider for specific market
   * @param amount Amount of tokens to be deposited
   * @param from Tokens will be supplied from this address
   * @param tokenAddress Address of the token
   * @param assetId The id of the token to be deposited
   * @param enableAsColl If we need to enable asset as collateral
   * @param useOnBehalf use on behalf param or default to proxy
   * @param onBehalf For what user we are supplying the tokens, defaults to proxy
   */
  constructor(useDefaultMarket:boolean, market:EthAddress, amount:uint256, from:EthAddress, tokenAddress:EthAddress, assetId:uint16, enableAsColl:boolean, useOnBehalf:boolean, onBehalf:EthAddress = getAddr('Empty')) {
    super('SparkSupply', getAddr('SparkSupply'),
      ['uint256', 'address', 'uint16', 'bool', 'bool', 'bool', 'address', 'address'],
      [amount, from, assetId, enableAsColl, useDefaultMarket, useOnBehalf, market, onBehalf],
    );

    this.mappableArgs = [
      this.args[0],
      this.args[1],
      this.args[2],
      this.args[3],
      this.args[4],
      this.args[5],
      this.args[6],
      this.args[7],
    ];
    this.tokenForApproval = tokenAddress;
  }

  async getAssetsToApprove() {
    const asset = getAssetInfoByAddress(this.tokenForApproval);
    if (asset.symbol !== 'ETH') return [{ asset: this.tokenForApproval, owner: this.args[1] }];
    return [];
  }

  encodeInputs() {
    // executeActionDirectL2
    let encodedInput = '0x2895f3aa';
    // amount
    encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0]));
    // from
    encodedInput = encodedInput.concat(this.addressToBytes20(this.args[1]));
    // assetId
    encodedInput = encodedInput.concat(this.numberToBytes2(this.args[2]));
    // enableAsColl
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[3]));
    // useDefaultMarket
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[4]));
    // useOnBehalf
    encodedInput = encodedInput.concat(this.boolToBytes1(this.args[5]));
    if (!this.args[4]) {
      // market
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[6]));
    }
    if (this.args[5]) {
      // onBehalf
      encodedInput = encodedInput.concat(this.addressToBytes20(this.args[7]));
    }
    return encodedInput;
  }
}
