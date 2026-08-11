import type {
  ArgumentFamily,
  ArgumentNode,
  CaseDataBundle,
  ExperimentSetupV3,
  FamilyResourceState,
  ForcedResponseStatus,
  JudgeReport,
  RoundData
} from '../types/experiment';

export const argumentFamilies: ArgumentFamily[] = [
  '事實型',
  '法律型',
  '程序型',
  '因果型',
  '政治責任型',
  '道德責任型',
  '組織責任型',
  '類案比較型',
  '標準一致性型',
  '歷史反擊型',
  '其他'
];

export const getDefaultSetupV3 = (bundle: CaseDataBundle): ExperimentSetupV3 => {
  const stanceA = bundle.initialEventDataPackage.partyAStance[0] ?? '維護 Agent A 在本案中的主要政治與法律主張。';
  const stanceB = bundle.initialEventDataPackage.partyBStance[0] ?? '削弱 Agent A 主張並建立 Agent B 的替代解釋。';

  return {
    coreProposition: `在「${bundle.title}」中，Agent A 的主要辯護是否能在既定事實、法律程序與政治責任標準下維持成立。`,
    agentAGoal: `強化核心命題，建立 ${bundle.initialEventDataPackage.agentAParty} 的事實、法律、程序與政治責任防線：${stanceA}`,
    agentBGoal: `削弱核心命題，攻擊 ${bundle.initialEventDataPackage.agentAParty} 的關鍵前提，並建立 ${bundle.initialEventDataPackage.agentBParty} 的替代解釋：${stanceB}`,
    issueBoundaries: [
      {
        id: '#1',
        title: '事實基礎',
        description: '哪些事件、時間線、行為與文件已被可靠資料支持，哪些仍屬未確認或爭議判斷。'
      },
      {
        id: '#2',
        title: '法律與程序',
        description: '相關法條、程序要求、司法或行政程序是否能支撐各方主張。'
      },
      {
        id: '#3',
        title: '因果與責任',
        description: '被爭議行為和結果之間是否有足夠因果鏈，責任應落在個人、組織、政黨或制度層級。'
      },
      {
        id: '#4',
        title: '類案比較與標準一致性',
        description: '歷史案例是否具有可比性，是否能證明對方採用雙重標準或標準漂移。'
      },
      {
        id: '#5',
        title: '核心命題關聯',
        description: '新論證是否直接強化或削弱核心命題，而不是另開與本案無實質關係的戰場。'
      }
    ],
    burdenQuestions: [
      'Agent A 要維持核心命題，必須證明哪些事實、法律或程序前提仍站得住？',
      'Agent B 要削弱核心命題，必須破壞哪些關鍵前提，而不能只靠情緒性指控？',
      '類案比較是否具備行為性質、法律身分、程序階段與證據狀況上的可比性？',
      '責任層級切換是否有清楚邏輯橋樑，或只是原標準失守後改換戰場？',
      '哪些主張屬於已確認事實，哪些只是政治推論或責任判斷？'
    ]
  };
};

export const getSetupV3 = (bundle: CaseDataBundle) => bundle.setupV3 ?? getDefaultSetupV3(bundle);

export const getArgumentFamily = (node: ArgumentNode): ArgumentFamily => {
  if (node.category === '法律論證') return '法律型';
  if (node.category === '程序理由') return '程序型';
  if (node.category === '政治責任') return '政治責任型';
  if (node.category === '道德責任') return '道德責任型';
  if (node.category === '翻舊帳/歷史案例') return '歷史反擊型';
  if (node.category === 'Whataboutism') return '類案比較型';
  return '其他';
};

const getFamilyState = (nodes: ArgumentNode[]): FamilyResourceState => {
  const valid = nodes.filter(node => node.status === '🟢 有效').length;
  const disputed = nodes.filter(node => node.status === '🟡 有爭議').length;

  if (valid >= 2) return '高';
  if (valid === 1 && disputed >= 1) return '中';
  if (valid === 1 || disputed >= 2) return '低';
  if (disputed === 1) return '接近耗盡';
  return '耗盡';
};

