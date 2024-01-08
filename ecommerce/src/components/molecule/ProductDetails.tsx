'use client'
import { useCartContext } from '@/contexts/CartContext'
import { Star } from 'lucide-react'
import React, { useEffect } from 'react'
import { Button } from '../atoms/Button'
import { handleCheckout } from '@/lib/handleCheckout'
import { IncDecField } from '.'
import { type ProductDetailsProps } from '@/models/productDetails.interface'
import { type ProductToSendStripe } from '@/models'

export const ProductDetails = ({ product }: { product: ProductDetailsProps }): JSX.Element => {
  const { incQuantity, decQuantity, quantity, setQuantity, addItemToCart } = useCartContext()
  const { name, price, details, _id, images } = product

  useEffect(() => {
    setQuantity(1)
  }, [setQuantity])

  const itemToSend: ProductToSendStripe[] = [
    {
      id: _id,
      name,
      price,
      quantity,
      image: images[0]
    }
  ]

  const checkout = (): void => {
    handleCheckout(itemToSend).catch(error => {
      console.error('Error during checkout:', error)
    })
  }

  return (
    <div className='flex flex-col gap-3 tablet:max-w-[50%]'>
      <h1 className='text-4xl font-medium'>{name}</h1>
      <div className='text-red-500 flex'>
        <div className='flex'>
          {[{ liked: true }, { liked: true }, { liked: true }, { liked: true }, { liked: false }].map((item, index) => (
            <Star key={index} className={item.liked ? 'fill-red-500' : ''} />
          ))}
        </div>
        <p>(10)</p>
      </div>
      <h4>Details: </h4>
      <p className='text-gray-500'>{details}</p>
      <p className='font-bold text-red-500 text-4xl'>${price}</p>
      <div className='flex gap-4'>
        <h3>Quantity:</h3>
        <IncDecField quantity={quantity} increment={() => { incQuantity() }} decrement={() => { decQuantity() }} />
      </div>

      <div className='grid grid-cols-2 gap-6 h-12 mt-4'>
        <Button onClick={() => { addItemToCart({ id: _id, name, price, image: images[0], quantity }) }} type='ghost'>
          Add to cart
        </Button>
        <Button onClick={checkout} type='primary'>
          Buy Now
        </Button>
      </div>
    </div>
  )
}
