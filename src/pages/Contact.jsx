import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-cafe-cream py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-display text-4xl text-center text-cafe-brown mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl text-cafe-brown mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-cafe-brown" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-cafe-brown" />
                <p>hello@cafedelight.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaInstagram className="text-cafe-brown" />
                <p>@cafedelight</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-xl text-cafe-brown mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Friday: 7:00 AM - 8:00 PM</li>
                <li>Saturday: 8:00 AM - 9:00 PM</li>
                <li>Sunday: 8:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-cafe-brown mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-cafe-brown"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-cafe-brown"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-cafe-brown"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-cafe-brown text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;