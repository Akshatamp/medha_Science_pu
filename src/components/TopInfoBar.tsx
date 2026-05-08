import { useState, useEffect } from "react";
import { Phone, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

const messages = [
  "ADMISSIONS OPEN 2026-2027 — JOIN MEDHA",
  "PCMB · CET · JEE · NEET COACHING",
  "DOWNLOAD PROSPECTUS — APPLY TODAY",
];

const TopInfoBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-foreground text-background text-[10px] sm:text-xs py-2.5 hidden sm:block relative z-[60]">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden h-4">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse flex-shrink-0" />
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-mono-brand font-bold tracking-wider whitespace-nowrap"
            >
              {messages[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex items-center gap-0">
          <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-1.5 hover:text-secondary transition-colors px-3 border-r border-background/20">
            <Phone className="h-2.5 w-2.5" />
            <span className="font-mono-brand">{BRAND.phone}</span>
          </a>
          <a href={`mailto:${BRAND.email}`} className="flex items-center gap-1.5 hover:text-secondary transition-colors px-3">
            <Mail className="h-2.5 w-2.5" />
            <span className="font-mono-brand">{BRAND.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
