import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {addItem} from '../app/features/cart/cartSlice';
import {useSelector, useDispatch } from 'react-redux';


const ProductPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [selectedSize, setSelectedSize] = useState('');
    const dispatch = useDispatch();

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
                  <span className={(selectedSize===size)? "px-2 border text-theme-accent border-theme-accent rounded-md" : " px-4 border text-gray-700 rounded-md"}>{size}</span>
                </label>
              ))}
            </div>
          </div>


              <div className="flex space-x-4">
                <button className="bg-theme-primary text-white px-6 py-2 rounded-md flex items-center hover:bg-theme-secondary" onClick={()=>dispatch(addItem(product))}>
                  {/* <FaShoppingCart className="h-5 w-5 mr-2" /> */}
                  <i className="fas fa-shopping-cart  h-5 w-5 mr-2"></i>
                  Add to Cart
                </button>
                <button className="bg-theme-primary text-white px-6 py-2 rounded-md flex items-center hover:bg-theme-secondary">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };
    

export default ProductPage
