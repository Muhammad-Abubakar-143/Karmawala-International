import React from 'react'
import Slider from '../components/Slider';
import products from '../assets/data/products'
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
      <Slider />
      <div className="max-w-[1680px] p-4 py-6 grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-6 pt-4 justify-center">
        {products.map((product) => {
          return(
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              bulletPoints={product.description} />
          )
        })}
      </div>
    </>
  )
}

export default Home