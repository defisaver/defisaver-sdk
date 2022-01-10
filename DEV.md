## Modules

<dl>
<dt><a href="#utils.module_uniswapLP">uniswapLP</a></dt>
<dd></dd>
<dt><a href="#utils.module_uniV3">uniV3</a></dt>
<dd></dd>
<dt><a href="#utils.module_zeroExExchange">zeroExExchange</a></dt>
<dd></dd>
</dl>

## Classes

<dl>
<dt><a href="#Action">Action</a></dt>
<dd><p>Single action that can be executed directly, or combined into a set (ie. supply a vault)</p>
</dd>
<dt><a href="#Recipe">Recipe</a></dt>
<dd><p>Set of Actions to be performed sequentially in a single transaction</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#EthAddress">EthAddress</a> : <code>string</code></dt>
<dd><p>Ethereum address</p>
</dd>
<dt><a href="#VaultId">VaultId</a> : <code>string</code> | <code>number</code></dt>
<dd><p>Maker vault ID</p>
</dd>
<dt><a href="#AccessListItem">AccessListItem</a> : <code>Object</code></dt>
<dd><p>Access list item</p>
</dd>
<dt><a href="#AccessList">AccessList</a> : <code><a href="#AccessListItem">Array.&lt;AccessListItem&gt;</a></code></dt>
<dd></dd>
</dl>

<a name="utils.module_uniswapLP"></a>

## uniswapLP

