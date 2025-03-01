import { Link } from 'react-router-dom';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaCoffee className="text-cafe-brown text-2xl" />
            <span className="font-display text-xl text-cafe-brown">Café Delight</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-cafe-brown transition">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-cafe-brown transition">Menu</Link>
            <Link to="/location" className="text-gray-700 hover:text-cafe-brown transition">Location</Link>
            <Link to="/contact" className="text-gray-700 hover:text-cafe-brown transition">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;