'use client'
import { Image } from '@/models'
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react'
import toast from 'react-hot-toast'

type User = {
  name: string
  active: boolean
  cart: any[]
  purchases: any[]
}

type Item = {
  id: string
  name: string
  price: number
  image: Image
  quantity: number
}

const Context = createContext<any>(null)

export const CartContext = ({ children }: { children: ReactNode }) => {
  // Implementar una funcionalidad de carrito:
  // 1. Agregar artículos al carrito.
  // 3. Comprar artículo: del carrito a las compras.
  // 4. Vaciar carrito.

  // emptyCart: Vaciar carrito.
  // buyItem: Comprar artículo.
  //[x] addItemToCart: Agregar artículo al carrito.
  const [user, setUser] = useState<User>({
    name: 'imjesus',
    active: true,
    cart: [],
    purchases: [],
  })

  const [quantity, setQuantity] = useState(1)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [showCart, setShowCart] = useState(false)

  const incQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decQuantity = () => {
    setQuantity((prev: number) => {
      if (prev - 1 < 1) return 1
      return prev - 1
    })
  }

  const getTotalQuantity = (cart: Item[]) => {
    let total = 0
    cart.forEach((item) => {
      total += item.quantity
    })

    return total
  }

  const addItemToCart = (newItem: Item) => {
    const updatedCart = [...user.cart]
    // Buscar si el item ya existe en el carrito
    const itemIndex = updatedCart.findIndex((item) => item.id === newItem.id)
    const checkItemInCart = updatedCart.some((item) => item.id === newItem.id)

    if (checkItemInCart) {
      updatedCart[itemIndex].quantity = newItem.quantity
    } else {
      updatedCart.push({ ...newItem })
    }

    setTotalQuantity(getTotalQuantity(updatedCart))
    // Retornar el carrito actualizado
    toast.success(`${newItem.quantity} ${newItem.name} added to cart.`)
    setUser({ ...user, cart: updatedCart })
    setShowCart(true)
  }

  return (
    <Context.Provider
      value={{
        addItemToCart,
        incQuantity,
        decQuantity,
        quantity,
        setQuantity,
        totalQuantity,
        user,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useCartContext = () => useContext(Context)
