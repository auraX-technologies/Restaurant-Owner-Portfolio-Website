
import { motion } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Wine pouring",
    className: "col-span-1 md:col-span-4 aspect-[4/5]"
  },
  {
    url: "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2070&auto=format&fit=crop",
    alt: "Restaurant interior",
    className: "col-span-1 md:col-span-8 aspect-[16/9]"
  },
  {
    url: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2025&auto=format&fit=crop",
    alt: "Fresh ingredients",
    className: "col-span-1 md:col-span-6 aspect-square"
  },
  {
    url: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop",
    alt: "Plated dish",
    className: "col-span-1 md:col-span-6 aspect-[4/3] md:aspect-square object-cover"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-soft-cream">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm uppercase tracking-widest text-forest-green/60 mb-4">The Atmosphere</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-forest-green max-w-2xl mx-auto">
            Intimate, dimly lit, and grounded.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`overflow-hidden ${image.className}`}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 filter sepia-[5%] grayscale-[10%]"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
