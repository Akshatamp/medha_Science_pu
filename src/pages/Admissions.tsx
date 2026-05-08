import { motion } from "framer-motion";
import { ClipboardList, FileCheck, UserCheck, GraduationCap, Phone, MessageCircle, Download } from "lucide-react";
import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { BRAND, waLink, openWhatsApp } from "@/lib/brand";

const steps = [
  { icon: ClipboardList, num: "01", title: "ENQUIRY & COUNSELING", desc: "Visit the campus at Empire Square, Shirur Park, or contact us via phone / WhatsApp. Our academic counsellors will guide you through PCMB, fees and facilities." },
  { icon: FileCheck, num: "02", title: "APPLICATION FORM", desc: "Collect the admission form from the college office or request one over WhatsApp. Submit it along with the required documents." },
  { icon: UserCheck, num: "03", title: "DOCUMENT VERIFICATION", desc: "Submit your 10th / SSLC marks card, transfer certificate and other required documents for verification by the admissions team." },
  { icon: GraduationCap, num: "04", title: "ADMISSION CONFIRMATION", desc: "Once verified, complete the fee payment to confirm your admission. Welcome to the Medha family!" },
];

const eligibility = [
  "Passed 10th / SSLC examination from a recognized board",
  "Minimum aggregate as per Karnataka PU Board norms",
  "Interest in the science (PCMB) stream",
  "Transfer Certificate from previous institution",
  "Aadhar Card and recent passport-size photographs",
];

const Admissions = () => {
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
            // JOIN US
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display text-primary-foreground leading-[0.85] mb-6"
          >
            ADMISSION
            <br />
            <span className="text-gradient">PROCESS</span>
            <span className="accent-dot" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-primary-foreground/50 max-w-xl mx-auto"
          >
            Your journey to scientific excellence starts here. Follow the simple steps below to become part of the Medha family.
          </motion.p>
          <motion.a
            href={BRAND.prospectusUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            <Download className="h-4 w-4" /> DOWNLOAD PROSPECTUS
          </motion.a>
        </div>
      </section>

      {/* ═══ ADMISSION STEPS ═══ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-label mb-3">// STEP BY STEP</p>
            <h2 className="section-title">
              HOW TO{" "}
              <span className="text-gradient">GET ADMITTED</span>
              <span className="accent-dot" />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="brand-card p-8 group hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-display text-3xl text-primary/30 group-hover:text-primary transition-colors">{s.num}</span>
                    <h3 className="font-display text-lg text-foreground tracking-wide mt-1 mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ELIGIBILITY ═══ */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="section-label mb-3">// REQUIREMENTS</p>
            <h2 className="section-title">
              ELIGIBILITY{" "}
              <span className="text-gradient">CRITERIA</span>
              <span className="accent-dot" />
            </h2>
          </div>

          <div className="brand-card p-8">
            <ul className="space-y-4">
              {eligibility.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{i + 1}</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="section-label mb-3">// READY TO JOIN?</p>
          <h2 className="section-title mb-8">
            START YOUR{" "}
            <span className="text-gradient">APPLICATION</span>
            <span className="accent-dot" />
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink(`Hi, I'm interested in admissions at ${BRAND.name}`)}
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp(`Hi, I'm interested in admissions at ${BRAND.name}`);
              }}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              <MessageCircle className="h-4 w-4" /> ENQUIRE ON WHATSAPP
            </a>
            <a
              href={`tel:${BRAND.phoneRaw}`}
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-md text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Phone className="h-4 w-4" /> CALL US NOW
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Admissions;
