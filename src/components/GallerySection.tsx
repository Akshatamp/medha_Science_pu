import { motion } from "framer-motion";

const images = [
  { src: "https://medhapuc.com/img/gallery/College%20building%20View.jpg", label: "Campus" },
  { src: "https://medhapuc.com/img/gallery/Class%20room%20-I%20%20inner%20with%20AC.jpg", label: "Classroom" },
  { src: "https://medhapuc.com/img/gallery/Physics%20Lab.jpg", label: "Physics Lab" },
  { src: "https://medhapuc.com/img/gallery/Chemistry%20%20Lab01.jpg", label: "Chemistry Lab" },
  { src: "https://medhapuc.com/img/gallery/Library%20Room.jpg", label: "Library" },
  { src: "https://medhapuc.com/img/gallery/Reception%20Area.jpg", label: "Reception" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-12 sm:py-20 lg:py-28 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-12 lg:mb-20">
          <div className="lg:col-span-5">
            <p className="section-label mb-3">// CAMPUS &amp; OPPORTUNITIES</p>
            <h2 className="section-title">
              WHERE LEARNING{" "}
              <span className="text-gradient">COMES ALIVE</span>
              <span className="accent-dot" />
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md lg:ml-auto">
              The Medha campus at Shirur Park, Vidya Nagar — nestled in Hubballi's educational hub
              and surrounded by well-known schools, colleges and academic institutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-foreground/5 ${i === 0 || i === 3 ? "sm:row-span-2 aspect-square sm:aspect-[3/4]" : "aspect-[4/3]"} ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block bg-primary text-primary-foreground text-[9px] font-mono-brand tracking-widest px-3 py-1.5 rounded">
                  {img.label.toUpperCase()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
