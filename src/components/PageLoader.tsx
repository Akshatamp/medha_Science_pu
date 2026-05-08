import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import medhaLogo from "@/assets/medha-logo.png";

const DURATION = 5000;
const SKIP_LOADER_ROUTES = ["/admissions-2026"];

const PageLoader = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const skipLoader = SKIP_LOADER_ROUTES.includes(location.pathname);
  const [loading, setLoading] = useState(!skipLoader);
  const [percent, setPercent] = useState(skipLoader ? 100 : 0);
  const startRef = useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), DURATION);
    const raf = () => {
      const elapsed = Date.now() - startRef.current;
      const p = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setPercent(p);
      if (p < 100) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-foreground"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-primary/20 blur-[100px]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Logo wordmark */}
            <motion.div
              className="relative z-10 flex flex-col items-center"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-primary-foreground rounded-2xl p-4 sm:p-5 shadow-2xl shadow-primary/30">
                <img
                  src={medhaLogo}
                  alt="Medha Science PU College"
                  className="h-20 sm:h-28 w-auto object-contain"
                />
              </div>
            </motion.div>

            <motion.p
              className="mt-5 text-[10px] font-mono tracking-[0.35em] text-primary-foreground/30 uppercase relative z-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              You Deserve The Best Education
            </motion.p>

            <div className="mt-8 relative z-10 flex flex-col items-center gap-3">
              <div className="w-32 h-[2px] rounded-full bg-primary-foreground/10 overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p className="text-[11px] font-mono tracking-[0.2em] text-primary-foreground/40 tabular-nums">
                {percent}%
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageLoader;
