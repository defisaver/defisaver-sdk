const maker = require('./maker');
const aave = require('./aave');
const compound = require('./compound');
const basic = require('./basic');
const flashloan = require('./flashloan');
const uniswap = require('./uniswap');
const reflexer = require('./reflexer');
const dydx = require('./dydx');
const uniswapV3 = require('./uniswapV3');
const liquity = require('./liquity');
const yearn = require('./yearn');

module.exports = {
  maker,
  aave, // Aave v2
  compound,
  basic,
  flashloan,
  uniswap, // Uniswap v2
  uniswapV3,
  reflexer,
  dydx,
  liquity,
  yearn,
};
