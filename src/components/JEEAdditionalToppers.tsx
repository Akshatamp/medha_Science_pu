import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Trophy, Sparkles } from "lucide-react";
import { openWhatsApp } from "@/lib/brand";

import jeeSamarth from "@/assets/jee-samarth-kadam.jpg";
import jeeHemang from "@/assets/jee-hemang-patel.jpg";

const students = [
  {
    name: "Samarth Babu Kadam",
    percentile: 98.30,
    photo: jeeSamarth,
    subjects: { maths: 98.44, physics: 97.96, chemistry: 94.07 },
    imageClass: "object-cover object-[center_20%]",
  },
  {
    name: "Hemang Dhiraj Patel",
    percentile: 97.36,
    photo: jeeHemang,
    subjects: { maths: 97.86, physics: 95.08, chemistry: 95.95 },
    imageClass: "object-cover object-[center_30%]",
  },
];

const AnimatedPercentile = ({ value, delay }: { value: number; delay: number }) => {
  const [display, setDisplay] = useState("0.00");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const duration = 1500;
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay((eased * value).toFixed(2));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return <span ref={ref}>{display}</span>;
};

const JEEAdditionalToppers = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F5F8FF_50%,_#E3EEFC_100%)]">
      {/* Top & bottom navy ribbons */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />

      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[10rem] sm:text-[18rem] lg:text-[24rem] text-primary/[0.04] leading-none whitespace-nowrap">
          JEE 2026
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="section-label text-secondary mb-4 block">
            // JEE MAIN 2026 — TOPPERS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display text-foreground leading-[0.95] mb-4">
            JEE <span className="text-gradient">CHAMPIONS</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Sparkles className="h-5 w-5 text-secondary" />
            <p className="font-mono-brand text-xs sm:text-sm tracking-widest text-muted-foreground uppercase">
              Medha × <span className="text-primary">Wavekota</span> — Rising stars
            </p>
            <Sparkles className="h-5 w-5 text-secondary" />
          </div>
        </motion.div>

        {/* Topper cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto mb-12">
          {students.map((student, i) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center bg-card/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-primary/10 shadow-lg shadow-primary/5"
            >
              {/* Photo */}
              <div className="relative mb-4 w-36 h-36 sm:w-44 sm:h-44">
                <div className="absolute -top-2 -right-1 z-20">
                  <Trophy className="h-6 w-6 text-secondary fill-secondary" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-primary p-[3px]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className={`w-full h-full ${student.imageClass}`}
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="font-display tracking-wide text-foreground text-lg sm:text-2xl text-center leading-tight">
                {student.name.toUpperCase()}
              </h3>

              {/* Percentile */}
              <div className="font-display leading-none mt-3 text-3xl sm:text-5xl text-gradient">
                {student.percentile !== null ? (
                  <>
                    <AnimatedPercentile value={student.percentile} delay={i * 200} />
                    <span className="text-secondary text-lg sm:text-xl ml-0.5">%</span>
                  </>
                ) : (
                  <span className="text-muted-foreground/60 text-2xl sm:text-3xl tracking-wider">
                    JEE MAIN 2026
                  </span>
                )}
              </div>

              {/* Subject breakdown */}
              <div className="grid grid-cols-3 gap-2 w-full mt-4">
                {[
                  { label: "MATHS", value: student.subjects.maths },
                  { label: "PHYSICS", value: student.subjects.physics },
                  { label: "CHEMISTRY", value: student.subjects.chemistry },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-primary/5 border border-primary/10 rounded-lg py-2 px-1 text-center"
                  >
                    <div className="font-mono-brand text-[8px] sm:text-[9px] tracking-[0.15em] text-muted-foreground uppercase">
                      {s.label}
                    </div>
                    <div className="font-display text-base sm:text-xl text-foreground leading-tight mt-0.5">
                      {s.value.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <span className="font-mono-brand text-[10px] tracking-[0.2em] text-muted-foreground mt-3 uppercase">
                Medha × Wavekota
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={() =>
              openWhatsApp(
                "Hi, I want to enquire about admissions after seeing the JEE Main 2026 toppers."
              )
            }
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-display text-base sm:text-2xl tracking-wider hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30"
          >
            JOIN THE WINNING TEAM <ArrowRight className="h-5 w-5" />
          </button>
          <p className="font-mono-brand text-[10px] tracking-widest text-muted-foreground mt-3 uppercase">
            Medha Science PU × Wavekota
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JEEAdditionalToppers;
