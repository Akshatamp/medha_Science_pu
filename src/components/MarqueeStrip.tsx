import { motion } from "framer-motion";

const marqueeItems = [
  "PCMB", "PHYSICS", "CHEMISTRY", "MATHEMATICS", "BIOLOGY",
  "K-CET", "JEE", "NEET", "NDA", "KVPY",
  "MEDHA SCIENCE PU COLLEGE", "HUBBALLI",
  "EST. 2012", "DIGITAL CLASSROOMS", "SCHOLARSHIP FACILITY",
];

const MarqueeStrip = () => {
  return (
    <div className="marquee-strip select-none">
      <div className="flex w-max animate-marquee">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-6">
            <span className="font-display text-lg sm:text-xl tracking-wider">{item}</span>
            <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
