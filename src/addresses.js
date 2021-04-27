

const actionAddresses = {
  'TaskExecutor': '0xb3e5371d55e1e84bfFE7D0b57Bd9c6A4C6b3C635',

  // utils
  'WrapEth': '0x9E702937F42Db2cE58342Ca5F213Ef33D51AEF6b',
  'UnwrapEth': '0x925b0C0663aaef2C6F603aD8B992a15adA83f1Cc',
  'PullToken': '0xa8C63267e09F1b4Efc9F934ad81c09e021fc8103',
  'SendToken': '0xBbe0D7f2AF01aE678f8A873CB2d2EB73871C9b5A',
  'SumInputs': '0xCdef35425579fc566B6Ee0499A79256ac88d25cf',

  // exchange
  'DFSSell': '0x9A765623F9De2D7dB26afb5f7Bb85592DF094CDB',
  'DFSBuy': '0x939dCad6A3D1fEACccB60Af90876D904468CbF66',

  // maker
  'McdGenerate': '0x28C568A2C7216e8b61C71527C4b9ce2b92d217aa',
  'McdGive': '0xD2dc5DA4172a3901C9f26c7cd29eFE656Fc20332',
  'McdMerge': '0x66c7f4C7e59b6e780142aaD5c9f427FA5F8dfFc6',
  'McdOpen': '0x6467a24950451b3abd6654Fb6d8ae01635dcFe00',
  'McdPayback': '0x5B1851De9E1FD9928dfC040714DB6204AF587581',
  'McdSupply': '0xD3C50623F44E97B59CFbfC1232146858be18e6cc',
  'McdWithdraw': '0x19654613812850081D80e7EC992e8F71DcbD30B4',

  // aave
  'AaveBorrow': '0xEdBbF97C505309e5174E164fbec3cAE774d310Ea',
  'AavePayback': '0xA04dd7BbdA2DF9307654d3F91a252F911790773e',
  'AaveSupply': '0xC71113E9122465e8bCd42123f840Df99abaF29F1',
  'AaveWithdraw': '0xE06Fc1CBD78Eb0799d5B0ca62D51B065886e08FC',

  // compound
  'CompBorrow': '0xde1b05266f2D05Bf9216B76500583c2b7785b7e9',
  'CompClaim': '0xAA165C03fF61301b79f35649157f6738263739A3',
  'CompPayback': '0xaedCD157d570Edd1513c0dafaA8CD92198335AAC',
  'CompSupply': '0x1F22890C166B30cE8769b7B55354064C254e063F',
  'CompWithdraw': '0xD326a003bcfDbad0E9A4Ccc37a76Ce264345F38a',

  // flashloan
  'FLAaveV2': '0xa290BDae65638c083e860b05009f290140fc0379',
  'FLDyDx': '0x505079b4E049B9e641deb7E04D55e9457B8ad8Bc',

  // uniswap
  'UniSupply': '0x20051E428c9984B256EB73957cA59c256F01938c',
  'UniWithdraw': '0x5Abf6039fe574F82115742F7FADd0F7A21c2c4dc',
};

const otherAddresses = {
  Empty: '0x0000000000000000000000000000000000000000',
  McdCdpManager: '0x5ef30b9986345249bc32d8928b7ee64de9435e39',
  BCdpManager: '0x3f30c2381CD8B917Dd96EB2f1A4F96D91324BBed',
  AaveDefaultMarket: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5',
  ProxyRegistry: '0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4',
  DFSProxyRegistry: '0x29474FdaC7142f9aB7773B8e38264FA15E3805ed',
}


const getAddr = (name) => {
  if (!actionAddresses[name] && !otherAddresses[name]) return '0x0';

  return actionAddresses[name] || otherAddresses[name];
};

module.exports = {
  getAddr,
  actionAddresses,
}
