type AccessList = Array<Array<any>>;

type AccessLists = {
  [key:string]: AccessList,
};

type Config = {
  [key: string]: boolean | number,
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

export { AccessList, AccessLists, Config, Network,Networks };
