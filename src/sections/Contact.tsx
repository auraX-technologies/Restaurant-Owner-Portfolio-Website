import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-beige text-forest-green border-t border-forest-green/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-forest-green/60 mb-4">Get in touch</p>
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Contact Us</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-12">
                <div>
                  <h3 className="font-serif text-2xl mb-4">Location</h3>
                  <p className="text-forest-green/80 leading-relaxed font-light text-lg">
                    1422 NW Glisan St.<br />
                    Portland, OR 97209
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl mb-4">Hours</h3>
                  <div className="space-y-2 text-forest-green/80 font-light text-lg">
                    <p className="flex justify-between max-w-xs">
                      <span>Tuesday — Thursday</span>
                      <span>5:00 PM — 9:00 PM</span>
                    </p>
                    <p className="flex justify-between max-w-xs">
                      <span>Friday — Saturday</span>
                      <span>5:00 PM — 10:00 PM</span>
                    </p>
                    <p className="flex justify-between max-w-xs">
                      <span>Sunday</span>
                      <span>5:00 PM — 9:00 PM</span>
                    </p>
                    <p className="flex justify-between max-w-xs text-forest-green/50">
                      <span>Monday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl mb-4">Inquiries</h3>
                  <p className="text-forest-green/80 font-light text-lg mb-2">
                    For private events and general inquiries:
                  </p>
                  <a href="mailto:hello@sylvanrestaurant.com" className="block text-lg border-b border-forest-green/30 pb-1 max-w-max hover:border-forest-green transition-colors mb-2">
                    hello@sylvanrestaurant.com
                  </a>
                  <a href="tel:+15551234567" className="block text-lg border-b border-forest-green/30 pb-1 max-w-max hover:border-forest-green transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full min-h-[400px] bg-forest-green/5 relative"
            >
              {/* Optional: Add a map image or architectural detail image here */}
              <img 
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop" 
                alt="Restaurant entrance"
                className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%] sepia-[10%]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
