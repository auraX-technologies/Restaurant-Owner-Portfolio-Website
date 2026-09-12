
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-beige text-forest-green border-t border-forest-green/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-widest text-forest-green/60 mb-12">Press & Acclaim</p>
            <h3 className="font-serif text-3xl md:text-5xl leading-tight md:leading-tight mb-12">
              "A masterclass in restraint. Sylvan strips away the noise of modern dining, leaving only what is deeply flavorful and fundamentally satisfying."
            </h3>
            <p className="font-sans text-sm tracking-widest uppercase">The Oregonian</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
