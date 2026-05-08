import { useState, useEffect } from "react";
import { X, Trophy, ArrowRight, FileText, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openWhatsApp } from "@/lib/brand";
import samarthPhoto from "@/assets/jee-samarth-kadam.jpg";

const subjectScores = [
  { name: "Mathematics", score: "98.44" },
  { name: "Physics", score: "97.96" },
  { name: "Chemistry", score: "94.07" },
];

const JEEResultPopupHero = ({
  storageKey = "jee-result-popup-dismissed",
  delay = 8000,
}: {
  storageKey?: string;
  delay?: number;
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(storageKey);
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }
  }, [storageKey, delay]);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(storageKey, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={dismiss}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350, duration: 0.5 }}
            className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Top color bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary origin-left"
            />

            {/* Close */}
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Dark header */}
            <div className="bg-foreground px-6 pt-8 pb-6 text-center relative overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 right-0 w-40 h-40 bg-primary/15 rounded-full blur-[80px]"
              />
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/15 rounded-full blur-[60px]"
              />

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 mb-3 relative z-10"
              >
                <Trophy className="h-5 w-5 text-secondary" />
                <span className="text-[10px] font-mono-brand tracking-[0.3em] text-secondary font-bold">
                  MEDHA × WAVEKOTA
                </span>
              </motion.div>

              {/* Topper photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25, type: "spring", damping: 16, stiffness: 200 }}
                className="relative z-10 mx-auto mb-4 w-20 h-20 sm:w-24 sm:h-24"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-[3px] shadow-xl shadow-primary/40">
                  <div className="w-full h-full rounded-full overflow-hidden bg-foreground">
                    <img
                      src={samarthPhoto}
                      alt="Samarth Babu Kadam"
                      className="w-full h-full object-cover object-[center_20%]"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-1 shadow-lg">
                  <Trophy className="h-3 w-3 text-foreground" />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-display text-3xl sm:text-4xl text-primary-foreground leading-[0.9] relative z-10"
              >
                JEE MAIN 2026
                <br />
                <span className="text-gradient">TOPPER</span>
                <span className="accent-dot" />
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-primary-foreground/40 mt-3 relative z-10"
              >
                North Karnataka's Pride — Session 2, Paper 1
              </motion.p>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center gap-6 mb-5"
              >
                {[
                  { value: "98.30", label: "Percentile" },
                  { value: "ELIGIBLE", label: "JEE Adv" },
                  { value: "1st", label: "Attempt" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-display text-2xl text-primary">{s.value}</p>
                    <p className="text-[9px] font-mono-brand text-muted-foreground tracking-wider">
                      {s.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Topper highlight card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-3 mb-5"
              >
                <Award className="h-4 w-4 text-secondary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono-brand text-muted-foreground tracking-wider">
                    JEE MAIN 2026 — SESSION 2
                  </p>
                  <p className="font-display text-lg text-secondary tracking-wide truncate">
                    SAMARTH B. KADAM{" "}
                    <span className="text-sm text-muted-foreground font-sans font-normal">
                      — 98.30
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Subject breakdown */}
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="space-y-2 mb-6"
              >
                {subjectScores.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center justify-between text-xs text-muted-foreground"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {s.name}
                    </span>
                    <span className="font-display text-sm text-foreground">
                      {s.score}
                    </span>
                  </li>
                ))}
              </motion.ul>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-2"
              >
                <a
                  href="https://wa.me/917996420113?text=Hi%2C%20I%20saw%20Samarth%27s%20JEE%20Main%202026%20result%20(98.30%25ile).%20I%20want%20to%20enquire%20about%20admissions."
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp("Hi, I saw Samarth's JEE Main 2026 result (98.30%ile). I want to enquire about admissions.");
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-bold text-[11px] font-mono-brand tracking-widest hover:bg-primary/90 transition-all"
                >
                  JOIN US <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="/pdfs/jee-main-2026-results.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 border border-border text-muted-foreground px-4 py-3 rounded-md font-bold text-[11px] font-mono-brand tracking-widest hover:border-primary hover:text-primary transition-all"
                >
                  <FileText className="h-3.5 w-3.5" /> VIEW PDF
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default JEEResultPopupHero;