export const getFamilyResourceRows = (nodesA: ArgumentNode[], nodesB: ArgumentNode[]) =>
  argumentFamilies.map(family => {
    const familyNodesA = nodesA.filter(node => getArgumentFamily(node) === family);
    const familyNodesB = nodesB.filter(node => getArgumentFamily(node) === family);

    return {
      family,
      stateA: getFamilyState(familyNodesA),
      stateB: getFamilyState(familyNodesB),
      countA: familyNodesA.length,
      countB: familyNodesB.length
    };
  });

export const getForcedResponseStatus = (judge: JudgeReport, side: 'A' | 'B'): ForcedResponseStatus => {
  const defense = side === 'A' ? judge.defenseScoreA : judge.defenseScoreB;
  const conceptShift = side === 'A' ? judge.conceptShiftA : judge.conceptShiftB;
  const standardShift = side === 'A' ? judge.standardShiftA : judge.standardShiftB;
  const repeatedArg = side === 'A' ? judge.repeatedArgA : judge.repeatedArgB;

  if (defense >= 8 && conceptShift === 0 && standardShift === 0) return '🟢 有效回應';
  if (defense >= 6 && conceptShift + standardShift <= 1) return '🟡 部分回應';
  if (defense >= 4 || repeatedArg > 0) return '🟠 主要迴避';
  return '🔴 未回應';
};

export const getRoundV3Meta = (rounds: RoundData[], roundIndex: number) => {
  const round = rounds[roundIndex];
  const previous = rounds[roundIndex - 1];

  return {
    firstMover: round.roundNumber % 2 === 1 ? 'A' : 'B',
    forcedTargetA: previous?.judge.newArgB && previous.judge.newArgB !== 'B-EXHAUSTED' ? previous.judge.newArgB : '—',
    forcedTargetB: previous?.judge.newArgA && previous.judge.newArgA !== 'A-EXHAUSTED' ? previous.judge.newArgA : '—',
    forcedStatusA: previous ? getForcedResponseStatus(round.judge, 'A') : '—',
    forcedStatusB: previous ? getForcedResponseStatus(round.judge, 'B') : '—'
  };
};

export const getArgumentDebts = (rounds: RoundData[], currentRoundIndex: number) => {
  const debts = new Map<string, { argId: string; debtor: 'A' | 'B'; status: ForcedResponseStatus; roundsOwed: number }>();

  for (let idx = 1; idx <= currentRoundIndex; idx += 1) {
    const previous = rounds[idx - 1];
    const current = rounds[idx];
    const statusA = getForcedResponseStatus(current.judge, 'A');
    const statusB = getForcedResponseStatus(current.judge, 'B');

    if (previous.judge.newArgB && previous.judge.newArgB !== 'B-EXHAUSTED') {
      const key = `${previous.judge.newArgB}-A`;
      if (statusA === '🟢 有效回應') debts.delete(key);
      else {
        const existing = debts.get(key);
        debts.set(key, {
          argId: previous.judge.newArgB,
          debtor: 'A',
          status: statusA,
          roundsOwed: existing ? existing.roundsOwed + 1 : 1
        });
      }
    }

    if (previous.judge.newArgA && previous.judge.newArgA !== 'A-EXHAUSTED') {
      const key = `${previous.judge.newArgA}-B`;
      if (statusB === '🟢 有效回應') debts.delete(key);
      else {
        const existing = debts.get(key);
        debts.set(key, {
          argId: previous.judge.newArgA,
          debtor: 'B',
          status: statusB,
          roundsOwed: existing ? existing.roundsOwed + 1 : 1
        });
      }
    }
  }

  return Array.from(debts.values());
};

export const getStateTone = (state: FamilyResourceState) => {
  if (state === '高') return 'text-emerald-300 bg-emerald-950/40 border-emerald-800/50';
  if (state === '中') return 'text-cyan-300 bg-cyan-950/40 border-cyan-800/50';
  if (state === '低') return 'text-amber-300 bg-amber-950/40 border-amber-800/50';
  if (state === '接近耗盡') return 'text-orange-300 bg-orange-950/40 border-orange-800/50';
  return 'text-rose-300 bg-rose-950/40 border-rose-800/50';
};
