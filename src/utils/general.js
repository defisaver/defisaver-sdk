
module.exports.requireAddress = (address) => {
  if (typeof address !== 'string') throw new Error('Address is not a string');
  if (address === '') throw new Error('Address is empty string');
  if (address.length < 42) throw new Error(`Address too short (${address.length} instead of 42)`);
  if (new RegExp(/^0x0+$/).test(address)) throw new Error('Address is empty bytes');
  if (!(new RegExp(/^0x[0-9a-fA-F]{40}$/).test(address))) throw new Error('Address invalid');
};
