import { motion } from "framer-motion";

const facultyData = [
  { name: "Dr. P. R. Havali", subject: "Chemistry", img: "https://medhapuc.com/img/team/tc5.jpg" },
  { name: "Sudha Chinta", subject: "Biology", img: "https://medhapuc.com/img/team/tc6.jpg" },
  { name: "Annapurneshwari M Hongal", subject: "Biology", img: "https://medhapuc.com/img/team/tc7.jpg" },
  { name: "Suhasini S Kulkarni", subject: "Physics", img: "https://medhapuc.com/img/team/tc8.jpg" },
  { name: "Gabriel M Uppin", subject: "Mathematics", img: "https://medhapuc.com/img/team/tc2.jpg" },
  { name: "G. V. Donurmath", subject: "Physics", img: "https://medhapuc.com/img/team/tc3.jpg" },
  { name: "Shantha U M", subject: "Kannada", img: "https://medhapuc.com/img/team/tc4.jpg" },
];

const subjectColor: Record<string, string> = {
  Biology: "bg-emerald-500/10 text-emerald-600",
  Mathematics: "bg-indigo-500/10 text-indigo-600",
  Chemistry: "bg-orange-500/10 text-orange-600",
  Physics: "bg-cyan-500/10 text-cyan-600",
  Kannada: "bg-amber-500/10 text-amber-700",
};

const FacultySection = () => {
  return (
    <>
      {/* ═══ OUR FACULTY HERO ═══ */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-foreground overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/15 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label text-secondary mb-4"
          >
            // OUR SKILLED LECTURERS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-display text-primary-foreground leading-[0.85] mb-6"
          >
            OUR
            <br />
            <span className="text-gradient">FACULTY</span>
            <span className="accent-dot" />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-primary-foreground/50 max-w-xl mx-auto"
          >
            Skilled lecturers across Physics, Chemistry, Mathematics, Biology and Kannada — engaged in
            mindful learning and activity-based teaching at Medha Science PU College.
          </motion.p>
        </div>
      </section>

      {/* ═══ MEET THE TEAM GRID ═══ */}
      <section className="py-16 sm:py-24 lg:py-28 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            
            <h2 className="section-title">
              7 SKILLED <span className="text-gradient">LECTURERS</span>
              <span className="accent-dot" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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
                  <img
                    src={f.img}
                    alt={f.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-4 -mt-6 relative z-10">
                  <span
                    className={`inline-block text-[9px] font-mono-brand tracking-widest px-3 py-1 rounded mb-2 font-bold ${
                      subjectColor[f.subject] || "bg-primary/10 text-primary"
                    }`}
                  >
                    {f.subject.toUpperCase()}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground leading-tight">{f.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FacultySection;
