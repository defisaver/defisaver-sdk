import { AccessLists } from "../src/types";

export const UniswapAccessLists:AccessLists = {
    UniSupply: [
        ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', []], // UniV2Router02
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    UniWithdraw: [
        ['0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', []], // UniV2Factory
        ['0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', []], // UniV2Router02
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    UniMintV3: [
        ['0xC36442b4a4522E871399CD717aBDD847Ab11FE88', []], // NonfungiblePositionManager
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    UniSupplyV3: [
        ['0xC36442b4a4522E871399CD717aBDD847Ab11FE88', []], // NonfungiblePositionManager
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    UniWithdrawV3: [
        ['0xC36442b4a4522E871399CD717aBDD847Ab11FE88', []], // NonfungiblePositionManager
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    UniCollectV3: [
        ['0xC36442b4a4522E871399CD717aBDD847Ab11FE88', []], // NonfungiblePositionManager
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    UniCreatePoolV3: [
        ['0xC36442b4a4522E871399CD717aBDD847Ab11FE88', []], // NonfungiblePositionManager
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],
};