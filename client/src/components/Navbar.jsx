import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../assets/MenuIcon.svg'
import CartModal from './CartModal';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(null);
  const cartItems = useSelector((state)=> state.cart.items);
  // setCartItemsCount(cartItems.length);
  // console.log('cartItems: ', cartItemsCount);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-theme-primary p-4 h-12 flex items-center fixed top-0 z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold  pb-2"><Link to="/"><img src="/MerchShop.png" alt="MerchShop" className='h-12' /></Link></div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none mt-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center bg-theme-primary w-full  ${isOpen ? 'absolute  left-0 top-12 z-10' : 'hidden'} lg:w-auto`}>
          <div className="text-[13px] font-semibold lg:flex-grow px-4 pb-2 lg:pb-0">
            <Link to="/" className="block mt-2  lg:inline-block lg:mt-0 text-white hover:text-theme-accent mr-4 pb-2 border-b lg:mr-8 lg:pb-0 lg:border-0" onClick={() => setIsOpen(false)}> HOME </Link>
            <Link to="/shop" className="block mt-2 lg:inline-block lg:mt-0 text-white hover:text-theme-accent mr-4 pb-2 border-b lg:mr-8 lg:pb-0 lg:border-0" onClick={() => setIsOpen(false)}> SHOP </Link>
            <Link to="/services" className="block mt-2  lg:inline-block lg:mt-0 text-white hover:text-theme-accent mr-4 pb-2 border-b lg:mr-8 lg:pb-0 lg:border-0" onClick={() => setIsOpen(false)}> SERVICES </Link>
            <Link to="/contact" className="block mt-2  lg:inline-block lg:mt-0 text-white hover:text-theme-accent mr-4 lg:mr-8 " onClick={() => setIsOpen(false)}> CONTACT </Link>
          </div>
        </div>
      </div>
      <div className=' p-4 text-white hover:text-theme-accent hover:cursor-pointer text-md' onClick={()=>{setIsCartOpen(true)}}>
         <i className="fas fa-shopping-cart"></i>
         <span className="absolute -mt-1 -ml-2 h-4 w-4 text-center bg-red-500 text-white text-xs rounded-full px-1">{cartItems.length}</span>
         </div>
        <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)}  />
    </nav>
  );
};

export default Navbar;
