# DeFi Saver SDK

Build actions and combine them into recipes for DeFi Saver smart wallets.

## Installation

```sh
npm install @defisaver/sdk
```

## Example

Encode a recipe that wraps 0.1 ETH into WETH on Ethereum:

```js
const { configure, Recipe, actions } = require('@defisaver/sdk');

async function main() {
  configure({ chainId: 1, testingMode: false });

  const recipe = new Recipe('Wrap ETH', [
    new actions.basic.WrapEthAction('100000000000000000'),
  ]);

  const [target, data] = recipe.encodeForDsProxyCall();
  const value = await recipe.getEthValue();
  console.log({ target, data, value });
}

main().catch(console.error);
```

Amounts use token base units as decimal strings. Here, `value` is the ETH amount in wei. `target` and `data` are arguments for the smart wallet's `execute(address,bytes)` call; encoding does not submit a transaction.

- [Developer guide](docs/DEV.md): recipes, approvals, configuration, and contributing.
- [Action implementations](src/actions): current constructors and parameter documentation, grouped by protocol.
- [DeFi Saver documentation](https://docs.defisaver.com/): product and protocol guides.

## Testing

From a local checkout, install dependencies with `npm ci`, then run:

```sh
# Run offline tests (no RPC required)
npm run test:unit

# Run all tests, including RPC-dependent wallet tests
npm test

# Run a single test file (test/Recipe.js)
npm run test-single --name=Recipe
```

The full suite requires `RPC` in your environment or a local `.env` file for the wallet tests. Point it at a local or forked test chain.

## Building

```sh
npm run build
```

Builds the package and runs lint with automatic fixes. To check lint without changing files, use `npm run lint-check`.
