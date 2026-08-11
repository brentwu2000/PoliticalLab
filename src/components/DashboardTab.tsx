import React from 'react';
import type { RoundData } from '../types/experiment';
import { BarChart2, ShieldAlert, Award, RefreshCw, FolderSearch, AlertTriangle, Zap, Trophy, CheckCircle2 } from 'lucide-react';
import { formatScore, getMatchWeightedScore } from '../utils/scoring';

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
  const totalScoreA = attackTotalA + defenseTotalA;
  const totalScoreB = attackTotalB + defenseTotalB;
  const matchScore = getMatchWeightedScore(rounds, currentRoundIndex);
  const finalVerdict = matchScore.verdict;
  const leadingSide = totalScoreA === totalScoreB ? '雙方攻防總分持平' : totalScoreA > totalScoreB ? '🔵 A 方攻防總分領先' : '🔴 B 方攻防總分領先';
  const weightedLeader =
    Math.abs(matchScore.finalA - matchScore.finalB) < 0.5
      ? '加權總分接近，暫維持平手'
      : matchScore.finalA > matchScore.finalB
      ? '🔵 A 方加權總分領先'
      : '🔴 B 方加權總分領先';

  // Render progress bar representation
  const renderProgressBar = (pct: number, colorClass: string) => {
    const blocks = Math.round(pct / 10);
    const filled = '█'.repeat(blocks);
    const empty = '░'.repeat(10 - blocks);
    return (
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs font-mono">
          <span className="text-slate-400">論證資源殘量:</span>
          <span className="font-bold text-slate-100">{pct}%</span>
        </div>
        <div className="w-full bg-slate-950 rounded-lg p-1.5 border border-slate-800 flex font-mono text-sm tracking-wider overflow-hidden">
          <span className={colorClass}>{filled}</span>
          <span className="text-slate-700">{empty}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <BarChart2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">📊 戰況與論證資源儀表板 (Step 10)</h2>
            <p className="text-xs text-slate-400">
              即時統計至 Round {currentRound ? currentRound.roundNumber : 1} 之攻防戰力、翻舊帳、Whataboutism 與論證資源殘量。
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
            <span className="text-3xl font-black text-blue-400">{winA}</span>
            <span className="text-sm text-slate-500 pb-1">:</span>
            <span className="text-3xl font-black text-rose-400">{winB}</span>
            <span className="text-xs text-slate-400 pb-1">平手 {draw}</span>
          </div>
          <p className="mt-3 text-xs text-slate-400">以裁判每回合正式判定計算，直接反映目前誰拿下更多回合。</p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="text-xs text-slate-400 mb-2">攻防總分</div>
          <div className="flex items-end gap-3">
            <span className="text-3xl font-black text-blue-400">{totalScoreA}</span>
            <span className="text-sm text-slate-500 pb-1">:</span>
            <span className="text-3xl font-black text-rose-400">{totalScoreB}</span>
          </div>
          <p className="mt-3 text-xs text-slate-300 font-semibold">{leadingSide}</p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl">
          <div className="text-xs text-slate-400 mb-2">目前加權結論</div>
          <div className="text-lg font-black text-slate-100">
            {weightedLeader}
          </div>
          <p className="mt-3 text-xs text-slate-400">最後判定：{finalVerdict}。資源只作輔助觀察，不直接決定敗北。</p>
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
              <p className="text-xs text-slate-400">核心主張與事實法律有效性優先，資源殘量只作輔助分數，再扣除話術風險。</p>
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
              title: '5. 資源殘量',
              value: `A ${resourceA}%｜B ${resourceB}%`,
              active: resourceA !== resourceB,
              note: '只佔低權重，用來觀察重複與新論點枯竭風險'
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
              <div className="mt-1 text-sm text-slate-300">公式：主張 35% + 有效性 35% + 攻防 15% + 勝場 10% + 資源 5% - 加權扣分</div>
            </div>
            <div className="text-2xl font-black font-mono text-slate-50">
              <span className="text-blue-400">{formatScore(matchScore.finalA)}</span>
              <span className="text-slate-500 px-2">:</span>
              <span className="text-rose-400">{formatScore(matchScore.finalB)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Argument Resource Gauges */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Agent A Resource Gauge */}
        <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-xl relative">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <h3 className="text-base font-bold text-blue-400">🔵 Agent A｜民進黨 資源殘量</h3>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
              {resourceA > 30 ? '高 / 充足' : resourceA > 10 ? '中 / 消耗中' : '低 / 接近耗盡'}
            </span>
          </div>

          <div className="mt-4">
            {renderProgressBar(resourceA, 'text-blue-400')}
          </div>

          <p className="mt-3 text-[11px] text-slate-400 leading-relaxed">
            依據目前已建立的論證樹，🔵 A 方還剩餘 <strong className="text-blue-300">{resourceA}%</strong> 尚未使用且具有實質差異的攻防方向。
          </p>
        </div>

        {/* Agent B Resource Gauge */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-6 shadow-xl relative">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <h3 className="text-base font-bold text-rose-400">🔴 Agent B｜國民黨 資源殘量</h3>
            </div>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800">
              {resourceB > 30 ? '高 / 充足' : resourceB > 0 ? '低 / 接近耗盡' : '已耗盡 / 輔助扣分'}
            </span>
          </div>

          <div className="mt-4">
            {renderProgressBar(resourceB, 'text-rose-400')}
          </div>

          <p className="mt-3 text-[11px] text-slate-400 leading-relaxed">
            依據目前已建立的論證樹，🔴 B 方剩餘 <strong className="text-rose-300">{resourceB}%</strong> 攻防資源。
            {resourceB === 0 && <span className="text-rose-400 font-bold block mt-1">資源歸零代表新論點枯竭風險升高，但仍須回到核心主張與有效性判斷。</span>}
          </p>
        </div>

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
                <th className="py-3 px-4 font-semibold text-blue-400 text-center">🔵 Agent A (民進黨)</th>
                <th className="py-3 px-4 font-semibold text-rose-400 text-center">🔴 Agent B (國民黨)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-2.5 px-4 font-medium text-slate-400 flex items-center gap-1.5">
                  <FolderSearch className="w-3.5 h-3.5 text-indigo-400" />
                  📂 翻舊帳歷史案例次數
                </td>
                <td className="py-2.5 px-4 text-center font-mono text-blue-300 font-bold">{digUpHistoryA} 次</td>
                <td className="py-2.5 px-4 text-center font-mono text-rose-300 font-bold">{digUpHistoryB} 次</td>
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
                    ? 'bg-blue-950/40 border-blue-800/80 text-blue-300'
                    : isWinnerB
                    ? 'bg-rose-950/40 border-rose-800/80 text-rose-300'
                    : 'bg-slate-800/50 border-slate-700 text-slate-400'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-500 mb-1">R{r.roundNumber}</div>
                <div className="text-xs font-bold">
                  {isWinnerA ? '🔵 A 勝' : isWinnerB ? '🔴 B 勝' : '⚪ 平手'}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
