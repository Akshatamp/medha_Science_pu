import { motion } from "framer-motion";
import sharadaImg from "@/assets/trustee-sharada-amminabhavi.jpg";
import rieteshImg from "@/assets/trustee-rietesh-amminabhavi.jpg";
import shanthammaImg from "@/assets/trustee-shanthamma-um.jpg";
import sarojiniImg from "@/assets/trustee-sarojini-balakrishna.jpg";
import naveenImg from "@/assets/trustee-naveen-parnenavaar.jpg";

const trustees: {
  name: string;
  qualification?: string;
  role: string;
  image: string;
}[] = [
  {
    name: "Sri. Naveen Parnenavaar",
    qualification: "B.E Civil",
    role: "President",
    image: naveenImg,
  },
  {
    name: "Smt. Sharada Amminabhavi",
    qualification: "MA, English – B.Ed.",
    role: "Managing Trustee",
    image: sharadaImg,
  },
  {
    name: "Sri. Rietesh R Amminabhavi",
    qualification: "IIT, MS — Michigan University, USA",
    role: "Managing Trustee",
    image: rieteshImg,
  },
  {
    name: "Smt. Shanthamma UM",
    qualification: "MA — Kannada & Sociology, D.Ed, B.Ed",
    role: "Managing Trustee",
    image: shanthammaImg,
  },
  {
    name: "Smt. Sarojini Balakrishna",
    role: "Secretary",
    image: sarojiniImg,
  },
];

const TrusteesSection = () => {
  return (
    <section
      id="trustees"
      className="py-12 sm:py-20 lg:py-24 bg-muted relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-accent via-secondary to-primary/20" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 lg:mb-14">
          <p className="section-label mb-3">// TRUSTEES</p>
          <h2 className="section-title">
            SRI MEDHA{" "}
            <span className="text-gradient">EDUCATIONAL TRUST</span>
            <span className="accent-dot" />
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mt-4">
            The visionaries leading Medha Science PU College — committed to
            quality education and social empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-6 max-w-7xl mx-auto place-items-center">
          {trustees.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="brand-card overflow-hidden group hover:-translate-y-1 transition-all"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={t.image}
                  alt={`${t.name} — ${t.role}, Sri Medha Educational Trust`}
                  loading="lazy"
                  className="w-full h-auto object-cover object-top aspect-[3/4] group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              <div className="bg-primary text-primary-foreground p-5 sm:p-6">
                <p className="font-display text-lg sm:text-xl tracking-wide leading-tight">
                  {t.name}
                </p>
                {t.qualification && (
                  <p className="font-mono-brand text-[11px] tracking-[0.18em] uppercase opacity-80 mt-2">
                    {t.qualification}
                  </p>
                )}
                
                <p className="font-mono-brand text-[11px] tracking-[0.2em] uppercase mt-3 text-secondary">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrusteesSection;
