const DFSPRoxyRegistyAbi = require('./abis/DFSProxyRegistry.json');
const ProxyRegistryAbi = require('./abis/ProxyRegistry.json');
const ActionAbi = require('./abis/Action.json');
const DsProxyAbi = require('./abis/DsProxy.json');
const Erc20Abi = require('./abis/Erc20.json');
const {getAddr} = require('./addresses');
const Action = require("./Action");
const Recipe = require("./Recipe");

class DfsWeb3 {
  constructor(web3) {
    // const networkId = await web3.eth.net.getId();
    // if (networkId !== 1) throw new Error('Supplied web3 is not on Mainnet');
    this.web3 = web3;
    this.accountReady = false;
    this.prepareAccount();
    if (this.web3.currentProvider.on) {
      this.web3.currentProvider.on('accountsChanged', this.onAccountsChanged);
    }
  }

  async prepareAccount() {
    const accounts = await this.web3.eth.getAccounts();
    if (!accounts || !accounts.length) throw new Error('Supplied web3 has no account');
    this.account = accounts[0];
    const dfsRegistry = new this.web3.eth.Contract(DFSPRoxyRegistyAbi, getAddr('DFSProxyRegistry'));
    const proxies = await dfsRegistry.methods.getAllProxies(this.account).call();
    if (proxies[0] !== '0x0000000000000000000000000000000000000000') {
      this.proxy = proxies[0];
    }
    this.accountReady = true;
  }

  async createSmartWallet() {
    if (!this.accountReady) await this.prepareAccount();
    if (!this.account) throw new Error('DfsWeb3 has not been instantiated properly');
    if (this.proxy) throw new Error('Account already has DsProxy');
    const makerRegistry = new this.web3.eth.Contract(ProxyRegistryAbi, getAddr('ProxyRegistry'));
    return makerRegistry.methods.build();
  }

  /**
   * @param action {(Action|Recipe)}
   */
  async prepareBeforeExecute(action) {
    if (!this.accountReady) await this.prepareAccount();
    if (!this.proxy) throw new Error('Account does not have a Smart Wallet');
    const transactions = [];
    const approvals = await action.getAssetsToApprove();
    await Promise.all(approvals.map(async (a) => {
      if (a.owner.toLowercase() === this.proxy.toLowercase()) {
        const tokenContract = new this.web3.eth.Contract(Erc20Abi, a.asset);
        const allowance = await tokenContract.methods.allowance(this.account, this.proxy).call();
        if (parseFloat(allowance.toString()) === 0) {
          transactions.push(tokenContract.methods.approve(this.proxy, '-1'));
        }
      }
    }));
    return transactions;
  }

  async execute(address, params) {
    if (!this.accountReady) await this.prepareAccount();
    if (!this.proxy) throw new Error('Account does not have a Smart Wallet. Run createSmartWallet first');
    const proxyContract = new this.web3.eth.Contract(DsProxyAbi, this.proxy);
    return proxyContract.methods['execute(address,bytes)'](address, params);
  }

  /**
   * @param action {(Action)}
   */
  async executeAction(action) {
    return this.execute(...action.encodeForDsProxyCall());
  }
  /**
   * @param recipe {(Recipe)}
   */
  async executeRecipe(recipe) {
    return this.execute(...recipe.encodeForDsProxyCall());
  }
}

module.exports = DfsWeb3;
