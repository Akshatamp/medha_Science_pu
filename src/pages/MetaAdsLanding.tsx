import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  CheckCircle2,
  BookOpen,
  Users,
  Target,
  GraduationCap,
  FlaskConical,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

import impulseLogo from "@/assets/impulse-logo-header.png";
import heroImg from "@/assets/hero-1.jpg";
import jeeAditya from "@/assets/jee-aditya-red.png";
import jeeNaman from "@/assets/jee-naman-red.png";
import jeeMadhvesh from "@/assets/jee-madhvesh-red.png";
import jeeSiddharth from "@/assets/jee-siddharth-red.png";
import jeeAyush from "@/assets/jee-ayush-red.png";
import testimonialRohan from "@/assets/testimonial-rohan.png";
import testimonialSneha from "@/assets/testimonial-sneha.png";
import testimonialApoorva from "@/assets/testimonial-apoorva.png";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryLab from "@/assets/gallery-lab.jpg";
import galleryLibrary from "@/assets/gallery-library-real.png";
import galleryCollege from "@/assets/gallery-college.jpg";
import galleryAdmin from "@/assets/gallery-admin.jpg";
import coursePcmb from "@/assets/course-pcmb.png";
import coursePcmcs from "@/assets/course-pcmcs.png";
import coursePcms from "@/assets/course-pcms.png";

import { openWhatsAppUrl } from "@/lib/brand";

const WHATSAPP_URL =
  "https://wa.me/917996420113?text=Hi%2C%20I%20saw%20the%20ad%20and%20want%20to%20enquire%20about%20admissions%20at%20Impulse%20PU%20College";
const PHONE_NUMBER = "07996420113";

const handleWA = (e: React.MouseEvent) => {
  e.preventDefault();
  openWhatsAppUrl(WHATSAPP_URL);
};

// ─── Data ───

const toppers = [
  { name: "Aditya S", rank: "99.86", label: "JEE Main 2026", photo: jeeAditya },
  { name: "Naman Patil", rank: "99.11", label: "JEE Main 2026", photo: jeeNaman },
  { name: "Madhvesh K", rank: "98.77", label: "JEE Main 2026", photo: jeeMadhvesh },
  { name: "Siddharth P", rank: "98.60", label: "JEE Main 2026", photo: jeeSiddharth },
  { name: "Ayush R", rank: "98.30", label: "JEE Main 2026", photo: jeeAyush },
];

const features = [
  { icon: BookOpen, title: "Expert Faculty", desc: "Learn from experienced faculty that strengthen concepts and clear doubts." },
  { icon: Users, title: "Small Batch Sizes", desc: "Personalised attention with limited seats per batch ensuring individual focus." },
  { icon: Target, title: "Medha × Wavekota Coaching", desc: "Learn from experienced educators trusted for competitive exam preparation." },
  { icon: GraduationCap, title: "Dedicated Doubt Support", desc: "Get your doubts resolved instantly by faculties at the center." },
  { icon: ClipboardCheck, title: "Regular Tests & Analysis", desc: "Regular tests to track progress and boost performance." },
  { icon: FlaskConical, title: "State-of-the-Art Labs", desc: "Modern laboratories and digital classrooms for hands-on learning." },
];

const testimonials = [
  { name: "Rohan", title: "JEE Journey...", text: "The faculty at Impulse is incredible. Their personalised attention helped me crack JEE with a great score. Best decision of my life!", photo: testimonialRohan },
  { name: "Sneha", title: "The Constant Support...", text: "With my teachers' constant support, guidance and personalised attention at Impulse, I stayed consistent in my preparation and was able to crack the exam.", photo: testimonialSneha },
  { name: "Apoorva", title: "NEET Journey...", text: "Impulse faculties were really helpful during my NEET journey. Their guidance and constant support helped me to ace the exam and achieve my dream.", photo: testimonialApoorva },
];

const courses = [
  { name: "I PUC PCMB (Target 2028)", features: ["Expert Faculty & Coaching", "Regular Tests + Assessments", "Dedicated Doubt Support"], img: coursePcmb },
  { name: "I PUC PCMCs (Target 2028)", features: ["Expert Faculty & Coaching", "Regular Tests + Assessments", "Dedicated Doubt Support"], img: coursePcmcs },
  { name: "II PUC PCMS (Target 2027)", features: ["Expert Faculty & Coaching", "Regular Tests + Assessments", "Dedicated Doubt Support"], img: coursePcms },
];

