const dfs = require('../../../index.js');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {getAssetInfo, assetAmountInWei, assetAmountInEth} = require("@defisaver/tokens");
const {assert} = require('chai');

describe('Action: BalancerV2SupplyAction', () => {
  let action;

  context('Leave BAL tokens on EOA liquidity provider', () => {
    it('constructor', () => {
      action = new dfs.actions.balancer.BalancerV2ClaimAction(
        '0x7eb510a2d3316dd2cdca937a95ec81cdf140a98d',
        '0x7eb510a2d3316dd2cdca937a95ec81cdf140a98d',
        ['40', '41'],
        ['7206527418624000000', '4956940391238000000'],
        [[
            '0xa1686f1a9dd80ffd016fe4aa5c6b2f256d4af0fb14f1bd064606d7a8e9bd97d6',
            '0xa3739bc09c73d8d9b977cbe2f4e8a686086ce43fab641358b2d371ecfa850a36',
            '0x744edca176c1345418ee7b5ab14fc2c8b89e751662864995f3a6454d98a4a12f',
            '0x22b38144f4bbef7d055dc5ff145f4c8f3837a41aa1c64c0793ba769d16d0d0a5',
            '0x48060bab54ce5e9a1eaeeba0df025b28bc4de4f4a6039147be16bcbf500f6c08',
            '0x7f0ed0663ef5be3f1d204832fe961578d243e8176f9e15271c558f3fbc898791',
            '0x2a01cb4d0689ad424571af14871bdf20fedc0ba5bfa2e50abe8bd330a4f44e41',
            '0xa2f3af06d6cf1a2a222afd7ea88ad0d6da210e9873d64a9f3f94afbd25eebc4f',
            '0xf1d72f1757982c6d58a197f970e4f6bae51833125c0dd1900a2c78af68db89d0',
            '0xd8fc9a69bad0d5e239be5f26d51ab33227dd793294cbcb80a90d34299076c52b',
            '0x308214941e3379b390f8e9766c1abfef885d1a1cd7541dc7e3c2772a5a98b328',
            '0x950b1e6196ba2b5587ed2509ee854230438a895fd332a1ceac8c116f7344fad2',
        ], [
            '0x1206e502394066162f473b6564e23933cd60984bc6dcb4d5c57f399a508ccffb',
            '0x0545d89ae208f0f4254debf26528bdd48ba210c14beff4272a06bf30e8650e73',
            '0x65df5743c79831186f6408894d414864daeabb763cb850a4b056adfd4b8973fe',
            '0xaba7cd047c1e2382a2c867bd10a190ab06d8ed9d88e14dc44f2dac93b61230e2',
            '0x20b752cf4a881642078d1dc55177ea43f80eb2852bbf75d11bb5d077b7dcd68b',
            '0x7997e5e1c2901a0bc344bbee9fae1b74d6326b10ac8687ac1854821a283be8c5',
            '0xacfcfafd23e286a2a75a6ecea65a29b2f099d0bf06c730c3c5f93a5936b160a0',
            '0x8bb6ed30028213403c71ecaa946e1bafb0f6036383904f1e772a7f7856f9b12b',
            '0x404a8fb6a5797aede2647ff9b26be857f088575f363f27308ee94f01f871851b',
            '0x4fa44ce94b1bff7d4dc98657b97a3169c2c936fd6d6816dcfe6bf5d4fdc28247',
            '0xd9bdc288545f8f7b4d201fb70b58817a91292c7d69a3c848fd19aad7278cd2f0',
            '0xfc2a36ece494c459bc02e38c3590876eb35219d0521087fd99c70de08c286117',
        ]],
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
        const assetOwnerPairs = await action.getAssetsToApprove();
        assert.lengthOf(assetOwnerPairs, 0);
    })
    it('test mappable args', async () => {
        assert.lengthOf(action.mappableArgs, 2);
    })
  })
  context('Send BAL tokens to another account', () => {
    it('constructor', () => {
      action = new dfs.actions.balancer.BalancerV2ClaimAction(
        '0x7eb510a2d3316dd2cdca937a95ec81cdf140a98d',
        '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f',
        ['40', '41'],
        ['7206527418624000000', '4956940391238000000'],
        [[
            '0xa1686f1a9dd80ffd016fe4aa5c6b2f256d4af0fb14f1bd064606d7a8e9bd97d6',
            '0xa3739bc09c73d8d9b977cbe2f4e8a686086ce43fab641358b2d371ecfa850a36',
            '0x744edca176c1345418ee7b5ab14fc2c8b89e751662864995f3a6454d98a4a12f',
            '0x22b38144f4bbef7d055dc5ff145f4c8f3837a41aa1c64c0793ba769d16d0d0a5',
            '0x48060bab54ce5e9a1eaeeba0df025b28bc4de4f4a6039147be16bcbf500f6c08',
            '0x7f0ed0663ef5be3f1d204832fe961578d243e8176f9e15271c558f3fbc898791',
            '0x2a01cb4d0689ad424571af14871bdf20fedc0ba5bfa2e50abe8bd330a4f44e41',
            '0xa2f3af06d6cf1a2a222afd7ea88ad0d6da210e9873d64a9f3f94afbd25eebc4f',
            '0xf1d72f1757982c6d58a197f970e4f6bae51833125c0dd1900a2c78af68db89d0',
            '0xd8fc9a69bad0d5e239be5f26d51ab33227dd793294cbcb80a90d34299076c52b',
            '0x308214941e3379b390f8e9766c1abfef885d1a1cd7541dc7e3c2772a5a98b328',
            '0x950b1e6196ba2b5587ed2509ee854230438a895fd332a1ceac8c116f7344fad2',
        ], [
            '0x1206e502394066162f473b6564e23933cd60984bc6dcb4d5c57f399a508ccffb',
            '0x0545d89ae208f0f4254debf26528bdd48ba210c14beff4272a06bf30e8650e73',
            '0x65df5743c79831186f6408894d414864daeabb763cb850a4b056adfd4b8973fe',
            '0xaba7cd047c1e2382a2c867bd10a190ab06d8ed9d88e14dc44f2dac93b61230e2',
            '0x20b752cf4a881642078d1dc55177ea43f80eb2852bbf75d11bb5d077b7dcd68b',
            '0x7997e5e1c2901a0bc344bbee9fae1b74d6326b10ac8687ac1854821a283be8c5',
            '0xacfcfafd23e286a2a75a6ecea65a29b2f099d0bf06c730c3c5f93a5936b160a0',
            '0x8bb6ed30028213403c71ecaa946e1bafb0f6036383904f1e772a7f7856f9b12b',
            '0x404a8fb6a5797aede2647ff9b26be857f088575f363f27308ee94f01f871851b',
            '0x4fa44ce94b1bff7d4dc98657b97a3169c2c936fd6d6816dcfe6bf5d4fdc28247',
            '0xd9bdc288545f8f7b4d201fb70b58817a91292c7d69a3c848fd19aad7278cd2f0',
            '0xfc2a36ece494c459bc02e38c3590876eb35219d0521087fd99c70de08c286117',
        ]],
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
        const assetOwnerPairs = await action.getAssetsToApprove();
        assert.lengthOf(assetOwnerPairs, 1);
    })
    it('test mappable args', async () => {
        assert.lengthOf(action.mappableArgs, 2);
    })
  })
})
