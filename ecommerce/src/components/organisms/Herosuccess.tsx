'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useCartContext } from '@/contexts/CartContext'
import { CheckCircle } from 'lucide-react'
import { runFireworks } from '@/lib/confetti'

export const HeroSucces = () => {
  const { setUser } = useCartContext()

  useEffect(() => {
    setUser({
      name: 'imjesus',
      active: true,
      cart: [],
      purchases: [],
    })
    runFireworks()
  }, [setUser])

  return (
    <div className="container m-auto bg-gray-100 grid place-items-center place-content-center gap-3 h-[500px] mb-20">
      <p className="text-green-500">
        <CheckCircle />
      </p>
      <h2 className="text-3xl text-gray-600">Thank you for your order!</h2>
      <p className="text-gray-600">Check your email inbox for the receipt.</p>
      <p className="text-gray-600">
        If you have any questions, please email:
        <Link className="text-red-500" href="mailto:jsmorders@nextjs.com">
          jsmorders@nextjs.com
        </Link>
      </p>
      <Link href="/" className="bg-[#f02d34] text-white hover:bg-red-500 transition-colors rounded-lg mt-6 py-2.5 px-4">
        Continue Shopping
      </Link>
    </div>
  )
}
