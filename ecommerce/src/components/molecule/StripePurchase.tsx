'use client'
import { useCartContext } from '@/contexts/CartContext'
import getStripe from '@/lib/getStripe'
import React from 'react'
import toast from 'react-hot-toast'

export const StripePurchase = () => {
  const { user, totalPrice } = useCartContext()

  const handleCheckout = async () => {
    const stripe = await getStripe()
    const apiUrl = '/api/stripe'
    const OPTIONS = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user.cart),
    }
    try {
      const response = await fetch(apiUrl, OPTIONS)

      if (response.status === 500) return

      const data = await response.json()

      toast.loading('Redirecting...')

      stripe.redirectToCheckout({ sessionId: data.id })
    } catch (error) {
      toast.error('Something went wrong')
    }
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <p>Subtotal</p>
        <p>${totalPrice}</p>
      </div>

      <button
        onClick={handleCheckout}
        className="grid place-items-center bg-red-500 hover:bg-red-600 transition-colors text-white p-2 rounded-lg w-full"
      >
        Pay with Stripe
      </button>
    </div>
  )
}
