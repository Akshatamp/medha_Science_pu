import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, GraduationCap, TrendingUp } from "lucide-react";

const stats = [
  { icon: Calendar, value: 12, suffix: "+", label: "Years Trust Legacy" },
  { icon: Users, value: 7, suffix: "+", label: "Skilled Lecturers" },
  { icon: TrendingUp, value: 5, suffix: "", label: "PCMB Subjects" },
  { icon: GraduationCap, value: 98, suffix: "%", label: "College Result 2025-26" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / (duration / 30)));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [target, inView]);
  return count;
}

const StatItem = ({ stat, inView }: { stat: typeof stats[0]; inView: boolean }) => {
  const count = useCountUp(stat.value, inView);
  return (
    <div className="text-center py-10 sm:py-14 text-primary-foreground">
      <stat.icon className="h-6 w-6 mx-auto mb-3 text-secondary" />
      <div className="text-4xl sm:text-5xl lg:text-6xl font-display mb-1">
        {count}<span className="text-secondary">{stat.suffix}</span>
      </div>
      <p className="text-[10px] sm:text-xs font-mono-brand tracking-widest uppercase opacity-70">{stat.label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-4 sm:py-8 bg-foreground relative overflow-hidden">
      {/* Diagonal stripes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-[10%] w-px h-full bg-primary-foreground rotate-12" />
        <div className="absolute top-0 left-[30%] w-px h-full bg-primary-foreground rotate-12" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-primary-foreground rotate-12" />
        <div className="absolute top-0 left-[70%] w-px h-full bg-primary-foreground rotate-12" />
        <div className="absolute top-0 left-[90%] w-px h-full bg-primary-foreground rotate-12" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
