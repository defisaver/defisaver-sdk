## Classes

<dl>
<dt><a href="#AaveBorrowAction">AaveBorrowAction</a></dt>
<dd><p>AaveBorrowAction - Borrow tokens from Aave</p>
</dd>
<dt><a href="#AaveMigrateLendAction">AaveMigrateLendAction</a></dt>
<dd><p>AaveMigrateLendAction - Migrates Lend to Aave</p>
</dd>
<dt><a href="#AavePaybackAction">AavePaybackAction</a></dt>
<dd><p>AavePaybackAction - Payback borrowed tokens from Aave</p>
</dd>
<dt><a href="#AaveSupplyAction">AaveSupplyAction</a></dt>
<dd><p>AaveSupplyAction - Supply token to an aave position</p>
</dd>
<dt><a href="#AaveWithdrawAction">AaveWithdrawAction</a></dt>
<dd><p>AaveWithdrawAction - Withdraw token from an aave position</p>
</dd>
<dt><a href="#AaveV1PaybackAction">AaveV1PaybackAction</a></dt>
<dd><p>AavePaybackActionV1 - Pay back borrowed tokens from AaveV1</p>
</dd>
<dt><a href="#AaveV1WithdrawAction">AaveV1WithdrawAction</a></dt>
<dd><p>AaveWithdrawActionV1 - Withdraw token from an aaveV1 position</p>
</dd>
<dt><a href="#BuyAction">BuyAction</a></dt>
<dd><p>Buys an exact amount of dest token on DeFi Saver exchange aggregator</p>
</dd>
<dt><a href="#SellAction">SellAction</a></dt>
<dd><p>Sells token on DeFi Saver exchange aggregator</p>
</dd>
<dt><a href="#SendTokenAction">SendTokenAction</a></dt>
<dd><p>Transfers specified token to specified address</p>
</dd>
<dt><a href="#CompoundBorrowAction">CompoundBorrowAction</a></dt>
<dd><p>CompoundBorrowAction - Borrow tokens from Compound</p>
</dd>
<dt><a href="#CompoundClaimAction">CompoundClaimAction</a></dt>
<dd><p>CompoundClaimAction - Claims Comp tokens for the specified address</p>
</dd>
<dt><a href="#CompoundPaybackAction">CompoundPaybackAction</a></dt>
<dd><p>CompoundPaybackAction - Payback borrowed tokens from Compound</p>
</dd>
<dt><a href="#CompoundSupplyAction">CompoundSupplyAction</a></dt>
<dd><p>CompoundSupplyAction - Supply token to an Compound position</p>
</dd>
<dt><a href="#CompoundWithdrawAction">CompoundWithdrawAction</a></dt>
<dd><p>CompoundWithdrawAction - Withdraw token from an Compound position</p>
</dd>
<dt><a href="#AaveCustomFlashLoanV2Action">AaveCustomFlashLoanV2Action</a></dt>
<dd><p>AaveCustomFlashLoanV2Action - Gets a flashloan from Aave v2</p>
</dd>
<dt><a href="#AaveFlashLoanAction">AaveFlashLoanAction</a></dt>
<dd><p>Gets a flashloan from Aave v1</p>
</dd>
<dt><a href="#AaveFlashLoanPaybackAction">AaveFlashLoanPaybackAction</a></dt>
<dd><p>Pays back a flashloan from Aave v1</p>
</dd>
<dt><a href="#AaveV2FlashLoanAction">AaveV2FlashLoanAction</a></dt>
<dd><p>Gets a flashloan from Aave v2</p>
</dd>
<dt><a href="#AaveV2FlashLoanPaybackAction">AaveV2FlashLoanPaybackAction</a></dt>
<dd><p>Pays back a single flashloan from Aave v2</p>
</dd>
<dt><a href="#DyDxFlashLoanAction">DyDxFlashLoanAction</a></dt>
<dd><p>Gets a flashloan from DyDx</p>
</dd>
<dt><a href="#DyDxFlashLoanPaybackAction">DyDxFlashLoanPaybackAction</a></dt>
<dd><p>Pays back a flashloan from DyDx</p>
</dd>
<dt><a href="#MakerGenerateAction">MakerGenerateAction</a></dt>
<dd><p>MakerGenerateAction - Generated Dai from a Vault</p>
</dd>
<dt><a href="#MakerGiveAction">MakerGiveAction</a></dt>
<dd><p>MakerGiveAction - gives a vault to a selected address</p>
</dd>
<dt><a href="#MakerMergeAction">MakerMergeAction</a></dt>
<dd><p>MakerMergeAction - merged two vaults of the same type</p>
</dd>
<dt><a href="#MakerOpenVaultAction">MakerOpenVaultAction</a></dt>
<dd><p>MakerOpenVaultAction</p>
</dd>
<dt><a href="#MakerPaybackAction">MakerPaybackAction</a></dt>
<dd><p>MakerPaybackAction - Payback dai to a Vault</p>
</dd>
<dt><a href="#MakerSupplyAction">MakerSupplyAction</a></dt>
<dd><p>MakerSupplyAction - Supply token to a Vault</p>
</dd>
<dt><a href="#MakerWithdrawAction">MakerWithdrawAction</a></dt>
<dd><p>MakerWithdrawAction - Withdraw token from a Vault</p>
</dd>
<dt><a href="#UniswapSupplyAction">UniswapSupplyAction</a></dt>
<dd><p>Supplies a pair tokens to uniswap pool</p>
</dd>
<dt><a href="#UniswapWithdrawAction">UniswapWithdrawAction</a></dt>
<dd><p>Withdraws liquidity from uniswap pool</p>
</dd>
</dl>

