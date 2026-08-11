import React from 'react';
import type { RoundData } from '../types/experiment';
import { Shield, Award, Scale, HelpCircle, FileCheck, CornerDownRight, Target, ShieldCheck, Gauge, AlertTriangle, ArrowRight, Activity, TrendingUp } from 'lucide-react';
import { formatScore, getRoundPenalty, getRoundValidityScore, getRoundWeightedScore } from '../utils/scoring';
import { formatPartyMarkers, partyLabelA, partyLabelB } from '../utils/partyDisplay';
import { getRoundV3Meta } from '../utils/v3Analysis';

interface DebateTabProps {
  rounds: RoundData[];
  selectedRoundIndex: number;
  setSelectedRoundIndex: (idx: number) => void;
}

export const DebateTab: React.FC<DebateTabProps> = ({
  rounds,
  selectedRoundIndex,
  setSelectedRoundIndex
}) => {
  const currentRoundData = rounds[selectedRoundIndex];

  if (!currentRoundData) {
    return (
      <div className="p-12 text-center text-slate-400">
        無回合資料，請點擊上方按鈕開始辯論。
      </div>
    );
  }

  const { roundNumber, agentA, agentB, judge } = currentRoundData;
  const attackDelta = judge.attackScoreA - judge.attackScoreB;
  const defenseDelta = judge.defenseScoreA - judge.defenseScoreB;
  const totalA = judge.attackScoreA + judge.defenseScoreA;
  const totalB = judge.attackScoreB + judge.defenseScoreB;
  const totalDelta = totalA - totalB;
  const penaltyA = getRoundPenalty(judge, 'A');
  const penaltyB = getRoundPenalty(judge, 'B');
  const validityA = getRoundValidityScore(judge, 'A');
  const validityB = getRoundValidityScore(judge, 'B');
  const weightedScoreA = getRoundWeightedScore(currentRoundData, 'A');
  const weightedScoreB = getRoundWeightedScore(currentRoundData, 'B');
  const v3Meta = getRoundV3Meta(rounds, selectedRoundIndex);
  const weightedDelta = weightedScoreA - weightedScoreB;
  const weightedWinner =
    Math.abs(weightedDelta) < 0.5 ? '⚪ 加權後雙方相當' : weightedDelta > 0 ? '🟢 加權後 A 方優勢' : '🔵 加權後 B 方優勢';
  const isWinnerA = judge.roundWinner.includes('🔵');
  const isWinnerB = judge.roundWinner.includes('🔴');
  const verdictTone = isWinnerA
    ? 'border-emerald-500/50 bg-emerald-950/30 text-emerald-200'
    : isWinnerB
    ? 'border-blue-500/50 bg-blue-950/30 text-blue-200'
    : 'border-slate-600 bg-slate-800/50 text-slate-200';
  const weightedShift = Math.max(-46, Math.min(46, weightedDelta * 1.6));
  const attackMax = Math.max(1, judge.attackScoreA + judge.attackScoreB);
  const defenseMax = Math.max(1, judge.defenseScoreA + judge.defenseScoreB);
  const qualityMax = Math.max(1, weightedScoreA + weightedScoreB);
  const attackShareA = (judge.attackScoreA / attackMax) * 100;
  const defenseShareA = (judge.defenseScoreA / defenseMax) * 100;
  const qualityShareA = (weightedScoreA / qualityMax) * 100;
  const firstMoverLabel = v3Meta.firstMover === 'A' ? partyLabelA : partyLabelB;
  const secondMoverLabel = v3Meta.firstMover === 'A' ? partyLabelB : partyLabelA;

  const getAdvantageText = (delta: number, aLabel: string, bLabel: string) => {
    if (delta > 0) return `${aLabel} +${delta}`;
    if (delta < 0) return `${bLabel} +${Math.abs(delta)}`;
    return '雙方持平';
  };

  const renderScoreBar = (aScore: number, bScore: number, maxScore: number) => (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${Math.min(100, (aScore / maxScore) * 100)}%` }}
        />
      </div>
      <div className="text-[11px] font-mono text-slate-400 w-14 text-center">
        {aScore}:{bScore}
      </div>
      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-500"
          style={{ width: `${Math.min(100, (bScore / maxScore) * 100)}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Round Selector Bar */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-sm shadow-md">
            ⚔️ ROUND {roundNumber}
          </div>
          <span className="text-xs text-slate-400">
            切換查看歷史對決記錄：
          </span>
        </div>

        {/* Round Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1">
          {rounds.map((r, idx) => (
            <button
              key={r.roundNumber}
              onClick={() => setSelectedRoundIndex(idx)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-all ${
                selectedRoundIndex === idx
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/20'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-slate-200'
              }`}
            >
              R{r.roundNumber}
            </button>
          ))}
        </div>
      </div>

      {/* Intuitive Verdict Strip */}
      <div className={`border rounded-2xl p-5 shadow-xl ${verdictTone}`}>
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_1.5fr] gap-5 items-stretch">
          <div className="flex flex-col justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-2">本回合直觀判決</div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400 flex-shrink-0" />
                <div>
                  <div className="text-xl font-black text-slate-50">{formatPartyMarkers(judge.roundWinner)}</div>
                  <div className="text-xs text-slate-300 mt-1">
                    {totalDelta === 0 ? '攻防總分相同，改看關鍵事實命中與防守完整度。' : `攻防總分差 ${Math.abs(totalDelta)} 分，${totalDelta > 0 ? 'A 方' : 'B 方'}較佔上風。`}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/40 p-3">
                <div className="text-slate-500 mb-1">攻擊</div>
                <div className="font-bold text-slate-100">{getAdvantageText(attackDelta, 'A', 'B')}</div>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/40 p-3">
                <div className="text-slate-500 mb-1">防守</div>
                <div className="font-bold text-slate-100">{getAdvantageText(defenseDelta, 'A', 'B')}</div>
              </div>
              <div className="rounded-lg border border-slate-700/80 bg-slate-950/40 p-3">
                <div className="text-slate-500 mb-1">加權扣分</div>
                <div className="font-bold text-slate-100">{penaltyA}:{penaltyB}</div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-700/80 bg-slate-950/40 p-4 space-y-4">
            <div className="grid grid-cols-[5rem_1fr] gap-3 items-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                攻擊力
              </div>
              {renderScoreBar(judge.attackScoreA, judge.attackScoreB, 10)}
            </div>
            <div className="grid grid-cols-[5rem_1fr] gap-3 items-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                防守力
              </div>
              {renderScoreBar(judge.defenseScoreA, judge.defenseScoreB, 10)}
            </div>
            <div className="grid grid-cols-[5rem_1fr] gap-3 items-center">
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <Gauge className="w-3.5 h-3.5 text-indigo-400" />
                總分
              </div>
              {renderScoreBar(totalA, totalB, 20)}
            </div>
            <div className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
              <CornerDownRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
              <span>{formatPartyMarkers(judge.winnerReason)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Round Flow */}
      <div className="round-flow-panel rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-xl overflow-hidden">
        <div className="relative z-10 flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-100">
                <Activity className="w-4 h-4 text-cyan-300" />
                Round {roundNumber} 即時攻防態勢
              </div>
              <p className="mt-1 text-xs text-slate-400">先攻順序、強制接招、攻防數值與加權結果合併顯示。</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950/60 px-3 py-2 text-xs font-bold text-slate-200">
              <span className={v3Meta.firstMover === 'A' ? 'text-emerald-300' : 'text-blue-300'}>{firstMoverLabel}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
              <span className={v3Meta.firstMover === 'A' ? 'text-blue-300' : 'text-emerald-300'}>{secondMoverLabel}</span>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div className={`round-combatant ${v3Meta.firstMover === 'A' ? 'is-first' : ''} border-emerald-500/40 bg-emerald-950/20`}>
              <div className="text-xs text-emerald-300 font-bold">{partyLabelA}</div>
              <div className="mt-1 text-lg font-black text-slate-50">{formatScore(weightedScoreA)}</div>
              <div className="mt-1 text-[11px] text-slate-400">強制接招：{v3Meta.forcedTargetA}</div>
              <div className="mt-2 text-[11px] font-bold text-emerald-200">{v3Meta.forcedStatusA}</div>
            </div>

            <div className="relative w-28 sm:w-40 h-24 flex items-center justify-center">
              <div className="round-orbit"></div>
              <div className="relative z-10 rounded-full border border-cyan-400/40 bg-slate-950 px-3 py-2 text-center shadow-lg shadow-cyan-500/10">
                <div className="text-[10px] text-slate-500">優勢</div>
                <div className="text-xs font-black text-cyan-200">{Math.abs(weightedDelta) < 0.5 ? '持平' : weightedDelta > 0 ? 'A' : 'B'}</div>
              </div>
            </div>

            <div className={`round-combatant ${v3Meta.firstMover === 'B' ? 'is-first' : ''} border-blue-500/40 bg-blue-950/20 text-right`}>
              <div className="text-xs text-blue-300 font-bold">{partyLabelB}</div>
              <div className="mt-1 text-lg font-black text-slate-50">{formatScore(weightedScoreB)}</div>
              <div className="mt-1 text-[11px] text-slate-400">強制接招：{v3Meta.forcedTargetB}</div>
              <div className="mt-2 text-[11px] font-bold text-blue-200">{v3Meta.forcedStatusB}</div>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: '攻擊命中', a: judge.attackScoreA, b: judge.attackScoreB, share: attackShareA },
              { label: '防守完整', a: judge.defenseScoreA, b: judge.defenseScoreB, share: defenseShareA },
              { label: '加權品質', a: formatScore(weightedScoreA), b: formatScore(weightedScoreB), share: qualityShareA }
            ].map(item => (
              <div key={item.label} className="grid grid-cols-[4.5rem_1fr] sm:grid-cols-[5rem_1fr_auto] gap-3 items-center text-xs">
                <div className="text-slate-400 font-semibold">{item.label}</div>
                <div className="relative h-3 rounded-full bg-slate-950 border border-slate-800 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-emerald-500/80 round-bar-fill" style={{ width: `${item.share}%` }} />
                  <div className="absolute inset-y-0 right-0 bg-blue-500/80 round-bar-fill" style={{ width: `${100 - item.share}%` }} />
                  <div className="absolute top-0 bottom-0 w-px bg-slate-200/50" style={{ left: '50%' }} />
                </div>
                <div className="hidden sm:block font-mono text-slate-400 min-w-24 text-right">
                  <span className="text-emerald-300">{item.a}</span>
                  <span className="px-1">:</span>
                  <span className="text-blue-300">{item.b}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="flex items-center justify-between gap-3 text-xs">
              <div className="font-bold text-emerald-300">A</div>
              <div className="relative h-8 flex-1">
                <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-slate-800"></div>
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-600"></div>
                <div
                  className="round-advantage-pin absolute top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border border-cyan-300 bg-cyan-400 shadow-lg shadow-cyan-500/30"
                  style={{ left: `calc(50% + ${weightedShift}%)` }}
                >
                  <TrendingUp className="w-3.5 h-3.5 text-slate-950" />
                </div>
              </div>
              <div className="font-bold text-blue-300">B</div>
            </div>
            <div className="mt-3 text-center text-xs font-bold text-cyan-200">{weightedWinner}</div>
          </div>
        </div>
      </div>

      {/* Agents Arena: A vs B */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Agent A Card */}
        <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                <h3 className="text-lg font-bold text-emerald-400">{partyLabelA}｜民進黨</h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-mono">
                論證：{agentA.argId}
              </span>
            </div>

            {/* Strategy */}
            <div className="mt-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-900/50 text-xs text-emerald-200">
              <strong className="text-emerald-400 font-semibold block mb-1">出招意圖：</strong>
              {agentA.strategy}
            </div>

            {/* Main Argument Output */}
            <div className="mt-4 space-y-3">
              <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                主張：{agentA.argTitle}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 font-normal">
                {agentA.content}
              </p>
            </div>

            {/* Citation Source */}
            {agentA.citation && (
              <div className="mt-3 text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>來源依據：</span>
                <span className="text-slate-300 underline">{agentA.citation}</span>
              </div>
            )}
          </div>

          {/* Closing Question */}
          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-800/50 text-xs text-emerald-200 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-300 block mb-0.5">🔥 攻防質問收尾：</strong>
                <span className="italic font-medium text-slate-200">"{agentA.closingQuestion}"</span>
              </div>
            </div>
          </div>
        </div>

        {/* Agent B Card */}
        <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></span>
                <h3 className="text-lg font-bold text-blue-400">{partyLabelB}｜國民黨</h3>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-950/80 text-blue-300 border border-blue-800 font-mono">
                論證：{agentB.argId}
              </span>
            </div>

            {/* Strategy */}
            <div className="mt-4 p-3 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs text-blue-200">
              <strong className="text-blue-400 font-semibold block mb-1">出招意圖：</strong>
              {agentB.strategy}
            </div>

            {/* Badges for Whataboutism / Dig History */}
            {(agentB.usedWhataboutism || agentB.usedDigUpHistory) && (
              <div className="mt-2 flex items-center gap-2">
                {agentB.usedWhataboutism && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    🔄 Whataboutism +1
                  </span>
                )}
                {agentB.usedDigUpHistory && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    📂 翻舊帳 +1
                  </span>
                )}
              </div>
            )}

            {/* Main Argument Output */}
            <div className="mt-4 space-y-3">
              <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-blue-400" />
                主張：{agentB.argTitle}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800/80 font-normal whitespace-pre-line">
                {agentB.content}
              </p>
            </div>

            {/* Citation Source */}
            {agentB.citation && (
              <div className="mt-3 text-xs text-slate-400 flex items-center gap-1.5 font-mono">
                <FileCheck className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <span>來源依據：</span>
                <span className="text-slate-300 underline">{agentB.citation}</span>
              </div>
            )}
          </div>

          {/* Closing Question */}
          <div className="mt-6 pt-4 border-t border-slate-800/80">
            <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-800/50 text-xs text-blue-200 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-blue-300 block mb-0.5">🔥 攻防質問收尾：</strong>
                <span className="italic font-medium text-slate-200">"{agentB.closingQuestion}"</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Agent C Judge Report Table */}
      <div className="bg-slate-900/90 border border-purple-500/40 rounded-2xl p-6 shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-purple-300">⚖️ Agent C｜裁判報告與回合評定</h3>
              <p className="text-xs text-slate-400">依實驗規範第八條產出客觀指標表格與論證強度評判</p>
            </div>
          </div>

          {/* Winner Pill */}
          <div className="px-4 py-2 rounded-xl bg-purple-950/80 border border-purple-500/50 text-sm font-bold text-purple-200 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>{formatPartyMarkers(judge.roundWinner)}</span>
          </div>
        </div>

        {/* Winner Reason */}
        <div className="mt-4 p-3 rounded-xl bg-purple-950/30 border border-purple-900/50 text-xs text-purple-200 flex items-center gap-2">
          <CornerDownRight className="w-4 h-4 text-purple-400 flex-shrink-0" />
          <span><strong>裁判判定依據：</strong> {formatPartyMarkers(judge.winnerReason)}</span>
        </div>

        <div className="mt-4 rounded-xl border border-cyan-500/30 bg-cyan-950/15 p-4">
          <div className="flex items-center gap-2 text-sm font-bold text-cyan-200 mb-3">
            <Scale className="w-4 h-4" />
            v3 強制接招檢查
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg border border-slate-700/80 bg-slate-950/40 p-3">
              <div className="text-slate-500 mb-1">本回合先攻</div>
              <div className="font-bold text-slate-100">
                {v3Meta.firstMover === 'A' ? `${partyLabelA} 先攻` : `${partyLabelB} 先攻`}
              </div>
            </div>
            <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-3">
              <div className="text-emerald-300 font-bold mb-1">{partyLabelA} 強制接招</div>
              <p className="text-slate-300">回應 {v3Meta.forcedTargetA}：{v3Meta.forcedStatusA}</p>
            </div>
            <div className="rounded-lg border border-blue-500/30 bg-blue-950/20 p-3">
              <div className="text-blue-300 font-bold mb-1">{partyLabelB} 強制接招</div>
              <p className="text-slate-300">回應 {v3Meta.forcedTargetB}：{v3Meta.forcedStatusB}</p>
            </div>
          </div>
          <p className="mt-3 text-[11px] text-slate-400">
            v3 規則要求從 Round 2 起先處理對方上一回合最重要且尚未充分回答的核心論證，再提出新論證。
          </p>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-3">
            <div className="flex items-center gap-1.5 font-bold text-amber-300 mb-1">
              <Target className="w-3.5 h-3.5" />
              攻擊命中
            </div>
            <p className="text-slate-300">A {judge.attackScoreA}/10 vs B {judge.attackScoreB}/10，{getAdvantageText(attackDelta, 'A 方攻勢', 'B 方攻勢')}。</p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3">
            <div className="flex items-center gap-1.5 font-bold text-emerald-300 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              防守完整
            </div>
            <p className="text-slate-300">A {judge.defenseScoreA}/10 vs B {judge.defenseScoreB}/10，{getAdvantageText(defenseDelta, 'A 方防線', 'B 方防線')}。</p>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3">
            <div className="flex items-center gap-1.5 font-bold text-rose-300 mb-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              加權可信度扣分
            </div>
            <p className="text-slate-300">偷換概念、雙標、重複論證等訊號：A -{penaltyA}，B -{penaltyB}。</p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-cyan-500/30 bg-cyan-950/15 p-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-cyan-200">
                <Gauge className="w-4 h-4" />
                本回合加權評分
              </div>
              <p className="mt-1 text-xs text-slate-400">
                有效性 70% + 攻防表現 30% - 加權扣分；有效性含事實、法律、直接回應、一致性與新資訊量。
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-cyan-200">{weightedWinner}</div>
              <div className="mt-1 text-xl font-black font-mono text-slate-50">
                <span className="text-emerald-400">{formatScore(weightedScoreA)}</span>
                <span className="text-slate-500 px-2">:</span>
                <span className="text-blue-400">{formatScore(weightedScoreB)}</span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg border border-slate-700/80 bg-slate-950/40 p-3">
              <div className="text-slate-500 mb-1">事實/法律有效性</div>
              <div className="font-mono font-bold text-slate-100">A {formatScore(validityA)}｜B {formatScore(validityB)}</div>
            </div>
            <div className="rounded-lg border border-slate-700/80 bg-slate-950/40 p-3">
              <div className="text-slate-500 mb-1">攻防表現換算</div>
              <div className="font-mono font-bold text-slate-100">A {formatScore((totalA / 20) * 100)}｜B {formatScore((totalB / 20) * 100)}</div>
            </div>
            <div className="rounded-lg border border-slate-700/80 bg-slate-950/40 p-3">
              <div className="text-slate-500 mb-1">可信度扣分</div>
              <div className="font-mono font-bold text-slate-100">A -{penaltyA}｜B -{penaltyB}</div>
            </div>
          </div>
        </div>

        {/* Judge Metric Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
                <th className="py-3 px-4 font-semibold">評估項目</th>
                <th className="py-3 px-4 font-semibold text-emerald-400 text-center">{partyLabelA} (民進黨)</th>
                <th className="py-3 px-4 font-semibold text-blue-400 text-center">{partyLabelB} (國民黨)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400">新論證編號</td>
                <td className="py-2.5 px-4 text-center font-mono font-bold text-emerald-400">{judge.newArgA}</td>
                <td className="py-2.5 px-4 text-center font-mono font-bold text-blue-400">{judge.newArgB}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400">法律論證強度</td>
                <td className="py-2.5 px-4 text-center text-sm">{judge.legalRatingA}</td>
                <td className="py-2.5 px-4 text-center text-sm">{judge.legalRatingB}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400">事實準確度</td>
                <td className="py-2.5 px-4 text-center text-sm">{judge.factRatingA}</td>
                <td className="py-2.5 px-4 text-center text-sm">{judge.factRatingB}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400">偷換概念次數</td>
                <td className="py-2.5 px-4 text-center font-mono">{judge.conceptShiftA}</td>
                <td className="py-2.5 px-4 text-center font-mono">{judge.conceptShiftB}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400">Whataboutism 次數</td>
                <td className="py-2.5 px-4 text-center font-mono text-amber-400">{judge.whataboutismA}</td>
                <td className="py-2.5 px-4 text-center font-mono text-amber-400">{judge.whataboutismB}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400">標準切換次數</td>
                <td className="py-2.5 px-4 text-center font-mono">{judge.standardShiftA}</td>
                <td className="py-2.5 px-4 text-center font-mono">{judge.standardShiftB}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400">明顯雙標次數</td>
                <td className="py-2.5 px-4 text-center font-mono text-rose-400">{judge.doubleStandardA}</td>
                <td className="py-2.5 px-4 text-center font-mono text-rose-400">{judge.doubleStandardB}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400">重複論證警告</td>
                <td className="py-2.5 px-4 text-center font-mono text-purple-400">{judge.repeatedArgA}</td>
                <td className="py-2.5 px-4 text-center font-mono text-purple-400">{judge.repeatedArgB}</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400">翻舊帳次數</td>
                <td className="py-2.5 px-4 text-center font-mono text-indigo-400">{judge.digUpHistoryA}</td>
                <td className="py-2.5 px-4 text-center font-mono text-indigo-400">{judge.digUpHistoryB}</td>
              </tr>
              <tr className="bg-slate-950/40 font-bold">
                <td className="py-2.5 px-4 font-semibold text-slate-200">本回合攻防得分 (攻 / 防)</td>
                <td className="py-2.5 px-4 text-center text-emerald-400 font-mono">
                  {judge.attackScoreA} / 10 (攻) │ {judge.defenseScoreA} / 10 (防)
                </td>
                <td className="py-2.5 px-4 text-center text-blue-400 font-mono">
                  {judge.attackScoreB} / 10 (攻) │ {judge.defenseScoreB} / 10 (防)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
