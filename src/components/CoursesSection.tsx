import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";

const facilityCards = [
  {
    icon: GraduationCap,
    title: "Scholarship Facility",
    description: "Merit-based scholarships and fee assistance for deserving students.",
  },
  {
    icon: Users,
    title: "Skilled Lecturers",
    description: "Experienced PCMB faculty across Physics, Chemistry, Mathematics & Biology.",
  },
  {
    icon: Home,
    title: "Hostel Facilities",
    description: "Accommodation arranged for boys and girls separately at trusted PGs near campus.",
  },
];

const courses = [
  {
    num: "01",
    pill: "CORE STREAM",
    title: "PCMB",
    subtitle: "Physics · Chemistry · Mathematics · Biology",
    description:
      "Keeps the widest range of options open — engineering, medicine, basic sciences and allied fields. The most versatile choice for science aspirants.",
    tags: ["NEET", "K-CET", "JEE", "COMED-K", "NDA", "KVPY"],
  },
  {
    num: "02",
    pill: "STEM",
    title: "PCMCs",
    subtitle: "Physics · Chemistry · Mathematics · Computer Science",
    description:
      "Built for engineering and technology aspirants. Strong foundation for JEE, BITSAT and modern computer science programmes.",
    tags: ["JEE", "K-CET", "COMED-K", "BITSAT", "NDA"],
  },
  {
    num: "03",
    pill: "STEM",
    title: "PCMS",
    subtitle: "Physics · Chemistry · Mathematics · Statistics",
    description:
      "Ideal for analytical, data-driven and research-oriented careers — ISI, statistics, economics and engineering programmes.",
    tags: ["JEE", "K-CET", "COMED-K", "NDA", "ISI"],
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-12 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-20">
          <p className="section-label mb-3">// ACADEMIC OFFERING</p>
          <h2 className="section-title">
            OUR <span className="text-gradient">COURSES</span>
            <span className="accent-dot" />
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mt-4">
            Three science streams designed to open the widest range of career paths after II PUC.
          </p>
        </div>

        {/* Three course cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12 lg:mb-16">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              id={c.title.toLowerCase()}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col scroll-mt-28"
            >
              <div className="bg-primary h-2 rounded-t-lg" />
              <div className="brand-card rounded-t-none p-7 border-t-0 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-5 flex-wrap gap-2">
                  <span className="font-display text-5xl text-foreground/[0.06] leading-none">{c.num}</span>
                  <span className="bg-primary text-primary-foreground text-[10px] font-mono-brand tracking-widest px-3 py-1 rounded">
                    {c.pill}
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-foreground mb-2 tracking-wide">{c.title}</h3>
                <p className="text-[10px] text-muted-foreground font-mono-brand tracking-wider uppercase mb-4">{c.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{c.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {c.tags.map((tag) => (
                    <span key={tag} className="text-[9px] bg-primary/10 text-primary px-2.5 py-1 rounded font-mono-brand tracking-wider font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors group/link mt-auto">
                  Explore {c.title} <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Three facility cards */}
        <div className="grid md:grid-cols-3 gap-4">
          {facilityCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="brand-card p-7 group hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2 tracking-wide">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