<a name="AaveBorrowAction"></a>

## AaveBorrowAction
AaveBorrowAction - Borrow tokens from Aave

**Kind**: global class  
<a name="new_AaveBorrowAction_new"></a>

### new AaveBorrowAction(market, tokenAddr, amount, rateMode, to, onBehalf)
**Params**

- market <code>EthAddress</code>
- tokenAddr <code>EthAddress</code>
- amount <code>string</code>
- rateMode <code>number</code> - Borrow rate mode: Stable: 1, Variable: 2
- to <code>EthAddress</code> - Borrowed tokens will be sent to this address
- onBehalf <code>EthAddress</code>

<a name="AaveMigrateLendAction"></a>

## AaveMigrateLendAction
AaveMigrateLendAction - Migrates Lend to Aave

**Kind**: global class  
<a name="new_AaveMigrateLendAction_new"></a>

### new AaveMigrateLendAction(lendAmount, from, to)
**Params**

- lendAmount <code>string</code>
- from <code>EthAddress</code>
- to <code>EthAddress</code>

<a name="AavePaybackAction"></a>

## AavePaybackAction
AavePaybackAction - Payback borrowed tokens from Aave

**Kind**: global class  
<a name="new_AavePaybackAction_new"></a>

### new AavePaybackAction(market, tokenAddr, amount, rateMode, from, onBehalf)
**Params**

- market <code>EthAddress</code>
- tokenAddr <code>EthAddress</code>
- amount <code>string</code>
- rateMode <code>number</code> - Borrow rate mode: Stable: 1, Variable: 2
- from <code>EthAddress</code> - Tokens will be sent from this address
- onBehalf <code>EthAddress</code>

<a name="AaveSupplyAction"></a>

## AaveSupplyAction
AaveSupplyAction - Supply token to an aave position

**Kind**: global class  
<a name="new_AaveSupplyAction_new"></a>

### new AaveSupplyAction(market, tokenAddr, amount, from, onBehalf)
**Params**

- market <code>EthAddress</code>
- tokenAddr <code>EthAddress</code>
- amount <code>string</code>
- from <code>EthAddress</code> - Tokens will be supplied from this address
- onBehalf <code>EthAddress</code> - Tokens will be supplied to this address' position (defaults to sender's proxy)

<a name="AaveWithdrawAction"></a>

## AaveWithdrawAction
AaveWithdrawAction - Withdraw token from an aave position

**Kind**: global class  
<a name="new_AaveWithdrawAction_new"></a>

