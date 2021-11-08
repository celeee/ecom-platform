import React from 'react'
import ProductItem from './ProductItem'

function ProductList() {
  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-1 gap-10'>
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  )
}

export default ProductList