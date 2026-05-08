import { useState, useEffect } from "react";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND, waLink, openWhatsApp } from "@/lib/brand";

const SlideInCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("slide-cta-shown");
    if (shown) return;

    const onScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 40) {
        setVisible(true);
        sessionStorage.setItem("slide-cta-shown", "1");
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="fixed bottom-20 right-4 z-[85] w-72 bg-card border border-border rounded-xl shadow-2xl overflow-hidden hidden sm:block"
        >
          <div className="h-1 bg-gradient-to-r from-primary to-secondary" />
          <button onClick={() => setVisible(false)} className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground transition-colors">
            <X className="h-3.5 w-3.5" />
          </button>
          <div className="p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-secondary" />
              </div>
              <p className="text-[9px] font-mono-brand tracking-widest text-muted-foreground">NEED HELP?</p>
            </div>
            <h4 className="font-display text-xl text-foreground mb-1.5 tracking-wide">HAVE QUESTIONS?</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Chat with us about PCMB, admissions, or campus facilities. We're here to help!
            </p>
            <a
              href={waLink(`Hi, I have a question about ${BRAND.name}`)}
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp(`Hi, I have a question about ${BRAND.name}`);
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground w-full justify-center py-2.5 rounded-md font-bold text-[10px] font-mono-brand tracking-widest hover:bg-secondary/90 transition-all"
            >
              CHAT ON WHATSAPP <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SlideInCTA;
