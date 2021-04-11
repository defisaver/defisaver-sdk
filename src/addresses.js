

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
  'McdSupply': '0xA9226038284614D2E7a1BAf0A30EC0EE6277e463',
  'McdWithdraw': '0x19654613812850081D80e7EC992e8F71DcbD30B4',

  // aave
  'AaveBorrow': '0xEdBbF97C505309e5174E164fbec3cAE774d310Ea',
  'AavePayback': '0xF49e30c65E08cD62BC4D6245217404CAEa0baC41',
  'AaveSupply': '0xaA3BD96aE16E7f804Fc401C9B8Cd1A8b95eE98dA',
  'AaveWithdraw': '0xE06Fc1CBD78Eb0799d5B0ca62D51B065886e08FC',

  // compound
  'CompBorrow': '0xde1b05266f2D05Bf9216B76500583c2b7785b7e9',
  'CompClaim': '0xAA165C03fF61301b79f35649157f6738263739A3',
  'CompPayback': '0x676ed911ae7a0Cbd2d7c6BDa1744C36b1FdC2F9e',
  'CompSupply': '0xc18a2e620c36cbf0c278d443541264Ffc9c8808c',
  'CompWithdraw': '0xD326a003bcfDbad0E9A4Ccc37a76Ce264345F38a',

  // flashloan
  'FLCustomAaveV2': '0x5F348a484F7A36FE89e371b547a6CA8b7c690012',
  'FLAave': '0xf09723F08eEa6d48e65acE9e4aFE7E09B7884D67',
  'FLAaveV2': '0xAD2b66e18405e913c46e31c6eB15646410923089',
  'FLDyDx': '0xfeE401aa4d4b16F39995cd37EDcD35C5CB02627e',

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