const faqs = [
  { q: "Is there personalised attention for every student at Impulse?", a: "Yes, Impulse maintains small batch sizes and offers dedicated doubt-solving sessions where students can get real-time responses from faculty." },
  { q: "What courses are available at Impulse PU College?", a: "We offer PCMB, PCMCs, and PCMS streams for I & II PUC, with integrated coaching for JEE, NEET, and K-CET through our Wavekota partnership." },
  { q: "Does Impulse provide study materials and tests?", a: "Yes. Every student receives curated study modules, weekly tests, practice papers, assignments, and performance analytics to track improvement." },
  { q: "Are doubt-solving and mentorship available?", a: "Absolutely. Impulse offers daily doubt-solving, extra sessions before exams, and mentorship to support each student individually." },
  { q: "Are there scholarships available?", a: "Yes. Merit-based scholarships are available for deserving students. Contact us on WhatsApp or call to know about current scholarship offers." },
];

const galleryImages = [galleryClassroom, galleryLab, galleryLibrary, galleryCollege, galleryAdmin];

// ─── Sub-components ───

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg mb-3 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 text-left gap-4 bg-card hover:bg-muted/50 transition-colors">
        <span className="font-semibold text-sm text-foreground">{q}</span>
        {open ? <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" /> : <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />}
      </button>
      {open && <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed bg-card">{a}</div>}
    </div>
  );
};

const LeadForm = ({ id }: { id?: string }) => {
  const [formData, setFormData] = useState({ name: "", phone: "", stream: "", class_val: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm interested in admissions at Impulse PU College.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nStream: ${formData.stream}\nClass: ${formData.class_val}`;
    openWhatsAppUrl(`https://wa.me/917996420113?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div id={id} className="bg-card rounded-none sm:rounded-2xl shadow-2xl border border-border p-6 sm:p-8">
      <h2 className="text-lg font-bold text-foreground mb-1">Start Your Preparation for JEE | NEET | K-CET Today!</h2>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <label className="block text-xs font-medium text-foreground mb-1">Full Name of the Student <span className="text-primary">*</span></label>
          <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2.5 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground mb-1">Phone Number <span className="text-primary">*</span></label>
          <div className="flex">
            <span className="inline-flex items-center px-3 border border-r-0 border-border bg-muted text-sm text-muted-foreground rounded-l">+91 ▾</span>
            <input type="tel" required pattern="[0-9]{10}" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-3 py-2.5 border border-border rounded-r bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground mb-1">Class <span className="text-primary">*</span></label>
          <select required value={formData.class_val} onChange={(e) => setFormData({ ...formData, class_val: e.target.value })} className="w-full px-3 py-2.5 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors">
            <option value="">Search to select</option>
            <option value="I PUC">I PUC (11th)</option>
            <option value="II PUC">II PUC (12th)</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-foreground mb-1">Preferred Stream <span className="text-primary">*</span></label>
          <select required value={formData.stream} onChange={(e) => setFormData({ ...formData, stream: e.target.value })} className="w-full px-3 py-2.5 border border-border rounded bg-background text-foreground text-sm focus:outline-none focus:border-primary transition-colors">
            <option value="">Search to select</option>
            <option value="PCMB">PCMB</option>
            <option value="PCMCs">PCMCs</option>
            <option value="PCMS">PCMS</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded font-bold text-sm hover:bg-primary/90 transition-all">
          Submit & Connect on WhatsApp
        </button>
      </form>
      <p className="text-[10px] text-muted-foreground text-center mt-3">By submitting, you agree to be contacted regarding admissions.</p>
    </div>
  );
};

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % galleryImages.length);
  const prev = () => setCurrent((c) => (c - 1 + galleryImages.length) % galleryImages.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-xl overflow-hidden aspect-[16/9] max-w-4xl mx-auto group">
      {galleryImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Campus ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {galleryImages.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-5" : "bg-card/60"}`} />
        ))}
      </div>
    </div>
  );
};

const ScholarshipSection = () => (
  <section className="bg-foreground py-12 sm:py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
        Admissions Open <span className="text-primary">2026-27</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 mb-8">
        {["Expert Counselling", "Campus Tour", "Merit Scholarships", "Flexible Batches"].map((item) => (
          <div key={item} className="bg-primary-foreground/10 rounded-lg px-5 py-3 text-center">
            <p className="text-sm font-semibold text-primary-foreground">{item}</p>
          </div>
        ))}
      </div>
      <a href="#lead-form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm hover:bg-primary/90 transition-all">
        Register Now For Free
      </a>
    </div>
  </section>
);

