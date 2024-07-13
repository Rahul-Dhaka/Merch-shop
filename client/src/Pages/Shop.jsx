import React, { useState } from 'react'
import CartModal from '../components/CartModal';
import ProductSection from '../components/ProductSection';

const Shop = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);


  return (
  
    <div className='w-full h-fit'><ProductSection/></div>
      
  );
};

export default Shop
