import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const itemsInCart = [
  { id: 1, name: 'Item 1', price: 10, quantity: 2 },
  { id: 2, name: 'Item 2', price: 15, quantity: 1 },
  { id: 3, name: 'Item 3', price: 20, quantity: 3 },
];

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    address: '',
    city: '',
    zip: '',
    country: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  
  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.cardNumber) newErrors.cardNumber = 'Card Number is required';
    if (!formData.expiryDate) newErrors.expiryDate = 'Expiry Date is required';
    if (!formData.cvv) newErrors.cvv = 'CVV is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zip) newErrors.zip = 'ZIP Code is required';
    if (!formData.country) newErrors.country = 'Country is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Data Submitted: ', formData);
    } else {
      setErrors(formErrors);
    }
  };
  

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleCheckoutAsGuest = () => {
    setIsLoggedIn(false);
  };

  const totalAmount = calculateTotal(itemsInCart);

  return (
    <div className="max-w-6xl border-4 flex flex-col gap-4 md:flex-row-reverse mt-16 mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <div className='w-full md-1/2'>
        <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Items in Cart</h2>
        {itemsInCart.map(item => (
          <div key={item.id} className="flex justify-between py-2 border-b border-gray-300">
            <span>{item.name} (x{item.quantity})</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <div className="text-right py-2 text-lg font-semibold">
          <strong>Total: ${totalAmount}</strong>
        </div>
      </div>
      </div>
        <div className='w-full md-1/2'>
        <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name on Card</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Expiry Date (MM/YY)</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Billing Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleLogin}
            className="w-1/2 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Checkout with Login
          </button>
          <button
            type="button"
            onClick={handleCheckoutAsGuest}
            className="w-1/2 px-6 py-3 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Checkout as Guest
          </button>
        </div>
      </form>
        </div>
     
      
    </div>
  );
};
