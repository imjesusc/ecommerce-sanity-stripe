import { ProductCart, ProductDetails, ProductViewer } from '@/components/molecule'
import { Product, SlugPageProps } from '@/models'
import { getProductBySlug, getProductsData } from '@/utils/sanity/client'
import React from 'react'

export default async function SlugPage ({ params}: SlugPageProps) {
  const productsData = await getProductsData()
  const product = await getProductBySlug(params.slug)
  const { images, price, name, details } = product

  return (
    <div className='container grid gap-20 m-auto'>
      <div className="flex gap-20">
        <ProductViewer imagesData={images ?? []} name={name} />
        <ProductDetails  name={name} price={price} details={details}/>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h2 className='text-3xl text-gray-600'>You may also like</h2>
          <div className="grid grid-cols-6 gap-6 overflow-y-hidden overflow-x-auto">
            {productsData?.map((item: Product) => (
              <ProductCart key={item._id} productCardData={item} />
            ))}
          </div>
      </div>
    </div>
  )
}
