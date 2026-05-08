import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Download, Trophy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/brand";
import toppersImage from "@/assets/medha-toppers-2025-26.jpg";

const slides = [
  {
    title: "YOU DESERVE THE BEST EDUCATION",
    highlight: "BEST EDUCATION",
    subtitle: BRAND.subtagline,
    num: "01",
  },
  {
    title: "MEDHA SCIENCE PU COLLEGE",
    highlight: "MEDHA",
    subtitle: "A leading PU science institution in Hubballi — empowering students with PCMB, modern infrastructure and dedicated faculty.",
    num: "02",
  },
  {
    title: "CET · JEE · NEET",
    highlight: "JEE · NEET",
    subtitle: "Moral boost and structured coaching to perform better in every major competitive exam.",
    num: "03",
  },
  {
    title: "ADMISSIONS OPEN 2026-2027",
    highlight: "OPEN",
    subtitle: "PCMB stream with experienced lecturers, digital classrooms and a supportive campus. Join the Medha family today.",
    num: "04",
    cta: true,
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const delay = 5000;
    setProgress(0);
    const raf = requestAnimationFrame(() => setProgress(100));
    const timeout = setTimeout(next, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [current, next]);

  return (
    <section id="home" className="relative min-h-[25vh] sm:min-h-[32vh] lg:min-h-[60vh] flex items-center overflow-hidden bg-background">
      {/* Giant background number */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[35vw] font-display text-primary/[0.04] leading-none pointer-events-none select-none">
        {slides[current].num}
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/[0.03] skew-x-[-8deg] translate-x-20 hidden lg:block" />
      <div className="absolute top-20 right-[20%] w-40 h-40 rounded-full border-2 border-primary/10 hidden lg:block" />
      <div className="absolute bottom-20 right-[15%] w-24 h-24 rounded-full bg-secondary/10 hidden lg:block" />
      <div className="absolute top-1/3 right-[35%] w-4 h-4 rounded-full bg-primary hidden lg:block" />

      <div className="container mx-auto px-4 pt-4 pb-16 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="font-mono-brand tracking-[0.3em] uppercase text-xs sm:text-sm font-bold">
                <span className="text-primary">Sri Medha Educational Trust</span>
                <span className="mx-2 text-foreground/40">·</span>
                <span className="text-foreground/60">Est. {BRAND.established}</span>
              </span>
            </motion.div>

            <div className="min-h-[110px] sm:min-h-[150px] md:min-h-[180px] lg:min-h-[200px] xl:min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="font-display leading-[0.9] mb-4 tracking-wide text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    {slides[current].title.split(slides[current].highlight)[0]}
                    <span className="text-gradient">{slides[current].highlight}</span>
                    {slides[current].title.split(slides[current].highlight)[1]}
                  </h1>
                </motion.div>
              </AnimatePresence>

              <p className="text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed mb-8">
                {slides[current].subtitle}
              </p>
            </div>

            {/* Results Highlight Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="mt-0 mb-6 pb-6 border-b border-foreground/10 max-w-xl"
            >
              <p className="text-sm sm:text-base text-foreground/70 mb-5 leading-snug">
                <span className="font-semibold text-foreground/90">PUC 97.67% · JEE 98%</span>
                <span className="text-muted-foreground"> — Record-breaking results across every exam.</span>
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="relative bg-primary/5 border border-primary/20 rounded-lg pl-5 pr-4 py-4 sm:pl-6 sm:pr-5 sm:py-5 hover:bg-primary/10 transition-colors overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <div className="font-display text-3xl sm:text-5xl text-primary leading-none">
                    97.67<span className="text-xl sm:text-3xl">%</span>
                  </div>
                  <div className="font-mono-brand text-[9px] sm:text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-2">
                    PUC 2025
                  </div>
                </div>
                <div className="relative bg-primary/5 border border-primary/20 rounded-lg pl-5 pr-4 py-4 sm:pl-6 sm:pr-5 sm:py-5 hover:bg-primary/10 transition-colors overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                  <div className="font-display text-3xl sm:text-5xl text-primary leading-none">
                    98<span className="text-xl sm:text-3xl">%</span>
                  </div>
                  <div className="font-mono-brand text-[9px] sm:text-[11px] tracking-[0.15em] uppercase text-muted-foreground mt-2">
                    JEE Main
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={BRAND.prospectusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-md text-sm font-bold transition-all hover:bg-primary/90 shadow-lg shadow-primary/20"
              >
                <Download className="h-4 w-4" /> Download Prospectus
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={toppersImage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-primary border border-foreground/15 hover:border-primary/40 px-6 py-3 rounded-md transition-all"
              >
                <Trophy className="h-4 w-4" /> Toppers of the College
              </a>
            </motion.div>

            {/* Mobile dot indicators */}
            <div className="flex items-center gap-2 mt-6 lg:hidden">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full overflow-hidden transition-all duration-300 ${
                    i === current ? "w-10 h-2 bg-foreground/10" : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
                  }`}
                >
                  {i === current && (
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{
                        width: `${progress}%`,
                        transition: progress === 0 ? "none" : "width 5000ms linear",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - slide indicators */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-end gap-6">
            {slides.map((s, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`text-right transition-all duration-500 group ${i === current ? "opacity-100" : "opacity-30 hover:opacity-60"}`}
              >
                <span className="font-display text-5xl block leading-none">{s.num}</span>
                <span className={`text-[10px] font-mono-brand tracking-widest uppercase mt-1 block ${i === current ? "text-primary" : "text-foreground/40"}`}>
                  {s.highlight}
                </span>
                <div className="h-[2px] mt-2 overflow-hidden rounded-full" style={{ width: i === current ? "5rem" : "2rem", transition: "width 0.5s" }}>
                  <div
                    className={`h-full rounded-full ${i === current ? "bg-gradient-to-r from-primary to-secondary" : "bg-foreground/15"}`}
                    style={i === current ? {
                      width: `${progress}%`,
                      transition: progress === 0 ? "none" : "width 5000ms linear",
                    } : { width: "100%" }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
