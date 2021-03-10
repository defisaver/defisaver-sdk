const {assert} = require('chai');
const {getAssetInfo} = require("@defisaver/tokens");
const dfs = require('../../index');
const uniswapUtils = dfs.utils.uniswapLP;

describe('Utils', () => {
  context('Uniswap', () => {
    it('Computes DAI/ETH pool correctly using addresses (WETH)', () => {
      const daiEthLp = uniswapUtils.getPoolAddressByAddresses(getAssetInfo('DAI').address, getAssetInfo('WETH').address);
      const ethDaiLp = uniswapUtils.getPoolAddressByAddresses(getAssetInfo('WETH').address, getAssetInfo('DAI').address);
      assert.equal(daiEthLp, ethDaiLp);
      assert.equal(daiEthLp, '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11');
      assert.notEqual(daiEthLp, '0x0000000000000000000000000000000000000000');
    })
    it('Computes DAI/ETH pool correctly using symbols', () => {
      const daiEthLp = uniswapUtils.getPoolAddressBySymbols('DAI', 'ETH');
      const ethDaiLp = uniswapUtils.getPoolAddressBySymbols('ETH', 'DAI');
      const daiWethLp = uniswapUtils.getPoolAddressBySymbols('DAI', 'WETH');
      const wethDaiLp = uniswapUtils.getPoolAddressBySymbols('WETH', 'DAI');
      assert.equal(daiEthLp, ethDaiLp);
      assert.equal(daiWethLp, wethDaiLp);
      assert.equal(daiEthLp, daiWethLp);
      assert.equal(daiEthLp, '0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11');
    })
    it('Computes ETH/USDT pool correctly using symbols', () => {
      const usdtEthLp = uniswapUtils.getPoolAddressBySymbols('USDT', 'ETH');
      const ethUsdtLp = uniswapUtils.getPoolAddressBySymbols('ETH', 'USDT');
      const usdtWethLp = uniswapUtils.getPoolAddressBySymbols('USDT', 'WETH');
      const wethUsdtLp = uniswapUtils.getPoolAddressBySymbols('WETH', 'USDT');
      assert.equal(usdtEthLp, ethUsdtLp);
      assert.equal(usdtWethLp, wethUsdtLp);
      assert.equal(usdtEthLp, usdtWethLp);
      assert.equal(usdtEthLp, '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852');
    })
    it('Computes UNI/ETH pool correctly using symbols', () => {
      const uniEthLp = uniswapUtils.getPoolAddressBySymbols('UNI', 'ETH');
      assert.equal(uniEthLp, '0xd3d2E2692501A5c9Ca623199D38826e513033a17');
    })
  })
})
