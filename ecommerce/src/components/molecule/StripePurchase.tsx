'use client'
import { useCartContext } from '@/contexts/CartContext'
import React from 'react'
import { Button } from '../atoms/Button'
import { handleCheckout } from '@/lib/handleCheckout'
import { type CartItem, type ProductToSendStripe } from '@/models'

export const StripePurchase = (): JSX.Element => {
  const { user, totalPrice } = useCartContext()

  const itemsToSend: ProductToSendStripe[] = user.cart.map((item: CartItem) => {
    return {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      image: item.image
    }
  })

  const checkout = (): void => {
    handleCheckout(itemsToSend).catch(error => {
      console.error('Error during checkout:', error)
    })
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>${totalPrice}</p>
      </div>

      <Button
      onClick={checkout}
        type="primary"
        className="text-sm">
          Pay with Stripe
      </Button>

    </div>
  )
}
