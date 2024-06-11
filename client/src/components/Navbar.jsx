import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/MenuIcon.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 h-12 flex items-center fixed top-0 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold"><Link to="/">Brand</Link></div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none mt-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center bg-blue-500 w-full ${isOpen ? 'relative left-0 top-12 z-10' : 'hidden'} lg:w-auto`}>
          <div className="text-[13px] font-semibold lg:flex-grow px-4 pb-2 lg:pb-0">
            <Link to="/" className="block mt-2  lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 pb-2 border-b lg:mr-8 lg:pb-0 lg:border-0" > HOME </Link>
            <Link to="/shop" className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 pb-2 border-b lg:mr-8 lg:pb-0 lg:border-0" > SHOP </Link>
            <Link to="/services" className="block mt-2  lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 pb-2 border-b lg:mr-8 lg:pb-0 lg:border-0" > SERVICES </Link>
            <Link to="/contact" className="block mt-2  lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4 lg:mr-8 " > CONTACT </Link>
          </div>
        </div>
      </div>
      <div className=' p-4 text-white text-md'><i className="fas fa-shopping-cart"></i></div>

    </nav>
  );
};

export default Navbar;
