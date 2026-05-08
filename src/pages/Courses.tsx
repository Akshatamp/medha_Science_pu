import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

const streams = [
  {
    id: "pcmb",
    num: "01",
    pill: "CORE STREAM",
    title: "PCMB",
    subtitle: "Physics · Chemistry · Mathematics · Biology",
    description:
      "The most versatile science combination — keeps engineering, medicine, basic sciences and allied fields all open.",
    tags: ["NEET", "K-CET", "JEE", "COMED-K", "NDA", "KVPY"],
  },
  {
    id: "pcmcs",
    num: "02",
    pill: "STEM",
    title: "PCMCs",
    subtitle: "Physics · Chemistry · Mathematics · Computer Science",
    description:
      "Built for engineering and technology aspirants. Strong foundation for JEE, BITSAT and modern computer science programmes.",
    tags: ["JEE", "K-CET", "COMED-K", "BITSAT", "NDA"],
  },
  {
    id: "pcms",
    num: "03",
    pill: "STEM",
    title: "PCMS",
    subtitle: "Physics · Chemistry · Mathematics · Statistics",
    description:
      "Ideal for analytical, data-driven and research-oriented careers — ISI, statistics, economics and engineering programmes.",
    tags: ["JEE", "K-CET", "COMED-K", "NDA", "ISI"],
  },
];

const careers = [
  { title: "Engineering", img: "https://medhapuc.com/img/about/engineer.jpg", body: "The most popular post-12th stream. 4–5 year programs across civil, mechanical, electrical, computer and many more specialisations — with a wide range of entrance exams (JEE, K-CET, COMED-K, BITSAT) opening doors to the country's top colleges." },
  { title: "Bachelor of Management Studies (BMS)", img: "https://medhapuc.com/img/about/business.jpg", body: "Open to all streams — many science students opt for BMS once they realise their interest in management. Covers accounting, finance, marketing and HR; a science background is a strong advantage in tech-driven companies." },
  { title: "Commercial Pilot", img: "https://medhapuc.com/img/about/commpilot.jpg", body: "With aviation growing rapidly, many universities and private institutes now offer commercial pilot courses in India — a path that once required overseas training. A high-paying career in the sky." },
  { title: "Architecture", img: "https://medhapuc.com/img/about/architecture.jpg", body: "Architects design buildings and structures that civil engineers bring to life. A great fit for students strong in art, design and mathematics — with excellent pay-scales and a growing emphasis on green, sustainable buildings." },
  { title: "Product Design", img: "https://medhapuc.com/img/about/product.jpg", body: "A niche but rapidly growing field. Specialised graduate programs cover design, branding, marketing and sales — leading to roles in product-based industries and design agencies." },
];

