# DeFi Saver SDK

Every specific action is a class that has to extend base class [Action](https://github.com/defisaver/defisaver-sdk/blob/master/src/Action.ts) or [ActionWithL2](https://github.com/defisaver/defisaver-sdk/blob/master/src/ActionWithL2.ts)

When using an action in a recipe, you can pipe an output of an action used before it by putting $ and then the number of action which output you want to use (starting from 1, not 0)
e.g.

```js
const recipe = new Recipe('exampleLiquitySupply', [
  // pull 1 WETH from user address
  new dfs.actions.basic.PullToken('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', '0x123..', 1000000000000000000),
  // $1 will use the output of the first action as that argument - in this case, it will be 1 WETH
  new dfs.actions.liquity.LiquitySupplyAction('$1', '0xProxy', 'upperHint', 'lowerHint'),
]);
```
## Action

- ```constructor``` - here you should sanity check arguments, and call ```super(actionName, addressOfAction, types, args)``` where types are used for encoding args
- ```mappableArgs``` - if needed, have to be defined in ```constructor```
- ```getAssetsToApprove``` - if action pulls tokens from the address, this should return an array of tokens that need to be approved (erc20 and/or nfts). [Return type object](https://github.com/defisaver/defisaver-sdk/blob/29aa14835240b977ceb053dfc947faae5d19ff9d/src/Action.ts#L195) is defined here.
- ```getEthValue``` - needed if action is using pure ETH, then value is required when sending a tx
- ```encodeInputs``` - if Action extends ActionWithL2, it can have custom function for gas savings e.g. pack address as 20 bytes instead od 32
- ```encodeForDsProxyCall```
- ```encodeForL2DsProxyCall```
- ```encodeForRecipe```
- ```encodeForL2Recipe```
- ```encodeForStrategy```

## Recipe

- ```constructor(name, actions)``` - name of the recipe is required, actions are optional
- ```addAction``` - add Action to Recipe
- ```getAssetsToApprove``` - returns an array of all unique token approvals from all actions from the recipe
- ```getEthValue``` - sum of values from all actions
- ```encodeForDsProxyCall```

## Addresses

All contract addresses can be found [here](https://github.com/defisaver/defisaver-sdk/blob/master/src/addresses.ts)

## Examples

Examples and tests can be found [here](https://github.com/defisaver/defisaver-sdk/tree/master/test)
