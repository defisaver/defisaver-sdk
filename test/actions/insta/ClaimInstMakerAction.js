const dfs = require('../../../index.js');
const {encodeForDsProxyCall, encodeForRecipe} = require('../../_actionUtils');
const {assert} = require('chai');

describe('Action: ClaimInstMakerAction', () => {
  let action;

  const testAcc = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';
  const merkleProof = [
    '0xadf6648083080d45a44d25d400e399d3cc49189e7b6f497714d3dd0eabfa85f5',
    '0x75498e5089efb5104ee04ebf124d0498ddc9103fbcf231f40c951315e85a8bc6',
    '0x2b94d73cab41590303d19a99dae53ed96975cd945bea914861fa8d9e835ee092',
    '0xce3aeed6316ab0db40b4d286050b8c154c68772a562cd46755f218f7e4ba273a',
    '0x131f93fd7e53c15f7709fb6d1ceff03f9174b47b9567500073fe70c384eeffb1',
    '0xbe8fcca3868516767e82e3ee7024f6d7db4142a3d61580d5c5c3ca83c2e879a4',
    '0xdfdaad234615b6a3301d429cb65ac9355c1ace3d8eb11254ed2205741b713f19',
    '0x3b38004520945b4299cc3767238c1fcbfc80311ffccfe807b8d6018e0a1689f3',
    '0xdafb15b74e2ba8567c06a8f39929d395cb62f21397077d49abfdb9bbbc4503bc',
    '0x01187ca02739e5b2be74b31bdec427cba63e0aed2ec18e76537834350efef60e',
    '0xb603aea54f299c68b184e36174748b3b6dbb7205e4049a1e35a9391cea34f161',
    '0xfa80a2920bb437f7db718d3bc0b1247687d5b2cae710f3dc2b315c6edf734305',
    '0xbc145c0be2d3bf27857248519709740701a787a9c3f685534ac0cac578bfe90c',
];

  context('Stake 1 ETH', () => {
    it('constructor', () => {
      action = new dfs.actions.insta.ClaimInstMakerAction(
        '3570',
        '35152894943847522649',
        '5926144717204641000000',
        merkleProof,
        testAcc,
      );
    })
    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
    it('getAssetsToApprove', async () => {
      const assetOwnerPairs = await action.getAssetsToApprove();
      assert.lengthOf(assetOwnerPairs, 0);
    })
  })


})
