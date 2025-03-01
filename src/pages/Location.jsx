import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaParking, FaWifi, FaWheelchair } from 'react-icons/fa';

const Location = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="font-display text-4xl text-center text-cafe-brown mb-12">Visit Us</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gray-200 h-[400px] rounded-lg mb-6">
              {/* Map placeholder */}
              <div className="h-full flex items-center justify-center bg-cafe-cream rounded-lg">
                <FaMapMarkerAlt className="text-6xl text-cafe-brown" />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-cafe-brown" />
                <p>123 Coffee Street, Cafe Town, CT 12345</p>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex items-center space-x-1">
                  <FaParking className="text-cafe-brown" />
                  <span>Free Parking</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaWifi className="text-cafe-brown" />
                  <span>Free WiFi</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaWheelchair className="text-cafe-brown" />
                  <span>Accessible</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl text-cafe-brown mb-3">How to Find Us</h2>
              <p className="text-gray-700">
                We're located in the heart of Cafe Town, just two blocks from Central Station.
                Look for our distinctive brown awning and outdoor seating area.
              </p>
            </div>
            
            <div>
              <h2 className="font-display text-2xl text-cafe-brown mb-3">Parking</h2>
              <p className="text-gray-700">
                Free parking is available in our private lot behind the café.
                Street parking is also available on Coffee Street and surrounding areas.
              </p>
            </div>
            
            <div>
              <h2 className="font-display text-2xl text-cafe-brown mb-3">Public Transport</h2>
              <p className="text-gray-700">
                Take bus lines 12, 15, or 18 to the Cafe Square stop.
                We're also a 5-minute walk from Central Station.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Location;