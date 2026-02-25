import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, RotateCcw, CheckCircle2, Sparkles } from 'lucide-react';
import { Riddle } from '../data/riddles';

interface RiddleCardProps {
  riddle: Riddle;
  onSolved: () => void;
}

export const RiddleCard: React.FC<RiddleCardProps> = ({ riddle, onSolved }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [isSolved, setIsSolved] = useState(false);

  const handleFlip = () => {
    if (!isSolved) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleSolve = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isSolved) {
      setIsSolved(true);
      setIsFlipped(true);
      onSolved();
    }
  };

  return (
    <div className="relative w-full aspect-[4/3] perspective-1000 cursor-pointer group" onClick={handleFlip}>
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
      >
        {/* Front Side - Question */}
        <div className="absolute inset-0 backface-hidden bg-white border-4 border-yellow-500/20 rounded-[2rem] shadow-xl p-5 flex flex-col justify-between overflow-hidden group-hover:border-yellow-500/50 transition-all duration-300">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-10" />
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-black text-red-700 uppercase tracking-[0.1em] bg-yellow-400/40 px-2 py-0.5 rounded-full border border-yellow-600/20 shadow-sm">
              #{riddle.id} {riddle.categoryZh}
            </span>
            <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-300">
              <HelpCircle size={14} />
            </div>
          </div>
          
          <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-2 py-2">
            <h3 className="text-base md:text-lg font-black text-red-900 leading-snug mb-2 tracking-tight">
              {riddle.questionZh}
            </h3>
            <div className="w-8 h-0.5 bg-yellow-500/20 mb-2 rounded-full" />
            <p className="text-[10px] md:text-xs text-red-700/70 font-bold leading-relaxed max-w-[95%]">
              {riddle.questionJa}
            </p>
          </div>

          <div className="relative z-10 flex justify-center pb-1">
            <button 
              onClick={handleSolve}
              className="group/btn flex items-center gap-1.5 text-[10px] font-black text-red-600 hover:text-red-800 transition-colors"
            >
              <span className="underline underline-offset-2 decoration-red-300 group-hover/btn:decoration-red-600 transition-all">點擊查看答案</span>
              <Sparkles size={12} className="animate-pulse" />
            </button>
          </div>
        </div>

        {/* Back Side - Answer */}
        <div 
          className="absolute inset-0 backface-hidden bg-gradient-to-br from-red-600 to-red-900 border-4 border-yellow-500/40 rounded-[2rem] shadow-2xl p-5 flex flex-col items-center justify-center text-center rotate-y-180"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-20" />
          <div className="absolute top-4 right-4 text-yellow-400/10">
            <CheckCircle2 size={32} />
          </div>
          
          <div className="relative z-10 w-full px-2">
            <p className="text-yellow-500/60 text-[9px] font-black uppercase tracking-[0.2em] mb-3">解答 / 答え</p>
            <h2 className="text-2xl md:text-3xl font-black text-yellow-400 mb-2 tracking-tight drop-shadow-lg">
              {riddle.answerZh}
            </h2>
            <div className="h-1 w-12 bg-yellow-500/30 mx-auto mb-3 rounded-full" />
            <p className="text-base md:text-lg text-yellow-100 font-black leading-tight">
              {riddle.answerJa}
            </p>
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); setIsFlipped(false); setIsSolved(false); }}
            className="absolute bottom-5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-yellow-500/80 hover:text-yellow-400 hover:bg-white/20 text-[9px] font-black transition-all transform hover:scale-110"
          >
            <RotateCcw size={10} />
            返回謎題
          </button>
        </div>
      </motion.div>
    </div>
  );
};
