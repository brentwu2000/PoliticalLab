import { useState, useEffect, useMemo } from 'react';
import type { EngineConfig, CaseId } from './types/experiment';
import { getCaseBundle } from './data/cases';
import { DebateEngine } from './engine/DebateEngine';
import { Header } from './components/Header';
import { DebateTab } from './components/DebateTab';
import { ArgumentTreeTab } from './components/ArgumentTreeTab';
import { DashboardTab } from './components/DashboardTab';
import { DataPackageTab } from './components/DataPackageTab';
import { MirrorAnalysisTab } from './components/MirrorAnalysisTab';
import { RulesConfigModal } from './components/RulesConfigModal';

export function App() {
  const [activeTab, setActiveTab] = useState<'debate' | 'tree' | 'dashboard' | 'package' | 'mirror'>('debate');
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState<boolean>(false);

  // Engine Configuration State
  const [engineConfig, setEngineConfig] = useState<EngineConfig>({
    caseId: '3plus11',
    maxArgUsageLimit: 2,
    maxRounds: 20,
    judgeStrictness: 'standard',
    playbackSpeed: 1
  });

  // Get raw bundle for current case
  const bundle = useMemo(() => {
    return getCaseBundle(engineConfig.caseId);
  }, [engineConfig.caseId]);

  // Run dynamic simulation engine evaluation
  const simulationResult = useMemo(() => {
    return DebateEngine.evaluateCase(bundle, engineConfig);
  }, [bundle, engineConfig]);

  const activeRounds = simulationResult.processedRounds;
  const totalRounds = activeRounds.length;
  const isFinished = currentRoundIndex >= totalRounds - 1;

  // Auto-play timer adjusted by playbackSpeed
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isPlaying && !isFinished) {
      const intervalMs = Math.round(3500 / engineConfig.playbackSpeed);
      timer = setTimeout(() => {
        setCurrentRoundIndex(prev => Math.min(prev + 1, totalRounds - 1));
      }, intervalMs);
    } else if (isFinished) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentRoundIndex, totalRounds, isFinished, engineConfig.playbackSpeed]);

  const handleNextRound = () => {
    if (currentRoundIndex < totalRounds - 1) {
      setCurrentRoundIndex(prev => prev + 1);
    }
  };

  const handleReset = () => {
    setCurrentRoundIndex(0);
    setIsPlaying(false);
  };

  const handleSelectCase = (caseId: CaseId) => {
    setEngineConfig(prev => ({ ...prev, caseId }));
    setCurrentRoundIndex(0);
    setIsPlaying(false);
  };

  const currentSnapshotA = activeRounds[currentRoundIndex]?.argTreeSnapshotA || bundle.initialNodesA;
  const currentSnapshotB = activeRounds[currentRoundIndex]?.argTreeSnapshotB || bundle.initialNodesB;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Bar Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentRound={currentRoundIndex + 1}
        totalRounds={totalRounds}
        isFinished={isFinished}
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(prev => !prev)}
        onNextRound={handleNextRound}
        onReset={handleReset}
        topicTitle={bundle.title}
        config={engineConfig}
        onOpenConfigModal={() => setIsConfigModalOpen(true)}
        onSelectCase={handleSelectCase}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 lg:p-8">
        {activeTab === 'debate' && (
          <DebateTab
            rounds={activeRounds}
            selectedRoundIndex={currentRoundIndex}
            setSelectedRoundIndex={setCurrentRoundIndex}
          />
        )}

        {activeTab === 'tree' && (
          <ArgumentTreeTab
            nodesA={currentSnapshotA}
            nodesB={currentSnapshotB}
          />
        )}

        {activeTab === 'dashboard' && (
          <DashboardTab
            rounds={activeRounds}
            currentRoundIndex={currentRoundIndex}
          />
        )}

        {activeTab === 'package' && (
          <DataPackageTab
            bundle={bundle}
          />
        )}

        {activeTab === 'mirror' && (
          <MirrorAnalysisTab
            mirrorPatterns={bundle.mirrorPatternsData}
          />
        )}
      </main>

      {/* Rules & Engine Config Modal */}
      <RulesConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        config={engineConfig}
        onUpdateConfig={(newConfig) => {
          setEngineConfig(newConfig);
          setCurrentRoundIndex(0);
          setIsPlaying(false);
        }}
      />

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-4 text-center text-xs text-slate-500">
        <p>政治立場攻防實驗 v3 ── 有限論證資源與政治辯護結構實驗 │ PoliticalLab Engine v3</p>
      </footer>
    </div>
  );
}

export default App;
