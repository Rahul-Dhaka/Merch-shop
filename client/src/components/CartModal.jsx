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
                <li key={index} className="border-b py-2 flex justify-between ">
                  
                  <div className="w-full h-20 p-1 flex gap-3">
                    <img src={item.image} alt="" />
                    <div className="flex text-sm flex-col h-full w-full overflow-hidden justify-around">
                    <h1 className="inline  truncate overflow-hidden whitespace-nowrap font-semibold">{item.title}</h1>
                    <h2>Price : <span className="font-semibold">{item.price}</span> </h2>
                    <label>Quantity : <input type="number" className="w-12 border-2"/></label>
                    </div>
                    <button className='text-red-500' onClick={()=>dispatch(removeItem(item))}><i className="fas fa-trash"></i></button>

                  </div>
                </li>
              ))}
              <button className="p-2 w-4/5 px-5 block mx-auto rounded border bg-slate-700 text-white">Checkout</button>
              <button className="p-2 w-4/5 px-5 block m-2 mx-auto rounded border" onClick={()=>dispatch(clearCart())}>Clear cart</button>
            </ul>
            
          )}
        </div>
        
      </div>
    </>
  );
};

export default CartModal;
