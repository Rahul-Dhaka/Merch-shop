import React from 'react'

const ProductCard = ({data}) => {
    const index = data.index;
    const product = data.product;

  return (
    <div key={index} className=" rounded-lg  overflow-hidden border shadow-md">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-2 text-center">
                <h3 className="text-md font-semibold mb-1">{product.title}</h3>
                <p className="text-gray-600 mb-1">$ {product.price}</p>
              </div>
            </div>
  )
}

export default ProductCard
