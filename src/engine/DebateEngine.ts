import type {
  ArgumentNode,
  RoundData,
  EngineConfig,
  CaseDataBundle
} from '../types/experiment';

export interface DynamicRoundResult {
  processedRounds: RoundData[];
  nodesA: ArgumentNode[];
  nodesB: ArgumentNode[];
  resourceA: number;
  resourceB: number;
  totalPenaltiesA: {
    whataboutism: number;
    doubleStandard: number;
    digUpHistory: number;
    conceptShift: number;
    standardShift: number;
    repeatedArg: number;
  };
  totalPenaltiesB: {
    whataboutism: number;
    doubleStandard: number;
    digUpHistory: number;
    conceptShift: number;
    standardShift: number;
    repeatedArg: number;
  };
  isFinished: boolean;
  winnerParty?: 'A' | 'B' | 'Tie';
}

export class DebateEngine {
  /**
   * Dynamically evaluates round data, argument node status transitions,
   * penalty counters, and resource pool percentages based on EngineConfig.
   */
  public static evaluateCase(bundle: CaseDataBundle, config: EngineConfig): DynamicRoundResult {
    const rawRounds = bundle.mockRounds.slice(0, config.maxRounds);
    const maxUsage = config.maxArgUsageLimit;
    const isStrict = config.judgeStrictness === 'strict';

    // Deep clone initial argument trees
    let currentNodesA: ArgumentNode[] = JSON.parse(JSON.stringify(bundle.initialNodesA));
    let currentNodesB: ArgumentNode[] = JSON.parse(JSON.stringify(bundle.initialNodesB));

    const totalPenaltiesA = {
      whataboutism: 0,
      doubleStandard: 0,
      digUpHistory: 0,
      conceptShift: 0,
      standardShift: 0,
      repeatedArg: 0,
    };

    const totalPenaltiesB = {
      whataboutism: 0,
      doubleStandard: 0,
      digUpHistory: 0,
      conceptShift: 0,
      standardShift: 0,
      repeatedArg: 0,
    };

    const processedRounds: RoundData[] = [];

    for (let rIdx = 0; rIdx < rawRounds.length; rIdx++) {
      const rawRound = rawRounds[rIdx];
      const rNum = rawRound.roundNumber;
      const j = rawRound.judge;

      // Accumulate penalties
      totalPenaltiesA.whataboutism += j.whataboutismA;
      totalPenaltiesA.doubleStandard += j.doubleStandardA;
      totalPenaltiesA.digUpHistory += j.digUpHistoryA;
      totalPenaltiesA.conceptShift += j.conceptShiftA;
      totalPenaltiesA.standardShift += j.standardShiftA;
      totalPenaltiesA.repeatedArg += j.repeatedArgA;

      totalPenaltiesB.whataboutism += j.whataboutismB;
      totalPenaltiesB.doubleStandard += j.doubleStandardB;
      totalPenaltiesB.digUpHistory += j.digUpHistoryB;
      totalPenaltiesB.conceptShift += j.conceptShiftB;
      totalPenaltiesB.standardShift += j.standardShiftB;
      totalPenaltiesB.repeatedArg += j.repeatedArgB;

      // Update Node A
      if (j.newArgA && j.newArgA !== 'A-EXHAUSTED') {
        const nodeA = currentNodesA.find(n => n.id === j.newArgA);
        if (nodeA) {
          nodeA.usedCount += 1;
          nodeA.lastUpdatedRound = rNum;

          // Judge rating influence
          if (j.legalRatingA === '🔴' || j.factRatingA === '🔴' || isStrict && j.repeatedArgA > 0) {
            nodeA.status = '🔴 已擊破';
          } else if (j.legalRatingA === '🟡' || j.factRatingA === '🟡' || nodeA.usedCount >= maxUsage) {
            nodeA.status = nodeA.usedCount >= maxUsage ? (isStrict ? '🔴 已擊破' : '🟡 有爭議') : '🟡 有爭議';
          }
        }
      }

      // Update Node B
      if (j.newArgB && j.newArgB !== 'B-EXHAUSTED') {
        const nodeB = currentNodesB.find(n => n.id === j.newArgB);
        if (nodeB) {
          nodeB.usedCount += 1;
          nodeB.lastUpdatedRound = rNum;

          if (j.legalRatingB === '🔴' || j.factRatingB === '🔴' || isStrict && j.repeatedArgB > 0) {
            nodeB.status = '🔴 已擊破';
          } else if (j.legalRatingB === '🟡' || j.factRatingB === '🟡' || nodeB.usedCount >= maxUsage) {
            nodeB.status = nodeB.usedCount >= maxUsage ? (isStrict ? '🔴 已擊破' : '🟡 有爭議') : '🟡 有爭議';
          }
        }
      }

      // Calculate dynamic resource remaining percentage for Party A
      const validA = currentNodesA.filter(n => n.status === '🟢 有效').length;
      const disputeA = currentNodesA.filter(n => n.status === '🟡 有爭議').length;
      const totalCapacityA = Math.max(1, currentNodesA.length);
      const rawResA = Math.round(((validA * 1.0 + disputeA * 0.4) / totalCapacityA) * 100);
      const penaltyDeductionA = (j.whataboutismA * 3 + j.doubleStandardA * 5 + j.repeatedArgA * 8) * (isStrict ? 1.5 : 1.0);
      const dynamicResourceA = Math.max(0, Math.min(100, Math.round(rawResA - penaltyDeductionA)));

      // Calculate dynamic resource remaining percentage for Party B
      const validB = currentNodesB.filter(n => n.status === '🟢 有效').length;
      const disputeB = currentNodesB.filter(n => n.status === '🟡 有爭議').length;
      const totalCapacityB = Math.max(1, currentNodesB.length);
      const rawResB = Math.round(((validB * 1.0 + disputeB * 0.4) / totalCapacityB) * 100);
      const penaltyDeductionB = (j.whataboutismB * 3 + j.doubleStandardB * 5 + j.repeatedArgB * 8) * (isStrict ? 1.5 : 1.0);
      const dynamicResourceB = Math.max(0, Math.min(100, Math.round(rawResB - penaltyDeductionB)));

      // Check if exhausted
      const isExhaustedA = j.newArgA === 'A-EXHAUSTED' || dynamicResourceA === 0;
      const isExhaustedB = j.newArgB === 'B-EXHAUSTED' || dynamicResourceB === 0;

      const snapshotA: ArgumentNode[] = JSON.parse(JSON.stringify(currentNodesA));
      const snapshotB: ArgumentNode[] = JSON.parse(JSON.stringify(currentNodesB));

      processedRounds.push({
        ...rawRound,
        resourceA: isExhaustedA ? 0 : dynamicResourceA,
        resourceB: isExhaustedB ? 0 : dynamicResourceB,
        argTreeSnapshotA: snapshotA,
        argTreeSnapshotB: snapshotB
      });
    }

    const lastRound = processedRounds[processedRounds.length - 1];
    const isFinished = processedRounds.length >= rawRounds.length;
    let winnerParty: 'A' | 'B' | 'Tie' = 'Tie';
    if (lastRound.judge.roundWinner.includes('🔵')) winnerParty = 'A';
    if (lastRound.judge.roundWinner.includes('🔴')) winnerParty = 'B';

    return {
      processedRounds,
      nodesA: currentNodesA,
      nodesB: currentNodesB,
      resourceA: lastRound.resourceA,
      resourceB: lastRound.resourceB,
      totalPenaltiesA,
      totalPenaltiesB,
      isFinished,
      winnerParty
    };
  }
}
