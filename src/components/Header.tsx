import React from 'react';
import {
  Scale,
  Swords,
  GitFork,
  BarChart2,
  FileText,
  Dna,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Sparkles
} from 'lucide-react';
import type { EngineConfig } from '../types/experiment';
import { caseList } from '../data/cases';

interface HeaderProps {
  activeTab: 'debate' | 'tree' | 'dashboard' | 'package' | 'mirror';
  setActiveTab: (tab: 'debate' | 'tree' | 'dashboard' | 'package' | 'mirror') => void;
  currentRound: number;
  totalRounds: number;
  isFinished: boolean;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextRound: () => void;
  onReset: () => void;
  topicTitle: string;
  config: EngineConfig;
  onOpenConfigModal: () => void;
  onSelectCase: (caseId: any) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  currentRound,
  totalRounds,
  isFinished,
  isPlaying,
  onTogglePlay,
  onNextRound,
  onReset,
  topicTitle,
  config,
  onOpenConfigModal,
  onSelectCase
}) => {
  return (
    <header className="header-glass sticky top-0 z-40 border-b border-slate-700/60 bg-slate-900/85 backdrop-blur-md px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo & Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                政治立場攻防實驗 v2
              </h1>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1 font-mono">
                <Sparkles className="w-3 h-3 text-amber-400" />
                動態模擬引擎
              </span>
            </div>
            
            {/* Case selector in header */}
            <div className="flex items-center gap-2 mt-1" title={topicTitle}>
              <span className="text-xs text-slate-400">當前爭議案：</span>
              <select
                value={config.caseId}
                onChange={(e) => onSelectCase(e.target.value)}
                className="bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700/80 rounded-lg px-2 py-0.5 focus:outline-none focus:border-indigo-500"
              >
                {caseList.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Step & Config Badges */}
        <div className="hidden xl:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
          <div className="flex items-center gap-1.5 font-semibold text-amber-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {isFinished ? '已完賽 (進入終局評判)' : `Round ${currentRound} / ${totalRounds}`}
          </div>
          <span className="text-slate-600">│</span>
          <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
            <span>上限: {config.maxArgUsageLimit}次</span>
            <span>嚴格度: {config.judgeStrictness === 'strict' ? '🔴嚴格' : '🟢標準'}</span>
            <span>速度: {config.playbackSpeed}x</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenConfigModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700/80 transition-all"
            title="調整底層模擬引擎設定"
          >
            <Sliders className="w-3.5 h-3.5 text-indigo-400" />
            引擎參數
          </button>

          {!isFinished && (
            <>
              <button
                onClick={onNextRound}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                下一回合 (R{currentRound + 1})
              </button>

              <button
                onClick={onTogglePlay}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                  isPlaying
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                {isPlaying ? '暫停自動播放' : '自動演示'}
              </button>
            </>
          )}

          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-700 transition-all"
            title="重設實驗推演"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            重設
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start gap-1 mt-3 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('debate')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeTab === 'debate'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Swords className="w-3.5 h-3.5" />
          ⚔️ 對決辯論賽 (Round Feed)
        </button>

        <button
          onClick={() => setActiveTab('tree')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeTab === 'tree'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <GitFork className="w-3.5 h-3.5" />
          🌳 論證樹儀表板
        </button>

        <button
          onClick={() => setActiveTab('dashboard')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeTab === 'dashboard'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <BarChart2 className="w-3.5 h-3.5" />
          📊 戰況與資源儀表板
        </button>

        <button
          onClick={() => setActiveTab('package')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeTab === 'package'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          📁 Step 1 事件資料包
        </button>

        <button
          onClick={() => setActiveTab('mirror')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
            activeTab === 'mirror'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Dna className="w-3.5 h-3.5 text-purple-400" />
          🧬 政治話術鏡像與賽後分析
        </button>
      </div>
    </header>
  );
};
