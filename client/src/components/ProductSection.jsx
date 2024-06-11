import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const ProductSection = () => {
    const [products, setProducts] = useState(null);

    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const products = await response.json();
        console.log(products);
        setProducts(products);
    }

    useEffect(()=>{
        fetchData();
    },[])

    // console.log(products);



  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product, index) => (
            <ProductCard key={index} data={{product, index}}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
