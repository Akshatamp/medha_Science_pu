import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BRAND, waLink, openWhatsApp } from "@/lib/brand";
import medhaLogo from "@/assets/medha-header-logo.png";
import sriMedhaTrustLogo from "@/assets/sri-medha-trust-logo.png";

type NavChild = { label: string; href: string; isRoute?: boolean };
type NavLink = { label: string; href: string; isRoute?: boolean; children?: NavChild[] };

const navLinks: NavLink[] = [
  { label: "Home", href: "/", isRoute: true },
  { label: "About", href: "/about", isRoute: true },
  {
    label: "Courses",
    href: "/courses",
    isRoute: true,
    children: [
      { label: "PCMB", href: "/courses#pcmb", isRoute: true },
      { label: "PCMCs", href: "/courses#pcmcs", isRoute: true },
      { label: "PCMS", href: "/courses#pcms", isRoute: true },
    ],
  },
  {
    label: "Academics",
    href: "/faculty",
    isRoute: true,
    children: [
      { label: "Faculty", href: "/faculty", isRoute: true },
      { label: "Trustees", href: "/about#trustees", isRoute: true },
      { label: "Activities", href: "/activities", isRoute: true },
      { label: "Resources", href: "/resources", isRoute: true },
    ],
  },
  { label: "Admissions", href: "/admissions", isRoute: true },
  { label: "Heritage", href: "/our-heritage", isRoute: true },
  { label: "Contact", href: "/contact", isRoute: true },
];

const NavAnchor = ({ item, className, onClick, children }: { item: { href: string; isRoute?: boolean }; className: string; onClick?: () => void; children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  if (item.isRoute) {
    return <Link to={item.href} className={className} onClick={onClick}>{children}</Link>;
  }

  const handleClick = (e: React.MouseEvent) => {
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/" + item.href);
    }
    onClick?.();
  };

  return <a href={item.href} className={className} onClick={handleClick}>{children}</a>;
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (link: NavLink) => {
    if (link.isRoute && link.href === location.pathname) return true;
    if (link.children?.some((c) => c.isRoute && c.href === location.pathname)) return true;
    return false;
  };

  const isChildActive = (child: NavChild) => child.isRoute && child.href === location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-md border-b border-border"
          : "bg-background border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 group min-w-0" aria-label="Medha Science PU College — Home">
          <img
            src={medhaLogo}
            alt="Sri Medha Educational Trust — Medha Science PU College"
            className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
          <div className="hidden sm:flex flex-col border-l border-border/60 pl-3 leading-tight">
            <span className="font-display text-base md:text-lg text-foreground tracking-wide">
              MEDHA SCIENCE
            </span>
            <span className="font-mono-brand text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              PU College · Hubballi
            </span>
          </div>
          <img
            src={sriMedhaTrustLogo}
            alt="Sri Medha Educational Trust"
            className="hidden sm:block h-14 sm:h-16 md:h-20 w-auto object-contain ml-3 pl-3 border-l border-border/60"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-0">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavAnchor
                item={link}
                className={`px-3 xl:px-4 py-2 text-[13px] font-semibold transition-colors flex items-center gap-1 ${
                  isActive(link) ? "text-primary" : "text-foreground/60 hover:text-primary"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3 w-3 opacity-40" />}
              </NavAnchor>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 bg-card border border-border rounded-lg shadow-2xl min-w-[220px] py-2 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                  {link.children.map((child) => (
                    <NavAnchor
                      key={child.label}
                      item={child}
                      className={`block px-4 py-2.5 text-sm transition-colors mx-1 rounded ${
                        isChildActive(child)
                          ? "text-primary bg-primary/5 font-bold"
                          : "text-foreground/50 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {child.label}
                    </NavAnchor>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink(`Hi, I'm interested in admissions at ${BRAND.name}`)}
            onClick={(e) => {
              e.preventDefault();
              openWhatsApp(`Hi, I'm interested in admissions at ${BRAND.name}`);
            }}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-xs font-bold text-primary-foreground bg-primary px-5 py-2.5 rounded-md hover:bg-primary/90 transition-all font-mono-brand tracking-wider"
          >
            APPLY NOW
          </a>
          <button
            className="p-2 text-foreground/60 hover:text-primary transition-colors lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="absolute top-full right-0 w-full bg-card border-t border-border shadow-2xl max-h-[85vh] overflow-y-auto z-50 animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <NavAnchor
                  item={link}
                  onClick={() => { if (!link.children) setMobileOpen(false); }}
                  className={`block py-3 text-sm font-semibold transition-colors border-b border-border/50 ${
                    isActive(link) ? "text-primary" : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </NavAnchor>
                {link.children && (
                  <div className="pl-4 space-y-0 mb-1">
                    {link.children.map((child) => (
                      <NavAnchor key={child.label} item={child} onClick={() => setMobileOpen(false)}
                        className={`block py-2 text-sm transition-colors ${
                          isChildActive(child) ? "text-primary font-bold" : "text-foreground/40 hover:text-primary"
                        }`}>{child.label}</NavAnchor>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <a
                href={waLink(`Hi, I'm interested in admissions at ${BRAND.name}`)}
                onClick={(e) => {
                  e.preventDefault();
                  openWhatsApp(`Hi, I'm interested in admissions at ${BRAND.name}`);
                  setMobileOpen(false);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-primary-foreground text-center py-3 rounded-md font-bold text-xs font-mono-brand tracking-widest"
              >
                APPLY NOW
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
