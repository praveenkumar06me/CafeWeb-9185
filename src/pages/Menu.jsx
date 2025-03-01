import { motion } from 'framer-motion';

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold single shot' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '$4.75', description: 'Espresso with lots of steamed milk and little foam' },
  ],
  food: [
    { name: 'Croissant', price: '$3.75', description: 'Buttery, flaky pastry' },
    { name: 'Avocado Toast', price: '$8.50', description: 'Sourdough bread with mashed avocado' },
    { name: 'Quiche', price: '$7.50', description: 'Daily selection of fresh ingredients' },
  ],
  desserts: [
    { name: 'Tiramisu', price: '$6.50', description: 'Classic Italian coffee-flavored dessert' },
    { name: 'Cheesecake', price: '$6.00', description: 'New York style with berry compote' },
    { name: 'Chocolate Cake', price: '$5.75', description: 'Rich dark chocolate layer cake' },
  ],
};

const Menu = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-cafe-cream py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-display text-4xl text-center text-cafe-brown mb-12">Our Menu</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="font-display text-2xl text-cafe-brown mb-6">Coffee</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.coffee.map((item) => (
                <div key={item.name} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-display text-xl text-cafe-brown">{item.name}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <p className="text-cafe-accent font-semibold mt-2">{item.price}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-cafe-brown mb-6">Food</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.food.map((item) => (
                <div key={item.name} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-display text-xl text-cafe-brown">{item.name}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <p className="text-cafe-accent font-semibold mt-2">{item.price}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-cafe-brown mb-6">Desserts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.desserts.map((item) => (
                <div key={item.name} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-display text-xl text-cafe-brown">{item.name}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  <p className="text-cafe-accent font-semibold mt-2">{item.price}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;