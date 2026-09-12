import { useState } from 'react';
import { motion } from 'framer-motion';

const ReservationCTA = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservations" className="py-24 md:py-32 bg-forest-green text-soft-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Reserve a Table</h2>
            <p className="text-soft-cream/80 text-lg max-w-xl mx-auto font-light">
              We release reservations on the 1st of each month at 10:00 AM PST. For parties larger than six, please contact us directly.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-botanical-green/40 p-12 text-center border border-soft-cream/10"
            >
              <h3 className="font-serif text-3xl mb-4 text-beige">Request Received</h3>
              <p className="text-soft-cream/80">
                Thank you. We have received your reservation request and will contact you shortly to confirm availability.
              </p>
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-botanical-green/20 p-8 md:p-12 border border-soft-cream/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="date" className="block text-sm uppercase tracking-widest text-beige mb-3">Date</label>
                  <input 
                    type="date" 
                    id="date"
                    required
                    className="w-full bg-transparent border-b border-soft-cream/30 py-2 focus:outline-none focus:border-beige text-soft-cream font-light transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm uppercase tracking-widest text-beige mb-3">Time</label>
                  <select 
                    id="time"
                    required
                    className="w-full bg-transparent border-b border-soft-cream/30 py-2 focus:outline-none focus:border-beige text-soft-cream font-light transition-colors appearance-none"
                  >
                    <option value="" className="bg-forest-green text-soft-cream">Select a time</option>
                    <option value="17:00" className="bg-forest-green text-soft-cream">5:00 PM</option>
                    <option value="17:30" className="bg-forest-green text-soft-cream">5:30 PM</option>
                    <option value="18:00" className="bg-forest-green text-soft-cream">6:00 PM</option>
                    <option value="18:30" className="bg-forest-green text-soft-cream">6:30 PM</option>
                    <option value="19:00" className="bg-forest-green text-soft-cream">7:00 PM</option>
                    <option value="19:30" className="bg-forest-green text-soft-cream">7:30 PM</option>
                    <option value="20:00" className="bg-forest-green text-soft-cream">8:00 PM</option>
                    <option value="20:30" className="bg-forest-green text-soft-cream">8:30 PM</option>
                    <option value="21:00" className="bg-forest-green text-soft-cream">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm uppercase tracking-widest text-beige mb-3">Guests</label>
                  <select 
                    id="guests"
                    required
                    className="w-full bg-transparent border-b border-soft-cream/30 py-2 focus:outline-none focus:border-beige text-soft-cream font-light transition-colors appearance-none"
                  >
                    <option value="" className="bg-forest-green text-soft-cream">Number of guests</option>
                    <option value="1" className="bg-forest-green text-soft-cream">1 Person</option>
                    <option value="2" className="bg-forest-green text-soft-cream">2 People</option>
                    <option value="3" className="bg-forest-green text-soft-cream">3 People</option>
                    <option value="4" className="bg-forest-green text-soft-cream">4 People</option>
                    <option value="5" className="bg-forest-green text-soft-cream">5 People</option>
                    <option value="6" className="bg-forest-green text-soft-cream">6 People</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="seating" className="block text-sm uppercase tracking-widest text-beige mb-3">Seating Area</label>
                  <select 
                    id="seating"
                    required
                    className="w-full bg-transparent border-b border-soft-cream/30 py-2 focus:outline-none focus:border-beige text-soft-cream font-light transition-colors appearance-none"
                  >
                    <option value="" className="bg-forest-green text-soft-cream">Select preference</option>
                    <option value="dining" className="bg-forest-green text-soft-cream">Main Dining Room</option>
                    <option value="chef" className="bg-forest-green text-soft-cream">Chef's Counter</option>
                    <option value="patio" className="bg-forest-green text-soft-cream">Outdoor Patio</option>
                  </select>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-widest text-beige mb-3">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      required
                      placeholder="Your full name"
                      className="w-full bg-transparent border-b border-soft-cream/30 py-2 focus:outline-none focus:border-beige text-soft-cream font-light transition-colors placeholder:text-soft-cream/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-widest text-beige mb-3">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-soft-cream/30 py-2 focus:outline-none focus:border-beige text-soft-cream font-light transition-colors placeholder:text-soft-cream/30"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-center">
                <button 
                  type="submit"
                  className="bg-beige text-forest-green px-12 py-4 text-sm uppercase tracking-widest hover:bg-soft-cream transition-colors w-full md:w-auto"
                >
                  Confirm Request
                </button>
              </div>
            </motion.form>
          )}


        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
