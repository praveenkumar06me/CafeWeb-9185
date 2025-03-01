import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <div className="relative h-[500px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="font-display text-5xl mb-4">Welcome to Café Delight</h1>
              <p className="text-xl">Where every cup tells a story</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl mb-4 text-cafe-brown">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2010, Café Delight has been serving premium coffee and delectable treats
              to our beloved community. Our passion for quality and service makes every visit
              a delightful experience.
            </p>
          </div>
          <div className="bg-cafe-cream p-8 rounded-lg">
            <h3 className="font-display text-2xl mb-4 text-cafe-brown">Opening Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Friday: 7:00 AM - 8:00 PM</li>
              <li>Saturday: 8:00 AM - 9:00 PM</li>
              <li>Sunday: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;