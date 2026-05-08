import { motion } from "framer-motion";
import { Eye, Target, Heart, Award } from "lucide-react";
import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import ManagementSection from "@/components/ManagementSection";
import TrusteesSection from "@/components/TrusteesSection";

const PRINCIPAL_IMG = "https://medhapuc.com/img/about/pr.jpg";
const CAMPUS_IMG = "https://medhapuc.com/img/about/clg.jpg";

const values = [
  { icon: Eye, title: "OUR VISION", desc: "To be the foremost academic institution through pursuit of science with the Karnataka State PU board curriculum — training future leaders in science to serve the motherland and bring change in society." },
  { icon: Target, title: "OUR MISSION", desc: "Imparting scientific knowledge under strategic guidance of our leadership board, engaging pupils in mindful learning with activity-based modules, and inspiring change by awakening individual thought." },
  { icon: Heart, title: "OUR VALUES", desc: "Integrity, dedication, scientific temperament and a commitment to social empowerment alongside quality education." },
  { icon: Award, title: "OUR PROMISE", desc: "Skilled lecturers, digital projection classrooms, scholarship facilities, hostel arrangements and weekly TED-style talks for holistic learning." },
];

const About = () => {
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
            // WHO WE ARE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display text-primary-foreground leading-[0.85] mb-6"
          >
            ABOUT
            <br />
            <span className="text-gradient">MEDHA</span>
            <span className="accent-dot" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-primary-foreground/50 max-w-xl mx-auto"
          >
            Sri Medha Educational Trust, established in 2012, runs Medha Science PU College — a leading
            PU science institution in Hubballi committed to scientific knowledge and social empowerment.
          </motion.p>
        </div>
      </section>

      {/* ═══ ABOUT CONTENT ═══ */}
      <ManagementSection />

      {/* ═══ TRUSTEES ═══ */}
      <TrusteesSection />

      {/* ═══ MISSION / VISION ═══ */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">// WHAT DRIVES US</p>
            <h2 className="section-title">
              VISION ·{" "}
              <span className="text-gradient">MISSION · VALUES</span>
              <span className="accent-dot" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="brand-card p-8 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg text-foreground tracking-wide mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WELCOME STRIP ═══ */}
      <section className="py-16 sm:py-20 bg-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight max-w-3xl mx-auto"
          >
            "We welcome you to join us in the{" "}
            <span className="text-gradient">exciting journey of learning</span>"
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs font-mono-brand text-primary-foreground/30 tracking-widest mt-4"
          >
            — SRI MEDHA EDUCATIONAL TRUST
          </motion.p>
        </div>
      </section>

      {/* ═══ CAMPUS IMAGE ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg max-w-4xl mx-auto bg-muted"
          >
            <img src={CAMPUS_IMG} alt="Medha Science PU College campus" loading="lazy" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default About;
