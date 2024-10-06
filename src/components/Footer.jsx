import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 font-montserrat" id='footer'>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are committed to providing the best service and quality products to our customers.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">123 Main St, City, Country</p>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-400 mb-2">Get the latest updates and offers.</p>
            <form action="#" method="POST">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 rounded-md text-gray-800"
                required
              />
              <button
                type="submit"
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">© {new Date().getFullYear()} Vritti Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
