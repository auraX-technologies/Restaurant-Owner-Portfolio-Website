
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-beige">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 via-forest-green/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 via-transparent to-forest-green/30" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-end justify-between pb-12 pt-32 h-full min-h-[90vh]">
        <div className="max-w-2xl text-soft-cream mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] mb-4 text-beige">
              Est. 2018 &mdash; Portland, Oregon
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 text-soft-cream"
          >
            A celebration of earth, fire, and seasonality.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10"
          >
            <a 
              href="#reservations" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#reservations')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-beige text-forest-green px-8 py-4 text-sm uppercase tracking-widest hover:bg-soft-cream transition-colors"
            >
              Reserve a Table
            </a>
            <a 
              href="#full-menu" 
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#full-menu')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-beige border-b border-beige/30 pb-1 text-sm uppercase tracking-widest hover:border-beige transition-colors"
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
