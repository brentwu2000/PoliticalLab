import React from 'react';
import type { MirrorPattern } from '../types/experiment';
import { Dna, HelpCircle, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';

interface MirrorAnalysisTabProps {
  mirrorPatterns?: MirrorPattern[];
}

export const MirrorAnalysisTab: React.FC<MirrorAnalysisTabProps> = ({ mirrorPatterns = [] }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-950/80 via-slate-900 to-indigo-950/80 border border-purple-500/40 rounded-2xl p-6 shadow-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-purple-600/30 text-purple-300 border border-purple-500/40 shadow-lg">
            <Dna className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
              🧬 政治話術鏡像與賽後深度分析 (Step 14)
            </h2>
            <p className="text-xs text-purple-200/80">
              觀察當政治立場互換時，兩黨是否使用幾乎完全相同的辯護邏輯與攻擊話術。
            </p>
          </div>
        </div>

        <span className="px-3 py-1.5 rounded-xl bg-purple-500/20 text-purple-200 border border-purple-500/30 text-xs font-semibold">
          辯論結束終局分析
        </span>
      </div>

      {/* Final Verdict Standard */}
      <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
          <div className="p-3 rounded-xl bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100">最終勝負怎麼判</h3>
            <p className="text-xs text-slate-400">終局不是單看單回合口才，也不是誰先沒新論點誰就輸；主張是否成立與事實法律有效性優先。</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="rounded-xl border border-amber-400/60 bg-amber-950/30 p-4">
            <div className="flex items-center justify-between gap-2">
              <strong className="text-amber-200">1. 核心主張存活</strong>
              <CheckCircle2 className="w-4 h-4 text-amber-300 flex-shrink-0" />
            </div>
            <p className="mt-3 text-slate-300">先看主要命題是否仍成立、對方是否真正擊破關鍵主張。</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <strong className="text-slate-200">2. 事實法律有效性</strong>
            <p className="mt-3 text-slate-400">事實可靠度與法條、制度、調查報告的關聯性優先於修辭氣勢。</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <strong className="text-slate-200">3. 攻防與勝場</strong>
            <p className="mt-3 text-slate-400">比較攻擊命中、防守完整與累積回合表現。</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <strong className="text-slate-200">4. 資源耗盡規則</strong>
            <p className="mt-3 text-slate-400">若一端無法提出新攻防且舊論據全遭瓦解，才由資源耗盡判負。</p>
          </div>
        </div>
      </div>

      {/* Mirror Patterns Cards */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          對比分析：政治辯護邏輯鏡像清單
        </h3>

        <div className="grid grid-cols-1 gap-4">
          {mirrorPatterns.map((pattern) => (
            <div
              key={pattern.id}
              className="bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 rounded-xl p-5 shadow-lg space-y-4 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono text-xs font-bold border border-purple-500/30">
                  {pattern.id}
                </span>
                <h4 className="font-bold text-slate-200 text-sm">
                  {pattern.patternTitle}
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-blue-950/30 border border-blue-800/40 space-y-1">
                  <span className="text-blue-400 font-semibold">🔵 Agent A (民進黨)：</span>
                  <p className="text-slate-300 leading-relaxed">{pattern.agentAStatement}</p>
                </div>
                <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800/40 space-y-1">
                  <span className="text-rose-400 font-semibold">🔴 Agent B (國民黨)：</span>
                  <p className="text-slate-300 leading-relaxed">{pattern.agentBStatement}</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-300">鏡像結構觀察：</strong>
                  {pattern.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