### new AaveWithdrawAction(market, tokenAddr, amount, to)
**Params**

- market <code>EthAddress</code>
- tokenAddr <code>EthAddress</code>
- amount <code>string</code>
- to <code>EthAddress</code> - Tokens will be withdrawn to this address

<a name="AaveV1PaybackAction"></a>

## AaveV1PaybackAction
AavePaybackActionV1 - Pay back borrowed tokens from AaveV1

**Kind**: global class  
<a name="new_AaveV1PaybackAction_new"></a>

### new AaveV1PaybackAction(tokenAddr, amount, from, onBehalf)
**Params**

- tokenAddr <code>EthAddress</code>
- amount <code>string</code>
- from <code>EthAddress</code> - Tokens will be sent from this address
- onBehalf <code>EthAddress</code>

<a name="AaveV1WithdrawAction"></a>

## AaveV1WithdrawAction
AaveWithdrawActionV1 - Withdraw token from an aaveV1 position

**Kind**: global class  
<a name="new_AaveV1WithdrawAction_new"></a>

### new AaveV1WithdrawAction(tokenAddr, amount, to)
**Params**

- tokenAddr <code>EthAddress</code>
- amount <code>string</code>
- to <code>EthAddress</code> - Tokens will be withdrawn to this address

<a name="BuyAction"></a>

## BuyAction
Buys an exact amount of dest token on DeFi Saver exchange aggregator

**Kind**: global class  
<a name="new_BuyAction_new"></a>

### new BuyAction(exchangeOrder, from, to)
**Params**

- exchangeOrder <code>Array</code> - Stardard DFS Exchange data
- from <code>string</code> - Order sender
- to <code>string</code> - Order recipient

<a name="SellAction"></a>

## SellAction
Sells token on DeFi Saver exchange aggregator

**Kind**: global class  
<a name="new_SellAction_new"></a>

### new SellAction(exchangeOrder, from, to)
**Params**

- exchangeOrder <code>Array</code> - Standard DFS Exchange data
- from <code>string</code> - Order sender
- to <code>string</code> - Order recipient

<a name="SendTokenAction"></a>

## SendTokenAction
Transfers specified token to specified address

**Kind**: global class  
<a name="new_SendTokenAction_new"></a>

### new SendTokenAction(token, to, amount)
**Params**

- token <code>string</code> - Token address
- to <code>string</code> - Transfer recipient
- amount <code>string</code> - Transfer amount

<a name="CompoundBorrowAction"></a>

## CompoundBorrowAction
CompoundBorrowAction - Borrow tokens from Compound

**Kind**: global class  
<a name="new_CompoundBorrowAction_new"></a>

### new CompoundBorrowAction(cTokenAddr, amount, to)
**Params**

- cTokenAddr <code>EthAddress</code>
- amount <code>string</code> - Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
- to <code>EthAddress</code>

<a name="CompoundClaimAction"></a>

## CompoundClaimAction
CompoundClaimAction - Claims Comp tokens for the specified address

**Kind**: global class  
<a name="new_CompoundClaimAction_new"></a>

### new CompoundClaimAction(cSupplyAddresses, cBorrowAddresses, from, to)
**Params**

- cSupplyAddresses <code>Array.&lt;EthAddress&gt;</code>
- cBorrowAddresses <code>Array.&lt;EthAddress&gt;</code>
- from <code>EthAddress</code>
- to <code>EthAddress</code>

<a name="CompoundPaybackAction"></a>

## CompoundPaybackAction
CompoundPaybackAction - Payback borrowed tokens from Compound

**Kind**: global class  
<a name="new_CompoundPaybackAction_new"></a>

### new CompoundPaybackAction(cTokenAddr, amount, from)
**Params**

- cTokenAddr <code>EthAddress</code>
- amount <code>string</code> - Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
- from <code>EthAddress</code>

<a name="CompoundSupplyAction"></a>

## CompoundSupplyAction
CompoundSupplyAction - Supply token to an Compound position

**Kind**: global class  
<a name="new_CompoundSupplyAction_new"></a>

