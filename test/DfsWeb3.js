require('dotenv').config();
const {assert} = require('chai');
const Web3 = require('web3');
const dfs = require('../src');
const {getIlkInfo, assetAmountInWei} = require("@defisaver/tokens");

describe('DfsWeb3', () => {
  let dfsWeb3;
  before(async () => {
    const web3 = new Web3(process.env.RPC);

    web3.eth.getAccounts = () => ['0x0a80C3C540eEF99811f4579fa7b1A0617294e06f'];
    dfsWeb3 = new dfs.DfsWeb3(web3);
    dfsWeb3.account = '0x0a80C3C540eEF99811f4579fa7b1A0617294e06f';

    await dfsWeb3.prepareAccount();
    assert.containsAllKeys(dfsWeb3, ['web3', 'account', 'proxy']);
  })

  it('Encodes Action', async () => {
    const a = new dfs.actions.maker.MakerOpenVaultAction(getIlkInfo('ETH-A').join);
    const approvals = await dfsWeb3.prepareBeforeExecute(a);
    for (const approval of approvals) {
      await approval.send({
        from: dfsWeb3.account,
        value: await a.getEthValue(),
        gasPrice: '1',
        gas: '9000000',
      })
    }
    const exec = await dfsWeb3.executeAction(a);
    // await exec.send({
    //   from: dfsWeb3.account,
    //   value: await a.getEthValue(),
    //   gasPrice: '1',
    //   gas: '9000000',
    // });
  })

  it('Encodes Recipe', async () => {
    const r = new dfs.Recipe(
      'Open a Vault',
      [
        new dfs.actions.maker.MakerOpenVaultAction(getIlkInfo('ETH-A').join),
        new dfs.actions.maker.MakerSupplyAction('$1', assetAmountInWei(1, 'ETH'), getIlkInfo('ETH-A').join, dfsWeb3.account),
      ],
    );
    const approvals = await dfsWeb3.prepareBeforeExecute(r);
    for (const approval of approvals) {
      await approval.send({
        from: dfsWeb3.account,
        value: await r.getEthValue(),
        gasPrice: '1',
        gas: '9000000',
      })
    }
    const exec = await dfsWeb3.executeRecipe(r);
    // await exec.send({
    //   from: dfsWeb3.account,
    //   value: await r.getEthValue(),
    //   gasPrice: '1',
    //   gas: '9000000',
    // });
  })
})
