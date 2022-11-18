import { MakerAccessLists } from './MakerAccessLists';
import { AaveAccessLists } from './AaveAccessLists';
import { BalancerAccessLists } from './BalancerAccessLists';
import { CompoundAccessLists } from './CompoundAccessLists';
import { ReflexerAccessLists } from './ReflexerAccessLists';
import { YearnAccessLists } from './YearnAccessLists';
import { RariAccessLists } from './RariAccessLists';
import { MStableAccessLists } from './MStableAccessLists';
import { DyDxAccessLists } from './DyDxAccessLists';
import { LidoAccessLists } from './LidoAccessLists';
import { GuniAccessLists } from './GuniAccessLists';
import { UniswapAccessLists } from './UniswapAccessLists';
import { InstaAccessLists } from './InstaAccessLists';
import { LiquityAccessLists } from './LiquityAccessLists';

import { FlashLoanAccessLists } from './FlashLoanAccessLists';
import { UtilsAccessLists } from './UtilsAccessLists';

export const AccessLists = {
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
