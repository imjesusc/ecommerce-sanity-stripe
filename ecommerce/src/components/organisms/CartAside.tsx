'use client'
import { useCartContext } from '@/contexts/CartContext'
import classNames from 'classnames'
import { ShoppingBasket, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { CartProductPreview, ProductNotFound } from '../molecule'

export const CartAside = () => {
  const { totalQuantity, user, setShowCart, showCart } = useCartContext()

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showCart])

  return (
    <>
      <div
        onClick={() => setShowCart(false)}
        className={classNames(
          'w-screen h-screen -z-20   right-0 cursor-pointer  fixed top-0 left-0',
          showCart ? 'z-40 bg-black/60' : '-z-20',
        )}
      ></div>
      <aside
        className={classNames(
          'bg-white flex flex-col border fixed  duration-500 top-0 gap-5  h-screen w-1/4 p-4',
          showCart ? 'right-0 z-50' : '-right-1/4 ',
        )}
      >
        <div className="flex justify-between items-center">
          <p>
            {totalQuantity} <span>items</span>
          </p>
          <button onClick={() => setShowCart(false)} className="p-2 box-border cursor-pointer bg-gray-100 rounded-full">
            <X className="w-5 h-5 hover:scale-105" />
          </button>
        </div>

        <ProductNotFound cartLength={user.cart.length} />

        <div className="grid gap-6 overflow-y-auto p-2">
          {user.cart.length > 0 &&
            user.cart.map((item: any) => (
              <CartProductPreview
                key={item.id}
                imageUrl={item.image.url}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
        </div>
      </aside>
    </>
  )
}
