import type { CaseDataBundle } from '../../types/experiment';
import {
  initialEventDataPackage,
  initialArgumentNodesA,
  initialArgumentNodesB,
  mockRounds,
  mirrorPatternsData
} from '../vaccineBlockingCaseData';

export const vaccineBlockingBundle: CaseDataBundle = {
  id: 'vaccineBlocking',
  title: '民間採購BNT疫苗與擋疫苗爭議案',
  initialEventDataPackage,
  initialNodesA: initialArgumentNodesA,
  initialNodesB: initialArgumentNodesB,
  mockRounds,
  mirrorPatternsData
};
