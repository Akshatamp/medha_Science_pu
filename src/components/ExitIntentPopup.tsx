import { useState, useEffect, useCallback } from "react";
import { X, GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, waLink, openWhatsApp } from "@/lib/brand";

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 5) {
      const shown = sessionStorage.getItem("exit-intent-shown");
      if (!shown) {
        setVisible(true);
        sessionStorage.setItem("exit-intent-shown", "1");
      }
    }
  }, []);

  useEffect(() => {
    // Delay adding listener so it doesn't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const dismiss = () => setVisible(false);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={dismiss}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"
          />
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="relative w-full max-w-sm bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="h-1.5 bg-gradient-to-r from-secondary via-primary to-secondary" />
            <button onClick={dismiss} className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10">
              <X className="h-4 w-4" />
            </button>

            <div className="p-6 sm:p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-3xl text-foreground mb-2 tracking-wide">WAIT!</h3>
              <p className="font-display text-xl text-foreground/80 mb-1">DON'T MISS YOUR SEAT</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                Admissions are filling fast. Send a quick enquiry and our team will call you back within 30 minutes.
              </p>

              <div className="space-y-2">
                <a
                  href={waLink(`Hi, I'm interested in admission at ${BRAND.name}. Please call me back.`)}
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp(`Hi, I'm interested in admission at ${BRAND.name}. Please call me back.`);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 rounded-md font-bold text-[11px] font-mono-brand tracking-widest hover:bg-primary/90 transition-all"
                >
                  SEND ENQUIRY <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`tel:${BRAND.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full border border-border text-muted-foreground py-3 rounded-md font-bold text-[11px] font-mono-brand tracking-widest hover:border-primary hover:text-primary transition-all"
                >
                  CALL US NOW
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
