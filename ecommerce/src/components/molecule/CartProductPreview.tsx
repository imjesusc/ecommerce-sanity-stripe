'use client'
import { useCartContext } from '@/contexts/CartContext'
import { Minus, Plus, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface CartProductPreviewProps {
  imageUrl: string
  name: string
  quantity: number
  price: number
  id: string
}

export const CartProductPreview = ({ id, imageUrl, name, quantity, price }: CartProductPreviewProps) => {
  const { incItemQuantity, decItemQuantity, removeProductItemToCart } = useCartContext()
  const item = { id, name, quantity, price }

  return (
    <div className="w-full flex gap-4">
      <figure className="min-w-[150px] min-h-[150px] bg-gray-100 rounded-lg">
        <Image className="w-full h-full object-cover" src={imageUrl} alt={name} width={100} height={100} />
      </figure>

      <div className="w-full flex flex-col justify-between p-2">
        <div className="w-full flex gap-3 justify-between items-center">
          <h5 className="text-base text-gray-600">{name}</h5>
          <p className="text-red-500 text-xl">${price}</p>
        </div>

        <div className="flex gap-4 w-full justify-between items-center">
          <div className="grid grid-cols-3 place-content-center">
            <button onClick={() => decItemQuantity(item)} className="text-center border rounded-l-lg p-2">
              <Minus />
            </button>
            <span className="text-center border p-2">{quantity}</span>
            <button
              onClick={() => incItemQuantity(item)}
              className="text-center border rounded-r-lg border-red-500 bg-red-500 text-white p-2"
            >
              <Plus />
            </button>
          </div>

          <button
            onClick={() => removeProductItemToCart(id)}
            className="w-5 h-5 p-1 cursor-pointer bg-red-500 text-white rounded-full"
          >
            <X className="w-full h-full hover:scale-105" />
          </button>
        </div>
      </div>
    </div>
  )
}
