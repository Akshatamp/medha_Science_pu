import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { waLink, openWhatsApp } from "@/lib/brand";

import topRitishgouda from "@/assets/topper-ritishgouda.png";
import topYashraj from "@/assets/topper-yashraj.png";
import topMeghana from "@/assets/topper-meghana.png";
import topVarsha from "@/assets/topper-varsha.png";
import topDeepti from "@/assets/topper-deepti.png";

const students = [
  { name: "Ritishgouda Patil", percent: 97.67, photo: topRitishgouda, star: true },
  { name: "Yashraj Kamble", percent: 95.67, photo: topYashraj, star: false },
  { name: "Meghana Amminbhavi", percent: 95.67, photo: topMeghana, star: false },
  { name: "Varsha S Patil", percent: 95.17, photo: topVarsha, star: false },
  { name: "Deepti C M", percent: 95.0, photo: topDeepti, star: false },
];

const AnimatedPercent = ({ value, delay }: { value: number; delay: number }) => {
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

// Decorative confetti pieces — purely visual
const confetti = [
  { top: "12%", left: "8%", color: "bg-secondary", w: "w-3", h: "h-1.5", rot: "rotate-12" },
  { top: "20%", left: "18%", color: "bg-accent", w: "w-2", h: "h-2", rot: "rotate-45" },
  { top: "8%", left: "32%", color: "bg-primary", w: "w-2.5", h: "h-1", rot: "-rotate-12" },
  { top: "28%", left: "5%", color: "bg-accent", w: "w-2", h: "h-1", rot: "rotate-45" },
  { top: "10%", right: "10%", color: "bg-secondary", w: "w-3", h: "h-1.5", rot: "-rotate-45" },
  { top: "22%", right: "20%", color: "bg-accent", w: "w-2", h: "h-2", rot: "rotate-12" },
  { top: "6%", right: "32%", color: "bg-primary", w: "w-2", h: "h-1", rot: "rotate-45" },
  { top: "30%", right: "6%", color: "bg-secondary", w: "w-2.5", h: "h-1", rot: "-rotate-12" },
  { bottom: "30%", left: "6%", color: "bg-accent", w: "w-2", h: "h-1.5", rot: "rotate-45" },
  { bottom: "20%", right: "10%", color: "bg-primary", w: "w-2.5", h: "h-1", rot: "-rotate-12" },
];

const AcademicResultsBanner = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-[linear-gradient(110deg,_#FFFFFF_0%,_#F5F8FF_45%,_#DCEAFB_75%,_#BFD9F5_100%)]">
      {/* Top & bottom navy ribbons */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />

      {/* Wave accents */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 text-primary/10 pointer-events-none"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,64 C240,96 480,16 720,40 C960,64 1200,112 1440,80 L1440,120 L0,120 Z"
        />
      </svg>
      <svg
        className="absolute top-10 right-0 w-1/2 h-40 text-secondary/10 pointer-events-none"
        viewBox="0 0 720 160"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,40 C180,8 360,72 540,48 C620,38 680,20 720,10 L720,160 L0,160 Z"
        />
      </svg>

      {/* Confetti */}
      {confetti.map((c, i) => (
        <span
          key={i}
          className={`absolute ${c.color} ${c.w} ${c.h} ${c.rot} rounded-sm opacity-70 pointer-events-none`}
          style={{
            top: c.top,
            left: c.left,
            right: c.right,
            bottom: c.bottom,
          }}
        />
      ))}

      {/* Ghost background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[10rem] sm:text-[18rem] lg:text-[24rem] text-primary/[0.05] leading-none whitespace-nowrap">
          2025-26
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
            // MEDHA TOPPERS — ACADEMIC YEAR 2025-26
          </span>
          <h2 className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-display leading-[0.95] mb-4">
            <span className="text-primary">MEDHA SCIENCE PU</span>
            <br />
            <span className="text-secondary">TOPPERS </span>
            <span className="text-accent">2025-26</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Award className="h-5 w-5 text-secondary fill-secondary/20" />
            <p className="font-mono-brand text-xs sm:text-sm tracking-widest text-primary uppercase font-semibold">
              5 students above 95% — Medha Science PU College
            </p>
            <Award className="h-5 w-5 text-secondary fill-secondary/20" />
          </div>
        </motion.div>

        {/* Student Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 items-start justify-items-center gap-6 sm:gap-4 lg:gap-8 mb-12 sm:mb-16 max-w-6xl mx-auto">
          {students.map((student, i) => (
            <motion.div
              key={student.name}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center ${
                student.star ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              {/* Photo — circular */}
              <div className={`relative mb-3 sm:mb-4 ${student.star ? "w-32 sm:w-40" : "w-24 sm:w-32"}`}>
                {student.star && (
                  <div className="absolute -top-2 -right-1 z-20 bg-secondary rounded-full p-1.5 shadow-md">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden>
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
                    </svg>
                  </div>
                )}
                <div
                  className={`rounded-full aspect-square ${
                    student.star
                      ? "bg-gradient-to-br from-primary via-secondary to-primary"
                      : "bg-gradient-to-br from-primary to-secondary"
                  } p-[3px] shadow-lg`}
                >
                  <div className="rounded-full overflow-hidden bg-white w-full h-full">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3
                className={`font-display tracking-wide text-primary text-center ${
                  student.star ? "text-sm sm:text-lg" : "text-xs sm:text-base"
                }`}
              >
                {student.name.toUpperCase()}
              </h3>

              <div
                className={`font-display leading-none mt-2 ${
                  student.star
                    ? "text-3xl sm:text-4xl text-secondary"
                    : "text-2xl sm:text-3xl text-primary"
                }`}
              >
                <AnimatedPercent value={student.percent} delay={i * 150} />
                <span
                  className={`text-sm sm:text-base ml-0.5 ${
                    student.star ? "text-secondary" : "text-primary"
                  }`}
                >
                  %
                </span>
              </div>

              <span className="font-mono-brand text-[9px] sm:text-[10px] tracking-[0.2em] text-muted-foreground mt-2 uppercase">
                Medha Science PU
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
          <a
            href={waLink("Hi, I saw the Medha Toppers 2025-26 results and want to enquire about admissions")}
            onClick={(e) => {
              e.preventDefault();
              openWhatsApp("Hi, I saw the Medha Toppers 2025-26 results and want to enquire about admissions");
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-display text-base sm:text-2xl tracking-wider hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/30"
          >
            JOIN THE WINNING TEAM <ArrowRight className="h-5 w-5" />
          </a>
          <p className="font-mono-brand text-[10px] tracking-widest text-muted-foreground mt-4 uppercase">
            Medha Science PU College — Where toppers are made
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicResultsBanner;
