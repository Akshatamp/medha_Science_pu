import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

import testimonialAdithi from "@/assets/testimonial-adithi.png";
import testimonialApoorva from "@/assets/testimonial-apoorva.png";
import testimonialManasvi from "@/assets/testimonial-manasvi.png";
import testimonialMohan from "@/assets/testimonial-mohan.png";
import testimonialPavitra from "@/assets/testimonial-pavitra.png";
import testimonialRohan from "@/assets/testimonial-rohan.png";
import testimonialSachi from "@/assets/testimonial-sachi.png";
import testimonialSneha from "@/assets/testimonial-sneha.png";

const testimonials = [
  { name: "Adithi", photo: testimonialAdithi, videoId: "cfr9M53RBAI" },
  { name: "Apoorva", photo: testimonialApoorva, videoId: "xJedgyBkUTE" },
  { name: "Manasvi", photo: testimonialManasvi, videoId: "HL2Iz5vOpvE" },
  { name: "Mohan", photo: testimonialMohan, videoId: "CW_5WzWEe3o" },
  { name: "Pavitra", photo: testimonialPavitra, videoId: "__2h925wNz8" },
  { name: "Rohan", photo: testimonialRohan, videoId: "zKaj-gBrnSo" },
  { name: "Sachi", photo: testimonialSachi, videoId: "ITV_cXr1Wbs" },
  { name: "Sneha", photo: testimonialSneha, videoId: "zCtv1cYc0Yw" },
];

const TestimonialSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      <section id="testimonials" className="py-20 sm:py-28 lg:py-36 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 lg:mb-20">
            <p className="section-label mb-3">// STUDENT VOICES</p>
            <h2 className="section-title">
              HEAR FROM OUR{" "}
              <span className="text-gradient">STUDENTS</span>
              <span className="accent-dot" />
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mt-4">
              Real stories from students who found their path at Impulse PU College
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setActiveVideo(t.videoId)}
                className="group relative rounded-xl overflow-hidden aspect-[3/4] border border-border hover:border-primary/40 transition-all shadow-sm hover:shadow-xl"
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Name */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-xl text-primary-foreground tracking-wide">{t.name}</h3>
                  <p className="text-[10px] font-mono-brand text-primary-foreground/50 tracking-widest uppercase">Student</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-foreground/90 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-2 right-2 sm:-top-10 sm:right-0 p-2 rounded-full bg-foreground/60 sm:bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground transition-colors z-10"
              >
                <X className="h-5 w-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                title="Student Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TestimonialSection;
