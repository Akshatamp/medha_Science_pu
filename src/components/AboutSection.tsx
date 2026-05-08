import { motion } from "framer-motion";

const MEDHA_PRINCIPAL_IMG = "https://medhapuc.com/img/about/pr.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Diagonal accent */}
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-secondary to-primary/20" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/20 rounded-lg" />
            <img
              src={MEDHA_PRINCIPAL_IMG}
              alt="Message from Trustees and Principal of Medha Science PU College"
              className="relative rounded-lg w-full h-auto aspect-[4/3] object-cover shadow-2xl bg-muted"
              loading="lazy"
            />
            {/* Floating stat */}
            <div className="absolute -bottom-6 right-4 sm:right-8 bg-primary text-primary-foreground rounded-lg p-5 shadow-xl shadow-primary/30">
              <div className="text-3xl sm:text-4xl font-display">2012</div>
              <div className="text-[10px] font-mono-brand tracking-widest uppercase opacity-80">EST. TRUST</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="section-label mb-3">// MESSAGE FROM TRUSTEES &amp; PRINCIPAL</p>
            <h2 className="section-title mb-6">
              A LEGACY OF{" "}
              <span className="text-gradient">SCIENTIFIC LEARNING</span>
              <span className="accent-dot" />
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Sri Medha Educational Trust, established in 2012-13 at Krthika Annexe, Lingaraja Nagar,
              Unkal Cross Hubballi, is a leading educational provider in Hubballi city. From its
              beginnings it has placed equal emphasis on quality education and social empowerment.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8">
              Reconstituted in 2019-20 at Empire Square Building, Shirur Park, Vidya Nagar, Hubballi,
              the trust today runs Medha Science PU College — creating endless opportunities for
              aspiring students in North Karnataka. <span className="text-foreground font-semibold">We welcome you to join us in the exciting journey of learning.</span>
            </p>
            <div className="flex items-center gap-6">
              <a href="/about" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                Read More →
              </a>
              <div className="hidden sm:flex items-center gap-3">
                <div className="w-12 h-[2px] bg-gradient-to-r from-primary to-secondary" />
                <span className="font-mono-brand text-[10px] text-muted-foreground tracking-widest">EST. 2012</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
