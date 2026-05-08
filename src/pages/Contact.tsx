import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, MessageCircle } from "lucide-react";
import TopInfoBar from "@/components/TopInfoBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";
import { BRAND, waLink, openWhatsApp } from "@/lib/brand";

const contactInfo = [
  { icon: Phone, label: "PHONE", items: [{ text: BRAND.phone, href: `tel:${BRAND.phoneRaw}` }] },
  { icon: Mail, label: "EMAIL", items: [{ text: BRAND.email, href: `mailto:${BRAND.email}` }] },
  { icon: MapPin, label: "ADDRESS", items: [{ text: `${BRAND.address.line1}, ${BRAND.address.line2}, ${BRAND.address.city}`, href: `https://www.google.com/maps/search/?api=1&query=${BRAND.mapsQuery}` }] },
  { icon: Clock, label: "HOURS", items: [{ text: "Mon – Sat: 8:30 AM – 5:00 PM (Library hours)", href: "" }] },
];

const Contact = () => {
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
            // GET IN TOUCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-display text-primary-foreground leading-[0.85] mb-6"
          >
            CONTACT
            <br />
            <span className="text-gradient">MEDHA SCIENCE PU COLLEGE</span>
            <span className="accent-dot" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-primary-foreground/50 max-w-xl mx-auto"
          >
            Have questions about admissions, courses or campus life? Reach out to us — we're here to help.
          </motion.p>
        </div>
      </section>

      {/* ═══ CONTACT CARDS ═══ */}
      <section className="py-16 sm:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto mb-16">
            {contactInfo.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="brand-card p-8 group hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xs tracking-widest text-muted-foreground mb-3">{c.label}</h3>
                <div className="space-y-2">
                  {c.items.map((item, j) => (
                    item.href ? (
                      <a key={j} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className="block text-sm text-foreground hover:text-primary transition-colors break-words">
                        {item.text}
                      </a>
                    ) : (
                      <p key={j} className="text-sm text-foreground">{item.text}</p>
                    )
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* MAP + CTA */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="brand-card overflow-hidden"
            >
              <iframe
                src={`https://www.google.com/maps?q=${BRAND.mapsQuery}&output=embed`}
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Medha Science PU College Location"
                className="w-full"
              />
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">VISIT OUR CAMPUS</h3>
                  <p className="text-sm text-muted-foreground">{BRAND.address.line1}, {BRAND.address.line2}, {BRAND.address.city}</p>
                </div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${BRAND.mapsQuery}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 whitespace-nowrap">
                  <ArrowUpRight className="h-4 w-4" /> GET DIRECTIONS
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ WHATSAPP CTA ═══ */}
      <section className="py-16 sm:py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <p className="section-label mb-3">// QUICK CONNECT</p>
          <h2 className="section-title mb-4">
            REACH US ON{" "}
            <span className="text-gradient">WHATSAPP</span>
            <span className="accent-dot" />
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            Get instant responses about admissions, fee structure, hostel facilities and more.
          </p>
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
            <MessageCircle className="h-4 w-4" /> CHAT WITH US
          </a>
        </div>
      </section>

      <Footer />
      <FloatingSocial />
    </div>
  );
};

export default Contact;
