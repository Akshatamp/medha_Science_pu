import { motion } from "framer-motion";
import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import WavekotaFaculty from "@/components/WavekotaFaculty";
import facultyShanthamma from "@/assets/faculty-shanthamma.png";
import facultyHiremath from "@/assets/faculty-hiremath.png";
import facultyPooja from "@/assets/faculty-pooja.png";
import facultyPrashant from "@/assets/faculty-prashant.png";
import facultyApoorva from "@/assets/faculty-apoorva.png";
import facultyKiran from "@/assets/faculty-kiran.png";

const facultyData = [
  { name: "Ujjanimatada Shanthamma", subject: "Kannada", img: facultyShanthamma },
  { name: "G. S. Hiremath", subject: "English", img: facultyHiremath },
  { name: "Pooja", subject: "Statistics", img: facultyPooja },
  { name: "Prashant Hongal", subject: "Computer Science", img: facultyPrashant },
  { name: "Apoorva Kulkarni", subject: "Sanskrit", img: facultyApoorva },
  { name: "Kiran", subject: "Physics", img: facultyKiran },
];

const subjectColor: Record<string, string> = {
  Kannada: "bg-amber-500/10 text-amber-700",
  English: "bg-rose-500/10 text-rose-600",
  Statistics: "bg-teal-500/10 text-teal-600",
  "Computer Science": "bg-blue-500/10 text-blue-600",
  Sanskrit: "bg-orange-500/10 text-orange-600",
  Physics: "bg-indigo-500/10 text-indigo-600",
};

const Faculty = () => {
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
            // OUR SKILLED LECTURERS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display text-primary-foreground leading-[0.85] mb-6"
          >
            OUR
            <br />
            <span className="text-gradient">FACULTY</span>
            <span className="accent-dot" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-primary-foreground/50 max-w-xl mx-auto"
          >
            Specialist mentors for II PUC board, language and elective subjects — Kannada,
            English, Statistics, Computer Science and Sanskrit.
          </motion.p>
        </div>
      </section>

      {/* ═══ FACULTY GRID ═══ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">// MEET THE TEAM</p>
            <h2 className="section-title">
              OUR LANGUAGES &amp;{" "}
              <span className="text-gradient">FACULTY</span>
              <span className="accent-dot" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 lg:gap-6">
            {facultyData.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="brand-card overflow-hidden group hover:-translate-y-2 text-center"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                  <img src={f.img} alt={f.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-4 -mt-6 relative z-10">
                  <span className={`inline-block text-[9px] font-mono-brand tracking-widest px-3 py-1 rounded mb-2 font-bold ${subjectColor[f.subject] || "bg-primary/10 text-primary"}`}>
                    {f.subject.toUpperCase()}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground leading-tight">{f.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KOTA EXPERTS ═══ */}
      <WavekotaFaculty />

      {/* ═══ STATS ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
            {[
              { value: "10+", label: "Specialist Faculty" },
              { value: "10", label: "Subjects Taught" },
              { value: "PCMB · PCMCs · PCMS", label: "Stream Coverage" },
              { value: "100%", label: "Qualified & Engaged" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl text-primary">{s.value}</p>
                <p className="text-[10px] font-mono-brand text-muted-foreground tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Faculty;
