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
type bytes32= string;
type bytes= string;
type uint256 = string;
type uint64 = string;
type uint16 = string;
type uint8 = string;

export { AccessList,AccessListItem, AccessLists, Config, Network,Networks, EthAddress, bytes32,bytes,uint256,uint64,uint16,uint8 };