// ═══════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════
const MetaAdsLanding = () => {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">

      {/* ─── Header (white, like PW) ─── */}
      <header className="bg-card border-b border-border py-3 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <img src={impulseLogo} alt="Impulse PU College" className="h-9 sm:h-11" />
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 border-2 border-foreground rounded-full px-5 py-2 text-sm font-bold text-foreground hover:bg-foreground hover:text-primary-foreground transition-all"
          >
            <Phone className="h-4 w-4" />
            {PHONE_NUMBER}
          </a>
        </div>
      </header>

      {/* ─── Hero Section ─── */}
      <section className="relative">
        {/* Background image with overlay */}
        <div className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[650px]">
          <div className="absolute inset-0">
            <img src={heroImg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-foreground/60" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Left: text content */}
              <div className="lg:col-span-7 pt-10 sm:pt-16 pb-6">
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-2">
                  Building Strong Foundations,
                </h1>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-8">
                  Creating Strong Futures!
                </h2>

                {/* Results card (white, overlaid like PW) */}
                <div className="bg-card rounded-xl p-4 sm:p-6 shadow-xl max-w-lg">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-3">
                    {toppers.slice(0, 3).map((t) => (
                      <div key={t.name} className="text-center">
                        <p className="text-[10px] text-muted-foreground uppercase">(JEE 2026)</p>
                        <p className="text-xs text-primary font-semibold uppercase">Percentile</p>
                        <p className="text-2xl sm:text-3xl font-extrabold text-primary leading-none">{t.rank}</p>
                        <p className="text-xs font-semibold text-foreground mt-1">{t.name}</p>
                        <p className="text-[10px] text-muted-foreground">Medha × Wavekota</p>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <span className="text-primary font-extrabold text-lg">AND MANY MORE...</span>
                  </div>
                </div>

                <p className="text-xl sm:text-2xl italic text-primary-foreground/90 mt-6 font-medium">
                  Get Merit-Based Scholarships at Impulse!
                </p>
              </div>

              {/* Right: Lead form (overlapping, like PW) */}
              <div className="lg:col-span-5 lg:pt-6 lg:-mb-20 relative z-20">
                <LeadForm id="lead-form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Campus Carousel ("Now in Hubballi") ─── */}
      <section className="py-10 sm:py-14 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Building Strong Foundations,</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground">Creating Strong Futures!</h3>
            <p className="text-primary font-semibold mt-2 text-lg">Hubballi's Best Science PU College</p>
          </div>
          <ImageCarousel />
        </div>
      </section>

      {/* ─── JEE Results Banner ─── */}
      <section className="bg-foreground py-10 sm:py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Toppers grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 mb-8">
              {toppers.map((t, i) => (
                <div key={t.name} className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mx-auto mb-2 border-2 border-primary">
                    <img src={t.photo} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary leading-none">{t.rank}<span className="text-sm">%ile</span></p>
                  <p className="text-xs font-semibold text-primary-foreground mt-1">{t.name}</p>
                  <p className="text-[10px] text-primary-foreground/50">{t.label}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href="#lead-form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-base hover:bg-primary/90 transition-all">
                You Can Be the Next - Register Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Students Choose Impulse ─── */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Why Students Choose Impulse</h2>
            <p className="text-muted-foreground mt-2">Discover What Makes Us North Karnataka's First Choice</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={f.title} className="bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1.5">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Campus Tour ─── */}
      <section className="py-10 sm:py-14 bg-muted">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-xl sm:text-2xl font-bold text-foreground mb-6">Let's Take A Tour Together!</h3>
          <ImageCarousel />
          <div className="text-center mt-8">
            <a href="#lead-form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm hover:bg-primary/90 transition-all">
              Click Here To Start Your Journey! <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Scholarship / Admissions Banner ─── */}
      <ScholarshipSection />

      {/* ─── Students ❤️ Impulse ─── */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Students ❤️ Impulse</h2>
            <p className="text-muted-foreground mt-1">Hear From Our Students</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{t.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.text}</p>
                <p className="text-sm font-semibold text-foreground">– {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Scholarship Banner 2 ─── */}
      <ScholarshipSection />

      {/* ─── Courses Section ─── */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Here's Some Of Our Courses</h3>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">Here's Some Of Our Courses</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map((c) => (
              <div key={c.name} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt={c.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground mb-3">{c.name}</h3>
                  <ul className="space-y-2">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#lead-form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded font-bold text-sm hover:bg-primary/90 transition-all">
              Explore More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 sm:py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-sm font-bold text-primary uppercase tracking-wider text-center mb-2">Frequently Asked Questions</h3>
          <div className="mt-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-6">
            Success Starts at Impulse!
          </h2>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 bg-card text-primary px-10 py-4 rounded font-bold text-lg hover:bg-background transition-all shadow-lg"
          >
            Register Now! <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* ─── Sticky Mobile Bottom Bar ─── */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-3 sm:hidden z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="flex gap-2">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex-1 inline-flex items-center justify-center gap-2 border border-foreground text-foreground py-2.5 rounded text-sm font-bold"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={WHATSAPP_URL}
            onClick={handleWA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded text-sm font-bold"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default MetaAdsLanding;
