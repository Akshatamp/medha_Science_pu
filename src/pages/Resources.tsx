import { motion } from "framer-motion";
import { Building2, School, Home, Shield, BookOpen, Bus } from "lucide-react";
import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

const resources = [
  {
    icon: Building2,
    title: "CAMPUS",
    body: "The Medha PU Science College campus at Shirur Park, Vidya Nagar, Hubballi is nestled in an educational hub surrounded by well-known schools, colleges and academic institutions. Located half a kilometer from the Old Pune-Bangalore road, the building is aesthetically beautiful and designed to be eco-friendly with all modern amenities and safety measures.",
  },
  {
    icon: School,
    title: "CLASSROOMS",
    body: "All classrooms are spacious, air-conditioned and well furnished — scientifically designed and housed with comfortable benches for student comfort and safety. Raised platforms, computers, projectors and glossy-finished smart boards equip every room. LAN and high-speed internet support modern teaching methodology.",
  },
  {
    icon: Home,
    title: "ACCOMMODATION",
    body: "Accommodation is arranged separately for boys and girls in consultation with PGs around the college campus. Payment is made directly to the individual PG. Academic counsellors guide students through accommodation choices during the admission process.",
  },
  {
    icon: Shield,
    title: "SAFETY & SECURITY",
    body: "CC cameras are installed in strategic areas — classrooms, labs, reception, library and movement zones. For security, visitors must present identity cards and sign in the register maintained at the entrance, ensuring the safety of every student.",
  },
  {
    icon: BookOpen,
    title: "LIBRARY",
    body: "The college houses a state-of-the-art library with vast collections of subject reference books and subscriptions to magazines, newspapers and periodicals. Special features: high-speed internet on library computers, qualified library assistants, opening hours 8:30 AM – 5:00 PM on working days, and an active book circulation system for students.",
  },
  {
    icon: Bus,
    title: "TRANSPORT",
    body: "Transport facilities are arranged for students on demand — the academic office can guide families through available routes and schedules.",
  },
];

const Resources = () => {
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
            // RESOURCES
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display text-primary-foreground leading-[0.85] mb-6"
          >
            CAMPUS &
            <br />
            <span className="text-gradient">FACILITIES</span>
            <span className="accent-dot" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-primary-foreground/50 max-w-xl mx-auto"
          >
            Everything our students need for a focused, secure and comfortable learning experience.
          </motion.p>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {resources.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="brand-card p-8 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl text-foreground tracking-wide mb-3">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Resources;
