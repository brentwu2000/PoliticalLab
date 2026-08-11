import React, { useState } from 'react';
import type { ArgumentNode } from '../types/experiment';
import { GitFork, Filter, Repeat } from 'lucide-react';

interface ArgumentTreeTabProps {
  nodesA: ArgumentNode[];
  nodesB: ArgumentNode[];
}

export const ArgumentTreeTab: React.FC<ArgumentTreeTabProps> = ({ nodesA, nodesB }) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const filterNodes = (nodes: ArgumentNode[]) => {
    if (filterStatus === 'all') return nodes;
    return nodes.filter(n => n.status.includes(filterStatus));
  };

  const filteredA = filterNodes(nodesA);
  const filteredB = filterNodes(nodesB);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
            <GitFork className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">🌳 論證樹動態儀表板 (Step 9)</h2>
            <p className="text-xs text-slate-400">
              記錄雙方建立的核心論點與目前狀態（🟢 有效 / 🟡 爭議 / 🔴 已擊破）。規則：每核心論點最多使用兩次！
            </p>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
          <span className="text-xs text-slate-400 px-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            篩選：
          </span>
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              filterStatus === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            全部 ({nodesA.length + nodesB.length})
          </button>
          <button
            onClick={() => setFilterStatus('有效')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              filterStatus === '有效' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-emerald-400'
            }`}
          >
            🟢 有效
          </button>
          <button
            onClick={() => setFilterStatus('爭議')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              filterStatus === '爭議' ? 'bg-amber-600 text-white' : 'text-slate-400 hover:text-amber-400'
            }`}
          >
            🟡 有爭議
          </button>
          <button
            onClick={() => setFilterStatus('擊破')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              filterStatus === '擊破' ? 'bg-rose-600 text-white' : 'text-slate-400 hover:text-rose-400'
            }`}
          >
            🔴 已擊破
          </button>
        </div>
      </div>

      {/* Grid: Party A Tree vs Party B Tree */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Party A (🔵 民進黨) */}
        <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <h3 className="text-base font-bold text-blue-400">🔵 Agent A｜民進黨 論證樹 ({filteredA.length})</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              上限: 最多使用 2 次/核心
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {filteredA.map(node => (
              <div
                key={node.id}
                className="bg-slate-950/60 border border-slate-800 hover:border-blue-500/40 p-4 rounded-xl transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 font-bold">
                      {node.id}
                    </span>
                    <h4 className="text-sm font-bold text-slate-200">{node.title}</h4>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      node.status.includes('有效')
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : node.status.includes('爭議')
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {node.status}
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {node.description}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-mono">
                    <Repeat className="w-3 h-3 text-blue-400" />
                    使用次數: <strong className="text-slate-300">{node.usedCount} / 2</strong>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {node.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Party B (🔴 國民黨) */}
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500"></span>
              <h3 className="text-base font-bold text-rose-400">🔴 Agent B｜國民黨 論證樹 ({filteredB.length})</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">
              上限: 最多使用 2 次/核心
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {filteredB.map(node => (
              <div
                key={node.id}
                className="bg-slate-950/60 border border-slate-800 hover:border-rose-500/40 p-4 rounded-xl transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-800 font-bold">
                      {node.id}
                    </span>
                    <h4 className="text-sm font-bold text-slate-200">{node.title}</h4>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                      node.status.includes('有效')
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : node.status.includes('爭議')
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {node.status}
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {node.description}
                </p>

                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-mono">
                    <Repeat className="w-3 h-3 text-rose-400" />
                    使用次數: <strong className="text-slate-300">{node.usedCount} / 2</strong>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                    {node.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
