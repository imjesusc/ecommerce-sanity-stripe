import { Minus, Plus, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface CartProductPreviewProps {
  imageUrl: string
  name: string
  quantity: number
  price: number
}

export const CartProductPreview = ({ imageUrl, name, quantity, price }: CartProductPreviewProps) => {
  return (
    <div className="w-full flex gap-4">
      <figure className="min-w-[150px] min-h-[150px] bg-gray-100 rounded-lg">
        <Image className="w-full h-full object-cover" src={imageUrl} alt={name} width={100} height={100} />
      </figure>

      <div className="w-full flex flex-col justify-between p-2">
        <div className="w-full flex justify-between items-center">
          <h5 className="text-xl text-gray-600">{name}</h5>
          <p>${price}</p>
        </div>

        <div className="flex gap-4 w-full justify-between items-center">
          <div className="grid grid-cols-3 place-content-center">
            <span className="text-center border rounded-l-lg p-2">
              <Minus />
            </span>
            <span className="text-center border p-2">{quantity}</span>
            <span className="text-center border rounded-r-lg border-red-500 bg-red-500 text-white p-2">
              <Plus />
            </span>
          </div>

          <button className="w-5 h-5 p-1 cursor-pointer bg-red-500 text-white rounded-full">
            <X className="w-full h-full hover:scale-105" />
          </button>
        </div>
      </div>
    </div>
  )
}
