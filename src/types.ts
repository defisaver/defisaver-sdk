type AccessListItem = {
  address: string,
  storageKeys: Array<any>,
}

// type AccessList = Array<AccessListItem>;
type AccessList = Array<Array<any>>;

type AccessLists = {
  [key:string]: AccessList,
};

type Config = {
  chainId: number,
  testingMode: boolean,
  [key: string]: any,
};

type Network = {
  chainId: number;
  chainName: string;
  blockExplorerUrls: Array<string>;
  iconUrls: Array<string>;
  rpcUrls: Array<string>;
  nativeCurrency: { name: string; decimals: number; symbol: string };
};

type Networks = {
    ethereum:Network,
    optimism:Network,
    arbitrum:Network,
};

type EthAddress = string;

export { AccessList,AccessListItem, AccessLists, Config, Network,Networks, EthAddress };
