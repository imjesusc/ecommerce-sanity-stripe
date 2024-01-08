'use client'
import { useCartContext } from '@/contexts/CartContext'
import { Image } from '@/models'
import { Minus, Plus, Star } from 'lucide-react'
import React, { useEffect } from 'react'

interface ProductDetailsProps {
  name: string
  price: number
  details: string
  _id: string
  images: Image[]
}

export const ProductDetails = ({ product }: { product: ProductDetailsProps }) => {
  const { incQuantity, decQuantity, quantity, setQuantity, addItemToCart } = useCartContext()
  const { name, price, details, _id, images } = product

  useEffect(() => {
    setQuantity(1)
  }, [setQuantity])

  return (
    <div className="flex flex-col gap-3 max-w-[50%]">
      <h1 className="text-4xl font-medium">{name}</h1>
      <div className="text-red-500 flex">
        <div className="flex">
          {[{ liked: true }, { liked: true }, { liked: true }, { liked: true }, { liked: false }].map((item, index) => (
            <Star key={index} className={item.liked ? 'fill-red-500' : ''} />
          ))}
        </div>
        <p>(10)</p>
      </div>
      <h4>Details: </h4>
      <p className="text-gray-500">{details}</p>
      <p className="font-bold text-red-500 text-4xl">${price}</p>
      <div className="flex gap-4">
        <h3>Quantity:</h3>
        <div className="grid grid-cols-3 place-content-center">
          <span onClick={() => decQuantity()} className="text-center border rounded-l-lg p-2">
            <Minus />
          </span>
          <span className="text-center border p-2">{quantity}</span>
          <span
            onClick={() => incQuantity()}
            className="text-center border rounded-r-lg border-red-500 bg-red-500 text-white p-2"
          >
            <Plus />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 h-12 mt-4">
        <button
          onClick={() => addItemToCart({ id: _id, name, price, image: images[0], quantity })}
          type="button"
          className="rounded-lg  border hover:bg-gray-100 transition-colors"
        >
          Add to cart
        </button>
        <button type="button" className="rounded-lg bg-red-500 text-white transition-colors hover:bg-red-600">
          Buy Now
        </button>
      </div>
    </div>
  )
}
