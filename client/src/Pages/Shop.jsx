import React, { useState } from 'react'
import CartModal from '../components/CartModal';

const Shop = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);


  return (
  
      <h1>I am shop page</h1>
      
  );
};

export default Shop
