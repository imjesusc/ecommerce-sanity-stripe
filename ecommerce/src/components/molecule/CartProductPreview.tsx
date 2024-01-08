'use client'
import { useCartContext } from '@/contexts/CartContext'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { IncDecField } from '.'
import { Button } from '../atoms/Button'

interface CartProductPreviewProps {
  imageUrl: string
  name: string
  quantity: number
  price: number
  id: string
}

export const CartProductPreview = ({ id, imageUrl, name, quantity, price }: CartProductPreviewProps): JSX.Element => {
  const { incItemQuantity, decItemQuantity, removeProductItemToCart } = useCartContext()
  const item = { id, name, quantity, price, image: { url: imageUrl } }

  return (
    <div className='w-full flex gap-4'>
      <figure className='min-w-[150px] min-h-[150px] bg-gray-100 rounded-lg'>
        <Image className='w-full h-full object-cover' src={imageUrl} alt={name} width={100} height={100} />
      </figure>

      <div className='w-full flex flex-col justify-between p-2'>
        <div className='w-full flex gap-3 justify-between items-center'>
          <h5 className='text-base text-gray-600'>{name}</h5>
          <p className='text-red-500 text-xl'>${price}</p>
        </div>

        <div className='flex gap-4 w-full justify-between items-center'>
          <IncDecField
            quantity={quantity}
            increment={() => { incItemQuantity(item) }}
            decrement={() => { decItemQuantity(item) }}
          />

          <Button
            type='none'
            onClick={() => { removeProductItemToCart(id) }}
            className='rounded-full bg-red-500 text-white w-5 h-5 p-1 cursor-pointer border-0'
          >
            <X className='w-full h-full hover:scale-105' />
          </Button>
        </div>
      </div>
    </div>
  )
}
