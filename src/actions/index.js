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
const lido = require('./lido');
const insta = require('./insta');
const balancer = require('./balancer');
const curve = require('./curve');
const guni = require('./guni');
const mstable = require('./mstable');
const rari = require('./rari');
const convex = require('./convex');

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
  lido,
  insta,
  balancer,
  curve,
  guni,
  mstable,
  rari,
  convex,
};
