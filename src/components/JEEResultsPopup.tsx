import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Trophy } from "lucide-react";
import { openWhatsApp } from "@/lib/brand";

import jeeAditya from "@/assets/jee-aditya.jpeg";

const students = [
  { name: "Aditya S", percentile: "99.86" },
  { name: "Naman Patil", percentile: "99.11" },
  { name: "Madhvesh K", percentile: "98.77" },
  { name: "Siddharth P", percentile: "98.60" },
  { name: "Ayush R", percentile: "98.30" },
];

const JEEResultsPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("jee-popup-dismissed")) return;
    const check = () => {
      if (sessionStorage.getItem("cet-popup-dismissed")) {
        setOpen(true);
      } else {
        setTimeout(check, 500);
      }
    };
    const timer = setTimeout(check, 10000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setOpen(false);
    sessionStorage.setItem("jee-popup-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm"
          onClick={dismiss}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="bg-card rounded-2xl shadow-2xl max-w-md w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button onClick={dismiss} className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>

            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

            <div className="p-6 sm:p-8">
              {/* Hero */}
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img src={jeeAditya} alt="Aditya S" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <Trophy className="h-4 w-4 text-secondary" />
                    <span className="font-mono-brand text-[10px] tracking-[0.2em] text-secondary uppercase font-bold">
                      JEE Main 2026 — 1st Attempt
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-foreground leading-none mt-1">
                    99.86 <span className="text-primary">PERCENTILE</span>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Best in North Karnataka — Medha × Wavekota
                  </p>
                </div>
              </div>

              {/* All students */}
              <div className="bg-muted/50 rounded-xl p-4 mb-5">
                <p className="font-mono-brand text-[9px] tracking-[0.2em] text-muted-foreground uppercase mb-3">
                  Medha × Wavekota Top Performers
                </p>
                <div className="space-y-2">
                  {students.map((s, i) => (
                    <div key={s.name} className="flex items-center justify-between">
                      <span className="text-sm text-foreground font-medium">
                        <span className="text-muted-foreground text-xs mr-2">#{i + 1}</span>
                        {s.name}
                      </span>
                      <span className="font-display text-lg text-foreground">
                        {s.percentile}<span className="text-primary text-xs ml-0.5">%ile</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/917996420113?text=Hi%2C%20I%20saw%20the%20JEE%20Main%2099.86%25ile%20result.%20I%20want%20to%20enquire%20about%20admissions."
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp("Hi, I saw the JEE Main 99.86%ile result. I want to enquire about admissions.");
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-lg font-display text-xl tracking-wider hover:bg-primary/90 transition-all"
              >
                WANT RESULTS LIKE THESE? <ArrowRight className="h-4 w-4" />
              </a>
              <p className="text-center text-[10px] text-muted-foreground mt-2 font-mono-brand tracking-wider">
                ENQUIRE NOW — LIMITED SEATS
              </p>
              <a
                href="/pdfs/jee-main-2026-results.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[11px] text-primary hover:text-primary/80 underline font-mono-brand tracking-wider mt-3"
              >
                VIEW OFFICIAL RESULT PDF →
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JEEResultsPopup;
