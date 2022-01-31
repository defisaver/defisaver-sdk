const { MakerAccessLists } = require('./MakerAccessLists');
const { AaveAccessLists } = require('./AaveAccessLists');
const { BalancerAccessLists } = require('./BalancerAccessLists');
const { CompoundAccessLists } = require('./CompoundAccessLists');
const { ReflexerAccessLists } = require('./ReflexerAccessLists');
const { YearnAccessLists } = require('./YearnAccessLists');
const { RariAccessLists } = require('./RariAccessLists');
const { MStableAccessLists } = require('./MStableAccessLists');
const { DyDxAccessLists } = require('./DyDxAccessLists');
const { LidoAccessLists } = require('./LidoAccessLists');
const { GuniAccessLists } = require('./GuniAccessLists');
const { UniswapAccessLists } = require('./UniswapAccessLists');
const { InstaAccessLists } = require('./InstaAccessLists');
const { LiquityAccessLists } = require('./LiquityAccessLists');

const { FlashLoanAccessLists } = require('./FlashLoanAccessLists');
const { UtilsAccessLists } = require('./UtilsAccessLists');

const AccessLists = {
    ...MakerAccessLists,
    ...AaveAccessLists,
    ...BalancerAccessLists,
    ...CompoundAccessLists,
    ...ReflexerAccessLists,
    ...YearnAccessLists,
    ...RariAccessLists,
    ...MStableAccessLists,
    ...DyDxAccessLists,
    ...LidoAccessLists,
    ...GuniAccessLists,
    ...UniswapAccessLists,
    ...InstaAccessLists,
    ...LiquityAccessLists,

    ...FlashLoanAccessLists,
    ...UtilsAccessLists,
};

module.exports = {
    AccessLists,
};
