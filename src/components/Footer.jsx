import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cafe-brown text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-display text-xl">Café Delight</h3>
            <p className="text-sm mt-2">Serving happiness since 2010</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-cafe-cream transition"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-cafe-cream transition"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-cafe-cream transition"><FaTwitter size={24} /></a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; 2024 Café Delight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;