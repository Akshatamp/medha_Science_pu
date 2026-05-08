import { motion } from "framer-motion";
import { Languages, BookOpen, BarChart3, Laptop, ScrollText, Atom } from "lucide-react";
import facultyShanthamma from "@/assets/faculty-shanthamma.png";
import facultyHiremath from "@/assets/faculty-hiremath.png";
import facultyPooja from "@/assets/faculty-pooja.png";
import facultyPrashant from "@/assets/faculty-prashant.png";
import facultyApoorva from "@/assets/faculty-apoorva.png";
import facultyKiran from "@/assets/faculty-kiran.png";

const faculty = [
  {
    name: "Ujjanimatada Shanthamma",
    subject: "Kannada",
    credential: "II PUC Board Specialist",
    icon: Languages,
    color: "from-amber-500 to-yellow-500",
    iconBg: "bg-amber-100 text-amber-600",
    photo: facultyShanthamma,
  },
  {
    name: "G. S. Hiremath",
    subject: "English",
    credential: "II PUC Board Specialist",
    icon: BookOpen,
    color: "from-rose-500 to-pink-500",
    iconBg: "bg-rose-100 text-rose-600",
    photo: facultyHiremath,
  },
  {
    name: "Pooja",
    subject: "Statistics",
    credential: "PCMS Stream Expert",
    icon: BarChart3,
    color: "from-teal-500 to-cyan-500",
    iconBg: "bg-teal-100 text-teal-600",
    photo: facultyPooja,
  },
  {
    name: "Prashant Hongal",
    subject: "Computer Science",
    credential: "PCMCs Stream Expert",
    icon: Laptop,
    color: "from-blue-500 to-indigo-500",
    iconBg: "bg-blue-100 text-blue-600",
    photo: facultyPrashant,
  },
  {
    name: "Apoorva Kulkarni",
    subject: "Sanskrit",
    credential: "II PUC Board Specialist",
    icon: ScrollText,
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-100 text-orange-600",
    photo: facultyApoorva,
  },
  {
    name: "Kiran",
    subject: "Physics",
    credential: "PCMB Stream Specialist",
    icon: Atom,
    color: "from-indigo-500 to-violet-500",
    iconBg: "bg-indigo-100 text-indigo-600",
    photo: facultyKiran,
  },
];

const SupportingFaculty = () => (
  <section className="py-20 sm:py-28 lg:py-32 bg-background relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14 lg:mb-20">
        <h2 className="section-title">
          LANGUAGES &amp;{" "}
          <span className="text-gradient">FACULTY</span>
          <span className="accent-dot" />
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mt-4">
          Specialist mentors for II PUC board, language and elective subjects.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
        {faculty.map((f, i) => (
          <motion.div
            key={f.subject}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="brand-card p-4 sm:p-6 text-center group relative overflow-hidden"
          >
            {/* Top gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color}`} />

            {/* Subject icon + label */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4">
              <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg ${f.iconBg} flex items-center justify-center`}>
                <f.icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
              </div>
              <span className="font-display text-sm sm:text-base tracking-wide text-foreground">
                {f.subject}
              </span>
            </div>

            {/* Faculty photo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 overflow-hidden border-4 border-primary/10 shadow-lg bg-muted">
              <img
                src={f.photo}
                alt={f.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="font-display text-sm sm:text-lg text-foreground tracking-wide mb-1">
              {f.name}
            </h3>

            {/* Credential */}
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
              {f.credential}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SupportingFaculty;
