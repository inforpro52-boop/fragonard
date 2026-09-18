import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [step, setStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStep(1), 250); // H
    const t2 = setTimeout(() => setStep(2), 500); // HO
    const t3 = setTimeout(() => setStep(3), 750); // HOD
    const t4 = setTimeout(() => setStep(4), 1000); // HOD FRAGONARD
    const t5 = setTimeout(() => setStep(5), 1350); // Positioning + line
    const t6 = setTimeout(() => {
      setIsFinished(true);
      setTimeout(onComplete, 500);
    }, 1900); // Complete within 2s max

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="site-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1F33] text-[#F7F3EA] px-6"
          role="status"
          aria-live="polite"
          aria-label="Chargement du site officiel de Hod Fragonard"
        >
          {/* Subtle gold decorative background geometry */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-10">
            <div className="w-[500px] h-[500px] rounded-full border border-[#C9A45C]" />
            <div className="absolute w-[350px] h-[350px] rounded-full border border-[#C9A45C]" />
          </div>

          <div className="relative z-10 text-center max-w-xl">
            {/* Sequential name typography */}
            <div className="h-14 sm:h-16 flex items-center justify-center">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.2em] font-medium text-[#F7F3EA]">
                {step === 1 && 'H'}
                {step === 2 && 'HO'}
                {step === 3 && 'HOD'}
                {step >= 4 && 'HOD FRAGONARD'}
              </h1>
            </div>

            {/* Subtitle positioning */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={step >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-xs sm:text-sm tracking-[0.25em] text-[#C9A45C] font-light uppercase"
            >
              JURISTE • AUTRICE • ENTREPRENEURE • AMBASSADRICE DE PAIX
            </motion.p>

            {/* Animated gold line */}
            <div className="mt-6 mx-auto h-[1px] w-48 bg-white/10 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={step >= 5 ? { x: '100%' } : { x: '-100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 bg-[#C9A45C]"
              />
            </div>
          </div>

          {/* Optional skip button to guarantee no blocking */}
          <button
            id="skip-preloader-button"
            onClick={() => {
              setIsFinished(true);
              onComplete();
            }}
            className="absolute bottom-8 text-[11px] tracking-widest text-[#F7F3EA]/50 hover:text-[#C9A45C] transition-colors uppercase cursor-pointer"
          >
            Accéder directement
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
