[@defisaver/sdk](../README.md) / [Exports](../modules.md) / UniswapV3SupplyAction

# Class: UniswapV3SupplyAction

Supplies a pair of tokens to an existing Uniswap v3 position identified by tokenId

## Hierarchy

- `ActionWithL2`

  ↳ **`UniswapV3SupplyAction`**

## Table of contents

### Constructors

- [constructor](UniswapV3SupplyAction.md#constructor)

### Methods

- [getAssetsToApprove](UniswapV3SupplyAction.md#getassetstoapprove)

## Constructors

### constructor

• **new UniswapV3SupplyAction**(`tokenId`, `amount0Desired`, `amount1Desired`, `amount0Min`, `amount1Min`, `deadline`, `from`, `token0`, `token1`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `string` |
| `amount0Desired` | `string` |
| `amount1Desired` | `string` |
| `amount0Min` | `string` |
| `amount1Min` | `string` |
| `deadline` | `string` |
| `from` | `string` |
| `token0` | `string` |
| `token1` | `string` |

#### Overrides

ActionWithL2.constructor

#### Defined in

[src/actions/uniswapV3/UniswapV3SupplyAction.ts:23](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/uniswapV3/UniswapV3SupplyAction.ts#L23)

## Methods

### getAssetsToApprove

▸ **getAssetsToApprove**(): `Promise`<{ `asset`: `any` ; `owner`: `any` ; `specialApproveLabel`: `string` = 'uniswap v3' }[]\>

#### Returns

`Promise`<{ `asset`: `any` ; `owner`: `any` ; `specialApproveLabel`: `string` = 'uniswap v3' }[]\>

#### Defined in

[src/actions/uniswapV3/UniswapV3SupplyAction.ts:48](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/uniswapV3/UniswapV3SupplyAction.ts#L48)
