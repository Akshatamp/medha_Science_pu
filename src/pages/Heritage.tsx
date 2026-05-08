import { motion } from "framer-motion";
import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import ManagementSection from "@/components/ManagementSection";

const TRUST_IMG = "https://medhapuc.com/img/about/pr.jpg";
const CAMPUS_IMG = "https://medhapuc.com/img/about/clg.jpg";

const milestones = [
  {
    year: "2012-13",
    title: "TRUST FOUNDED",
    body: "Sri Medha Educational Trust is established at Krthika Annexe, Lingaraja Nagar, Unkal Cross Hubballi-31 — a leading educational provider in Hubballi city, with equal emphasis on quality education and social empowerment.",
  },
  {
    year: "2013–2018",
    title: "FIRST CAMPUS YEARS",
    body: "Medha Science PU College emerges with a mission to excel in scientific knowledge for students of North Karnataka, focused on PCMB at the Lingaraj Nagar campus.",
  },
  {
    year: "2018-19",
    title: "BRTS DISRUPTION",
    body: "Due to road widening for the BRTS project, the original campus is disturbed and the institute closes temporarily — a setback met with the trustees' resolve to rebuild.",
  },
  {
    year: "2019-20",
    title: "RECONSTITUTION & REBIRTH",
    body: "The trust is reconstituted at Empire Square Building (Third Floor), Shirur Park, Vidya Nagar, Hubballi. With the kind-heartedness of all trustees, Medha Science PU College re-opens at the new location.",
  },
  {
    year: "Today",
    title: "MOVING FORWARD",
    body: "Medha now moves forward to transform mission and vision into reality — creating endless opportunities for aspiring students in the coming years.",
  },
];

const Heritage = () => {
  return (
    <div className="min-h-screen">
      <TopInfoBar />
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-foreground overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary/5 rounded-full" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label text-secondary mb-4">
            // OUR HERITAGE
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display text-primary-foreground leading-[0.85] mb-6"
          >
            THE MEDHA
            <br />
            <span className="text-gradient">JOURNEY</span>
            <span className="accent-dot" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-primary-foreground/50 max-w-2xl mx-auto"
          >
            From a 2012 founding at Lingaraj Nagar to a reborn campus at Shirur Park — the story of
            Sri Medha Educational Trust and its commitment to scientific learning in North Karnataka.
          </motion.p>
        </div>
      </section>

      {/* ═══ MANAGEMENT ═══ */}
      <ManagementSection />

      {/* ═══ TIMELINE ═══ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">// TIMELINE</p>
            <h2 className="section-title">
              MILESTONES OF{" "}
              <span className="text-gradient">OUR JOURNEY</span>
              <span className="accent-dot" />
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-5">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="brand-card p-6 sm:p-8 flex gap-5 sm:gap-8 group hover:-translate-y-1 transition-all"
              >
                <div className="flex-shrink-0 text-center">
                  <p className="font-display text-2xl sm:text-3xl text-primary leading-none">{m.year}</p>
                  <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary mt-2 mx-auto" />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-foreground tracking-wide mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE STRIP ═══ */}
      <section className="py-16 sm:py-20 bg-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight max-w-3xl mx-auto"
          >
            "We move forward to transform our{" "}
            <span className="text-gradient">mission and vision into reality</span>"
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
            <img src={CAMPUS_IMG} alt="Medha Science PU College campus today" loading="lazy" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Heritage;
