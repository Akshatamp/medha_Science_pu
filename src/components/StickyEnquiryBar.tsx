import { useState, useEffect } from "react";
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, waLink, openWhatsAppUrl } from "@/lib/brand";

const messages = [
  { text: <>
      <span className="font-bold text-primary-foreground">Admissions Open</span> at Medha Science PU College — <span className="text-secondary font-bold">Enquire Now</span>
    </>, href: waLink(`Hi, I'd like to enquire about admissions at ${BRAND.name}`) },
  { text: <>
      <span className="font-bold text-primary-foreground">PCMB · K-CET · JEE · NEET</span> coaching with expert faculty — <span className="text-secondary font-bold">Apply Today</span>
    </>, href: waLink(`Hi, I'm interested in PCMB & competitive exam coaching at ${BRAND.name}`) },
];

const StickyEnquiryBar = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[90] bg-foreground border-t border-primary/20 shadow-2xl"
        >
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0 overflow-hidden h-5">
              <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-secondary animate-pulse flex-shrink-0" />
              <AnimatePresence mode="wait">
                <motion.p
                  key={msgIndex}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -16, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs sm:text-sm text-primary-foreground/70 truncate"
                >
                  {messages[msgIndex].text}
                </motion.p>
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={messages[msgIndex].href}
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsAppUrl(messages[msgIndex].href);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 sm:px-6 py-2 rounded-md font-bold text-[10px] sm:text-xs font-mono-brand tracking-widest hover:bg-primary/90 transition-all"
              >
                ENQUIRE <ArrowRight className="h-3 w-3" />
              </a>
              <button onClick={() => setDismissed(true)} className="p-1.5 text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyEnquiryBar;
