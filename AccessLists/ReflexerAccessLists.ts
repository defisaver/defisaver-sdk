import { AccessLists } from '../src/types';

export const ReflexerAccessLists : AccessLists = {
  ReflexerOpen: [
    ['0xEfe0B4cA532769a3AE758fD82E1426a03A94F185', []], // GebSafeManager
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  ReflexerSupply: [
    ['0xCC88a9d330da1133Df3A7bD823B95e52511A6962', []], // SAFEEngine
    ['0xEfe0B4cA532769a3AE758fD82E1426a03A94F185', []], // GebSafeManager
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  ReflexerWithdraw: [
    ['0xEfe0B4cA532769a3AE758fD82E1426a03A94F185', []], // GebSafeManager
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  ReflexerGenerate: [
    ['0xCC88a9d330da1133Df3A7bD823B95e52511A6962', []], // SAFEEngine
    ['0xEfe0B4cA532769a3AE758fD82E1426a03A94F185', []], // GebSafeManager
    ['0x0A5653CCa4DB1B6E265F47CAf6969e64f1CFdC45', []], // CoinJoin
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  ReflexerPayback: [
    ['0xCC88a9d330da1133Df3A7bD823B95e52511A6962', []], // SAFEEngine
    ['0xEfe0B4cA532769a3AE758fD82E1426a03A94F185', []], // GebSafeManager
    ['0x0A5653CCa4DB1B6E265F47CAf6969e64f1CFdC45', []], // CoinJoin
    ['0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919', []], // Rai
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  ReflexerNativeUniV2SaviourDeposit: [
    ['0xEfe0B4cA532769a3AE758fD82E1426a03A94F185', []], // GebSafeManager
    ['0xA9402De5ce3F1E03Be28871b914F77A4dd5e4364', []], // NativeUnderlyingUniswapV2SafeSaviour
    ['0x8aE720a71622e824F576b4A8C03031066548A3B1', []], // UNIV2_RAI_WETH_ADDRESS
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  ReflexerNativeUniV2SaviourWithdraw: [
    ['0xA9402De5ce3F1E03Be28871b914F77A4dd5e4364', []], // NativeUnderlyingUniswapV2SafeSaviour
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  ReflexerNativeUniV2SaviourGetReserves: [
    ['0xA9402De5ce3F1E03Be28871b914F77A4dd5e4364', []], // NativeUnderlyingUniswapV2SafeSaviour
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],
};