import { useCartContext } from '@/contexts/CartContext'
import classNames from 'classnames'
import { ShoppingBasket } from 'lucide-react'
import Link from 'next/link'
import { buttonClass } from '../atoms/Button'
import React from 'react'

export const ProductNotFound = (): JSX.Element => {
  const { setShowCart } = useCartContext()
  return (
    <div className="grid place-items-center gap-4 h-auto mt-40">
      <ShoppingBasket className="w-20 h-20" />
      <p>Your Shopping Bag is Empty</p>

      <Link onClick={() => { setShowCart(true) }} href="/" className={classNames(buttonClass.primary)}>
        Continue shopping
      </Link>
    </div>
  )
}
