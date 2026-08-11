import React from 'react';
import type { RoundData } from '../types/experiment';
import { BarChart2, ShieldAlert, Award, RefreshCw, FolderSearch, AlertTriangle, Zap, Trophy, CheckCircle2 } from 'lucide-react';
import { formatScore, getMatchWeightedScore } from '../utils/scoring';
import { formatPartyMarkers, partyLabelA, partyLabelB } from '../utils/partyDisplay';
import { getArgumentDebts, getFamilyResourceRows, getStateTone } from '../utils/v3Analysis';

interface DashboardTabProps {
  rounds: RoundData[];
  currentRoundIndex: number;
}

export const DashboardTab: React.FC<DashboardTabProps> = ({ rounds, currentRoundIndex }) => {
  const currentRound = rounds[currentRoundIndex] || rounds[rounds.length - 1];

  // Calculate cumulative stats up to current round
  let whataboutismA = 0;
  let whataboutismB = 0;
  let conceptShiftA = 0;
  let conceptShiftB = 0;
  let standardShiftA = 0;
  let standardShiftB = 0;
  let digUpHistoryA = 0;
  let digUpHistoryB = 0;
  let doubleStandardA = 0;
  let doubleStandardB = 0;
  let repeatedArgA = 0;
  let repeatedArgB = 0;
  let attackTotalA = 0;
  let attackTotalB = 0;
  let defenseTotalA = 0;
  let defenseTotalB = 0;
  let winA = 0;
  let winB = 0;
  let draw = 0;

  const activeRounds = rounds.slice(0, currentRoundIndex + 1);
  activeRounds.forEach(r => {
    conceptShiftA += r.judge.conceptShiftA;
    conceptShiftB += r.judge.conceptShiftB;
    whataboutismA += r.judge.whataboutismA;
    whataboutismB += r.judge.whataboutismB;
    standardShiftA += r.judge.standardShiftA;
    standardShiftB += r.judge.standardShiftB;
    digUpHistoryA += r.judge.digUpHistoryA;
    digUpHistoryB += r.judge.digUpHistoryB;
    doubleStandardA += r.judge.doubleStandardA;
    doubleStandardB += r.judge.doubleStandardB;
    repeatedArgA += r.judge.repeatedArgA;
    repeatedArgB += r.judge.repeatedArgB;
    attackTotalA += r.judge.attackScoreA;
    attackTotalB += r.judge.attackScoreB;
    defenseTotalA += r.judge.defenseScoreA;
    defenseTotalB += r.judge.defenseScoreB;

    if (r.judge.roundWinner.includes('🔵')) winA += 1;
    else if (r.judge.roundWinner.includes('🔴')) winB += 1;
    else draw += 1;
  });

  const resourceA = currentRound ? currentRound.resourceA : 100;
  const resourceB = currentRound ? currentRound.resourceB : 100;
  const familyRows = getFamilyResourceRows(currentRound?.argTreeSnapshotA ?? [], currentRound?.argTreeSnapshotB ?? []);
  const argumentDebts = getArgumentDebts(rounds, currentRoundIndex);
  const debtA = argumentDebts.filter(debt => debt.debtor === 'A').length;
  const debtB = argumentDebts.filter(debt => debt.debtor === 'B').length;
  const totalScoreA = attackTotalA + defenseTotalA;
  const totalScoreB = attackTotalB + defenseTotalB;
  const matchScore = getMatchWeightedScore(rounds, currentRoundIndex);
  const finalVerdict = formatPartyMarkers(matchScore.verdict);
  const leadingSide = totalScoreA === totalScoreB ? '雙方攻防總分持平' : totalScoreA > totalScoreB ? '🟢 A 方攻防總分領先' : '🔵 B 方攻防總分領先';
  const weightedLeader =
    Math.abs(matchScore.finalA - matchScore.finalB) < 0.5
      ? '加權總分接近，暫維持平手'
      : matchScore.finalA > matchScore.finalB
      ? '🟢 A 方加權總分領先'
      : '🔵 B 方加權總分領先';

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <BarChart2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">📊 v3 戰況與論證家族儀表板</h2>
            <p className="text-xs text-slate-400">
              即時統計至 Round {currentRound ? currentRound.roundNumber : 1} 之攻防戰力、強制接招、論證債務與各論證家族資源狀態。
            </p>
          </div>
        </div>

        <div className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-mono text-indigo-300">
          當前戰況估算
        </div>
      </div>

      {/* Match Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="text-xs text-slate-400 mb-2">累積勝場</div>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-black text-emerald-400">{winA}</span>
            <span className="text-sm text-slate-500 pb-1">:</span>
            <span className="text-3xl font-black text-blue-400">{winB}</span>
            <span className="text-xs text-slate-400 pb-1">平手 {draw}</span>
          </div>
          <p className="mt-3 text-xs text-slate-400">以裁判每回合正式判定計算，直接反映目前誰拿下更多回合。</p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="text-xs text-slate-400 mb-2">攻防總分</div>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-black text-emerald-400">{totalScoreA}</span>
            <span className="text-sm text-slate-500 pb-1">:</span>
            <span className="text-3xl font-black text-blue-400">{totalScoreB}</span>
          </div>
          <p className="mt-3 text-xs text-slate-300 font-semibold">{leadingSide}</p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="text-xs text-slate-400 mb-2">目前加權結論</div>
          <div className="text-lg font-black text-slate-100">
            {weightedLeader}
          </div>
          <p className="mt-3 text-xs text-slate-400">最後判定：{finalVerdict}。v3 以推論路徑是否仍有實質差異作為資源判讀。</p>
        </div>
      </div>

      {/* Final Verdict Standard */}
      <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100">終局勝負加權評判</h3>
              <p className="text-xs text-slate-400">核心主張與事實法律有效性優先，論證家族資源只作輔助分數，再扣除話術風險。</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950/60 px-4 py-3">
            <div className="text-[11px] text-slate-500 mb-1">目前加權結論</div>
            <div className="text-sm font-black text-amber-200">{weightedLeader}</div>
            <div className="text-lg font-black text-slate-50 mt-1">{finalVerdict}</div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 text-xs">
          {[
            {
              title: '1. 核心主張存活率',
              value: `A ${formatScore(matchScore.claimScoreA)}｜B ${formatScore(matchScore.claimScoreB)}`,
              active: matchScore.claimScoreA !== matchScore.claimScoreB,
              note: `有效/爭議/擊破：A ${matchScore.claimA.valid}/${matchScore.claimA.disputed}/${matchScore.claimA.broken}，B ${matchScore.claimB.valid}/${matchScore.claimB.disputed}/${matchScore.claimB.broken}`
            },
            {
              title: '2. 事實與法律有效性',
              value: `A ${formatScore(matchScore.validityA)}｜B ${formatScore(matchScore.validityB)}`,
              active: Math.abs(matchScore.validityA - matchScore.validityB) >= 0.5,
              note: '事實可靠度、法律相關性、直接回應、一致性與新資訊量'
            },
            {
              title: '3. 攻防表現',
              value: `A ${formatScore(matchScore.performanceA)}｜B ${formatScore(matchScore.performanceB)}`,
              active: Math.abs(matchScore.performanceA - matchScore.performanceB) >= 0.5,
              note: `原始攻防總分：A ${totalScoreA}，B ${totalScoreB}`
            },
            {
              title: '4. 回合勝場',
              value: `A ${formatScore(matchScore.winScoreA)}｜B ${formatScore(matchScore.winScoreB)}`,
              active: winA !== winB,
              note: `正式判定：A ${winA}｜B ${winB}｜平 ${draw}`
            },
            {
              title: '5. 論證家族資源',
              value: `A ${familyRows.filter(row => row.stateA !== '耗盡').length} 類｜B ${familyRows.filter(row => row.stateB !== '耗盡').length} 類`,
              active: resourceA !== resourceB,
              note: '以高/中/低/接近耗盡/耗盡描述，不使用精確百分比'
            },
            {
              title: '6. 可信度扣分',
              value: `A -${matchScore.penaltyA}｜B -${matchScore.penaltyB}`,
              active: matchScore.penaltyA !== matchScore.penaltyB,
              note: '雙標與標準切換權重大於一般翻舊帳'
            }
          ].map(rule => (
            <div
              key={rule.title}
              className={`rounded-xl border p-4 ${
                rule.active
                  ? 'border-amber-400/60 bg-amber-950/30 text-amber-100'
                  : 'border-slate-800 bg-slate-950/40 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="font-bold">{rule.title}</div>
                {rule.active && <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0" />}
              </div>
              <div className="mt-3 text-lg font-black text-slate-50">{rule.value}</div>
              <div className="mt-2 text-[11px] text-slate-400">{rule.note}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/60 p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <div className="text-xs text-slate-400">最終加權總分</div>
              <div className="mt-1 text-sm text-slate-300">公式：主張 35% + 有效性 35% + 攻防 15% + 勝場 10% + 家族資源輔助 5% - 加權扣分</div>
            </div>
            <div className="text-2xl font-black font-mono text-slate-50">
              <span className="text-emerald-400">{formatScore(matchScore.finalA)}</span>
              <span className="text-slate-500 px-2">:</span>
              <span className="text-blue-400">{formatScore(matchScore.finalB)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* v3 Argument Family Resources */}
      <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-slate-200 mb-2 flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" />
          v3 論證家族資源
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          v3 不使用沒有客觀依據的精確百分比；此表描述尚未使用且具有實質差異的推論方向。
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
                <th className="py-3 px-4 font-semibold">論證家族</th>
                <th className="py-3 px-4 font-semibold text-emerald-400 text-center">{partyLabelA}</th>
                <th className="py-3 px-4 font-semibold text-blue-400 text-center">{partyLabelB}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {familyRows.map(row => (
                <tr key={row.family}>
                  <td className="py-2.5 px-4 font-medium text-slate-300">{row.family}</td>
                  <td className="py-2.5 px-4 text-center">
                    <span className={`inline-flex min-w-20 justify-center rounded-full border px-2.5 py-0.5 font-bold ${getStateTone(row.stateA)}`}>
                      {row.stateA}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <span className={`inline-flex min-w-20 justify-center rounded-full border px-2.5 py-0.5 font-bold ${getStateTone(row.stateB)}`}>
                      {row.stateB}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* v3 Argument Debts */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-slate-200 mb-2 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-orange-400" />
          v3 未回答論證債務
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          從 Round 2 起，每方必須先處理對方上一回合的重要核心論證；主要迴避會形成論證債務。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="text-slate-400">A 方債務</div>
            <div className="mt-1 text-2xl font-black text-emerald-400">{debtA}</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="text-slate-400">B 方債務</div>
            <div className="mt-1 text-2xl font-black text-blue-400">{debtB}</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="text-slate-400">論證穿透風險</div>
            <div className="mt-1 text-2xl font-black text-orange-300">
              {argumentDebts.filter(debt => debt.roundsOwed >= 2 && debt.status !== '🟢 有效回應').length}
            </div>
          </div>
        </div>
        {argumentDebts.length > 0 && (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
                  <th className="py-3 px-4">核心論證</th>
                  <th className="py-3 px-4">被攻擊方</th>
                  <th className="py-3 px-4">狀態</th>
                  <th className="py-3 px-4 text-right">拖欠回合</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {argumentDebts.map(debt => (
                  <tr key={`${debt.argId}-${debt.debtor}`}>
                    <td className="py-2.5 px-4 font-mono font-bold">{debt.argId}</td>
                    <td className="py-2.5 px-4">{debt.debtor === 'A' ? 'A 方' : 'B 方'}</td>
                    <td className="py-2.5 px-4">{debt.status}</td>
                    <td className="py-2.5 px-4 text-right font-mono">{debt.roundsOwed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Cumulative War Stats Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-slate-200 mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" />
          累積攻防指標對比表 (Round 1 ~ Round {currentRound ? currentRound.roundNumber : 1})
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400">
                <th className="py-3 px-4 font-semibold">統計指標</th>
                <th className="py-3 px-4 font-semibold text-emerald-400 text-center">{partyLabelA} (民進黨)</th>
                <th className="py-3 px-4 font-semibold text-blue-400 text-center">{partyLabelB} (國民黨)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400 flex items-center gap-1.5">
                  <FolderSearch className="w-3.5 h-3.5 text-indigo-400" />
                  📂 翻舊帳歷史案例次數
                </td>
                <td className="py-2.5 px-4 text-center font-mono text-emerald-300 font-bold">{digUpHistoryA} 次</td>
                <td className="py-2.5 px-4 text-center font-mono text-blue-300 font-bold">{digUpHistoryB} 次</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400 flex items-center gap-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                  🔄 Whataboutism 使用次數
                </td>
                <td className="py-2.5 px-4 text-center font-mono text-amber-300 font-bold">{whataboutismA} 次</td>
                <td className="py-2.5 px-4 text-center font-mono text-amber-300 font-bold">{whataboutismB} 次</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  ⚠️ 明顯雙標警告次數
                </td>
                <td className="py-2.5 px-4 text-center font-mono text-rose-400">{doubleStandardA} 次</td>
                <td className="py-2.5 px-4 text-center font-mono text-rose-400">{doubleStandardB} 次</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-orange-400" />
                  ⚖️ 概念偷換 / 標準切換
                </td>
                <td className="py-2.5 px-4 text-center font-mono text-orange-300">{conceptShiftA} / {standardShiftA} 次</td>
                <td className="py-2.5 px-4 text-center font-mono text-orange-300">{conceptShiftB} / {standardShiftB} 次</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-purple-400" />
                  🔁 重複論證警告次數 (上限 2 次)
                </td>
                <td className="py-2.5 px-4 text-center font-mono text-purple-300">{repeatedArgA} 次</td>
                <td className="py-2.5 px-4 text-center font-mono text-purple-300">{repeatedArgB} 次</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Round Winner Timeline Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-slate-200 mb-4 flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-400" />
          歷屆回合戰果勝負推移圖
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
          {rounds.map((r, idx) => {
            const isWinnerA = r.judge.roundWinner.includes('🔵');
            const isWinnerB = r.judge.roundWinner.includes('🔴');
            const isSelected = currentRoundIndex === idx;

            return (
              <div
                key={r.roundNumber}
                className={`p-3 rounded-xl border text-center transition-all ${
                  isSelected ? 'ring-2 ring-indigo-500 shadow-lg' : ''
                } ${
                  isWinnerA
                    ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-300'
                    : isWinnerB
                    ? 'bg-blue-950/40 border-blue-800/80 text-blue-300'
                    : 'bg-slate-800/50 border-slate-700 text-slate-400'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-500 mb-1">R{r.roundNumber}</div>
                <div className="text-xs font-bold">
                  {isWinnerA ? '🟢 A 勝' : isWinnerB ? '🔵 B 勝' : '⚪ 平手'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
