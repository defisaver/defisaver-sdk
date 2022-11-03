[@defisaver/sdk](../README.md) / [Exports](../modules.md) / DfsWeb3

# Class: DfsWeb3

## Table of contents

### Constructors

- [constructor](DfsWeb3.md#constructor)

### Properties

- [account](DfsWeb3.md#account)
- [accountReady](DfsWeb3.md#accountready)
- [proxy](DfsWeb3.md#proxy)
- [web3](DfsWeb3.md#web3)

### Methods

- [createSmartWallet](DfsWeb3.md#createsmartwallet)
- [execute](DfsWeb3.md#execute)
- [executeAction](DfsWeb3.md#executeaction)
- [executeRecipe](DfsWeb3.md#executerecipe)
- [onAccountsChanged](DfsWeb3.md#onaccountschanged)
- [prepareAccount](DfsWeb3.md#prepareaccount)
- [prepareBeforeExecute](DfsWeb3.md#preparebeforeexecute)

## Constructors

### constructor

• **new DfsWeb3**(`web3`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `web3` | `any` |

#### Defined in

[src/DfsWeb3.ts:22](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L22)

## Properties

### account

• `Optional` **account**: `any`

#### Defined in

[src/DfsWeb3.ts:19](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L19)

___

### accountReady

• **accountReady**: `boolean`

#### Defined in

[src/DfsWeb3.ts:18](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L18)

___

### proxy

• `Optional` **proxy**: `any`

#### Defined in

[src/DfsWeb3.ts:20](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L20)

___

### web3

• **web3**: `any`

#### Defined in

[src/DfsWeb3.ts:17](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L17)

## Methods

### createSmartWallet

▸ **createSmartWallet**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/DfsWeb3.ts:49](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L49)

___

### execute

▸ **execute**(`address`, `params`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `params` | `any`[] |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/DfsWeb3.ts:77](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L77)

___

### executeAction

▸ **executeAction**(`action`): `Promise`<[`Action`](Action.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`Action`](Action.md) | {(Action)} |

#### Returns

`Promise`<[`Action`](Action.md)\>

#### Defined in

[src/DfsWeb3.ts:87](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L87)

___

### executeRecipe

▸ **executeRecipe**(`recipe`): `Promise`<[`Recipe`](Recipe.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipe` | [`Recipe`](Recipe.md) | {(Recipe)} |

#### Returns

`Promise`<[`Recipe`](Recipe.md)\>

#### Defined in

[src/DfsWeb3.ts:94](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L94)

___

### onAccountsChanged

▸ **onAccountsChanged**(`arg0`, `onAccountsChanged`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `onAccountsChanged` | `any` |

#### Returns

`void`

#### Defined in

[src/DfsWeb3.ts:33](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L33)

___

### prepareAccount

▸ **prepareAccount**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/DfsWeb3.ts:37](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L37)

___

### prepareBeforeExecute

▸ **prepareBeforeExecute**(`action`): `Promise`<`any`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`Action`](Action.md) | {(Action\|Recipe)} |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/DfsWeb3.ts:60](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/DfsWeb3.ts#L60)
