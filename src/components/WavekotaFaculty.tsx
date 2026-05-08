import { motion } from "framer-motion";
import { FlaskConical, Atom, Calculator, Microscope } from "lucide-react";
import facultySumit from "@/assets/faculty-sumit-real.jpg";
import facultyVikas from "@/assets/faculty-vikas-real.jpg";
import facultyBarnabas from "@/assets/faculty-barnabas.jpg";
import facultyPriya from "@/assets/faculty-priya.jpg";

const faculty = [
  {
    name: "Prof. Sumit Saxena",
    subject: "Physics",
    experience: "9+ Years of Experience",
    icon: Atom,
    credentials: [
      "B.Tech, Electronics & Communication",
      "IIT-JEE | NEET Specialist",
      "Ex-Resonance Kota",
      "Senior Faculty",
    ],
    color: "from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-100 text-cyan-600",
    photo: facultySumit,
  },
  {
    name: "Prof. Rohit Dhakad",
    subject: "Mathematics",
    experience: "3 Years of Experience",
    icon: Calculator,
    credentials: [
      "B.Tech (Electrical Engg.), NIT Silchar",
      "JEE Mathematics Faculty",
      "Ex-Maths SME",
      "JEE / KCET Specialist",
    ],
    color: "from-indigo-500 to-violet-500",
    iconBg: "bg-indigo-100 text-indigo-600",
    photo: facultyVikas,
    photoStyle: { objectPosition: "50% 18%", transform: "scale(1.35)", transformOrigin: "50% 20%" },
  },
  {
    name: "Dr. Barnabas Kodasi",
    subject: "Chemistry",
    experience: "6+ Years of Experience",
    icon: FlaskConical,
    credentials: [
      "M.Sc. Organic Chemistry, B.Ed., Ph.D.",
      "Assistant Professor (Forensic Chemistry)",
      "Ex-Aakash Educational Services",
      "IIT-JEE & NEET Specialist",
    ],
    color: "from-orange-500 to-red-500",
    iconBg: "bg-orange-100 text-orange-600",
    photo: facultyBarnabas,
  },
  {
    name: "Prof. Priya A. Maurya",
    subject: "Biology",
    experience: "5+ Years of Experience",
    icon: Microscope,
    credentials: [
      "M.Sc. Microbiology (Univ. Rank 1)",
      "NEET | Olympiads | Foundation",
      "GATE & SET Qualified",
      "CGPA 9.34",
    ],
    color: "from-emerald-500 to-green-500",
    iconBg: "bg-emerald-100 text-emerald-600",
    photo: facultyPriya,
  },
];

const WavekotaFaculty = () => (
  <section className="py-20 sm:py-28 lg:py-36 bg-muted relative overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14 lg:mb-20">
        
        <h2 className="section-title">
          MEET OUR KOTA{" "}
          <span className="text-gradient">EXPERTS</span>
          <span className="accent-dot" />
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mt-4">
          Expert minds from India's top institutions — IIT/NIT alumni & ex-Resonance Kota faculty
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {faculty.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="brand-card p-4 sm:p-8 text-center group relative overflow-hidden"
          >
            {/* Top gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color}`} />

            {/* Subject icon + label */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${f.iconBg} flex items-center justify-center`}>
                <f.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <span className="font-display text-base sm:text-xl tracking-wide text-foreground">{f.subject}</span>
            </div>

            {/* Faculty photo */}
            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mx-auto mb-4 sm:mb-5 overflow-hidden border-4 border-primary/10 shadow-lg">
              <img
                src={f.photo}
                alt={f.name}
                className="w-full h-full object-cover"
                style={(f as any).photoStyle ?? { objectPosition: "50% 25%" }}
              />
            </div>

            {/* Name */}
            <h3 className="font-display text-sm sm:text-2xl text-foreground tracking-wide mb-1">{f.name}</h3>

            {/* Experience badge */}
            <p className="text-[9px] sm:text-xs font-bold font-mono-brand text-primary tracking-wider uppercase mb-3 sm:mb-4">{f.experience}</p>

            {/* Credentials */}
            <div className="space-y-1">
              {f.credentials.map((c) => (
                <p key={c} className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed">{c}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WavekotaFaculty;
