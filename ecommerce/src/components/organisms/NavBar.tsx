import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const NavBar = () => {
  return (
    <div className='container m-auto flex justify-between h-[64px] mb-4 items-center'>
      <p className='logo'>
        <Link href="/">Headphones</Link>
      </p>

      <button type='button' className='relative p-2.5' >
        <ShoppingCart className='w-full h-full'/>
        <span className='absolute top-0 right-0 bg-red-500 p-2 w-5 h-5 rounded-full text-white grid place-content-center text-md'>0</span>
      </button>

    </div>
  )
}
