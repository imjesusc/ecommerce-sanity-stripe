'use client'
import { type CartItem } from '@/models/cartitem.types'
import { type User } from '@/models/context.types'
import React, { createContext, useContext, type ReactNode, useState } from 'react'
import toast from 'react-hot-toast'

interface ContextTypes {
  addItemToCart: (newItem: CartItem) => void
  incQuantity: () => void
  decQuantity: () => void
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  totalQuantity: number
  incItemQuantity: (newItem: CartItem) => void
  decItemQuantity: (newItem: CartItem) => void
  removeProductItemToCart: (id: string) => void
  user: User
  showCart: boolean
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>
  totalPrice: number
  setUser: React.Dispatch<React.SetStateAction<User>>
}

const Context = createContext<ContextTypes | null>(null)

export const CartContext = ({ children }: { children: ReactNode }): JSX.Element => {
  const [user, setUser] = useState<User>({
    name: 'imjesus',
    active: true,
    cart: [],
    purchases: []
  })

  const [quantity, setQuantity] = useState(1)
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [showCart, setShowCart] = useState(false)

  const incQuantity = (): void => {
    setQuantity((prev) => prev + 1)
  }

  const decQuantity = (): void => {
    setQuantity((prev: number) => {
      if (prev - 1 < 1) return 1
      return prev - 1
    })
  }

  const getTotalQuantity = (cart: CartItem[]): number => {
    let total = 0
    cart.forEach((item) => {
      total += item.quantity
    })

    return total
  }

  const getTotalPrice = (cart: CartItem[]): number => {
    let total = 0
    cart.forEach((item) => {
      total += item.price * item.quantity
    })

    return total
  }

  const addItemToCart = (newItem: CartItem): void => {
    const updatedCart: CartItem[] = [...user.cart]
    // Buscar si el item ya existe en el carrito
    const itemIndex = updatedCart.findIndex((item) => item.id === newItem.id)
    const checkItemInCart = updatedCart.some((item) => item.id === newItem.id)

    if (checkItemInCart) {
      updatedCart[itemIndex].quantity = newItem.quantity
    } else {
      updatedCart.push({ ...newItem })
    }

    setTotalPrice(getTotalPrice(updatedCart))
    setTotalQuantity(getTotalQuantity(updatedCart))
    // Retornar el carrito actualizado
    toast.success(`${newItem.quantity} ${newItem.name} added to cart.`)
    setUser({ ...user, cart: updatedCart })
    setShowCart(true)
  }

  // const purchase = () => {}

  const incItemQuantity = (newItem: CartItem): void => {
    const updatedCart: CartItem[] = [...user.cart]
    // Buscar si el item ya existe en el carrito
    const itemIndex = updatedCart.findIndex((item) => item.id === newItem.id)
    const checkItemInCart = updatedCart.some((item) => item.id === newItem.id)

    // Si el item existe en el carrito, incrementar la cantidad en +1 sino agregarlo y poner la cantidad en 1
    if (checkItemInCart) {
      updatedCart[itemIndex].quantity += 1
      setTotalPrice(getTotalPrice(updatedCart))
      setTotalQuantity(getTotalQuantity(updatedCart))
    }
    // Retornar el carrito actualizado
    setUser({ ...user, cart: updatedCart })
  }

  const decItemQuantity = (newItem: CartItem): void => {
    const updatedCart: CartItem[] = [...user.cart]

    const itemIndex = updatedCart.findIndex((item) => item.id === newItem.id)
    const checkItemInCart = updatedCart.some((item) => item.id === newItem.id)

    if (!checkItemInCart) return

    // Si la cantidad es menor a 1 entonces asignar la cantidad en 1
    if (updatedCart[itemIndex].quantity - 1 < 1) {
      updatedCart[itemIndex].quantity = 1
      setUser({ ...user, cart: updatedCart }); return
    }

    updatedCart[itemIndex].quantity -= 1

    setTotalQuantity(getTotalQuantity(updatedCart))
    setTotalPrice(getTotalPrice(updatedCart))
    setUser({ ...user, cart: updatedCart })
  }

  const removeProductItemToCart = (id: string): void => {
    const updatedCart: CartItem[] = [...user.cart]
    const checkItemInCart = updatedCart.some((item) => item.id === id)

    if (!checkItemInCart) return

    const updateItems = updatedCart.filter((item) => item.id !== id)
    setTotalQuantity(getTotalQuantity(updateItems))
    setUser({ ...user, cart: updateItems })
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
        incItemQuantity,
        decItemQuantity,
        removeProductItemToCart,
        user,
        showCart,
        setShowCart,
        totalPrice,
        setUser
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useCartContext = (): ContextTypes => useContext(Context as React.Context<ContextTypes>)
