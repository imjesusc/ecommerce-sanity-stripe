import { useCartContext } from '@/contexts/CartContext'
import classNames from 'classnames'
import { ShoppingBasket, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CartAside = () => {
  const { totalQuantity, user, setShowCart, showCart } = useCartContext()

  return (
    <>
      <div
        className={classNames(
          'w-screen h-screen -z-20   right-0  fixed top-0 left-0',
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

        {user.cart.length < 1 && (
          <div className="grid place-items-center gap-4 h-auto">
            <ShoppingBasket className="w-20 h-20" />
            <p>Your Shopping Bag is Empty</p>

            <Link
              onClick={() => setShowCart(false)}
              href="/"
              className="bg-[#f02d34] text-white hover:bg-red-500 transition-colors rounded-lg py-2.5 px-4"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  )
}
