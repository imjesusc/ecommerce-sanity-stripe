import React from 'react'
import { ProductCart } from '../molecule'
import { type ProductsGalleryProps } from '@/models/products.interface'

export const ProductsGallery = ({ productsData }: ProductsGalleryProps): JSX.Element => {
  return (
    <div className='container m-auto gap-8 grid grid-cols-2 px-4 tablet:p-0 tablet:grid-cols-3 laptop:grid-cols-5'>
      {productsData.map((product) => (
        <ProductCart key={product._id} productCardData={product} />
      ))}
    </div>
  )
}
