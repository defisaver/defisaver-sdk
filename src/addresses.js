

const actionAddresses = {
  // maker
  "McdGenerate": "0x40F0Cf9a9F61251E7f75E59b8dD88fd5d32AA612",
  'McdWithdraw': '0xa819c79b2559AC4E974D4A685063B3f828F47beB',
  'McdSupply': '0x0bCF4f9325D89DC504585D44BB819Df4b153Abf6',
  'McdPayback': '0xC94D840A5eA787Ea796436BF7aba06e54EBc8138',
  'McdOpen': '0x5D1D78fFBef7bE0F936c169fd570326deAA45886',


};


const getAddr = (name) => {
  if (!actionAddresses[name]) return '0x0';

  return actionAddresses[name];
};

module.exports = {
  getAddr,
}