* [uniswapLP](#utils.module_uniswapLP)
    * [.getPoolAddressByAddresses(tokenA, tokenB)](#utils.module_uniswapLP.getPoolAddressByAddresses) ⇒ [<code>EthAddress</code>](#EthAddress)
    * [.getPoolAddressBySymbols(symbolA, symbolB)](#utils.module_uniswapLP.getPoolAddressBySymbols) ⇒ [<code>EthAddress</code>](#EthAddress)

<a name="utils.module_uniswapLP.getPoolAddressByAddresses"></a>

### uniswapLP.getPoolAddressByAddresses(tokenA, tokenB) ⇒ [<code>EthAddress</code>](#EthAddress)
Computes deterministic LP address.
Source: https://uniswap.org/docs/v2/javascript-SDK/getting-pair-addresses/#typescript

**Kind**: static method of [<code>uniswapLP</code>](#utils.module_uniswapLP)  
**Params**

- tokenA [<code>EthAddress</code>](#EthAddress) - Use WETH for ETH
- tokenB [<code>EthAddress</code>](#EthAddress) - Use WETH for ETH

<a name="utils.module_uniswapLP.getPoolAddressBySymbols"></a>

### uniswapLP.getPoolAddressBySymbols(symbolA, symbolB) ⇒ [<code>EthAddress</code>](#EthAddress)
**Kind**: static method of [<code>uniswapLP</code>](#utils.module_uniswapLP)  
**Params**

- symbolA <code>string</code>
- symbolB <code>string</code>

<a name="utils.module_uniV3"></a>

## uniV3
<a name="utils.module_uniV3.getAssetAddrByTokenId"></a>

### uniV3.getAssetAddrByTokenId(web3, tokenId) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
**Kind**: static method of [<code>uniV3</code>](#utils.module_uniV3)  
**Params**

- web3 <code>Object</code> - Web3 instance
- tokenId <code>string</code>

<a name="utils.module_zeroExExchange"></a>

## zeroExExchange

* [zeroExExchange](#utils.module_zeroExExchange)
    * [.estimateSellPrice(sellAmount, sellToken, buyToken)](#utils.module_zeroExExchange.estimateSellPrice) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.estimateBuyPrice(buyAmount, buyToken, sellToken)](#utils.module_zeroExExchange.estimateBuyPrice) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.createSellAction(sellAmount, sellToken, buyToken, expectedPrice, acceptedSlippagePercent, fromAccount, toAccount)](#utils.module_zeroExExchange.createSellAction) ⇒ <code>Promise.&lt;SellAction&gt;</code>
    * [.createBuyAction(buyAmount, buyToken, sellToken, expectedPrice, acceptedSlippagePercent, fromAccount, toAccount)](#utils.module_zeroExExchange.createBuyAction) ⇒ <code>Promise.&lt;BuyAction&gt;</code>

<a name="utils.module_zeroExExchange.estimateSellPrice"></a>

### zeroExExchange.estimateSellPrice(sellAmount, sellToken, buyToken) ⇒ <code>Promise.&lt;string&gt;</code>
Gets price estimate for selling a specific amount.
Example: getBestExchangePrice('1', 'ETH', 'DAI') - swapping 1 ETH for some DAI

**Kind**: static method of [<code>zeroExExchange</code>](#utils.module_zeroExExchange)  
**Returns**: <code>Promise.&lt;string&gt;</code> - price of sellToken in buyToken  
**Params**

- sellAmount <code>String</code> - amount of sellToken (not in wei)
- sellToken <code>String</code> - Symbol for asset being sold
- buyToken <code>String</code> - Symbol for asset being bought

<a name="utils.module_zeroExExchange.estimateBuyPrice"></a>

### zeroExExchange.estimateBuyPrice(buyAmount, buyToken, sellToken) ⇒ <code>Promise.&lt;string&gt;</code>
Gets price estimate for buying a specific amount.
Example: estimateBuyPrice('1000', 'DAI', 'ETH') - swapping 1000 DAI for some ETH

**Kind**: static method of [<code>zeroExExchange</code>](#utils.module_zeroExExchange)  
**Returns**: <code>Promise.&lt;string&gt;</code> - price of sellToken in buyToken  
**Params**

- buyAmount <code>String</code> - amount of buyToken (not in wei)
- buyToken <code>String</code> - Symbol for asset being bought
- sellToken <code>String</code> - Symbol for asset being sold

<a name="utils.module_zeroExExchange.createSellAction"></a>

### zeroExExchange.createSellAction(sellAmount, sellToken, buyToken, expectedPrice, acceptedSlippagePercent, fromAccount, toAccount) ⇒ <code>Promise.&lt;SellAction&gt;</code>
Fetches prices and creates order ready to be passed to transaction.
This should only be called when before sending tx, not to be used for just querying the price.
For that purpose, the estimateSellPrice method can be used.

**Kind**: static method of [<code>zeroExExchange</code>](#utils.module_zeroExExchange)  
**Params**

- sellAmount <code>string</code> - Amount of asset being sold ('1.5')
- sellToken <code>string</code> - Symbol for asset being sold ('ETH')
- buyToken <code>string</code> - Symbol for asset being bought ('DAI')
- expectedPrice <code>string</code> - Price received from estimatePrice (so minPrice can be calculated based on what user saw)
- acceptedSlippagePercent <code>string</code> | <code>Number</code> - Slippage percentage tolerated [0-100]
- fromAccount [<code>EthAddress</code>](#EthAddress) - Withdraw funds from this addr
- toAccount [<code>EthAddress</code>](#EthAddress) - Send funds to this addr

<a name="utils.module_zeroExExchange.createBuyAction"></a>

### zeroExExchange.createBuyAction(buyAmount, buyToken, sellToken, expectedPrice, acceptedSlippagePercent, fromAccount, toAccount) ⇒ <code>Promise.&lt;BuyAction&gt;</code>
Fetches prices and creates order ready to be passed to transaction.
This should only be called when before sending tx, not to be used for just querying the price.
For that purpose, the estimateBuyPrice method can be used.

**Kind**: static method of [<code>zeroExExchange</code>](#utils.module_zeroExExchange)  
**Params**

- buyAmount <code>string</code> - Amount of asset being bought ('1500.123')
- buyToken <code>string</code> - Symbol for asset being bought ('DAI')
- sellToken <code>string</code> - Symbol for asset being sold ('ETH')
- expectedPrice <code>string</code> - Price received from estimatePrice (so minPrice can be calculated based on what user saw)
- acceptedSlippagePercent <code>string</code> | <code>Number</code> - Slippage percentage tolerated [0-100]
- fromAccount [<code>EthAddress</code>](#EthAddress) - Withdraw funds from this addr
- toAccount [<code>EthAddress</code>](#EthAddress) - Send funds to this addr

<a name="Action"></a>

## Action
Single action that can be executed directly, or combined into a set (ie. supply a vault)

**Kind**: global class  

* [Action](#Action)
    * [new Action(name, contractAddress, paramTypes, args)](#new_Action_new)
    * [.encodeForDsProxyCall()](#Action+encodeForDsProxyCall) ⇒ <code>Array.&lt;string&gt;</code>
    * [.encodeForRecipe()](#Action+encodeForRecipe) ⇒ <code>Array.&lt;string&gt;</code>
    * [.getAssetsToApprove()](#Action+getAssetsToApprove) ⇒ <code>Promise.&lt;Array.&lt;{owner: string, asset: string}&gt;&gt;</code>
    * [.getEthValue()](#Action+getEthValue) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getAccessList()](#Action+getAccessList) ⇒ [<code>AccessList</code>](#AccessList)

<a name="new_Action_new"></a>

### new Action(name, contractAddress, paramTypes, args)
**Params**

- name <code>string</code>
- contractAddress <code>string</code>
- paramTypes <code>Array.&lt;string&gt;</code>
- args <code>Array.&lt;\*&gt;</code>

<a name="Action+encodeForDsProxyCall"></a>

### action.encodeForDsProxyCall() ⇒ <code>Array.&lt;string&gt;</code>
Encode arguments for calling the action via DsProxy

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>Array.&lt;string&gt;</code> - `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`  
<a name="Action+encodeForRecipe"></a>

### action.encodeForRecipe() ⇒ <code>Array.&lt;string&gt;</code>
Encodes action for Recipe call

**Kind**: instance method of [<code>Action</code>](#Action)  
<a name="Action+getAssetsToApprove"></a>

### action.getAssetsToApprove() ⇒ <code>Promise.&lt;Array.&lt;{owner: string, asset: string}&gt;&gt;</code>
Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

**Kind**: instance method of [<code>Action</code>](#Action)  
<a name="Action+getEthValue"></a>

### action.getEthValue() ⇒ <code>Promise.&lt;string&gt;</code>
ETH value to be sent with transaction

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>Promise.&lt;string&gt;</code> - ETH value in wei  
<a name="Action+getAccessList"></a>

### action.getAccessList() ⇒ [<code>AccessList</code>](#AccessList)
Access list for single action

**Kind**: instance method of [<code>Action</code>](#Action)  
<a name="Recipe"></a>

## Recipe
Set of Actions to be performed sequentially in a single transaction

**Kind**: global class  

* [Recipe](#Recipe)
    * [new Recipe(name, actions)](#new_Recipe_new)
    * [.addAction(action)](#Recipe+addAction) ⇒ [<code>Recipe</code>](#Recipe)
    * [.encodeForDsProxyCall()](#Recipe+encodeForDsProxyCall) ⇒ <code>Array.&lt;string&gt;</code>
    * [._validateParamMappings()](#Recipe+_validateParamMappings)
    * [.getAssetsToApprove()](#Recipe+getAssetsToApprove) ⇒ <code>Promise.&lt;Array.&lt;{owner: string, asset: string}&gt;&gt;</code>
    * [.getEthValue()](#Recipe+getEthValue) ⇒ <code>Promise.&lt;string&gt;</code>
    * [.getAccessList()](#Recipe+getAccessList) ⇒ [<code>AccessList</code>](#AccessList)

<a name="new_Recipe_new"></a>

### new Recipe(name, actions)
**Params**

- name <code>string</code>
- actions [<code>Array.&lt;Action&gt;</code>](#Action)

<a name="Recipe+addAction"></a>

### recipe.addAction(action) ⇒ [<code>Recipe</code>](#Recipe)
**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
**Params**

- action [<code>Action</code>](#Action)

<a name="Recipe+encodeForDsProxyCall"></a>

### recipe.encodeForDsProxyCall() ⇒ <code>Array.&lt;string&gt;</code>
Encode arguments for calling the action set via DsProxy

**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
**Returns**: <code>Array.&lt;string&gt;</code> - `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`  
<a name="Recipe+_validateParamMappings"></a>

### recipe.\_validateParamMappings()
Logs parameter mapping in verbose format for validation. Used for testing in development.

**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
<a name="Recipe+getAssetsToApprove"></a>

### recipe.getAssetsToApprove() ⇒ <code>Promise.&lt;Array.&lt;{owner: string, asset: string}&gt;&gt;</code>
Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
<a name="Recipe+getEthValue"></a>

### recipe.getEthValue() ⇒ <code>Promise.&lt;string&gt;</code>
ETH value to be sent with transaction

**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
**Returns**: <code>Promise.&lt;string&gt;</code> - ETH value in wei  
<a name="Recipe+getAccessList"></a>

### recipe.getAccessList() ⇒ [<code>AccessList</code>](#AccessList)
Generates an access list for the recipe

**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
<a name="EthAddress"></a>

## EthAddress : <code>string</code>
Ethereum address

**Kind**: global typedef  
<a name="VaultId"></a>

## VaultId : <code>string</code> \| <code>number</code>
Maker vault ID

**Kind**: global typedef  
<a name="AccessListItem"></a>

## AccessListItem : <code>Object</code>
Access list item

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| address | <code>string</code> | 
| storageKeys | <code>Array.&lt;string&gt;</code> | 

<a name="AccessList"></a>

## AccessList : [<code>Array.&lt;AccessListItem&gt;</code>](#AccessListItem)
**Kind**: global typedef  
