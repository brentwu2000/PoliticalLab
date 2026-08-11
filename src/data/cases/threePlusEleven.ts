import type { CaseDataBundle } from '../../types/experiment';
import {
  initialEventDataPackage,
  initialArgumentNodesA,
  initialArgumentNodesB,
  mockRounds,
  mirrorPatternsData
} from '../threePlusElevenCaseData';

export const threePlusElevenBundle: CaseDataBundle = {
  id: '3plus11',
  title: '3+11邊境檢疫政策與會議紀錄爭議案',
  initialEventDataPackage,
  initialNodesA: initialArgumentNodesA,
  initialNodesB: initialArgumentNodesB,
  mockRounds,
  mirrorPatternsData
};
