
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-soft-cream text-forest-green">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
                We believe dining should be an act of grounding—a return to what is essential.
              </h2>
              <p className="text-forest-green/70 text-lg leading-relaxed mb-8 max-w-md">
                At Sylvan, we work closely with the Pacific Northwest's micro-seasons. Our menu is not fixed; it breathes with the changing landscape, guided by foraging, slow fermentation, and cooking over open embers.
              </p>
              <div className="space-y-2 text-sm uppercase tracking-widest text-forest-green/60">
                <p>Dinner: Tues—Sun, 5pm—10pm</p>
                <p>Tasting Menu & A La Carte</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] w-full max-w-md mx-auto"
            >
              <img 
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1974&auto=format&fit=crop" 
                alt="Chef preparing a dish" 
                className="w-full h-full object-cover grayscale-[20%] sepia-[10%] contrast-[1.1]"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-muted-sage/20 -z-10" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-forest-green/20 -z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Intro;
