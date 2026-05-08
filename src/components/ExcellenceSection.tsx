import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    label: "VISION",
    title: "BECOMING A FOREMOST SCIENCE INSTITUTION",
    body:
      "Medha Science PU College aims to be the foremost academic institution through the pursuit of science with the Karnataka State Pre-University Board curriculum — offering the best education to train future leaders in science to serve the motherland, bring change in society and achieve their dreams in life.",
  },
  {
    icon: Target,
    label: "MISSION",
    title: "REALISING THE VISION",
    body:
      "Imparting scientific knowledge under strategic guidance of our leadership board and engaged educators · Engaging pupils in mindful learning by high-calibre faculty with activity-based modules · Inspiring change by awakening the individual thought process of every student.",
  },
];

const ExcellenceSection = () => {
  return (
    <section id="excellence" className="py-12 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <p className="section-label mb-3">// VISION &amp; MISSION</p>
          <h2 className="section-title">
            WHAT DRIVES <span className="text-gradient">MEDHA SCIENCE PU COLLEGE</span>
            <span className="accent-dot" />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="brand-card p-8 sm:p-10 group hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <p.icon className="h-6 w-6" />
              </div>
              <p className="text-[10px] font-mono-brand tracking-widest text-primary uppercase mb-2">{p.label}</p>
              <h3 className="font-display text-2xl sm:text-3xl text-foreground tracking-wide mb-4">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
