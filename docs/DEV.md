# Developer guide

The SDK models a transaction as an `Action`, or a sequence of actions as a `Recipe`. Action constructors describe contract inputs; the shared classes handle encoding and composition. See the [README](../README.md) for installation and a minimal example.

## Configuration and amounts

Call `configure({ chainId: 1, testingMode: false })` before constructing actions or recipes. Addresses are resolved during construction. Configuration is global, including the token library's network: avoid switching chains while working with existing objects or concurrent operations.

Use decimal strings in token base units: `'1000000'` represents 1 token with 6 decimals, and `'1000000000000000000'` represents 1 token with 18 decimals. Avoid JavaScript numbers for large amounts. Special values such as a maximum amount are action-specific; check the constructor documentation.

Supported networks are exported as `networks`. Use `getAddr(name, chainId)` to look up a deployment; it throws when the chain or named deployment is unavailable. Network support does not imply every action is deployed there.

## Composing a recipe

This example encodes pulling 1 WETH from an owner into the wallet and returning the amount received to that owner. Replace the example owner with your address when integrating it.

```js
const { configure, Recipe, actions } = require('@defisaver/sdk');

async function main() {
  configure({ chainId: 1, testingMode: false });

  const owner = '0x0000000000000000000000000000000000000001';
  const weth = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  const recipe = new Recipe('Pull and return WETH', [
    new actions.basic.PullTokenAction(weth, owner, '1000000000000000000'),
    new actions.basic.SendTokenAction(weth, owner, '$1'),
  ]);

  const approvals = await recipe.getAssetsToApprove();
  const value = await recipe.getEthValue();
  const [target, data] = recipe.encodeForDsProxyCall();
  console.log({ approvals, target, data, value });
}

main().catch(console.error);
```

`'$1'` refers to the first action's return value, with numbering starting at **1**. References must point to an earlier action and be used in an input that supports mapping. A return value's meaning depends on the action; it is not necessarily a token amount. Nested inputs can have a custom mapping order, defined by the action's `mappableArgs`.

`getAssetsToApprove()` describes assets and owners requiring approval. For the ERC-20 example above, the owner approves the executing smart wallet to spend WETH before execution. The returned metadata does not perform approvals or check existing allowances. NFT approvals use different fields; inspect the returned type when supporting them.

For a DSProxy, pass `target` and `data` to its `execute(address,bytes)` method and attach `value` to that transaction. Other wallet integrations must use their appropriate execution path. Do not treat the returned target as a standalone user transaction destination.

A single action also exposes `encodeForDsProxyCall()`, `getAssetsToApprove()`, and `getEthValue()`. `ActionWithL2` supports specialized packed calldata; callers should normally use the public encoding methods rather than pack bytes themselves.

## Strategies

`Strategy` describes reusable automation: add subscription slots with `addSubSlot`, triggers with `addTrigger`, and actions with `addAction`. Strategy inputs can refer to named subscription slots such as `'&vaultId'`, or the special addresses `'&proxy'` and `'&eoa'`. Action return references still use `'$1'`, `'$2'`, and so on.

Strategy encoding is separate from recipe execution. See the [strategy example](../test/Strategy.js) and [implementation](../src/Strategy.ts) for the current API.

## Adding an action

1. Add a class under the relevant [protocol directory](../src/actions), extending `Action` or `ActionWithL2`.
2. Match the contract's action name, ABI types, and argument order in the `super` call. Define `mappableArgs` in the order expected by the contract.
3. Implement approval metadata and ETH value when needed. Implement packed L2 encoding only when the contract supports it.
4. Export the class through the protocol index and add its deployments to [addresses.ts](../src/addresses.ts).
5. Add tests for encoded values, mappings, approvals, and ETH value, including relevant boundary cases. Keep constructor parameter documentation beside the implementation.

[PullTokenAction](../src/actions/basic/PullTokenAction.ts) is a small example. Use existing actions for structure, and the corresponding contract as the source of truth for input semantics.

See the [README](../README.md#testing) for testing commands.
