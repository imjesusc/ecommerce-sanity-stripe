'use client'
import { useCartContext } from '@/contexts/CartContext'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { CartAside } from '.'

export const NavBar = () => {
  const { totalQuantity, setShowCart } = useCartContext()
  return (
    <div className="container p-4 tablet:p-0 m-auto flex justify-between h-[64px] mb-4 items-center">
      <p className="text-gray-400 font-sans font-medium">
        <Link href="/">Headphones</Link>
      </p>

      <button onClick={() => setShowCart(true)} type="button" className="relative p-2.5 cursor-pointer">
        <ShoppingCart className="w-full h-full" />
        <span className="absolute top-0 right-0 bg-red-500 p-2 w-5 h-5 rounded-full text-white grid place-content-center text-md">
          {totalQuantity}
        </span>
      </button>

      <CartAside />
    </div>
  )
}
