import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 w-full border-t">
      <div className=" container mx-auto px-4">
        <div className="flex flex-wrap  justify-between">
          

          {/* Main Menu */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="font-bold mb-4">Main Menu</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home Page</a></li>
              <li><a href="#" className="hover:underline">All collections</a></li>
              <li><a href="#" className="hover:underline">All Products</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="font-bold mb-4">Important Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
            </ul>
          </div>

          {/* General Policies */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="font-bold mb-4">General Policies</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Returns & Shipping Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0">
            <h2 className="font-bold mb-4">Let's be social</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-gray-600"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-black hover:text-gray-600"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Logo Section */}
          <div className="w-full md:w-1/5 mb-6 md:mb-0 flex flex-col items-center">
            <img src="/MerchShop.png" alt="Logo" className="h-16" />
            <p className="mt-4">&copy; 2024, MerchShop</p>
          </div>
        </div>

        {/* Email Subscription */}
        <div className="flex flex-wrap md:gap-4 items-center justify-center mt-8 ">
          <input type="email" placeholder="Email" className="w-full md:w-2/5 px-4 py-2 border border-gray-300 rounded-md mb-4 md:mb-0" />
          <button className="w-full md:w-1/6    bg-black text-white px-4 py-2 rounded-md">Join</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
