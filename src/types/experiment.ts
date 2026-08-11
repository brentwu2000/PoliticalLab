export type StatusType = '🟢 有效' | '🟡 有爭議' | '🔴 已擊破';
export type CaseId = '3plus11' | 'jinghua' | 'medigen';

export interface ArgumentNode {
  id: string; // e.g. "A-01", "B-01"
  party: 'A' | 'B';
  title: string;
  category: '法律論證' | '政治責任' | '道德責任' | '程序理由' | '翻舊帳/歷史案例' | 'Whataboutism';
  description: string;
  status: StatusType;
  usedCount: number; // Max 2 (or configurable)
  createdRound: number;
  lastUpdatedRound: number;
  citation?: string;
  rebuttalNote?: string;
}

export interface AgentResponse {
  strategy: string;
  argId: string; // A-XX or B-XX
  argTitle: string;
  content: string;
  citation: string;
  closingQuestion: string;
  usedWhataboutism?: boolean;
  usedDigUpHistory?: boolean;
}

export interface JudgeReport {
  newArgA: string;
  newArgB: string;
  strategyA: string;
  strategyB: string;
  legalRatingA: '🟢' | '🟡' | '🔴';
  legalRatingB: '🟢' | '🟡' | '🔴';
  factRatingA: '🟢' | '🟡' | '🔴';
  factRatingB: '🟢' | '🟡' | '🔴';
  conceptShiftA: number;
  conceptShiftB: number;
  whataboutismA: number;
  whataboutismB: number;
  standardShiftA: number;
  standardShiftB: number;
  doubleStandardA: number;
  doubleStandardB: number;
  repeatedArgA: number;
  repeatedArgB: number;
  digUpHistoryA: number;
  digUpHistoryB: number;
  attackScoreA: number; // 0-10
  attackScoreB: number;
  defenseScoreA: number; // 0-10
  defenseScoreB: number;
  roundWinner: '🔵 Agent A 本回合優勢' | '🔴 Agent B 本回合優勢' | '⚪ 雙方相當';
  winnerReason: string;
}

export interface RoundData {
  roundNumber: number;
  agentA: AgentResponse;
  agentB: AgentResponse;
  judge: JudgeReport;
  resourceA: number; // Percentage e.g. 90
  resourceB: number; // Percentage e.g. 85
  argTreeSnapshotA: ArgumentNode[];
  argTreeSnapshotB: ArgumentNode[];
}

export interface EventTimelineItem {
  time: string;
  title: string;
  description: string;
}

export interface EventDataPackage {
  title: string;
  agentAName: string;
  agentBName: string;
  agentAParty: string;
  agentBParty: string;
  timeline: EventTimelineItem[];
  involvedParties: { name: string; title: string; notes: string }[];
  relevantLaws: { law: string; text: string }[];
  partyAStance: string[];
  partyBStance: string[];
  unverifiedItems: string[];
}

export interface MirrorPattern {
  id: string;
  patternTitle: string;
  agentAStatement: string;
  agentBStatement: string;
  explanation: string;
}

export interface EngineConfig {
  caseId: CaseId;
  maxArgUsageLimit: number; // default 2
  judgeStrictness: 'standard' | 'strict'; // standard vs strict penalty scaling
  playbackSpeed: number; // 1x, 2x, 4x
}

export interface CaseDataBundle {
  id: CaseId;
  title: string;
  initialEventDataPackage: EventDataPackage;
  initialNodesA: ArgumentNode[];
  initialNodesB: ArgumentNode[];
  mockRounds: RoundData[];
  mirrorPatternsData: MirrorPattern[];
}
