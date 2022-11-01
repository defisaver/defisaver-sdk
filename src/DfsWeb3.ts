import DFSPRoxyRegistyAbi from './abis/DFSProxyRegistry.json';
import ProxyRegistryAbi from './abis/ProxyRegistry.json';
import ActionAbi from './abis/Action.json';
import DsProxyAbi from './abis/DsProxy.json';
import Erc20Abi from './abis/Erc20.json';
import { getAddr } from './addresses';
import {Action} from "./Action";
import {Recipe} from "./Recipe";
import { CONFIG } from './config';

export class DfsWeb3 {

  web3: any;
  accountReady: boolean;
  account?: any;
  proxy?: any;

  constructor(web3: any) {
    // const networkId = await web3.eth.net.getId();
    // if (networkId !== 1) throw new Error('Supplied web3 is not on Mainnet');
    this.web3 = web3;
    this.accountReady = false;
    this.prepareAccount();
    if (this.web3.currentProvider.on) {
      this.web3.currentProvider.on('accountsChanged', this.onAccountsChanged);
    }
  }

  onAccountsChanged(arg0: string, onAccountsChanged: any) {
    throw new Error('Method not implemented.');
  }

  async prepareAccount() {
    const accounts = await this.web3.eth.getAccounts();
    if (!accounts || !accounts.length) throw new Error('Supplied web3 has no account');
    this.account = accounts[0];
    const dfsRegistry = new this.web3.eth.Contract(DFSPRoxyRegistyAbi, getAddr('DFSProxyRegistry',CONFIG.chainId));
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
    const makerRegistry = new this.web3.eth.Contract(ProxyRegistryAbi, getAddr('ProxyRegistry',CONFIG.chainId));
    return makerRegistry.methods.build();
  }

  /**
   * @param action {(Action|Recipe)}
   */
  async prepareBeforeExecute(action : Action) : Promise<any> {
    if (!this.accountReady) await this.prepareAccount();
    if (!this.proxy) throw new Error('Account does not have a Smart Wallet');
    const transactions : any = [];
    const approvals = await action.getAssetsToApprove();
    await Promise.all(approvals.map(async (a) => {
      if (a.owner.toLowerCase() === this.proxy.toLowerCase()) {
        const tokenContract = new this.web3.eth.Contract(Erc20Abi, a.asset);
        const allowance = await tokenContract.methods.allowance(this.account, this.proxy).call();
        if (parseFloat(allowance.toString()) === 0) {
          transactions.push(tokenContract.methods.approve(this.proxy, '-1'));
        }
      }
    }));
    return transactions;
  }

  async execute(address: string, params: Array<any>) {
    if (!this.accountReady) await this.prepareAccount();
    if (!this.proxy) throw new Error('Account does not have a Smart Wallet. Run createSmartWallet first');
    const proxyContract = new this.web3.eth.Contract(DsProxyAbi, this.proxy);
    return proxyContract.methods['execute(address,bytes)'](address, params);
  }

  /**
   * @param action {(Action)}
   */
  async executeAction(action: Action) : Promise<Action> {
    const encoded =action.encodeForDsProxyCall();
    return this.execute(encoded[0] as string,encoded[1] as string[]);
  }
  /**
   * @param recipe {(Recipe)}
   */
  async executeRecipe(recipe: Recipe) : Promise<Recipe> {
    const encoded =recipe.encodeForDsProxyCall();
    return this.execute(encoded[0] as string,encoded[1] as unknown as string[]);
  }
}