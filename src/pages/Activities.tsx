import { motion } from "framer-motion";
import { Trophy, Brain, Monitor, Mic, BookOpen, Heart } from "lucide-react";
import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

const activities = [
  { icon: Trophy, title: "COMPETITIVE EXAM PREP", desc: "Moral boost and structured preparation to perform better in CET, JEE, NEET, NDA & KVPY." },
  { icon: BookOpen, title: "MERIT RECOGNITION", desc: "Proper encouragement and recognition for meritorious students at every milestone." },
  { icon: Brain, title: "PERSONALITY DEVELOPMENT", desc: "Mindfulness classes and personality development sessions to build confident, balanced learners." },
  { icon: Heart, title: "SUPPORT FOR EVERY LEARNER", desc: "Special coaching sessions for under-performers — every Medha student is given the time they need." },
  { icon: Monitor, title: "DIGITAL CLASSROOMS", desc: "Digital projection rooms and modern teaching tools enable richer, more interactive learning." },
  { icon: Mic, title: "WEEKLY TED-STYLE TALKS", desc: "Selected minds from society address students every week — broadening perspectives beyond the textbook." },
];

const highlights = [
  { num: "01", title: "WELL-DESIGNED CAMPUS", desc: "Aesthetically beautiful, eco-friendly building with all modern amenities and safety measures." },
  { num: "02", title: "AC SMART CLASSROOMS", desc: "Spacious air-conditioned classrooms with computers, projectors and glossy smart boards." },
  { num: "03", title: "STATE-OF-THE-ART LIBRARY", desc: "Vast reference collection, magazines, periodicals and high-speed internet access for students." },
  { num: "04", title: "SAFETY & CC SURVEILLANCE", desc: "CC cameras across classrooms, labs, library and reception ensure a secure campus environment." },
];

const Activities = () => {
  return (
    <div className="min-h-screen">
      <TopInfoBar />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-foreground overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/15 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label text-secondary mb-4">
            // CAMPUS LIFE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display text-primary-foreground leading-[0.85] mb-6"
          >
            ACTIVITIES &
            <br />
            <span className="text-gradient">FEATURES</span>
            <span className="accent-dot" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-primary-foreground/50 max-w-xl mx-auto"
          >
            All-round exposure to extra-curricular activities — alongside the best in PCMB academic preparation.
          </motion.p>
        </div>
      </section>

      {/* ═══ ACTIVITIES GRID ═══ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">// FEATURES OF THE COLLEGE</p>
            <h2 className="section-title">
              WHAT MAKES{" "}
              <span className="text-gradient">MEDHA SPECIAL</span>
              <span className="accent-dot" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {activities.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="brand-card p-8 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <a.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-foreground tracking-wide mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CAMPUS HIGHLIGHTS ═══ */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <p className="section-label mb-3">// CAMPUS HIGHLIGHTS</p>
              <h2 className="section-title mb-6">
                A CAMPUS BUILT FOR{" "}
                <span className="text-gradient">SCIENTIFIC LEARNING</span>
                <span className="accent-dot" />
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Located at Shirur Park, Vidya Nagar — half a kilometer from the Old Pune-Bangalore road —
                surrounded by well-known schools, colleges and academic institutions.
              </p>
              <div className="w-20 h-[2px] bg-gradient-to-r from-primary to-secondary" />
            </div>

            <div className="lg:col-span-7 space-y-0">
              {highlights.map((f, i) => (
                <motion.div
                  key={f.num}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-5 py-7 border-b border-border group hover:pl-4 transition-all duration-300"
                >
                  <span className="font-display text-4xl text-primary/30 group-hover:text-primary transition-colors flex-shrink-0">{f.num}</span>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl text-foreground mb-1 tracking-wide">{f.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Activities;