const Courses = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    // Wait a tick so layout/animations settle, then smooth-scroll
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <TopInfoBar />
      <Navbar />

      {/* HERO */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-foreground overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/15 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label text-secondary mb-4">
            // COURSES
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display text-primary-foreground leading-[0.85] mb-6"
          >
            PCMB &
            <br />
            <span className="text-gradient">BEYOND</span>
            <span className="accent-dot" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-primary-foreground/50 max-w-xl mx-auto"
          >
            Why PCMB is the smartest combination — and the doors it opens after 12th.
          </motion.p>
        </div>
      </section>

      {/* OUR STREAMS */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-label mb-3">// OUR STREAMS</p>
            <h2 className="section-title">
              CHOOSE YOUR <span className="text-gradient">PATH</span>
              <span className="accent-dot" />
            </h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4">
              Three science streams designed to open the widest range of career paths after II PUC.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {streams.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col scroll-mt-28"
              >
                <div className="bg-primary h-2 rounded-t-lg" />
                <div className="brand-card rounded-t-none p-7 border-t-0 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-5 flex-wrap gap-2">
                    <span className="font-display text-5xl text-foreground/[0.06] leading-none">{s.num}</span>
                    <span className="bg-primary text-primary-foreground text-[10px] font-mono-brand tracking-widest px-3 py-1 rounded">
                      {s.pill}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-2 tracking-wide">{s.title}</h3>
                  <p className="text-[10px] text-muted-foreground font-mono-brand tracking-wider uppercase mb-4">{s.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span key={tag} className="text-[9px] bg-primary/10 text-primary px-2.5 py-1 rounded font-mono-brand tracking-wider font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PCMB IMPORTANCE */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="section-label mb-3">// PCMB IMPORTANCE</p>
              <h2 className="section-title mb-6">WHY <span className="text-gradient">PCMB</span><span className="accent-dot" /></h2>
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>Every year lakhs of students face a divergence after 10th — choosing among Physics, Chemistry, Mathematics and Biology. While Physics and Chemistry are compulsory for science, the real edge comes from picking up <span className="text-foreground font-semibold">both</span> Mathematics and Biology.</p>
                <ul className="space-y-2 pl-1">
                  <li className="flex gap-2"><span className="text-primary">•</span>Keeps options open for engineering, medicine, basic sciences and allied fields.</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Builds a strong foundation while keeping interdisciplinary roads open.</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Accentuates your profile for both research and industrial careers.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl overflow-hidden border border-border shadow-lg bg-muted">
              <img src="https://medhapuc.com/img/about/pcmb.jpg" alt="PCMB stream" loading="lazy" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MATH IMPORTANCE */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="section-label mb-3">// MATHEMATICS</p>
          <h2 className="section-title mb-6">WHY <span className="text-gradient">MATHEMATICS</span><span className="accent-dot" /></h2>
          <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>For science-stream students, mathematics is indispensable — many concepts in chemistry and physics actually depend on the math covered in classes 11 and 12. Mathematics is also a prerequisite for various career paths you simply can't access without it.</p>
            <p>With more graduates pursuing inter-disciplinary work today, two extra years of biology alongside math makes a real difference in fields like:</p>
            <div className="grid sm:grid-cols-2 gap-2 pt-2">
              {["Biotechnology & Biomedical Engineering","Cognitive Neuroscience & AI","Internet of Things & Smart Wearables","Healthcare, Bioinformatics & Data Mining","Swarm Algorithms & Robotics","Agricultural Engineering","Biochemical & Biophysical Processes","Nanotechnology"].map((t) => (
                <div key={t} className="flex gap-2 items-start"><span className="text-primary mt-1">▸</span><span>{t}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER PATHS */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">// AFTER 12TH PCM</p>
            <h2 className="section-title">CAREER <span className="text-gradient">PATHS</span><span className="accent-dot" /></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {careers.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="brand-card overflow-hidden group hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-foreground tracking-wide mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="section-label mb-3">// STATISTICS</p>
          <h2 className="section-title mb-6">WHY <span className="text-gradient">STATISTICS</span><span className="accent-dot" /></h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
            Statistical literacy is a precondition for an educated citizenship in a technological democracy.
            Understanding risks and asking critical questions shapes the emotional climate of a society —
            so hopes and anxieties cannot be easily manipulated, and citizens develop a more informed,
            relaxed attitude towards their own health.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="brand-card p-6">
              <p className="text-[10px] font-mono-brand tracking-widest text-primary mb-2">PURPOSE 01</p>
              <h4 className="font-display text-lg text-foreground mb-1">DESCRIPTIVE</h4>
              <p className="text-sm text-muted-foreground">Finding ways to summarize the important characteristics of a dataset.</p>
            </div>
            <div className="brand-card p-6">
              <p className="text-[10px] font-mono-brand tracking-widest text-primary mb-2">PURPOSE 02</p>
              <h4 className="font-display text-lg text-foreground mb-1">INFERENTIAL</h4>
              <p className="text-sm text-muted-foreground">How to generalize from a sample dataset to the larger population.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {["Consumer goods","Stock marketing","Quality testing","Weather forecasts","Emergency preparedness","Predicting disease","Genetics"].map((t) => (
              <div key={t} className="flex gap-2 items-start text-sm text-muted-foreground"><span className="text-primary mt-1">▸</span><span>{t}</span></div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Courses;
