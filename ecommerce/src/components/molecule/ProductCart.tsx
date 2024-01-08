import { type ProductCartProps } from '@/models/products.interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const ProductCart = ({ productCardData }: ProductCartProps): JSX.Element => {
  const { images, name, price, slug } = productCardData
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <figure className='aspect-square grid place-content-center p-4 bg-gray-100 rounded-lg box-border'>
          {Array.isArray(images) && images.length > 0 && (
            <Image
              src={images[0].url}
              alt={name}
              className='w-full h-full object-cover hover:scale-[1.02] transition-transform'
              width={500}
              height={500}
            />
          )}
        </figure>
      </Link>
      <div className='grid'>
        <strong className='font-medium'>{name}</strong>
        <span className='font-bold'>${price}</span>
      </div>
    </div>
  )
}
