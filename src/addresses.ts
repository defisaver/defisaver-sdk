import { CONFIG, NETWORKS } from './config';
import { EthAddress } from './types';

export const actionAddresses = {
  [NETWORKS.ethereum.chainId]: {
    // utils
    WrapEth: '0x8EbBd35f84D7f0DFCBEf08fD30CD09176133251A',
    UnwrapEth: '0x3298C6652beD903d3DfB6466A2C272eDe8ff741D',
    PullToken: '0x29Bb266A72E585C661e292F7D8CA7C4581a0AF72',
    SendToken: '0x5c19aF6F5de91209c3bc2Ba447b1f5eb53c50759',
    SendTokens: '0x7d05c0ABeF6d91300a237026507c4a2631ddAdEa',
    SumInputs: '0x70907d840aBBc984Fd949311d2f005e6aC4a4D7a',
    SubInputs: '0xe1804b756188F63f723d2FECc02988D0Cc1aB823',
    ChangeProxyOwner: '0x81cA52CfE66421d0ceF82d5F33230e43b5F23D2B',
    TokenBalance: '0xa92B177950F1460119940436515FD857C24494BC',
    AutomationV2Unsub: '0xe35Fb12fE9796847751076aCf5ee7d124108612C',
    SendTokenAndUnwrap: '0x4155537e6933E59a62deb68f6ad93d237d07242a',
    ToggleSub: '0x2120ad7b4eE1795C8B027c1592eCB918faAb163A',
    UpdateSub: '0xF6Cb8f7e61a64075ec8FAC3f298745605E543233',
    TransferNFT: '0x861e893E1796F81248e75F06C0b09Abdc8fe2f6F',
    CreateSub: '0xEB13C96257667cF0A037305A46092bf7C70A61e1',
    ApproveToken: '0xA4161cED7A29F0a3424e464a4a2dBf75888c5BF9',
    SDaiWrap: '0xac7Ac294F29d818D26Bd9DF86d36904B1Ed346Ae',
    SDaiUnwrap: '0xe8Cb536BB96075241c4bd8f1831A8577562F2B32',
    TokenizedVaultAdapter: '0x30aB8926FBE6c3aeEf52aFC575E54FAD3ae84a24',
    PermitToken: '0x2654056046ed5E3f673FbcBC99A1BDB77F5c460B',
    StarknetClaim: '0x40069889098cd54d6c1021578000f37b197479cf',
    HandleAuth: '0xfc2e2b37c73d5d43cf5fcbd80a4049b620d60eba',

    // exchange
    DFSSell: '0x901d383c37b30cefad9b6e2bbb0539a40e02c5f4',

    // sky
    SkyStake: '0x5803C399EE9f887C8b81075E4C185c448361c235',
    SkyUnstake: '0x4b6d3A01465fa88D7D596333D15832434a568452',
    SkyClaimRewards: '0x8A2A23DfC0CD1738bD4408F1668E2B12ACD95369',

    // maker
    McdGenerate: '0xCb50a91C0f12f439b8bf11E9474B9c1ED62Bf7a3',
    McdGive: '0xf9556A87BF424834FDe7De0547b58E36Cb42EF01',
    McdMerge: '0x6D06C6c2BCeaEC31b0F8Cd68C594120dDCcCC427',
    McdOpen: '0x1b54e8b6073ac7382c42830BE715466aDA11Cf37',
    McdPayback: '0xE68AeD979Af6f85516fF485D098804c0f9eD9A5b',
    McdSupply: '0x84372e73e1A2E95510869D2D81A3ef1AEC9e0Da8',
    McdWithdraw: '0xa704FBBe2f7ea8eF45a8280f6Bf96939eBC73252',
    McdClaim: '0xc0FC0f5Ba156E16217F8C7f400AEc0a658419C13',
    McdDsrDeposit: '0x64bde7F73e05c6a28b701D7f569f0c0Ae4f6aD33',
    McdDsrWithdraw: '0x96190d1f1c040fd8449250b90778Aa360f2e0Ec1',
    McdTokenConverter: '0x1ef664440dc7342253780472dad90d9a3258a71d',

    // reflexer
    ReflexerSupply: '0xd7a36CD4ce7CCc2F1376Dc5C48BaC84380A4f698',
    ReflexerWithdraw: '0xD8a14d447AB6789F3bf1Eb763b6306db3FC3d666',
    ReflexerPayback: '0xdAa3963798C2E3F5c16AAcc9114fc727C450d0cb',
    ReflexerGenerate: '0x8e8Fd178A5FAE3A29F9CB1A06aBBBCFd5B83beb7',
    ReflexerOpen: '0x4704a7cBd4d913d1233765B70531D601b4384011',
    ReflexerWithdrawStuckFunds: '0x64759d064aaA1f9Ac7A458520Aad06128Da9b7b8',

    // not deployed as currently not used
    ReflexerNativeUniV2SaviourDeposit: '0x0000000000000000000000000000000000000000',
    ReflexerNativeUniV2SaviourGetReserves: '0x0000000000000000000000000000000000000000',
    ReflexerNativeUniV2SaviourWithdraw: '0x0000000000000000000000000000000000000000',

    // aave
    AaveBorrow: '0x1B95E800a869bc3F89914470a7901D93D1401cD1',
    AavePayback: '0x066225964999F1D07C888c5Ac4a6C885bDa88b9A',
    AaveSupply: '0x3DbdC87d2299768AD82DDCAc13021A29681b8520',
    AaveWithdraw: '0xee274301e8b06d2284c4c7ebfbd8f3a368ce24f2',
    AaveCollateralSwitch: '0xFf5dfF1B90bd5Aa6E12768AB497dB90cc9DE6F5d',
    AaveUnstake: '0x2FE4024e350cD2c64D2fd0Db5d16F5cE54Ca0E09',
    AaveClaimAAVE: '0xd52855bD011F3D87565f9040DdE2A59fB1b27b15',
    AaveClaimStkAave: '0x5Dcd9Dc0185a6Ab07a31e5284D16Ce9f0A79Ce99',
    // aave v3
    AaveV3Withdraw: '0x9D4e4b26A5E2e6Dad30C5d95F5cE78A8310F04C2',
    AaveV3SwapBorrowRateMode: '0x630F530Ac523C935cf2528E62D0A06F8900C5b1B',
    AaveV3Supply: '0x91b3fCCEA2f2e0622Cc1fb54E12f5ac5aAa55a87',
    AaveV3SetEMode: '0xBe7F735d7955e0461579E34266f41F928AE06D78',
    AaveV3Payback: '0xe29265217D65F5a2ae41972E09C13E107D049004',
    AaveV3CollateralSwitch: '0x54A4d6cB567B2C6CDe4687c361b24fd912695DAb',
    AaveV3ClaimRewards: '0x998A2E9aaE03c11b7A9863C1F59c42A21fcf47D0',
    AaveV3Borrow: '0x7079ba1Bd00EeFCD2a260BbD6D088230505e3858',
    AaveV3ATokenPayback: '0xDe5c012cd1878D86E91309593764895a3adb380E',
    AaveV3View: '0x9ECB0645b357fDD7B92789B91595160862Bd45d0',
    AaveV3DelegateWithSig: '0x9253E22Ce4f0AeE541301CF8cC29843f9083a1F4',
    GhoClaimAAVE: '0xA53060d822cB31AFd5B26D899130a14E8Efc5917',
    GhoUnstake: '0x3fD02e65B4fb12381946D03815Ff3FF8Ebe2fC63',

    // LSV action
    LSVWithdraw: '0xB0197CF09cc4c9891B0c2fCbE4AD7323154cA8a5',
    LSVBorrow: '0x7dFB434527Fdb39854156cDBa9bF4799E36E7e82',
    LSVSupply: '0x17a3e39a1aA6d9BA1Ffd80Ae0E388cA064a8D28F',
    LSVPayback: '0x10749CE97583dBcEb54a083386CC8438C4e0FE65',
    LSVSell: '0xE4D93b8d55D7456e85afc0fcF91AC085aF26bbBA',

    // morpho aave v2
    MorphoAaveV2Borrow: '0xa85C3E41Bf9F75a381927e1Aa9b00f77C4631109',
    MorphoAaveV2Payback: '0x5dd0E0835acbb08aa4A4599d70fB2d93969fa7b7',
    MorphoAaveV2Supply: '0x60ED1Cf5Da785AA4FD4A4fF3f8cFc0682d60E0F3',
    MorphoAaveV2Withdraw: '0x29a8b5a8889f465c85b778edccf984e44ad70f12',
    MorphoClaim: '0xa269C841E26EA8Ee1F0350a2E5905F71446998dC',

    // morpho aave v3
    MorphoAaveV3Borrow: '0x487719C57b88477F19423aB0652b3E26b96baA7F',
    MorphoAaveV3Payback: '0x36b8b968c81D97cBfAa642e206b634A6f378d287',
    MorphoAaveV3Supply: '0x51fA8FBc6F0aDEfe2FBA06104FCA39f5beD69291',
    MorphoAaveV3Withdraw: '0xdc3e74C4cD577275296ceFE36A3D082223AfF206',
    MorphoAaveV3SetManager: '0x1082AE0565504E3617BD5b6E80f91B59b81a82D9',

    // spark
    SparkBorrow: '0x3E2C366065bA0f6f9936C2C6A802D72F250b27AA',
    SparkClaimRewards: '0x9C3E31f42a46676785C72401cD4F2287b355b003',
    SparkCollateralSwitch: '0xA859Dff8BCEE9C6daaEF5d0eCCb25219Da4B62b4',
    SparkPayback: '0x3a0F7Ca5cCf15aF19147F71de5fc84DC195f149f',
    SparkSetEMode: '0x2252a83Da69A237686eD9AC07a38DDA74ec7cE5f',
    SparkSpTokenPayback: '0x57403bB33A4829EBf5935D39eD08F19282F61d9c',
    SparkSupply: '0xcb4505a5ED92e405BF1F5cD7C791B15c4564AAe9',
    SparkSwapBorrowRateMode: '0x71B0687C7ec0286dc3cfb715fe97249604aC898f',
    SparkWithdraw: '0x1e3187D89e79B5c411D710E0fdF2709517852600',
    SparkDelegateCredit: '0x0000000000000000000000000000000000000000',
    SparkDelegateWithSig: '0xDaDC0a8B6359487257B91347064534c4B3fAc515',

    // compound
    CompBorrow: '0x8495579BF6Ae848f7E59686536F834f1d2CCd79C',
    CompClaim: '0x81F488cF7A0128A9DB5e7207042cCAB1CB0ac902',
    CompPayback: '0xa2Fa682f44BE40a11d69Eb738CBB91148f0D9742',
    CompSupply: '0xB4CEDe40b249b756Ce0EAa3e14F6af89f25f9a3d',
    CompWithdraw: '0x3792F83D6A82091cb53052458038CC86e206463F',
    CompGetDebt: '0xc2B8f8423bc8Fe2e9A44cA9d364d835D1751b725',
    CompCollateralSwitch: '0xC3d89139508A3883775D3d1E62E2A0fea363b448',

    // flashloan
    FLAaveV2: '0xEA55576383C96A69B3E8beD51Ce0d0294001bc5F',
    FLAaveV3NoFee: '0xd9D8e68717Ce24CCbf162868aaad7E38d81b05d1',
    FLAaveV3CarryDebt: '0x7BdD8ACE8a48B7032Df68B7f53E0D6D9Ea9411A7',
    FLAaveV3: '0x5021d70aB7D757D61E0230c472ff89b8B2B8705e',
    FLDyDx: '0x08AC78B418fCB0DDF1096533856A757C28d430d7',
    FLMaker: '0x0f8C3368cADF78167F5355D746Ed7b2A826A6e3b',
    FLBalancer: '0x93d333930c7f7260a1E6061B0a8C0CbdEC95F367',
    FLSpark: '0xe9Fe5a0f5e4B370Ae60d837da58744666D5C06F7',
    FLAction: '0x5f1dC84Ba060Ea3f7429c6A7bBEdd9243CF1209b',
    FLUniV3: '0x9CAdAC8Be718572F82B672b950c53F0b58483A35',
    FLGho: '0xbb67b81dD080a406227A38965d0393f396ddECBc',
    FLMorphoBlue: '0x6206C96EAc5EAC546861438A9f953B6BEa50EBAB',

    // uniswap
    UniSupply: '0x9935e12F0218E61c27D7f23eAC9A9D6881a078eC',
    UniWithdraw: '0xf8bb8F68b0A45DC315F3f7602a60cfb274B00951',

    // uniswap V3
    UniCollectV3: '0x331D7C3F6E710cB6cFE94c4Aa04AC3345AC00e00',
    UniMintV3: '0x3dF75BE8Fb0a6186BE9705cACaa6dD2a4Ec3e40C',
    UniSupplyV3: '0x0CA4255b37DD083dBD48Ca74d575F46037992520',
    UniWithdrawV3: '0xe06224593D9c860B2fBF39eEA3b9B8A85b77Fbc4',
    UniCreatePoolV3: '0x9058aAbEdEfe652b1d85DBBAB48Dfa78db613C44',

    // dydx
    DyDxWithdraw: '0x827089C5Fc7653655c4080c660Cd8f755F818443',

    // yearn
    YearnSupply: '0x837D6E7F469b3cC820B0a6Da25415D5aE0A861c4',
    YearnWithdraw: '0x563eF9b1075628E62aDc657702517dEA72ca08d6',

    // liquity
    LiquityClose: '0x4B2d174129789a88e92D46342201F207132144b7',
    LiquityBorrow: '0xF978d6C5c8af80a059AdB85EEb64F14C9c436D68',
    LiquityOpen: '0x4EFF392cc69B31Ad159EcfA10305251b2d8E40E0',
    LiquityPayback: '0xe686Fd57D93Ee713Ba974bC5540FF740fb6DB94F',
    LiquityWithdraw: '0x733F53579bEcdd3Ed07e745A55Ee9af8B9669048',
    LiquitySupply: '0xD539943e080C2a29e3f1DB2d45Ea7240d7ddDEE2',
    LiquitySPDeposit: '0x5aB0244a00a733f16E6b238B462bdF3538C698E1',
    LiquitySPWithdraw: '0xa71817957eaF993fAA9a1F4B5c2402c0aeFCd9C6',
    LiquityStake: '0x671280800B540cbF073561d84A297a2c4c5D529F',
    LiquityUnstake: '0x86FDD4A6438D448a794A44ABBe47D57590b3350d',
    LiquityEthGainToTrove: '0x65e19f967B3F3cB6466110aD238039F5423E3177',
    LiquityClaim: '0x526735aDcBe5c9059275c5ED2E0574b4a24b875e',
    LiquityRedeem: '0x20B78854658011394C931EF2BF3cEEA2Fe62E7f0',
    LiquityAdjust: '0x0A398f6B97677192A5d5e7Ea8A937383FFf9304c',

    // liquity v2
    LiquityV2Open: '0x6CEdC0317A9236CdFD800e6a6F41074f01d8229F',
    LiquityV2Close: '0xBD97F8fCfdb03ca29F0C9baCA7Cb09c5A51E4adE',
    LiquityV2Supply: '0x89403Bc80FDb1adbcf4Ea7b6acFB26197E47F2AA',
    LiquityV2Withdraw: '0xDcBd59b7095edC5fd29063873Ec5d62F8BB18E9A',
    LiquityV2Borrow: '0x092afc8AB25C6d5A2cE8CeAc4801fd8B1eFa5759',
    LiquityV2Payback: '0x2B51c21a1af1316Af89f0493b2FF5C5D34D4626f',
    LiquityV2Claim: '0x1b5a0c2573A1692bB183cC5d6f506e108c0599FC',
    LiquityV2Adjust: '0x6063CaD05DBf1c15f643C0F483bc5ce749501d3C',
    LiquityV2AdjustInterestRate: '0x685f0237D8b85B2018278E975a481b0650dE0b54',
    LiquityV2SPDeposit: '0x1556711572a53c89912AE185f3a6Dba9FF365Bf3',
    LiquityV2SPWithdraw: '0x237eaB8D7f9bBeaF8D27dB9797EB835e4062B8C2',
    LiquityV2SPClaimColl: '0x3f783de20C3095bcB999AEA999aF4DF184b6630f',
    LiquityV2AdjustZombieTrove: '0xDaB6aA000B0EBAa653A2715cb3847976bf614272',

    // b.protocol
    BprotocolLiquitySPDeposit: '0x5A0436c7559e37da8cD24B0f66C155a0a2fd6309',
    BprotocolLiquitySPWithdraw: '0x20Ece7CB4463bB1DbA4C4fA800E321A05dfB028B',

    // lido
    LidoStake: '0x4a7dd38D2BcA817fb68165155F869ca4179d8060',
    LidoWrap: '0xE637544390db79EdDE0a9CAF352ED0FfF7451bDB',
    LidoUnwrap: '0x910F73Fb8C0Bd15423c0D0BaD9F1ed95187a48fD',

    // insta
    InstPullTokens: '0xf2c87782D6Eff0511e82007119BAC40e9ba86F69',

    // balancer
    BalancerV2Supply: '0xE48123018Db5e9075841C61EA702cEca51621191',
    BalancerV2Withdraw: '0xbED38692438b90AF738F8A7A3142C217DE8fB069',
    BalancerV2Claim: '0xEac7c5bEFaA6E17f1A2e86947eEd6419c74A7C03',

    // GUni
    GUniWithdraw: '0x6F7cD7C0Dd3634E14bAB91FDF3bCE0a4315b3C59',
    GUniDeposit: '0xb247cD4cab056800cCDa7cE1AFB781a8bFA9b57A',

    // Rari
    RariDeposit: '0x77A05c15f62F1fA6471D466001E21C1B189fcA9F',
    RariWithdraw: '0xa052eD427EFa63B5bb87c409449a47e7C50317e3',

    // mStable
    MStableDeposit: '0xdf24ed1250fbfa274316b50Bc9A009aFA8F61E16',
    MStableWithdraw: '0xa4d5d3e56012C1eD8aba4bE246964962DC3F735f',

    MStableClaim: '0xD56F0EC66267958e08c91547c259cCAC006BF118',

    McdRatioCheck: '0x3f09773e5e945C6Aa1bc8a8B3492f507620DE1e1',
    GasFeeTaker: '0x431F1E1A9859EF99953801dbdeB31d2846ADcc0d',

    CurveStethPoolDeposit: '0x5Ae5870dC0C780e9eb68bE7a223eCd7F3BDad12B',
    CurveStethPoolWithdraw: '0x41313695a4829a80c8019Ec8bCC529Fec08F9099',

    CurveDeposit: '0xf46aCCE6d2559971bF5Aea03A10B3679709CE43d',
    CurveWithdraw: '0x7127A1Cd69eC2A1F91661bc0ED40aD5B73898A54',

    McdBoostComposite: '0x0000000000000000000000000000000000000000',
    McdRepayComposite: '0x0000000000000000000000000000000000000000',

    // Euler
    FLEuler: '0x66DC6444CdC099153f89332e0d4C87af5C966A75',

    TrailingStopTrigger: '0x0000000000000000000000000000000000000000',
    CBRebondTrigger: '0x6Bb48580977e2aBfD6c70B522204EFbe828a9428',
    CBUpdateRebondSub: '0x2709Fd59a27F35997dFf618E3C68ABA1c9e91465',
    LiquityRatioCheck: '0x4AE38243936FAcb0f42993D676b7df1Bb31082d9',

    // Convex
    ConvexDeposit: '0x3Ecc4F1FD5aA09D2E13Ec9ebFdF102063d66F458',
    ConvexWithdraw: '0x2B2c235F9e27A121947c34A39d447bD4C585aA15',
    ConvexClaim: '0xA012afAA97B48894b8FCB2ECC007045Be7a8E8B6',

    // Chicken Bonds
    CBCreate: '0xAB38eCb27aBc1d75cb83725a4c408C22F426A1c1',
    CBRedeem: '0xdD06754cA5367B03af7014AB359332eD82D988d1',
    CBChickenIn: '0x1E990AF6dCf9E9f8a0b2fc76f3BC032A34fFfD14',
    CBChickenOut: '0x3d2f2d88749BB387abD07A2408b68D2Bf2D4be3f',
    CBCreateRebondSub: '0xe4bD188cc2e2787518D6762F22E5afe5A21b30E4',
    FetchBondId: '0xA3331A6aE1BC901b8136E6Fe622890B3Fa3dC80e',
    // CompV3
    CompV3Allow: '0xC4a80f22bf56E0dFa2CB378561B934F41E14bc9f',
    CompV3Borrow: '0xd3e87D6b69d09527624919d6d68868331Ae39Df6',
    CompV3Claim: '0x4CEa369B63daAc0dA3423c5038a57483c5150986',
    CompV3Payback: '0xC825e06333a1d0F72334d2D929Ef4D9eb928D691',
    CompV3Supply: '0xcc073e12fE8d8035389954Bf2BF6C3AAcaDaDC39',
    CompV3Transfer: '0xeD7450e9C17146476137b77198DFfB17857906c4',
    CompV3Withdraw: '0xf1406deC224750CEfA709e4bcA6a3a3f458F0f7B',

    // crvUSD
    CurveUsdBorrow: '0x9D82989715114D35903caf4077BC3e5b5DD70eA7',
    CurveUsdCreate: '0xd44f3984249772fd5a667889e7a478d6beb912c9',
    CurveUsdPayback: '0x3Aa0F8Ff9419Cd5f6e73F3274b8bF86965Cd282c',
    CurveUsdSupply: '0xa55B3CE5ae7E59002f53b2153ABe326823ccCDE2',
    CurveUsdAdjust: '0x6f69A7d0B1BE7602381d9cCE6B29F05B9D0b85e6',
    CurveUsdWithdraw: '0x54B8D984fc79B000D7B6F6E0f52CD054E965120f',
    CurveUsdLevCreate: '0xcbd9aFc2b7532b9eeB3A7EC4ea8Bb4320795d9Ad',
    CurveUsdRepay: '0x6F91E8671d17ecEE3D3fb17DcCA87E86B8D83807',
    CurveUsdSwapper: '0xFA8c594b903651F97b27aCADEa83b720cfD7F80b',
    CurveUsdSwapperTransient: '0xcF0298592b8FCB3823d31Bb257b65afFCAcCb8b6',
    CurveUsdSelfLiquidate: '0xd90d8a4955DfE9D4f45F7f60595313B0925ee1da',
    CurveUsdSelfLiquidateWithColl: '0x7cE305FC2A18c6820a533AD418dC0A549aFeDcAF',
    CurveUsdGetDebt: '0x3Bb41d3f300dA758780fe7696bb4fB93cD7172fB',
    CurveUsdCollRatioTrigger: '0xFCc610809b735BB13E583c5E46595457083D2b0c',
    CurveUsdCollRatioCheck: '0x8c65f37ca216de1625886431249be13ead051388',
    CurveUsdSelfLiquidateWithCollTransient: '0x9c41eA5D82AF27Fd436Cd4Cf525808313B35f0D1',
    CurveUsdLevCreateTransient: '0x798eA3B6E1C6210c6594aD5A1dBDA5b6b3347920',
    CurveUsdRepayTransient: '0xa923a9111377F2f8614E8A1287DbC081e23a29b8',

    MorphoBlueSupply: '0x1D0F6027Eeb118dEc06055735eE840E3Fe3E6f9a',
    MorphoBlueSupplyCollateral: '0x1cdAC5D4b207e8DBd308504BbedD5D1BD19D26ac',
    MorphoBlueWithdraw: '0xE97c7D2838D068C967B7c40080e09A08B9b11fca',
    MorphoBlueWithdrawCollateral: '0xF339F5272E48f9b2c074dcCF7e169259465A4872',
    MorphoBlueBorrow: '0xcc05A3e06DA9Bd2827C7e86a96C63EAda3935AA0',
    MorphoBluePayback: '0x9f437E5F705E02d77adC2e72C34926978776b085',
    MorphoBlueSetAuth: '0xf30935e20c6357c7bcecd5e58ad6de26d54b9f64',
    MorphoBlueSetAuthWithSig: '0xE2d5fCDBf73BAd24A0FCAf6B2733933A98021808',
    MorphoTokenWrap: '0x71b6d268c2Aabcb0dA16CbA4c77e65d9e29b0644',
    MorphoBlueReallocateLiquidity: '0x17cCA8194602020e855CC8Bc11ffA82d8F998A93',

    // llamalend
    LlamaLendCreate: '0x4349be191ea63173eD98b7fC1b0DeC1ef9Bc6c11',
    LlamaLendSupply: '0x1900eF943bD1b038c58d9F35C3825F119F9BB730',
    LlamaLendBorrow: '0xCF693585C47049F3eACc2285E7Fe4e80123b2520',
    LlamaLendWithdraw: '0x5aEb07Ce4A49b7EaE2A1e5281768cFc0C3e1d8F3',
    LlamaLendPayback: '0x07e31d56E47EE6926892dCd928dF26899F58Ac8E',
    LlamaLendSelfLiquidate: '0x46173C379Fbf998E6db0B47F45b73f77C64d3897',
    LlamaLendGetDebt: '0x5625ea9fcd930d5f131b0261ec4dcaf279fea4ed',
    LlamaLendBoost: '0xa21c1ce7318c6d38a10de44c2cd5d80514437d85',
    LlamaLendRepay: '0x57693f72E628A3F7323D31De35Bd158493Aa9CC0',
    LlamaLendLevCreate: '0x534b704a62385cfe5EEB8d9605419743d4fe105E',
    LlamaLendSelfLiquidateWithColl: '0xA99DD1D91141cA63C423DB763dE75078336803B2',

    // eulerV2
    EulerV2Supply: '0xa067787D086841437D112e0C847dDB3e5D95173f',
    EulerV2Withdraw: '0x5bf1a54fe1e65B134E7920e53A5eB0D14b9e6aD1',
    EulerV2Borrow: '0x38d66ecD38b7800D8FD0Bc29489c2306170a9Ede',
    EulerV2Payback: '0x738b1df6b6962D8795Bda5bc5EFCd8b0B8c74d01',
    EulerV2CollateralSwitch: '0x38950b50Fb38aC19D06e8CE5AAE632D6dF1EEb1a',
    EulerV2View: '0x8932E46Ecf96b5Fe033F5e27Ab6dC755Cb668967',

    MerklClaim: '0xE88036F3F0D7e216D63726356cA2bC334e305fe5',

    RenzoStake: '0x17DCF7132E30a0dC3d515C605E7c3D750c61E73c',

    // etherFi
    EtherFiStake: '0xcadB650B6a60C89f7847Cba555A7eeCC220EA2e8',
    EtherFiWrap: '0x086464be5c73f66cfbe6b64ec23aa5a86749ef58',
    EtherFiUnwrap: '0x6Eb09948DDf9332d628d156950b9B1C0c091e8D8',
  },
  [NETWORKS.optimism.chainId]: {
    DFSSell: '0x9f234af5c10c136863a20865ba00b26951ab8269',

    // basic
    WrapEth: '0x6D735db054AC4a1F10f96b99f8550E9eefbC2AC5',
    UnwrapEth: '0x1Fa75B00A05C2EbBd0EDF253a63c209966337A0d',
    SendToken: '0xA9ae6D43C259697384AdAC38bA3c7b76Bff56408',
    SendTokens: '0x19A76c9fe166006FBffEcE6528894AeF9263911c',
    PullToken: '0x392579E020a688068422A925c85f28bFD12a7EBB',
    SumInputs: '0xd19C646Be027a7a04ea4201f116d43659b8b5f65',
    SubInputs: '0x60d00020f12dd202eAfDba84e8F69E165a84c64D',
    ApproveToken: '0x842a81d2cfe26d401CD63Cc14e9DEf275c197C1a',
    SendTokenAndUnwrap: '0xd4f69250cb4d1f083Dd372FEace391A16ABbfBDc',
    ToggleSub: '0xfc19a12e35bb0b5e6a3d3017be9e9022a6486eee',
    TokenBalance: '0xC6FF5b01f7c7b35b6e093fF70D2332B361C5Be5A',
    TokenizedVaultAdapter: '0xdf31669FEd440f5BfF658ca0bBF0D22B8abdeb73',
    ChangeProxyOwner: '0x62769258ea8b3a85cc6fb4332fc2760a122dbc9e',
    PermitToken: '0xE70c05125E7Cfe929f7ccC1baD348004aCF0f0d6',
    HandleAuth: '0x7f143607250ee51e4dce31254c8ad33ec4c2dad5',

    // aave v3
    AaveV3ATokenPayback: '0x71B27114D1777298bD46c3770C42F9f807C49847',
    AaveV3Borrow: '0x8CaDc8A911D19B9e4D36c9bAdE47d970f362BcEa',
    AaveV3CollateralSwitch: '0x20D1388Ffa0A2D6ff6328AD014C67051542ca3a8',
    AaveV3Payback: '0x88eb4050e89FecE4DF940109B0e58daF9B59e551',
    AaveV3SetEMode: '0x7F264737066b9b7D9729Fe9715abB97423D8b35B',
    AaveV3Supply: '0x7e49bdf4690feef64cb341ca46d1e3b45233a683',
    AaveV3SwapBorrowRateMode: '0xB8f0243b492f0e80feF5315Ba8692e7635481845',
    AaveV3Withdraw: '0xf19d045f6cFc04A5Ee5E0e8837b565b9f276e3F7',
    AaveV3ClaimRewards: '0xBE8e8cea67085F869C1C0040fD52F9F3115E962e',
    AaveV3DelegateWithSig: '0x8dd05d32fB05E8c3e8F37294e6f2d13e5823a712',
    AaveV3DelegateCredit: '0x0000000000000000000000000000000000000000',

    // flashloan
    FLAaveV3NoFee: '0xfbcF23D2BeF8A2C491cfa4dD409D8dF12d431c85',
    FLAaveV3: '0x8A07E93d2B74A80D726eE4E4A0aC1F906aB5Cc63',
    FLBalancer: '0x79d6bf536b8DD65909a3174C87eA6395310d5c41',
    FLAction: '0x82d5eDeb005AfFbF381B5949C707a3305160F4A9',

    AaveV3RatioTrigger: '0xB76e3f7694589D0f34ba43b17AD0D15350Ab5f85',
    GasFeeTakerL2: '0xB3dB299622A9DB0E944ccda2Ef899d6fF365B082',
    AaveV3RatioCheck: '0x7A36779a7b5F1128B28932604057d5b63361297c',

    // uniswap V3
    UniCollectV3: '0xad1D55a73D6d8b2218a4aD599c88d9550fb54cd7',
    UniMintV3: '0x7548E3923A9f9e4e182C939CC78FA30050414D12',
    UniSupplyV3: '0x533aDec68Eed581F4a7F202493Eaf4Df77b89EC0',
    UniWithdrawV3: '0xE920235ED2d52EcF6157BBAFedfB5bbbcF7c5825',
    UniCreatePoolV3: '0xAF45d1380d89dB7260DC2684158c5dfA4E147d3e',

    // CompV3
    CompV3Allow: '0xec4937686022c6b83f0d914dde7a465b1108227e',
    CompV3Borrow: '0x2cc1ec3c2b8734b4e57c0415a7641bbaba1d8c21',
    CompV3Claim: '0xAD36437D50DB3C6c225564A4081acb354b55a5D6',
    CompV3Payback: '0xdd15d90f92a4973b4c979e58b9e1eebbb4d1cc26',
    CompV3Supply: '0xf4c3D99c43E1DB968CF92770DaE6d377697b0B81',
    CompV3Transfer: '0x3e5af71709a9e591c5b25422a4419164bb5aba4b',
    CompV3Withdraw: '0x744ad24e92d092e0788d429f5178286672288782',

  },
  [NETWORKS.arbitrum.chainId]: {
    DFSSell: '0x1393eef11454ab068dd5e0d0be5eb922603eef1a',

    // basic
    WrapEth: '0x35136b25bFA7CCC8f5b94E3181a16B61c06980F0',
    UnwrapEth: '0x2B69d494536098700910D167902D1d397dcA2B61',
    SendToken: '0x57E4563D9fA4cbaA174ce7B918ccBb6A3F51665b',
    SendTokens: '0x0b0183ECEcb86CFE89BDd044B8c76382319A1E4f',
    PullToken: '0xD8B3769f74bd9F196C3416a42a91E786948898e6',
    SumInputs: '0xc530f49c11e5946735df8bad41bc6a64d32b56bc',
    SubInputs: '0x8ec14f9568e1d7cf73b68df899808abd7fe6fc8d',
    SendTokenAndUnwrap: '0x009C5B1c7C844Bd662Da3991295b1B3Bd71a430c',
    ApproveToken: '0x01058999F5Ac434EF48DFB5Cd942c57A7661787B',
    ToggleSub: '0x2eabbab99759c2ab6e9e309d42ee07d3bc7c38fe',
    TokenBalance: '0x483B903E702F60698Dd8124558C6199922737f1F',
    TokenizedVaultAdapter: '0xD05C512bDFf6D3eAc5328807B3bC075F35271167',
    ChangeProxyOwner: '0x29F66A5fcB601c806E7156f29FDEC771BdC9c08d',
    PermitToken: '0x2E5E7a691092C158bb8341b936eF24FCcA6c0e00',
    HandleAuth: '0xbfcab1339e1a56a0a836cbca6457eaf71f148fcb',

    // aave v3
    AaveV3ATokenPayback: '0x261906e5E0D0D38D9cBb5c10dB9c4031aabdf8C1',
    AaveV3Borrow: '0x5786809DA660dB613994460F096F19fcd19eD4c9',
    AaveV3CollateralSwitch: '0x7AcdD66C13f87b1cBcE7B106a8C34E426475BADd',
    AaveV3Payback: '0xd88D5356e08dAd84E1576F89f4BF43C79a8BF0b2',
    AaveV3SetEMode: '0x99D5068d9520316e8D3B5136c0B6EA33C5E0c27e',
    AaveV3Supply: '0xA2127f5C7E943c05B6a6A3a541557087F1F1287D',
    AaveV3SwapBorrowRateMode: '0x738042389A8d6B0F6D6ab009c42dfF84ebB737C0',
    AaveV3Withdraw: '0xbf492F869DdB1A18BB4F41b6c3059D9f882Fe7ff',
    AaveV3ClaimRewards: '0x3a4d72Ed2a47a409a82ba61f0fca1C749Ea8aB66',
    AaveV3DelegateWithSig: '0xFF2CE05250d1880f0f45ea8fB453292CABA42F12',

    // CompV3
    CompV3Allow: '0x0380E8e13CdE0499c720999930CaA07A5744887c',
    CompV3Borrow: '0x1C0eCc794fDA7c29aBd19E0b2F7dA166C237d616',
    CompV3Claim: '0xDa135F74a24FE2B23ECc35De227f5d3b000c5AdA',
    CompV3Payback: '0xeA8b80944a70e6C290eb00Ae0298d2953aD3aA0C',
    CompV3Supply: '0x82bf73d2083e69344747fff0d51816059db0113c',
    CompV3Transfer: '0x9EB98fA05E89a598288B0386e66052Ba0d0B9911',
    CompV3Withdraw: '0xb6c2dC95201630cAF7568cBdF434d787CD84dB79',

    // flashloan
    FLAaveV3NoFee: '0x219ac6dA971dE6d943cffD1BD62abde71525d382',
    FLAaveV3: '0x53953aCEe438c083e4299F7976f03Ff3cb862161',
    FLBalancer: '0xdb28fE77709D88badC86868B27937428C3F48E73',
    FLUniV3: '0xab4AA2fcEA33205b44a556f8C48ceC3f21aFf0C3', // @DEV - incorrect, same as FLAction
    FLAction: '0xab4AA2fcEA33205b44a556f8C48ceC3f21aFf0C3',

    GasFeeTakerL2: '0x2F64f73B222B4978CAfd0295c0fa106cE5f34996',
    AaveV3RatioCheck: '0x4a5c2cbCFB921b596Dec049389899CC8Eb4678ED',

    // uniswap V3
    UniCollectV3: '0xd521cbEfE58440d1C31FD0baF41fdfE18D028704',
    UniMintV3: '0x7AC778fB7CaB7D368f37d6E7CE3c293077969331',
    UniSupplyV3: '0x55675C6041A33EE9BDd796Edaa0f098AC7F3534f',
    UniWithdrawV3: '0xa004c22eFd0CD87847DE83Ce9ab92af5382c2efe',
    UniCreatePoolV3: '0x334Ab3C12a4c0315566fd9308880Dad71F838Dc5',

    // llamalend
    LlamaLendCreate: '0xaf14226ad0d782c71d3acf94ad02d6a39c89ec79',
    LlamaLendSupply: '0x8f0814709d6d8b7c4b3021f7cb80e08476bc6959',
    LlamaLendBorrow: '0x4948135f8b3a8f3b51fbd1050f5d0f755accb8e7',
    LlamaLendWithdraw: '0xd7a80e7a2296d75cd1eebc2f0de0cebd14fbe117',
    LlamaLendPayback: '0xB2B93495dA2Fee8F92513fBBfA804564110B63ee',
    LlamaLendSelfLiquidate: '0xe63e836C3ab61481F60A9a56aA72d1D0c55Fc280',
    LlamaLendGetDebt: '0x81c01f08b8fc4487501c88404ed17ebc17764f9c',
    LlamaLendBoost: '0xc52a3af27696f8cf999463f3455e23440a376f8d',
    LlamaLendRepay: '0x320fdfa922ee33c1cc8a042ada855c9dfe9bed06',
    LlamaLendLevCreate: '0xe5cbdcbe494246c21851eea0642ff0791f95cc86',
    LlamaLendSelfLiquidateWithColl: '0xebf090e5e83f4cd63d84db013ac8271761a953cf',
  },
  [NETWORKS.base.chainId]: {
    // Basic
    DFSSell: '0xcd151d2bd3e129a4678f2116a9944b5aea0c860d',
    WrapEth: '0x491cc4AFbE0081C3464DeF1114ba27BE114b2401',
    UnwrapEth: '0xcF91546046F16B3c38b890CC508E280BEffa66b9',
    SendToken: '0x1420f4977E7B71AFddccBFc6F6e1505CefdF99F0',
    SendTokens: '0xEDdD613910D9b055d8F59DE374d4E963a9f98533',
    PullToken: '0x5B0B7E38C2a8e46CfAe13c360BC5927570BeEe94',
    ApproveToken: '0x24cb522be664b2a1ab9d37df7a3bded887566e18',
    SumInputs: '0xC856ef8fe425B2EFe373e0e7038fAFF4a4f764fE',
    SubInputs: '0xd244B1991Fcb8FC0f32FA55bce37714fc5929B95',
    TokenBalance: '0xc44bcE580B1b3339fE9272D3bC3d6566083ea59C',
    ChangeProxyOwner: '0x1947a44d3717a47556175d64fdc208619aa08874',
    PermitToken: '0x57c8ae94a5A11dA33e0518054102488b604628D0',
    HandleAuth: '0x18a90e6db79199ace00140631ef931e0bd97837c',
    ToggleSub: '0x5F16C0a08d52b67fc73706c494F7535Dd3382b58',
    CreateSub: '0xeE739937085A716477BCB5b01b0f74e1BE046645',
    UpdateSub: '0x1601c6ABCDE6e6d8Ad96628AFe20d47908127Aea',
    MerklClaim: '0xa2c6cd875c52bf5c27516fae3b6ba9241790908a',

    GasFeeTakerL2: '0xAEe02caf404332c40Fd7FF8d5c25F91f7c1641d0',

    // Flashloan
    FLAaveV3: '0x79Eb9cEe432Cd3e7b09A9eFdB21A733A6d7b4c3A',
    FLBalancer: '0x862E533198C9656B75bB6A5dDF0953F7ED5E8507',
    FLUniV3: '0x1bA6082D2ef1aB92a55B96264c72Eb8049C964Ce',
    FLAction: '0x5523E61fBEF59825831Ffbb1306aBc3Bb03BB3A4', // fix temp
    FLMorphoBlue: '0x5523E61fBEF59825831Ffbb1306aBc3Bb03BB3A4',

    // AaveV3
    AaveV3Withdraw: '0x1d2Fa7dAcC660A9124c3685EE8a6E699d10409Eb',
    AaveV3SwapBorrowRateMode: '0x9d1D7A0dD5e82cCe9CC131eC0C807B0F543be70e',
    AaveV3Supply: '0x4Df428298a204E4881D95611320b30938CB3facd',
    AaveV3SetEMode: '0xdeF8B05Ce194D50C376233C9C5530027f6180442',
    AaveV3Payback: '0x1A8B4DF4DE4274630A5c5a8E42Fa5F0DdF654ec2',
    AaveV3CollateralSwitch: '0xFdfeA6469c537b19A334726E01621810bc49B929',
    AaveV3ClaimRewards: '0xCeB876C6A4dd76aFe645622db00D4E051D16dA66',
    AaveV3Borrow: '0x8C6eC1A4869e2B307Ee1667e1c18D5776b61CCe3',
    AaveV3ATokenPayback: '0x3D57875885e3cEe9E56Cb65D21789893B6e67815',
    AaveV3View: '0x125b8b832BD7F2EBD77Eef148A6319AdE751C44b',
    AaveV3DelegateWithSig: '0x9e295AFaC75E7843b88a563D119FD953EDf441c2',

    // CompV3
    CompV3Allow: '0x3Fe56B85BBcD759459408Bd8434c37bac93e26bF',
    CompV3Borrow: '0x74346bf868Dc9201922A7F7DD26917F7BF5F0f3b',
    CompV3Claim: '0xD51F6C1c9bE837E5fd93e31214AeCaFde753E90e',
    CompV3Payback: '0x73c627b48cb7c2b319E496fc55535Db6eD2c3445',
    CompV3Supply: '0x94b63bf925C2Ab17F7df6914E110E969cC36A93e',
    CompV3Transfer: '0xdCAF9C6Bccc062Bc1b8704AA37005897FeA257a0',
    CompV3Withdraw: '0x8543133c3827D29b67D2b012101f463c870C1790',

    // MorphoBlue
    MorphoBlueSupply: '0xB4e67A3aF1707567D410f1E18B0CF7DCc38e03BA',
    MorphoBlueSupplyCollateral: '0x57757974d4c4f4a3cfcd054401482672342b26b2',
    MorphoBlueWithdraw: '0xaaccc17d850b48507c2478a9ad628c6f4132ede3',
    MorphoBlueWithdrawCollateral: '0xe1778d05b274fa4193c8ecc50b0c45230f9ba1d3',
    MorphoBlueBorrow: '0x8395eafe5633bcdedbf71893e24d4e86afd55436',
    MorphoBluePayback: '0x245f9c1f8401f28da82afc50e4d242224991c4b3',
    MorphoBlueSetAuth: '0xb565630c6ddd1fae169c453667f5aa52ef4e2e39',
    MorphoBlueSetAuthWithSig: '0x80be65342f6172a6cd0b6a2653e8a887e3f46cab',
    MorphoBlueView: '0xdbcacf59c5063da8b15481f88e7d70e13c92f2a1',
    MorphoBlueReallocateLiquidity: '0x5Ea7F30E40F6A25BE2aD23A6FC1C31A6c95F3dc8',
  },
};

