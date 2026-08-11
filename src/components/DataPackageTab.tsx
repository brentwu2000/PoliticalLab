import React from 'react';
import type { CaseDataBundle } from '../types/experiment';
import { FileText, Calendar, Users, Gavel, AlertTriangle, CheckCircle2, Target, ListChecks, Scale } from 'lucide-react';
import { getSetupV3 } from '../utils/v3Analysis';
import { partyLabelA, partyLabelB } from '../utils/partyDisplay';

interface DataPackageTabProps {
  bundle: CaseDataBundle;
}

export const DataPackageTab: React.FC<DataPackageTabProps> = ({ bundle }) => {
  const dataPackage = bundle.initialEventDataPackage;
  const setupV3 = getSetupV3(bundle);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title & Intro */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">📁 v3 Step 1-3｜事件資料包與攻防設定</h2>
            <p className="text-xs text-slate-400">
              正式辯論以前先區分事實、法律、推論與未確認事項，並建立核心命題 P、爭點邊界與主要舉證問題。
            </p>
          </div>
        </div>

        <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          資料包驗證完成
        </span>
      </div>

      {/* v3 Core Setup */}
      <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
          <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100">v3 核心命題 P 與攻防目標</h3>
            <p className="text-xs text-slate-400">所有核心論證都必須能說明自己如何強化、削弱或改變核心命題的關鍵前提。</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-4 text-xs">
          <div className="lg:col-span-3 rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-4">
            <div className="text-cyan-300 font-bold mb-2">🎯 核心命題 P</div>
            <p className="text-slate-200 leading-relaxed">{setupV3.coreProposition}</p>
          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
            <div className="text-emerald-300 font-bold mb-2">{partyLabelA} 攻防目標</div>
            <p className="text-slate-300 leading-relaxed">{setupV3.agentAGoal}</p>
          </div>

          <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-4">
            <div className="text-blue-300 font-bold mb-2">{partyLabelB} 攻防目標</div>
            <p className="text-slate-300 leading-relaxed">{setupV3.agentBGoal}</p>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
            <div className="text-slate-300 font-bold mb-2 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-amber-300" />
              v3 最高原則
            </div>
            <p className="text-slate-400 leading-relaxed">
              新的案例不是新的論證；新的推論路徑才是新的論證。承認事實不等於立場讓步，攻防重點是爭奪事實代表的意義。
            </p>
          </div>
        </div>
      </div>

      {/* v3 Issues and Burdens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-base font-bold text-slate-200 mb-4 flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-cyan-400" />
            v3 爭點邊界
          </h3>
          <div className="space-y-3">
            {setupV3.issueBoundaries.map(issue => (
              <div key={issue.id} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-800/50 rounded px-2 py-0.5">
                    {issue.id}
                  </span>
                  <strong className="text-sm text-slate-200">{issue.title}</strong>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-base font-bold text-slate-200 mb-4 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-amber-400" />
            v3 主要舉證問題
          </h3>
          <div className="space-y-3">
            {setupV3.burdenQuestions.map((question, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                <span className="font-mono text-amber-300 mr-2">Q{idx + 1}</span>
                {question}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 1. Fact Timeline */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-slate-200 mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-400" />
          1. 關鍵事實與完整時間線 (Timeline)
        </h3>

        <div className="relative border-l-2 border-slate-800 ml-4 pl-6 space-y-6">
          {dataPackage.timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>
              
              <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-800/60">
                    {item.time}
                  </span>
                  <h4 className="text-sm font-bold text-slate-200">{item.title}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Involved Figures & Relevant Laws */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Involved Parties */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-base font-bold text-slate-200 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-400" />
            2. 當事人身分與政黨關係
          </h3>

          <div className="space-y-3">
            {dataPackage.involvedParties.map((p, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="text-sm font-bold text-slate-200">{p.name}</strong>
                    <span className="text-xs text-slate-400">{p.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{p.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Laws */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-base font-bold text-slate-200 mb-4 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-emerald-400" />
            3. 相關法律與法條版本
          </h3>

          <div className="space-y-3">
            {dataPackage.relevantLaws.map((l, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 block mb-1">
                  {l.law}
                </span>
                <p className="text-xs text-slate-300">{l.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. Unverified Items Warning */}
      <div className="bg-amber-950/30 border border-amber-500/40 rounded-2xl p-6 shadow-xl">
        <h3 className="text-base font-bold text-amber-300 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          4. 尚未確認事項 ⚠️【尚未確認】
        </h3>
        <p className="text-xs text-amber-200/80 mb-4">
          依規範第二條，凡無權威資料佐證之進度或細節，必須標示 ⚠️【尚未確認】，禁止自行捏造補完。
        </p>

        <ul className="space-y-2">
          {dataPackage.unverifiedItems.map((item, idx) => (
            <li key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-amber-500/30 text-xs text-amber-200 font-mono">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
