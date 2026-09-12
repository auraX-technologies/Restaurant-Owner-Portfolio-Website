import { motion } from 'framer-motion';

const FullMenu = () => {
  const menuCategories = [
    {
      title: "Starters",
      items: [
        { name: "Hearth-Baked Sourdough", desc: "Whipped cultured butter, smoked sea salt", price: 12 },
        { name: "Charred Sugar Snap Peas", desc: "Stracciatella, mint, preserved lemon", price: 16 },
        { name: "Venison Tartare", desc: "Juniper, pickled elderberry, rye crisps", price: 22 },
        { name: "Wood-Fired Oysters", desc: "Fermented green garlic butter, breadcrumbs", price: 24 }
      ]
    },
    {
      title: "Mains",
      items: [
        { name: "Ember-Roasted Leeks", desc: "Cultured cream, hazelnut, cured egg yolk", price: 18 },
        { name: "Foraged Mushroom Tart", desc: "Caramelized onion, thyme, raw sheep's milk cheese", price: 24 },
        { name: "Halibut in Fig Leaf", desc: "Smoked clam broth, white asparagus, sea beans", price: 38 },
        { name: "Dry-Aged Duck Breast", desc: "Plum reduction, grilled chicories, black garlic", price: 42 },
        { name: "Wood-Fired Ribeye", desc: "Bone marrow butter, wild alliums, potato pave", price: 65 }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Smoked Vanilla Ice Cream", desc: "Pine cone syrup, toasted buckwheat", price: 12 },
        { name: "Dark Chocolate Ganache", desc: "Wild blackberries, sea salt, olive oil", price: 14 }
      ]
    }
  ];

  return (
    <div id="full-menu" className="py-24 md:py-32 bg-soft-cream text-forest-green border-t border-forest-green/10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-forest-green/60 mb-4">A La Carte</p>
          <h2 className="font-serif text-4xl md:text-6xl">Evening Menu</h2>
        </motion.div>

        <div className="space-y-24">
          {menuCategories.map((category) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl md:text-3xl text-center mb-12 border-b border-forest-green/20 pb-4">
                {category.title}
              </h3>
              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex flex-col md:flex-row justify-between items-baseline gap-2 md:gap-8 group">
                    <div className="flex-grow">
                      <div className="flex justify-between items-end gap-4 mb-2">
                        <h4 className="font-serif text-xl group-hover:text-botanical-green transition-colors">{item.name}</h4>
                        <div className="flex-grow border-b border-dotted border-forest-green/30 relative top-[-6px] hidden md:block"></div>
                        <span className="font-medium md:hidden">${item.price}</span>
                      </div>
                      <p className="text-forest-green/70 text-sm md:text-base font-light italic">{item.desc}</p>
                    </div>
                    <span className="font-medium hidden md:block">${item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