export const otherAddresses = {
  [NETWORKS.ethereum.chainId]: {
    RecipeExecutor: '0x2ee96cf53ae5fbd5309284704f978d0ca66cb963',
    DFSRegistry: '0x287778F121F134C66212FB16c9b53eC991D32f5b',
    DFSProxyRegistry: '0x29474FdaC7142f9aB7773B8e38264FA15E3805ed',
    ProxyRegistry: '0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4',

    McdCdpManager: '0x5ef30b9986345249bc32d8928b7ee64de9435e39',
    BCdpManager: '0x3f30c2381CD8B917Dd96EB2f1A4F96D91324BBed',
    AaveDefaultMarket: '0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5',
    UniswapV3PositionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
    RaiWethUniV2LPToken: '0x8aE720a71622e824F576b4A8C03031066548A3B1',
    BalancerToken: '0xba100000625a3754423978a60c9317c58a424e3D',
    CrvToken: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    CvxToken: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
    DAI: '0x6b175474e89094c44da98b954eedeac495271d0f',
    GHO: '0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f',
    LUSD: '0x5f98805A4E8be255a32880FDeC7F6728C6568bA0',
    BLUSD: '0x76F7774139bf0097d2882C41AF5A37717e3641A7',
    Empty: '0x0000000000000000000000000000000000000000',
  },
  [NETWORKS.optimism.chainId]: {
    RecipeExecutor: '0x993A8c81142044E1CB0Cf0c3d84BEa235d842Fb0',
    DFSRegistry: '0xAf707Ee480204Ed6e2640B53cE86F680D28Afcbd',
    ProxyRegistry: '0x283Cc5C26e53D66ed2Ea252D986F094B37E6e895',

    DSGuardFactory: '0xc19d0F1E2b38AA283E226Ca4044766A43aA7B02b',
    AdminVault: '0x136b1bEAfff362530F98f10E3D8C38f3a3F3d38C',
    DefisaverLogger: '0xFc2f1355296ab7dd98a1260E3Ff5E906999d4Acb',
    Empty: '0x0000000000000000000000000000000000000000',

    UniswapV3PositionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  },
  [NETWORKS.arbitrum.chainId]: {
    RecipeExecutor: '0x7a25174229ea402d8ccd35fc6d55af079c399884',
    DFSRegistry: '0xBF1CaC12DB60819Bfa71A328282ecbc1D40443aA',
    ProxyRegistry: '0x283Cc5C26e53D66ed2Ea252D986F094B37E6e895',

    DSGuardFactory: '0x5261abC3a94a6475D0A1171daE94A5f84fbaEcD2',
    AdminVault: '0xd47D8D97cAd12A866900eEc6Cde1962529F25351',
    DefisaverLogger: '0xE6f9A5C850dbcD12bc64f40d692F537250aDEC38',
    Empty: '0x0000000000000000000000000000000000000000',

    UniswapV3PositionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
  },
  [NETWORKS.base.chainId]: {
    RecipeExecutor: '0x7a87565b77dd65bbc153fe20e97743842f1a6e0c',
    DFSRegistry: '0x347FB634271F666353F23A3362f3935D96F97476',
    ProxyRegistry: '0x425fA97285965E01Cc5F951B62A51F6CDEA5cc0d',

    DSGuardFactory: '0x7783da8958013a57a5514737a4FBDFF06A0056e1',
    AdminVault: '0xD8E67968d8a0df4beCf2D50daE1e34d4d80C701C',
    DefisaverLogger: '0xc9D6EfA6e08B66a5Cdc516Bcd5807c2fa69E0f2A',
    Empty: '0x0000000000000000000000000000000000000000',
  },
};

/**
 *
 * @param name
 * @param chainId
 */
export const getAddr = (name: string, chainId:number = CONFIG.chainId) : EthAddress => {
  const _chainId : number = typeof chainId === 'undefined' ? CONFIG.chainId : chainId;

  const actions = actionAddresses[_chainId];
  const other = otherAddresses[_chainId];

  if (!actions && !other) throw new Error(`Cannot find address for chainId: ${_chainId}.`);
  if (!actions[name as keyof typeof actions] && !other[name as keyof typeof other]) throw new Error(`Cannot find address for name: ${name} (chainId: ${_chainId}).`);

  if (actions[name as keyof typeof actions]) return actions[name as keyof typeof actions]!;
  return other[name as keyof typeof other]!;
};
