'use client'
import { useCartContext } from '@/contexts/CartContext'
import classNames from 'classnames'
import { X } from 'lucide-react'
import React, { useEffect } from 'react'
import { CartProductPreview, ProductNotFound, StripePurchase } from '../molecule'

export const CartAside = (): JSX.Element => {
  const { totalQuantity, user, setShowCart, showCart } = useCartContext()

  useEffect(() => {
    if (showCart as boolean) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [showCart])

  return (
    <>
      <div
        onClick={() => { setShowCart(false) }}
        className={classNames(
          'w-screen h-screen -z-20   right-0 cursor-pointer  fixed top-0 left-0',
          showCart as boolean ? 'z-40 bg-black/60' : '-z-20'
        )}
      ></div>
      <aside
        className={classNames(
          'bg-white flex flex-col border fixed z-50 duration-500 top-0 gap-5 w-screen  h-screen tablet:w-1/2 laptop:w-1/4 p-4',
          showCart as boolean ? 'right-0' : 'right-[-100%] tablet:-right-1/2 laptop:-right-1/4 '
        )}
      >
        <div className="flex justify-between items-center">
          <p>
            {totalQuantity} <span>items</span>
          </p>
          <button onClick={() => { setShowCart(false) }} className="p-2 box-border cursor-pointer bg-gray-100 rounded-full">
            <X className="w-5 h-5 hover:scale-105" />
          </button>
        </div>

        {user.cart.length < 1 && <ProductNotFound />}

        <div className="grid gap-6 overflow-y-auto p-2">
          {user.cart.length > 0 &&
            user.cart.map((item: any) => (
              <CartProductPreview
                key={item.id}
                id={item.id}
                imageUrl={item?.image?.url}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
        </div>

        {user.cart.length > 0 && <StripePurchase />}
      </aside>
    </>
  )
}
