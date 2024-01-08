import { ProductCart, ProductDetails, ProductViewer } from '@/components/molecule'
import { type Product, type SlugPageProps } from '@/models'
import { getProductBySlug, getProductsData } from '@/utils/sanity/client'
import React from 'react'

export default async function SlugPage ({ params }: SlugPageProps): Promise<JSX.Element> {
  const productsData = await getProductsData()
  const product = await getProductBySlug(params.slug)
  const { images, name } = product

  return (
    <main className='container grid gap-20 m-auto p-4'>
      <div className='w-full  flex flex-col tablet:flex-row gap-20'>
        <ProductViewer imagesData={images ?? []} name={name} />
        <ProductDetails product={product} />
      </div>

      <div className='flex flex-col items-center gap-6'>
        <h2 className='text-3xl text-gray-600'>You may also like</h2>
        <div className='grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6 gap-6 overflow-y-hidden overflow-x-auto'>
          {productsData.slice(0, 6)?.map((item: Product) => (
            <ProductCart key={item._id} productCardData={item} />
          ))}
        </div>
      </div>
    </main>
  )
}
