const { assert } = require("chai");
const dfs = require("../../index.js");
const Recipe = require("./Recipe");
const MockAccessLists = require('./MockAccessLists');

const testDuplicates = (accessList) => {
    const contractAddrs = accessList.map((entry) => {
        assert(
            entry[1].length == [...new Set(entry[1])].length,
            'Duplicate storage address found',
        );
        return entry[0];
    })

    assert(
        accessList.length == [...new Set(contractAddrs)].length,
        'Duplicate contract address found',
    );

    return true;
};

const testInclusion = (recipe, accessList) => {
    const actions = recipe.actions;
    const addressMapping = Object.fromEntries(accessList);
    actions.forEach((action) => {
        MockAccessLists[action.name].forEach((entry) => {
            const storageAddrs = new Set(addressMapping[entry[0]]);
            assert(
                storageAddrs,
                'Access list missing a contract address',
            );
            entry[1].forEach((addr) => {
                assert(
                    storageAddrs.has(addr),
                    'Access list missing a storage address',
                );
            })
        });
    });

    return true;
};

const deadbeef = '0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef';

const sampleRecipes = [
    new Recipe('recMakerRepay', [
        new dfs.actions.maker.MakerWithdrawAction(0, 0, deadbeef, deadbeef),
        new dfs.actions.basic.SellAction(0, deadbeef, deadbeef, 0),
        new dfs.actions.maker.MakerPaybackAction(0, '$2', deadbeef, deadbeef),
    ]),
    new Recipe('recMakerFLBoost', [
        new dfs.actions.flashloan.MakerFlashLoanAction(0, deadbeef, ''),
        new dfs.actions.basic.SellAction('', deadbeef, deadbeef, 0),
        new dfs.actions.maker.MakerSupplyAction(0, '$2', deadbeef, deadbeef),
        new dfs.actions.maker.MakerGenerateAction(0, '$1', deadbeef),
    ]),
    new Recipe('recMakerFRepayViaDebt', [
        new dfs.actions.flashloan.MakerFlashLoanAction(0, deadbeef, ''),,
        new dfs.actions.maker.MakerPaybackAction(0, 0, deadbeef, deadbeef),
        new dfs.actions.maker.MakerWithdrawAction(0, 0, deadbeef, deadbeef, deadbeef),
        new dfs.actions.basic.SellAction('', deadbeef, deadbeef, 0),
        new dfs.actions.basic.SendTokenAction(deadbeef, deadbeef, '$1'),
    ]),
    new Recipe('recCompoundFLBoostViaColl', [
        new dfs.actions.flashloan.MakerFlashLoanAction(0, deadbeef, []),
        new dfs.actions.compound.CompoundSupplyAction(deadbeef, '$1', deadbeef, true),
        new dfs.actions.compound.CompoundBorrowAction(deadbeef, 0, deadbeef),
    ]),
    new Recipe('recCompoundFLRepayViaDebt', [
        new dfs.actions.flashloan.MakerFlashLoanAction(0, deadbeef, []),
        new dfs.actions.compound.CompoundSupplyAction(deadbeef, '$1', deadbeef, true),
        new dfs.actions.compound.CompoundWithdrawAction(deadbeef, 0, deadbeef),
    ]),
];

describe('Access-Lists', () => {
    sampleRecipes.forEach((recipe) => {
        it(`... should make an access list for recipe ${recipe.name}`, () => {
            const recipeAccessList = recipe.getAccessList();
            testDuplicates(recipeAccessList);
            testInclusion(recipe, recipeAccessList);
        });
    });

    it('... should handle duplicate actions in recipe correctly', () => {
        const recipe = new Recipe('mockRecipe', [
            new dfs.actions.flashloan.MakerFlashLoanAction(0, deadbeef, []),
            new dfs.actions.compound.CompoundSupplyAction(deadbeef, '$1', deadbeef, true),
            new dfs.actions.compound.CompoundSupplyAction(deadbeef, '$1', deadbeef, true),
            new dfs.actions.compound.CompoundSupplyAction(deadbeef, '$1', deadbeef, true),
            new dfs.actions.compound.CompoundSupplyAction(deadbeef, '$1', deadbeef, true),
            new dfs.actions.compound.CompoundWithdrawAction(deadbeef, 0, deadbeef),
        ]);
    
        const recipeAccessList = recipe.getAccessList();
        testDuplicates(recipeAccessList);
        testInclusion(recipe, recipeAccessList);
    });
});
