import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Info, Heart, Star, Play, RotateCcw, Shuffle, Maximize2, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RiddleCard } from './components/RiddleCard';
import { riddles as initialRiddles } from './data/riddles';

const Lantern = ({ className }: { className?: string }) => (
  <motion.div 
    className={`absolute z-10 pointer-events-none ${className}`}
    animate={{ rotate: [-5, 5, -5] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    style={{ transformOrigin: 'top center' }}
  >
    <div className="relative flex flex-col items-center">
      <div className="w-1 h-8 bg-yellow-600" />
      <div className="w-16 h-20 bg-red-600 rounded-[2rem] relative border-2 border-yellow-500 shadow-2xl animate-lantern-glow">
        <div className="absolute inset-x-2 top-2 bottom-2 border-x border-yellow-500/30 rounded-full" />
        <div className="absolute inset-x-4 top-1 bottom-1 border-x border-yellow-500/20 rounded-full" />
      </div>
      <div className="w-12 h-2 bg-red-700 rounded-full -mt-1 border border-yellow-600" />
      <div className="flex gap-1 mt-1">
        <div className="w-0.5 h-12 bg-yellow-500 rounded-full" />
        <div className="w-0.5 h-10 bg-yellow-500 rounded-full" />
        <div className="w-0.5 h-12 bg-yellow-500 rounded-full" />
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [riddles, setRiddles] = useState([...initialRiddles]);
  const [solvedCount, setSolvedCount] = useState(0);
  const [showIntro, setShowIntro] = useState(false);

  const handleSolved = useCallback(() => {
    setSolvedCount(prev => prev + 1);
  }, []);

  const shuffleRiddles = () => {
    setRiddles(prev => [...prev].sort(() => Math.random() - 0.5));
    setSolvedCount(0);
  };

  const resetGame = () => {
    setRiddles([...initialRiddles]);
    setSolvedCount(0);
  };

  useEffect(() => {
    if (solvedCount === riddles.length && riddles.length > 0) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ef4444', '#f59e0b', '#ffffff', '#ffd700']
      });
    }
  }, [solvedCount, riddles.length]);

  return (
    <div className="min-h-screen bg-[#991b1b] text-slate-900 font-sans selection:bg-red-200 overflow-x-hidden flex flex-col">
      {/* Decorative Lanterns */}
      <Lantern className="top-0 left-10" />
      <Lantern className="top-0 left-40 hidden md:block" />
      <Lantern className="top-0 right-10" />
      <Lantern className="top-0 right-40 hidden md:block" />

      {/* Festive Header */}
      <header className="bg-red-800 border-b border-yellow-600/30 px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-red-800 shadow-lg border border-yellow-300">
            <Flame size={24} fill="currentColor" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-yellow-400 tracking-normal leading-none drop-shadow-md">元宵揣令仔</h1>
            <p className="text-xs text-yellow-500/80 font-bold uppercase tracking-widest mt-2">Lantern Festival Riddle Game</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <div className="px-6 py-2 bg-red-900/60 rounded-full text-sm font-bold text-yellow-400 border border-yellow-600/40 shadow-inner">
            <span className="opacity-70 mr-2">進度：</span>
            <span className="text-xl font-black">{solvedCount}</span>
            <span className="mx-1 opacity-40">/</span>
            <span className="opacity-80">{riddles.length}</span>
          </div>
          <button 
            onClick={() => setShowIntro(true)}
            className="p-2 text-yellow-500 hover:text-yellow-300 transition-colors"
          >
            <Info size={20} />
          </button>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="flex-1 relative flex flex-col items-center justify-center p-6 md:p-12 z-20">
        <AnimatePresence mode="wait">
          {!gameStarted ? (
            <motion.div
              key="start-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              className="relative z-20 w-full max-w-4xl aspect-video bg-red-900/80 backdrop-blur-md rounded-[3rem] shadow-2xl border-8 border-yellow-600/50 flex flex-col items-center justify-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20" />
              <div className="relative z-10 p-12">
                <motion.div 
                  className="w-28 h-28 bg-yellow-500 text-red-800 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(234,179,8,0.4)] border-4 border-yellow-200"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: ["0 0 20px rgba(234,179,8,0.2)", "0 0 50px rgba(234,179,8,0.5)", "0 0 20px rgba(234,179,8,0.2)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Play size={56} fill="currentColor" className="ml-2" />
                </motion.div>
                <h2 className="text-5xl md:text-6xl font-black text-yellow-400 mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-normal">元宵揣令仔</h2>
                <div className="w-24 h-1 bg-yellow-500/40 mx-auto mb-8 rounded-full" />
                <p className="text-xl md:text-2xl text-yellow-100/90 mb-12 max-w-2xl mx-auto font-bold leading-relaxed">
                  點擊卡片來翻轉它們。<br />
                  <span className="text-yellow-400 text-lg md:text-xl mt-4 block">你能猜出所有的客語謎題嗎？</span>
                </p>
                <button 
                  onClick={() => setGameStarted(true)}
                  className="group relative px-16 py-5 bg-yellow-500 hover:bg-yellow-400 text-red-900 font-black rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all transform hover:scale-105 active:scale-95 text-2xl md:text-3xl border-b-8 border-yellow-700 overflow-hidden tracking-normal"
                >
                  <span className="relative z-10">開始遊戲</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="game-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full max-w-7xl mx-auto py-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {riddles.map((riddle, index) => (
                  <motion.div
                    key={`${riddle.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                  >
                    <RiddleCard riddle={riddle} onSolved={handleSolved} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Festive Bottom Toolbar */}
      <footer className="bg-red-900 border-t border-yellow-600/30 px-6 py-4 sticky bottom-0 z-30 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={shuffleRiddles}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-red-800 hover:bg-red-700 text-yellow-400 font-bold transition-all active:scale-95 border border-yellow-600/30"
            >
              <Shuffle size={20} />
              <span className="hidden sm:inline">重新排列</span>
            </button>
            <button 
              onClick={resetGame}
              className="flex items-center gap-2 px-6 py-2 rounded-full bg-red-800 hover:bg-red-700 text-yellow-400 font-bold transition-all active:scale-95 border border-yellow-600/30"
            >
              <RotateCcw size={20} />
              <span className="hidden sm:inline">重新開始</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-yellow-600">
              <Heart size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>
            <button className="p-2 text-yellow-500 hover:text-yellow-300 transition-colors">
              <Maximize2 size={24} />
            </button>
          </div>
        </div>
      </footer>

      {/* Intro Modal */}
      <AnimatePresence>
        {showIntro && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-red-950/60 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-red-900 rounded-[3rem] shadow-2xl max-w-lg w-full p-10 text-center relative overflow-hidden border-4 border-yellow-500"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10" />
              <div className="relative z-10">
                <h2 className="text-4xl font-black text-yellow-400 mb-6 font-cute">關於此遊戲</h2>
                <div className="text-yellow-100/80 space-y-4 mb-8 text-left bg-red-950/40 p-6 rounded-3xl border border-yellow-600/20">
                  <p>這是一個充滿喜氣的客語元宵猜謎遊戲。</p>
                  <p>您可以點擊卡片來翻轉它們，查看謎面與解答。遊戲支援中日雙語翻譯，讓學習更有趣！</p>
                </div>
                <button 
                  onClick={() => setShowIntro(false)}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-red-900 font-black py-4 rounded-2xl shadow-lg transition-all text-xl font-cute"
                >
                  關閉
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
