import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import trusteeImage from "@/assets/kotraiah-tkm.jpg";

const ManagementSection = () => {
  return (
    <section
      id="management"
      className="py-12 sm:py-20 lg:py-28 bg-background relative overflow-hidden"
    >
      {/* Vertical red accent */}
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-secondary via-primary to-secondary/20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="section-label mb-3">// MESSAGE FROM TRUSTEES &amp; PRINCIPAL</p>
          <h2 className="section-title">
            DEAR <span className="text-gradient">STUDENTS</span>
            <span className="accent-dot" />
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Top white pane: portrait + intro paragraphs */}
          <div className="bg-card grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10 p-6 sm:p-10 rounded-t-2xl lg:rounded-tr-2xl">
            {/* Left — portrait + name plate */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-t-lg shadow-lg border border-border">
                <img
                  src={trusteeImage}
                  alt="Kotraiah TKM — Principal, Medha Science PU College"
                  className="w-full h-auto object-cover object-top aspect-[3/4]"
                  loading="lazy"
                />
              </div>
              {/* Red name card attached below portrait */}
              <div className="bg-primary text-primary-foreground p-5 sm:p-6 rounded-b-lg shadow-lg">
                <p className="font-display text-xl sm:text-2xl tracking-wide leading-tight">
                  Kotraiah TKM
                </p>
                <p className="font-mono-brand text-[11px] tracking-[0.2em] uppercase opacity-80 mt-1.5">
                  Principal
                </p>
                <p className="font-mono-brand text-[11px] tracking-[0.2em] uppercase mt-1">
                  <span className="text-secondary">Medha Science PU College</span>
                  <span className="opacity-80"> Hubballi – India</span>
                </p>
              </div>
            </div>

            {/* Right — quote + intro paragraphs */}
            <div className="lg:col-span-7 mt-8 lg:mt-0 relative">
              <Quote className="h-14 w-14 text-primary/15 absolute -top-2 -left-1" />
              <div className="pt-10 lg:pt-12">
                <h3 className="font-display text-2xl sm:text-3xl text-primary mb-4 tracking-wide">
                  Dear Students,
                </h3>
                <div className="space-y-4 text-sm sm:text-[15px] text-muted-foreground leading-relaxed">
                  <p>
                    <span className="text-foreground font-semibold">Sri Medha Educational Trust</span>{" "}
                    (The Trust) established in the year{" "}
                    <span className="text-foreground font-semibold">2012-13</span> at Krthika Annexe,
                    Lingaraja Nagar, Unkal Cross Hubballi-31, is a leading educational provider in
                    Hubballi city. From its beginnings it has laid equal emphasis on quality education
                    and social empowerment activities.
                  </p>
                  <p>
                    The trustees' commitment to excellence not only recruits young but also dynamic
                    faculty and serving members. The trust thrives to establish centres of learning
                    scientific knowledge. Thus emerged the{" "}
                    <span className="text-foreground font-semibold">Medha Science PU College</span>{" "}
                    with the mission and vision to excel scientific knowledge to the students in the
                    North Karnataka region at Lingaraj Nagar, Unkal Cross campus. In recent times due
                    to the widening of the road for the BRTS project, the old campus was disturbed
                    and forced to close the institute for quite some time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom dark band: closing paragraphs */}
          <div className="bg-foreground text-primary-foreground p-6 sm:p-10 lg:px-14 rounded-b-2xl relative overflow-hidden">
            {/* Subtle decorative blur */}
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 text-sm sm:text-[15px] leading-relaxed text-primary-foreground/75 max-w-4xl">
              <p>
                Then, the trust was reconstituted in the year{" "}
                <span className="text-primary-foreground font-semibold">2019-20</span> at{" "}
                <span className="text-secondary font-semibold">
                  Empire Square Building (Third Floor), Shirur Park, Vidhya Nagar, Hubballi
                </span>
                . The reconstituted trust started the PU science college at the new location with the
                kind-heartedness of all the trustees.
              </p>
              <p>
                We now move forward to transform our mission and vision into reality. We will create
                endless opportunities for the aspiring students in the coming years.
              </p>
              <p className="font-display text-lg sm:text-2xl text-primary-foreground tracking-wide pt-2 leading-snug">
                We welcome you to join us in the exciting journey of learning.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ManagementSection;
