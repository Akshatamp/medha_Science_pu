import { motion } from "framer-motion";
import { Trophy, Award, Brain, Target, Monitor, Mic } from "lucide-react";

const features = [
  { icon: Trophy, title: "MORAL BOOST FOR EXAMS", description: "Focused preparation that helps students perform better in CET, JEE, NEET, NDA & KVPY.", num: "01" },
  { icon: Award, title: "ENCOURAGING MERIT", description: "Proper recognition and encouragement for meritorious students at every stage.", num: "02" },
  { icon: Brain, title: "PERSONALITY & MINDFULNESS", description: "Personality development and mindfulness classes to nurture confident, balanced learners.", num: "03" },
  { icon: Target, title: "SUPPORT FOR EVERY STUDENT", description: "Special coaching sessions for under-performers — no student is left behind.", num: "04" },
  { icon: Monitor, title: "DIGITAL PROJECTION CLASSROOMS", description: "Modern teaching methods powered by digital projection and smart classroom tools.", num: "05" },
  { icon: Mic, title: "WEEKLY TED-STYLE TALKS", description: "Inspiring talks from selected minds in the society — broadening student perspectives.", num: "06" },
];

const WhyImpulse = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <p className="section-label mb-3">// FEATURES OF THE COLLEGE</p>
            <h2 className="section-title mb-6">
              WHY{" "}
              <span className="text-gradient">MEDHA SCIENCE PU COLLEGE</span>
              <span className="accent-dot" />
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Six core strengths that make Medha Science PU College stand out for science aspirants in Hubballi.
            </p>
            <div className="mt-6 w-20 h-[2px] bg-gradient-to-r from-primary to-secondary" />
          </div>

          {/* Right cards */}
          <div className="lg:col-span-8 space-y-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="brand-card p-6 sm:p-8 flex gap-5 sm:gap-6 group hover:-translate-y-1"
              >
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <span className="font-display text-3xl text-primary/20 group-hover:text-primary/40 transition-colors">{f.num}</span>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                    <f.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2 tracking-wide">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyImpulse;
