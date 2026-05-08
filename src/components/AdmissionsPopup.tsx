import { useState, useEffect } from "react";
import { X, GraduationCap, ArrowRight, Calendar, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, waLink, openWhatsApp } from "@/lib/brand";

const highlights = [
  "PCMB · PCMCs · PCMS · CET · JEE · NEET",
  "Limited Seats — Early Bird Discount",
  "Expert Faculty from Kota & Hubli",
];

const AdmissionsPopup = ({
  storageKey = "admissions-popup-dismissed",
  delay = 14000,
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
                <GraduationCap className="h-5 w-5 text-secondary" />
                <span className="text-[10px] font-mono-brand tracking-[0.3em] text-secondary font-bold">
                  MEDHA × WAVEKOTA
                </span>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-display text-4xl sm:text-5xl text-primary-foreground leading-[0.9] relative z-10"
              >
                ADMISSIONS
                <br />
                <span className="text-gradient">OPEN</span>
                <span className="accent-dot" />
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-primary-foreground/40 mt-3 relative z-10"
              >
                Academic Year 2026-2027 — Apply Today
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
                  { value: "2026-27", label: "Batch", small: false },
                  { value: "PCMB · PCMCs · PCMS", label: "Streams", small: true },
                  { value: "Limited", label: "Seats", small: false },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className={`font-display text-primary ${s.small ? "text-base sm:text-lg" : "text-2xl"}`}>{s.value}</p>
                    <p className="text-[9px] font-mono-brand text-muted-foreground tracking-wider">
                      {s.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* Highlight card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-3 mb-5"
              >
                <Calendar className="h-4 w-4 text-secondary flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[10px] font-mono-brand text-muted-foreground tracking-wider">
                    NEW BATCH STARTING
                  </p>
                  <p className="font-display text-xl text-secondary tracking-wide">
                    1st PUC & 2nd PUC{" "}
                    <span className="text-sm text-muted-foreground font-sans font-normal">
                      — Science
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Highlights */}
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="space-y-2 mb-6"
              >
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {item}
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
                  href={waLink(`Hi, I want to enquire about admissions for 2026-2027 at ${BRAND.name}`)}
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp(`Hi, I want to enquire about admissions for 2026-2027 at ${BRAND.name}`);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 rounded-md font-bold text-[11px] font-mono-brand tracking-widest hover:bg-primary/90 transition-all"
                >
                  APPLY NOW <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`tel:${BRAND.phone || "+917996420113"}`}
                  className="inline-flex items-center justify-center gap-1.5 border border-border text-muted-foreground px-4 py-3 rounded-md font-bold text-[11px] font-mono-brand tracking-widest hover:border-primary hover:text-primary transition-all"
                >
                  <Phone className="h-3.5 w-3.5" /> CALL
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionsPopup;
