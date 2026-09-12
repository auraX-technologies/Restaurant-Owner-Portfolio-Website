
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-forest-green text-soft-cream overflow-hidden relative">
      {/* Decorative botanical element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none mix-blend-screen bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop')] bg-cover" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[3/4] md:aspect-[4/5] relative w-full max-w-md ml-auto">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop" 
                alt="Chef in the kitchen" 
                className="w-full h-full object-cover grayscale-[30%] brightness-[0.8]"
              />
              <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square border border-soft-cream/20 z-0" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">Rooted in time and place.</h2>
            <div className="space-y-6 text-lg text-soft-cream/80 leading-relaxed font-light">
              <p>
                Sylvan was born from a simple desire: to cook food that honors the soil it grew in. Executive Chef Elias Thorne spent a decade working in acclaimed kitchens across Europe before returning to his native Oregon.
              </p>
              <p>
                Here, the focus is singular. We cook over a hearth built from local river stone. We preserve the fleeting abundance of summer to sustain us through the quiet of winter. 
              </p>
              <p>
                There is no artifice here. Just heat, time, and ingredients allowed to speak clearly.
              </p>
            </div>
            
            <div className="mt-12 pt-12 border-t border-soft-cream/20">
              <p className="font-serif italic text-xl text-beige">
                "We are merely curators of what the region already provides."
              </p>
              <p className="text-sm uppercase tracking-widest text-soft-cream/60 mt-4">
                — Elias Thorne, Chef/Owner
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Story;
