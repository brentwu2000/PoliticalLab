import type { ArgumentNode, JudgeReport, RoundData } from '../types/experiment';

const ratingScore = {
  '🟢': 100,
  '🟡': 65,
  '🔴': 25
} as const;

const countClaimStatuses = (nodes: ArgumentNode[]) =>
  nodes.reduce(
    (counts, node) => {
      if (node.status === '🟢 有效') counts.valid += 1;
      if (node.status === '🟡 有爭議') counts.disputed += 1;
      if (node.status === '🔴 已擊破') counts.broken += 1;
      return counts;
    },
    { valid: 0, disputed: 0, broken: 0 }
  );

const weightedPenalty = (
  conceptShift: number,
  whataboutism: number,
  standardShift: number,
  doubleStandard: number,
  repeatedArg: number,
  digUpHistory: number
) =>
  conceptShift * 2 +
  whataboutism +
  standardShift * 2 +
  doubleStandard * 3 +
  repeatedArg * 2 +
  digUpHistory;

export const getRoundPenalty = (judge: JudgeReport, side: 'A' | 'B') =>
  side === 'A'
    ? weightedPenalty(
        judge.conceptShiftA,
        judge.whataboutismA,
        judge.standardShiftA,
        judge.doubleStandardA,
        judge.repeatedArgA,
        judge.digUpHistoryA
      )
    : weightedPenalty(
        judge.conceptShiftB,
        judge.whataboutismB,
        judge.standardShiftB,
        judge.doubleStandardB,
        judge.repeatedArgB,
        judge.digUpHistoryB
      );

export const getRoundValidityScore = (judge: JudgeReport, side: 'A' | 'B') => {
  const factScore = ratingScore[side === 'A' ? judge.factRatingA : judge.factRatingB];
  const legalScore = ratingScore[side === 'A' ? judge.legalRatingA : judge.legalRatingB];
  const defenseScore = (side === 'A' ? judge.defenseScoreA : judge.defenseScoreB) * 10;
  const penalty = getRoundPenalty(judge, side);
  const isRepeated = side === 'A' ? judge.repeatedArgA > 0 : judge.repeatedArgB > 0;
  const consistencyScore = Math.max(0, 100 - penalty * 8);
  const noveltyScore = isRepeated ? 35 : 100;

  return (
    factScore * 0.3 +
    legalScore * 0.25 +
    defenseScore * 0.2 +
    consistencyScore * 0.15 +
    noveltyScore * 0.1
  );
};

export const getRoundWeightedScore = (round: RoundData, side: 'A' | 'B') => {
  const judge = round.judge;
  const validityScore = getRoundValidityScore(judge, side);
  const performanceScore =
    ((side === 'A' ? judge.attackScoreA + judge.defenseScoreA : judge.attackScoreB + judge.defenseScoreB) / 20) * 100;
  const penalty = getRoundPenalty(judge, side);

  return validityScore * 0.7 + performanceScore * 0.3 - penalty;
};

export const getMatchWeightedScore = (rounds: RoundData[], currentRoundIndex: number) => {
  const activeRounds = rounds.slice(0, currentRoundIndex + 1);
  const currentRound = activeRounds[activeRounds.length - 1];
  const resourceA = currentRound?.resourceA ?? 100;
  const resourceB = currentRound?.resourceB ?? 100;

  let winA = 0;
  let winB = 0;
  let penaltyA = 0;
  let penaltyB = 0;
  let validityA = 0;
  let validityB = 0;
  let performanceA = 0;
  let performanceB = 0;

  activeRounds.forEach(round => {
    const judge = round.judge;
    if (judge.roundWinner.includes('🔵')) winA += 1;
    if (judge.roundWinner.includes('🔴')) winB += 1;

    penaltyA += getRoundPenalty(judge, 'A');
    penaltyB += getRoundPenalty(judge, 'B');
    validityA += getRoundValidityScore(judge, 'A');
    validityB += getRoundValidityScore(judge, 'B');
    performanceA += ((judge.attackScoreA + judge.defenseScoreA) / 20) * 100;
    performanceB += ((judge.attackScoreB + judge.defenseScoreB) / 20) * 100;
  });

  const roundCount = Math.max(1, activeRounds.length);
  const claimA = countClaimStatuses(currentRound?.argTreeSnapshotA ?? []);
  const claimB = countClaimStatuses(currentRound?.argTreeSnapshotB ?? []);
  const claimSurvivalA = claimA.valid * 2 + claimA.disputed - claimA.broken * 2;
  const claimSurvivalB = claimB.valid * 2 + claimB.disputed - claimB.broken * 2;
  const maxClaimSurvival = Math.max(1, claimSurvivalA, claimSurvivalB);
  const claimScoreA = (claimSurvivalA / maxClaimSurvival) * 100;
  const claimScoreB = (claimSurvivalB / maxClaimSurvival) * 100;
  const winScoreA = ((winA + 0.5 * (roundCount - winA - winB)) / roundCount) * 100;
  const winScoreB = ((winB + 0.5 * (roundCount - winA - winB)) / roundCount) * 100;

  const finalA =
    claimScoreA * 0.35 +
    (validityA / roundCount) * 0.35 +
    (performanceA / roundCount) * 0.15 +
    winScoreA * 0.1 +
    resourceA * 0.05 -
    penaltyA;
  const finalB =
    claimScoreB * 0.35 +
    (validityB / roundCount) * 0.35 +
    (performanceB / roundCount) * 0.15 +
    winScoreB * 0.1 +
    resourceB * 0.05 -
    penaltyB;

  return {
    claimA,
    claimB,
    claimSurvivalA,
    claimSurvivalB,
    claimScoreA,
    claimScoreB,
    validityA: validityA / roundCount,
    validityB: validityB / roundCount,
    performanceA: performanceA / roundCount,
    performanceB: performanceB / roundCount,
    winScoreA,
    winScoreB,
    resourceA,
    resourceB,
    penaltyA,
    penaltyB,
    finalA,
    finalB,
    verdict: Math.abs(finalA - finalB) < 0.5 ? '⚪ 雙方相當' : finalA > finalB ? '🔵 A 方勝' : '🔴 B 方勝'
  };
};

export const formatScore = (score: number) => score.toFixed(1);
