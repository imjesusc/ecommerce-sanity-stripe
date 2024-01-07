import { Instagram, Twitter } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 Headphones Almost all reserved</p>
      <p className='icons'>
        <Instagram />
        <Twitter />
      </p>
    </div>
  )
}
