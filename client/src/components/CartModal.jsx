import React, { useEffect, useState } from 'react';
import { removeItem, clearCart } from '../app/features/cart/cartSlice';
import {useSelector, useDispatch } from 'react-redux';

const CartModal = ({ isOpen, onClose, items }) => {
  const items2 = useSelector((state)=> state.cart.items );
  const dispatch = useDispatch();



  

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />
      )}
      <div
        className={`fixed m-1 rounded-md top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 
            ${isOpen ? 'translate-x-0' : 'translate-x-full' }`} >
        <button className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-3xl px-2" onClick={onClose} > &times;  </button>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          {items2.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {items2.map((item, index) => (
                <li key={index} className="border-b py-2 flex justify-between">
                  {item}
                  <button className='text-red-500' onClick={()=>dispatch(removeItem(item))}><i className="fas fa-trash"></i></button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