### new CompoundSupplyAction(cTokenAddr, amount, from)
**Params**

- cTokenAddr <code>EthAddress</code>
- amount <code>string</code> - Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
- from <code>EthAddress</code>

<a name="CompoundWithdrawAction"></a>

## CompoundWithdrawAction
CompoundWithdrawAction - Withdraw token from an Compound position

**Kind**: global class  
<a name="new_CompoundWithdrawAction_new"></a>

### new CompoundWithdrawAction(cTokenAddr, amount, to)
**Params**

- cTokenAddr <code>EthAddress</code>
- amount <code>string</code> - Wei amount in underlying asset decimals (not cAsset) - ie. 18 dec for cETH, not 8
- to <code>EthAddress</code>

<a name="AaveCustomFlashLoanV2Action"></a>

## AaveCustomFlashLoanV2Action
AaveCustomFlashLoanV2Action - Gets a flashloan from Aave v2

**Kind**: global class  
<a name="new_AaveCustomFlashLoanV2Action_new"></a>

### new AaveCustomFlashLoanV2Action(viewer, loanPayer, viewerData)
**Params**

- viewer <code>EthAddress</code>
- loanPayer <code>EthAddress</code>
- viewerData <code>string</code> - (bytes)

<a name="AaveFlashLoanAction"></a>

## AaveFlashLoanAction
Gets a flashloan from Aave v1

**Kind**: global class  
<a name="new_AaveFlashLoanAction_new"></a>

### new AaveFlashLoanAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>string</code>
- tokenAddr <code>EthAddress</code>

<a name="AaveFlashLoanPaybackAction"></a>

## AaveFlashLoanPaybackAction
Pays back a flashloan from Aave v1

**Kind**: global class  
<a name="new_AaveFlashLoanPaybackAction_new"></a>

### new AaveFlashLoanPaybackAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>string</code>
- tokenAddr <code>EthAddress</code>

<a name="AaveV2FlashLoanAction"></a>

## AaveV2FlashLoanAction
Gets a flashloan from Aave v2

**Kind**: global class  
<a name="new_AaveV2FlashLoanAction_new"></a>

### new AaveV2FlashLoanAction(loanAmounts, tokens, modes, loanPayer)
**Params**

- loanAmounts <code>Array.&lt;string&gt;</code>
- tokens <code>Array.&lt;EthAddress&gt;</code>
- modes <code>Array.&lt;number&gt;</code>
- loanPayer <code>EthAddress</code>

<a name="AaveV2FlashLoanPaybackAction"></a>

## AaveV2FlashLoanPaybackAction
Pays back a single flashloan from Aave v2

**Kind**: global class  
<a name="new_AaveV2FlashLoanPaybackAction_new"></a>

### new AaveV2FlashLoanPaybackAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>string</code>
- tokenAddr <code>EthAddress</code>

<a name="DyDxFlashLoanAction"></a>

## DyDxFlashLoanAction
Gets a flashloan from DyDx

**Kind**: global class  
<a name="new_DyDxFlashLoanAction_new"></a>

### new DyDxFlashLoanAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>string</code>
- tokenAddr <code>EthAddress</code>

<a name="DyDxFlashLoanPaybackAction"></a>

## DyDxFlashLoanPaybackAction
Pays back a flashloan from DyDx

**Kind**: global class  
<a name="new_DyDxFlashLoanPaybackAction_new"></a>

### new DyDxFlashLoanPaybackAction(loanAmount, tokenAddr)
**Params**

- loanAmount <code>string</code>
- tokenAddr <code>EthAddress</code>

<a name="MakerGenerateAction"></a>

## MakerGenerateAction
MakerGenerateAction - Generated Dai from a Vault

**Kind**: global class  
<a name="new_MakerGenerateAction_new"></a>

### new MakerGenerateAction(vaultId, amount, to, mcdManager)
**Params**

- vaultId <code>VaultId</code>
- amount <code>string</code> - Amount of DAI to generate in wei
- to <code>EthAddress</code> - Generated DAI will be sent to this address
- mcdManager <code>EthAddress</code>

