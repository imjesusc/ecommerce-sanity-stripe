import { Instagram, Twitter } from 'lucide-react'
import React from 'react'

export const Footer = (): JSX.Element => {
  return (
    <div className='p-5 w-full mt-8 grid place-content-center gap-4 bottom-0 left-0'>
      <p className='font-bold text-gray-600'>2023 Headphones Almost all reserved</p>
      <p className='flex gap-4 w-auto items-center justify-center'>
        <Instagram />
        <Twitter />
      </p>
    </div>
  )
}
