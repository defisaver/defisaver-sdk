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
</dl>

<a name="Action"></a>

## Action
Single action that can be executed directly, or combined into a set (ie. supply a vault)

**Kind**: global class  

* [Action](#Action)
    * [new Action(name, contractAddress, paramTypes, args)](#new_Action_new)
    * [.encodeForCall()](#Action+encodeForCall) ⇒ <code>Array.&lt;Array.&lt;String&gt;&gt;</code>
    * [.encodeForDsProxyCall()](#Action+encodeForDsProxyCall) ⇒ <code>Array.&lt;String&gt;</code>
    * [.encodeForRecipe()](#Action+encodeForRecipe) ⇒ <code>Array.&lt;String&gt;</code>
    * [.getAssetsToApprove()](#Action+getAssetsToApprove) ⇒ <code>Promise.&lt;Array.&lt;{owner: string, asset: string}&gt;&gt;</code>
    * [.getEthValue()](#Action+getEthValue) ⇒ <code>Promise.&lt;String&gt;</code>

<a name="new_Action_new"></a>

### new Action(name, contractAddress, paramTypes, args)
**Params**

- name <code>String</code>
- contractAddress <code>String</code>
- paramTypes <code>Array.&lt;String&gt;</code>
- args <code>Array.&lt;\*&gt;</code>

<a name="Action+encodeForCall"></a>

### action.encodeForCall() ⇒ <code>Array.&lt;Array.&lt;String&gt;&gt;</code>
Encode arguments for calling the action directly

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>Array.&lt;Array.&lt;String&gt;&gt;</code> - bytes-encoded args  
<a name="Action+encodeForDsProxyCall"></a>

### action.encodeForDsProxyCall() ⇒ <code>Array.&lt;String&gt;</code>
Encode arguments for calling the action via DsProxy

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>Array.&lt;String&gt;</code> - `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`  
<a name="Action+encodeForRecipe"></a>

### action.encodeForRecipe() ⇒ <code>Array.&lt;String&gt;</code>
Encodes action for Recipe call

**Kind**: instance method of [<code>Action</code>](#Action)  
<a name="Action+getAssetsToApprove"></a>

### action.getAssetsToApprove() ⇒ <code>Promise.&lt;Array.&lt;{owner: string, asset: string}&gt;&gt;</code>
Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

**Kind**: instance method of [<code>Action</code>](#Action)  
<a name="Action+getEthValue"></a>

### action.getEthValue() ⇒ <code>Promise.&lt;String&gt;</code>
ETH value to be sent with transaction

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>Promise.&lt;String&gt;</code> - ETH value in wei  
<a name="Recipe"></a>

## Recipe
Set of Actions to be performed sequentially in a single transaction

**Kind**: global class  

* [Recipe](#Recipe)
    * [new Recipe(name, actions)](#new_Recipe_new)
    * [.addAction(action)](#Recipe+addAction) ⇒ [<code>Recipe</code>](#Recipe)
    * [.encodeForCall()](#Recipe+encodeForCall) ⇒ <code>Array.&lt;(String\|Array.&lt;\*&gt;)&gt;</code>
    * [.encodeForDsProxyCall()](#Recipe+encodeForDsProxyCall) ⇒ <code>Array.&lt;String&gt;</code>
    * [._validateParamMappings()](#Recipe+_validateParamMappings)
    * [.getAssetsToApprove()](#Recipe+getAssetsToApprove) ⇒ <code>Promise.&lt;Array.&lt;{owner: string, asset: string}&gt;&gt;</code>
    * [.getEthValue()](#Recipe+getEthValue) ⇒ <code>Promise.&lt;String&gt;</code>

<a name="new_Recipe_new"></a>

### new Recipe(name, actions)
**Params**

- name <code>String</code>
- actions [<code>Array.&lt;Action&gt;</code>](#Action)

<a name="Recipe+addAction"></a>

### recipe.addAction(action) ⇒ [<code>Recipe</code>](#Recipe)
**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
**Params**

- action [<code>Action</code>](#Action)

<a name="Recipe+encodeForCall"></a>

### recipe.encodeForCall() ⇒ <code>Array.&lt;(String\|Array.&lt;\*&gt;)&gt;</code>
Encode arguments for calling the action set directly
You most likely don't want to use this directly.
Instead, you probably want to use `encodeForDsProxyCall`

**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
<a name="Recipe+encodeForDsProxyCall"></a>

### recipe.encodeForDsProxyCall() ⇒ <code>Array.&lt;String&gt;</code>
Encode arguments for calling the action set via DsProxy

**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
**Returns**: <code>Array.&lt;String&gt;</code> - `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`  
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

### recipe.getEthValue() ⇒ <code>Promise.&lt;String&gt;</code>
ETH value to be sent with transaction

**Kind**: instance method of [<code>Recipe</code>](#Recipe)  
**Returns**: <code>Promise.&lt;String&gt;</code> - ETH value in wei  
<a name="EthAddress"></a>

## EthAddress : <code>string</code>
Ethereum address

**Kind**: global typedef  
<a name="VaultId"></a>

## VaultId : <code>string</code> \| <code>number</code>
Maker vault ID

**Kind**: global typedef  