<a name="MakerGiveAction"></a>

## MakerGiveAction
MakerGiveAction - gives a vault to a selected address

**Kind**: global class  
<a name="new_MakerGiveAction_new"></a>

### new MakerGiveAction(vaultId, newOwner, createProxy, mcdManager)
**Params**

- vaultId <code>VaultId</code>
- newOwner <code>EthAddress</code>
- createProxy <code>boolean</code>
- mcdManager <code>EthAddress</code>

<a name="MakerMergeAction"></a>

## MakerMergeAction
MakerMergeAction - merged two vaults of the same type

**Kind**: global class  
<a name="new_MakerMergeAction_new"></a>

### new MakerMergeAction(srcVaultId, destVaultId, mcdManager)
**Params**

- srcVaultId <code>VaultId</code>
- destVaultId <code>VaultId</code>
- mcdManager <code>EthAddress</code>

<a name="MakerOpenVaultAction"></a>

## MakerOpenVaultAction
MakerOpenVaultAction

**Kind**: global class  
<a name="new_MakerOpenVaultAction_new"></a>

### new MakerOpenVaultAction(joinAddr, mcdManager)
**Params**

- joinAddr <code>Address</code>
- mcdManager <code>Address</code>

<a name="MakerPaybackAction"></a>

## MakerPaybackAction
MakerPaybackAction - Payback dai to a Vault

**Kind**: global class  
<a name="new_MakerPaybackAction_new"></a>

### new MakerPaybackAction(vaultId, amount, from, mcdManager)
**Params**

- vaultId <code>VaultId</code>
- amount <code>string</code>
- from <code>EthAddress</code> - DAI will be sent from this address
- mcdManager <code>EthAddress</code>

<a name="MakerSupplyAction"></a>

## MakerSupplyAction
MakerSupplyAction - Supply token to a Vault

**Kind**: global class  
<a name="new_MakerSupplyAction_new"></a>

### new MakerSupplyAction(vaultId, amount, joinAddr, from, mcdManager)
**Params**

- vaultId <code>VaultId</code>
- amount <code>string</code>
- joinAddr <code>EthAddress</code>
- from <code>EthAddress</code> - Tokens will be supplied from this address
- mcdManager <code>EthAddress</code>

<a name="MakerWithdrawAction"></a>

## MakerWithdrawAction
MakerWithdrawAction - Withdraw token from a Vault

**Kind**: global class  
<a name="new_MakerWithdrawAction_new"></a>

### new MakerWithdrawAction(vaultId, amount, joinAddr, to, mcdManager)
**Params**

- vaultId <code>VaultId</code>
- amount <code>string</code>
- joinAddr <code>EthAddress</code>
- to <code>EthAddress</code>
- mcdManager <code>EthAddress</code>

<a name="UniswapSupplyAction"></a>

## UniswapSupplyAction
Supplies a pair tokens to uniswap pool

**Kind**: global class  
<a name="new_UniswapSupplyAction_new"></a>

### new UniswapSupplyAction(tokenA, tokenB, from, to, amountADesired, amountBDesired, amountAMin, amountBMin, deadline)
**Params**

- tokenA <code>EthAddress</code>
- tokenB <code>EthAddress</code>
- from <code>EthAddress</code>
- to <code>EthAddress</code>
- amountADesired <code>string</code>
- amountBDesired <code>string</code>
- amountAMin <code>string</code>
- amountBMin <code>string</code>
- deadline <code>number</code>

<a name="UniswapWithdrawAction"></a>

## UniswapWithdrawAction
Withdraws liquidity from uniswap pool

**Kind**: global class  
<a name="new_UniswapWithdrawAction_new"></a>

### new UniswapWithdrawAction(tokenA, tokenB, liquidity, to, from, amountAMin, amountBMin, deadline)
**Params**

- tokenA <code>EthAddress</code>
- tokenB <code>EthAddress</code>
- liquidity <code>string</code>
- to <code>EthAddress</code>
- from <code>EthAddress</code>
- amountAMin <code>string</code>
- amountBMin <code>string</code>
- deadline <code>number</code>

