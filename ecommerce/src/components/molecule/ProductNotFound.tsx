import { useCartContext } from '@/contexts/CartContext'
import { ShoppingBasket } from 'lucide-react'
import Link from 'next/link'

interface ProductNotFoundProps {
  cartLength: number
}

export const ProductNotFound = () => {
  const { setShowCart } = useCartContext()
  return (
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
  )
}
