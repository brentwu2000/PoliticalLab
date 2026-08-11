import React from 'react';
import type { EventDataPackage } from '../types/experiment';
import { FileText, Calendar, Users, Gavel, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface DataPackageTabProps {
  dataPackage: EventDataPackage;
}

export const DataPackageTab: React.FC<DataPackageTabProps> = ({ dataPackage }) => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title & Intro */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">📁 Step 1 事件資料包（事實與時間線）</h2>
            <p className="text-xs text-slate-400">
              正式辯論以前建立之網路查證事實資料。禁止捏造法律、判決與事實，未確認項目嚴格標示 ⚠️【尚未確認】。
            </p>
          </div>
        </div>

        <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5" />
          資料包驗證完成
        </span>
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
