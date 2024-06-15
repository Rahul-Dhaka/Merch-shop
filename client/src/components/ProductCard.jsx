import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({data}) => {
    const index = data.index;
    const product = data.product;
    const navigate = useNavigate();



  

  return (
    <div key={index} className=" rounded-md  overflow-hidden border shadow bg-white hover:cursor-pointer  hover:shadow-md  transition-all" onClick={() => navigate(`/product/${product.id}`)}>
              <img src={product.image} alt={product.title} className="w-full h-48 object-contain hover:scale-110 transition-all duration-500" />
              <div className="p-2 text-center">
                <h3 className="text-md text-theme-secondary font-semibold mb-1">{product.title}</h3>
                <p className="text-gray-600 mb-1">$ {product.price}</p>
              </div>
            </div>
  )
}

export default ProductCard
