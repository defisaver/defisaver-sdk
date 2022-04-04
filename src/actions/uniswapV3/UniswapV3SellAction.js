const L2Action = require('../../L2Action');

/**
 * Action that executes uniswap exactInput swap via specified path
 */
class UniswapV3SellAction extends L2Action {
    /**
     * @param {address} from
     * @param {address} to
     * @param {uint256} amount
     * @param {uint256} minOut
     * @param {address} inputAsset
     * @param {bool} isCompressedPath
     * @param {bytes} path
     */
    constructor(from, to, amount, minOut, inputAsset, isCompressedPath, path) {
        super(
            'UniSellV3',
            '0x',
            [
                [
                    'address',
                    'address',
                    'uint256',
                    'uint256',
                    'bool',
                    'bytes',
                ],
            ],
            [[
                from,
                to,
                amount,
                minOut,
                isCompressedPath,
                path,
            ]],
        );
        this.tokenForApproval = inputAsset;

        this.mappableArgs = [
            this.args[0][0],
            this.args[0][1],
            this.args[0][2],
            this.args[0][3],
        ];
    }

    encodeInputs() {
        // executeActionDirectL2
        let encodedInput = '0x2895f3aa';
        // from
        encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][0]));
        // to
        encodedInput = encodedInput.concat(this.addressToBytes20(this.args[0][1]));
        // amount
        encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][2]));
        // minOut
        encodedInput = encodedInput.concat(this.numberToBytes32(this.args[0][3]));
        // isCompressedPath
        encodedInput = encodedInput.concat(this.numberToBytes1(this.args[0][4] ? 1 : 0));
        // path
        encodedInput = encodedInput.concat(this.args[0][5].slice(2));
        return encodedInput;
    }

    async getAssetsToApprove() {
        return { asset: this.tokenForApproval, owner: this.args[0][0] };
    }
}

module.exports = UniswapV3SellAction;