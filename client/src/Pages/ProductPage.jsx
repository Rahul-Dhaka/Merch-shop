import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {addItem} from '../app/features/cart/cartSlice';
import {useSelector, useDispatch } from 'react-redux';


const ProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchData = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const productd = await response.json();
        setProduct(productd);
    }

    useEffect(()=>{
        fetchData();
        console.log(product);

    },[])
    
    const handleSizeChange = (event) => {
      setSelectedSize(event.target.value);
      setError(''); // Clear the error message when a size is selected
    };
  
    const handleAddToCart = () => {
      if (!selectedSize) {
        setError('Please select a size.');
        return;
      }
      dispatch(addItem({ ...product, size: selectedSize }));
    };
  
    const handleBuyNow = () => {
      if (!selectedSize) {
        setError('Please select a size.');
        return;
      }
      // Handle the buy now action
      dispatch(addItem({ ...product, size: selectedSize }));
      navigate('/checkout');
    };


    if(!product) return "loading...";

  return (
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Product Image */}
            <div className="flex flex-col items-center lg:w-1/2">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-96 object-contain mb-4" 
              />
            </div>
    
            {/* Product Details */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-800 mb-2"><strong>Category:</strong> {product.category}</p>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-semibold mr-2 flex items-center">
                  {/* <FaDollarSign className="mr-1" />{product.price} */}
                  <i className="fas fa-dollar-sign  mr-1"></i> {product.price}
                </span>
              </div>
              {/* <div className="flex items-center mb-4">
                {Array(Math.floor(product.rating.rate)).fill().map((_, i) => (
                <i  key={i} className="fas fa-star  h-5 w-5 text-yellow-500"></i>
                ))}
                <span className="ml-2 text-gray-600">({product.rating.count} reviews)</span>
              </div> */}

              {/* Size Selection */}
          {/* Size Selection */}
          <div className="mb-4 flex items-center">
            <p className="block text-gray-700 font-medium mr-2">Select Size:</p>
            <div className="flex space-x-4">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <label key={size} className="flex items-center hover:cursor-pointer">
                  <input type="radio" name="size" value={size} checked={selectedSize === size} onChange={handleSizeChange} className="appearance-none"/>
                  <span className={`inline-block cursor-pointer px-4 py-1 border rounded-md transition-all duration-200 ease-in-out ${selectedSize === size
                                   ? 'text-white bg-theme-accent border-theme-accent shadow-lg transform scale-105'
                                   : 'text-gray-700 bg-white border-gray-300 hover:text-theme-accent hover:border-theme-accent hover:bg-gray-100'}`}>
                  {size}</span>               
                </label>
              ))}
            </div>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}

              <div className="flex space-x-4">
                <button className="bg-theme-accent text-white px-6 py-2 rounded-md flex items-center hover:bg-blue-600 active:bg-blue-700 transition transform duration-200 ease-in-out  active:scale-95" onClick={handleAddToCart}>
                  {/* <FaShoppingCart className="h-5 w-5 mr-2" /> */} <i className="fas fa-shopping-cart  h-5 w-5 mr-2 mt-1"></i> Add to Cart
                </button>
                <button className="bg-theme-accent border text-white px-6 py-2 rounded-md flex items-center hover:bg-blue-600 active:bg-blue-700 transition transform duration-200 ease-in-out  active:scale-95" onClick={handleBuyNow}>
                  Buy Now
                </button>

              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default ProductPage
