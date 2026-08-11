import type { CaseId, CaseDataBundle } from '../../types/experiment';
import { threePlusElevenBundle } from './threePlusEleven';
import { jinghuaBundle } from './jinghua';
import { medigenBundle } from './medigen';

export const allCases: Record<CaseId, CaseDataBundle> = {
  '3plus11': threePlusElevenBundle,
  'jinghua': jinghuaBundle,
  'medigen': medigenBundle
};

export const caseList = [
  { id: '3plus11' as CaseId, title: '3+11邊境檢疫政策與會議紀錄爭議案' },
  { id: 'jinghua' as CaseId, title: '柯文哲京華城與政治獻金爭議案' },
  { id: 'medigen' as CaseId, title: '高端疫苗與新冠疫情防護爭議案' }
];

export function getCaseBundle(caseId: CaseId): CaseDataBundle {
  return allCases[caseId] || threePlusElevenBundle;
}
