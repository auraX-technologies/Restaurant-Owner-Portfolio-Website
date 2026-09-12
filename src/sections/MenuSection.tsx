
import { motion } from 'framer-motion';

const signatureDishes = [
  {
    name: "Ember-Roasted Leeks",
    description: "Cultured cream, hazelnut, cured egg yolk",
    price: 18,
    category: "Small",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Foraged Mushroom Tart",
    description: "Caramelized onion, thyme, raw sheep's milk cheese",
    price: 24,
    category: "Small",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2025&auto=format&fit=crop"
  },
  {
    name: "Dry-Aged Duck Breast",
    description: "Plum reduction, grilled chicories, black garlic",
    price: 42,
    category: "Large",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=2070&auto=format&fit=crop"
  }
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-beige text-forest-green">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">Signature Dishes</h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            href="#full-menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#full-menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-sm uppercase tracking-widest border-b border-forest-green/30 pb-1 hover:border-forest-green transition-colors"
          >
            View Full Menu
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index === 0 
                  ? "md:col-span-5 md:mt-12" 
                  : index === 1 
                  ? "md:col-span-6 md:col-start-7" 
                  : "md:col-span-8 md:col-start-3 md:mt-16"
              }`}
            >
              <div className={`relative overflow-hidden mb-6 ${index === 2 ? 'aspect-[21/9]' : 'aspect-[4/5]'}`}>
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105 filter sepia-[5%] brightness-[0.95]"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-xs uppercase tracking-widest text-forest-green/60 block mb-2">{dish.category}</span>
                  <h3 className="font-serif text-2xl mb-2">{dish.name}</h3>
                  <p className="text-forest-green/80 italic font-serif text-lg">{dish.description}</p>
                </div>
                <span className="text-lg font-medium">${dish.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
