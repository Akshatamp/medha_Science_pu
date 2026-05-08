import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Trophy, Star, FileText } from "lucide-react";
import { openWhatsApp } from "@/lib/brand";

import jeeAditya from "@/assets/jee-aditya-red.png";
import jeeNaman from "@/assets/jee-naman-red.png";
import jeeMadhvesh from "@/assets/jee-madhvesh-red.png";
import jeeSiddharth from "@/assets/jee-siddharth-red.png";
import jeeAyush from "@/assets/jee-ayush-red.png";

const students = [
  { name: "Aditya S", percentile: 99.86, photo: jeeAditya, star: true },
  { name: "Naman Patil", percentile: 99.11, photo: jeeNaman, star: false },
  { name: "Madhvesh K", percentile: 98.77, photo: jeeMadhvesh, star: false },
  { name: "Siddharth P", percentile: 98.6, photo: jeeSiddharth, star: false },
  { name: "Ayush R", percentile: 98.3, photo: jeeAyush, star: false },
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

const JEEResultsBanner = () => {
  return (
    <section className="bg-foreground py-16 sm:py-24 relative overflow-hidden">
      {/* Ghost text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[12rem] sm:text-[20rem] lg:text-[28rem] text-primary-foreground/[0.03] leading-none whitespace-nowrap">
          99.86
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
            // JEE MAIN 2026 — 1ST ATTEMPT
          </span>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-display text-primary-foreground leading-[0.9] mb-4">
            NORTH KARNATAKA'S<br />
            <span className="text-gradient">BEST RESULTS</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Trophy className="h-5 w-5 text-secondary" />
            <p className="font-mono-brand text-xs sm:text-sm tracking-widest text-primary-foreground/60 uppercase">
              5 students above 95 percentile — Medha × <span className="text-blue-400">Wavekota</span>
            </p>
            <Trophy className="h-5 w-5 text-secondary" />
          </div>
        </motion.div>

        {/* Student Cards */}
        <div className="flex flex-wrap items-end justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {students.map((student, i) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center ${
                student.star ? "w-full sm:w-auto" : "w-[calc(50%-0.5rem)] sm:w-auto"
              }`}
            >
              {/* Photo */}
              <div className={`relative mb-3 sm:mb-4 ${student.star ? "w-24 h-24 sm:w-36 sm:h-36" : "w-16 h-16 sm:w-28 sm:h-28"}`}>
                {student.star && (
                  <div className="absolute -top-3 -right-1 z-20">
                    <Star className="h-6 w-6 text-secondary fill-secondary" />
                  </div>
                )}
                <div className={`absolute inset-0 rounded-full ${
                  student.star
                    ? "bg-gradient-to-br from-primary via-secondary to-primary animate-pulse"
                    : "bg-gradient-to-br from-primary/60 to-secondary/60"
                } p-[3px]`}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-foreground">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className={`font-display tracking-wide text-primary-foreground ${
                student.star ? "text-base sm:text-2xl" : "text-xs sm:text-xl"
              }`}>
                {student.name.toUpperCase()}
              </h3>

              <div className={`font-display leading-none mt-1 ${
                student.star
                  ? "text-2xl sm:text-5xl text-gradient"
                  : "text-lg sm:text-3xl text-primary-foreground"
              }`}>
                <AnimatedPercentile value={student.percentile} delay={i * 150} />
                <span className="text-secondary text-lg sm:text-xl ml-0.5">%ile</span>
              </div>

              <span className="font-mono-brand text-[9px] sm:text-[10px] tracking-[0.2em] text-primary-foreground/40 mt-2 uppercase">
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
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/917996420113?text=Hi%2C%20I%20saw%20the%20JEE%20Main%20results%20and%20want%20to%20enquire%20about%20admissions"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp("Hi, I saw the JEE Main results and want to enquire about admissions");
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-10 py-3 sm:py-4 rounded-lg font-display text-base sm:text-2xl tracking-wider hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30"
            >
              JOIN THE WINNING TEAM <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/pdfs/jee-main-2026-results.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-secondary/60 text-secondary px-5 sm:px-8 py-3 sm:py-4 rounded-lg font-display text-sm sm:text-xl tracking-wider hover:bg-secondary hover:text-foreground transition-all"
            >
              <FileText className="h-4 w-4 sm:h-5 sm:w-5" /> VIEW OFFICIAL RESULT
            </a>
          </div>
          <p className="font-mono-brand text-[10px] tracking-widest text-primary-foreground/30 mt-3 uppercase">
            Medha Science PU × Wavekota — Where champions are made
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default JEEResultsBanner;
