const dfs = require('../index.js');
const AbiCoder = require('web3-eth-abi');
const ActionAbi = require('../src/abis/Action.json');

const sell = new dfs.Action(
    "DFSSell",
    "0x0a80C3C540eEF99811f4579fa7b1A0617294e06f",
    [
      ["address","address","uint256","uint256","uint256","uint256","address","address","bytes",["address","address","uint256","uint256","bytes"]],
      "address",
      "address",
    ],
    [
        ['0x6b175474e89094c44da98b954eedeac495271d0f', '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', 1000000000000, 0, 0, 0, '0x0000000000000000000000000000000000000000', '0x6403BD92589F825FfeF6b62177FCe9149947cb9f', '0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000006b175474e89094c44da98b954eedeac495271d0f000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', ['0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', 0, 0, []]],
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'
    ]
);

sell.encodeForCall();
const executeActionDirectAbi = ActionAbi.find(({ name }) => name === 'executeActionDirect');
AbiCoder.encodeFunctionCall(executeActionDirectAbi, sell.encodeForCall());
console.log('Action.encodeForCall() ✅');
