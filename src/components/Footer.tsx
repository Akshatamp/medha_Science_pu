import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BRAND } from "@/lib/brand";
import medhaLogo from "@/assets/medha-logo.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Scholars Pride tri-color accent: blue → red → gold */}
      <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />

      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="mb-6 inline-block bg-primary-foreground rounded-lg p-3">
              <img
                src={medhaLogo}
                alt="Medha Science PU College"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-primary-foreground/40 leading-relaxed max-w-sm">
              Sri Medha Educational Trust, established in 2012, runs Medha Science PU College —
              a leading PU science institution in Hubballi nurturing future scientists and professionals.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-mono-brand uppercase tracking-widest text-primary-foreground/30 mb-4">LINKS</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Who We Are", to: "/about" },
                { label: "Admission Process", to: "/admissions" },
                { label: "Faculty", to: "/faculty" },
                { label: "Resources", to: "/resources" },
                { label: "Activities", to: "/activities" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.label}><Link to={l.to} className="text-primary-foreground/40 hover:text-primary-foreground transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono-brand uppercase tracking-widest text-primary-foreground/30 mb-4">COURSES</h4>
            <div className="flex flex-wrap gap-1.5">
              {["PCMB", "PHYSICS", "CHEMISTRY", "MATHEMATICS", "BIOLOGY", "K-CET", "JEE", "NEET", "NDA", "KVPY"].map((c) => (
                <Link key={c} to="/courses" className="text-[10px] px-3 py-1.5 rounded border border-primary-foreground/20 text-primary-foreground/60 hover:text-accent-foreground hover:border-accent hover:bg-accent transition-all font-mono-brand tracking-wider">{c}</Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-mono-brand uppercase tracking-widest text-primary-foreground/30 mb-4">CONTACT</h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${BRAND.phoneRaw}`} className="flex items-center gap-2.5 text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" /> {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2.5 text-primary-foreground/40 hover:text-primary-foreground transition-colors break-all">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" /> {BRAND.email}
              </a>
              <div className="flex items-start gap-2.5 text-primary-foreground/40">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>{BRAND.address.line1}, {BRAND.address.line2}, {BRAND.address.city}</span>
              </div>
              <a href={`https://www.google.com/maps/search/?api=1&query=${BRAND.mapsQuery}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-secondary hover:text-secondary/80 font-bold mt-1 font-mono-brand text-xs tracking-wider">
                <ArrowUpRight className="h-3.5 w-3.5" /> GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono-brand tracking-wider text-primary-foreground/20 gap-2">
          <p>© {new Date().getFullYear()} MEDHA SCIENCE PU COLLEGE — ALL RIGHTS RESERVED</p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-primary-foreground/40 transition-colors">PRIVACY</a>
            <span>·</span>
            <a href="#" className="hover:text-primary-foreground/40 transition-colors">TERMS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
