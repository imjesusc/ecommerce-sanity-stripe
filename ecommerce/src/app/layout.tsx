import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { NavBar, Footer } from '@/components/organisms'
import { CartContext } from '@/contexts/CartContext'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce with sanity and stripe'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CartContext>
          <Toaster />
          <NavBar />
          {children}
          <Footer />
        </CartContext>
      </body>
    </html>
  )
}
