import type { CaseDataBundle } from '../../types/experiment';
import {
  initialEventDataPackage,
  setupV3,
  initialArgumentNodesA,
  initialArgumentNodesB,
  mockRounds,
  mirrorPatternsData
} from '../zhonglianCaseData';

export const zhonglianBundle: CaseDataBundle = {
  id: 'zhonglian',
  title: '中聯毒油事件與食安責任歸屬爭議案',
  initialEventDataPackage,
  setupV3,
  initialNodesA: initialArgumentNodesA,
  initialNodesB: initialArgumentNodesB,
  mockRounds,
  mirrorPatternsData
};
