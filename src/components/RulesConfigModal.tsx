import React from 'react';
import type { EngineConfig, CaseId } from '../types/experiment';
import { caseList } from '../data/cases';
import { Sliders, Play, ShieldAlert, X } from 'lucide-react';

interface RulesConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: EngineConfig;
  onUpdateConfig: (newConfig: EngineConfig) => void;
}

export const RulesConfigModal: React.FC<RulesConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-6 relative text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-100">v3 底層模擬引擎設定</h3>
              <p className="text-xs text-slate-400">調整有限論證資源、強制接招與事件案例後重新推演</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Controls */}
        <div className="space-y-5 text-sm">
          
          {/* Case Selection */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              📌 選擇政治爭議事件 (Controversy Case):
            </label>
            <select
              value={config.caseId}
              onChange={(e) => onUpdateConfig({ ...config, caseId: e.target.value as CaseId })}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-slate-200 focus:outline-none focus:border-indigo-500 transition-all"
            >
              {caseList.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          {/* Max Argument Usage Limit */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              🔢 同一核心論點重複上限 (Max Usage Per Argument):
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => onUpdateConfig({ ...config, maxArgUsageLimit: num })}
                  className={`py-2 rounded-xl border text-xs font-bold transition-all ${
                    config.maxArgUsageLimit === num
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  最多 {num} 次 {num === 2 ? '(標準)' : ''}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-400">
              超過使用上限且無法提出新區分時，該論據狀態將轉為 🟡/🔴 降級。
            </p>
          </div>

          {/* Max Rounds */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              🧾 最大回合數 (v3 Max Rounds):
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[10, 15, 20].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => onUpdateConfig({ ...config, maxRounds: num })}
                  className={`py-2 rounded-xl border text-xs font-bold transition-all ${
                    config.maxRounds === num
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {num} Round {num === 20 ? '(v3)' : ''}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-slate-400">
              v3 預設最多 20 Round；若任一方正式進入論證資源耗盡，則可提前終止。
            </p>
          </div>

          {/* Judge Strictness */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              ⚖️ 裁判 C 審查嚴格度 (Judge Strictness):
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onUpdateConfig({ ...config, judgeStrictness: 'standard' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  config.judgeStrictness === 'standard'
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="font-bold">標準判定</div>
                <div className="text-[10px] opacity-80 mt-0.5">普通扣分與謬誤計數</div>
              </button>

              <button
                type="button"
                onClick={() => onUpdateConfig({ ...config, judgeStrictness: 'strict' })}
                className={`py-2 px-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                  config.judgeStrictness === 'strict'
                    ? 'bg-rose-600 border-rose-500 text-white shadow-md shadow-rose-600/20'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="font-bold flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  嚴格懲罰
                </div>
                <div className="text-[10px] opacity-80 mt-0.5">1.5x 加倍扣分，強行擊破謬誤</div>
              </button>
            </div>
          </div>

          {/* Playback Speed */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-slate-300">
              ⚡ 自動演示播放速度 (Playback Speed):
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { speed: 1, label: '1x Normal (3.5s)' },
                { speed: 2, label: '2x Fast (1.8s)' },
                { speed: 4, label: '4x Turbo (0.9s)' }
              ].map((item) => (
                <button
                  key={item.speed}
                  type="button"
                  onClick={() => onUpdateConfig({ ...config, playbackSpeed: item.speed })}
                  className={`py-2 rounded-xl border text-xs font-bold transition-all ${
                    config.playbackSpeed === item.speed
                      ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-all"
          >
            取消
          </button>
          <button
            onClick={() => {
              onClose();
            }}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            套用設定並重新推演 (Apply & Re-run)
          </button>
        </div>

      </div>
    </div>
  );
};
