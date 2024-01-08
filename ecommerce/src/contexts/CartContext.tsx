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
  const [totalPrice, setTotalPrice] = useState(0)
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

  const getTotalPrice = (cart: Item[]) => {
    let total = 0
    cart.forEach((item) => {
      total += item.price * item.quantity
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

    setTotalPrice(getTotalPrice(updatedCart))
    setTotalQuantity(getTotalQuantity(updatedCart))
    // Retornar el carrito actualizado
    toast.success(`${newItem.quantity} ${newItem.name} added to cart.`)
    setUser({ ...user, cart: updatedCart })
    setShowCart(true)
  }

  // const purchase = () => {}

  const incItemQuantity = (newItem: Item) => {
    const updatedCart = [...user.cart]
    // Buscar si el item ya existe en el carrito
    const itemIndex = updatedCart.findIndex((item) => item.id === newItem.id)
    const checkItemInCart = updatedCart.some((item) => item.id === newItem.id)

    // Si el item existe en el carrito, incrementar la cantidad en +1 sino agregarlo y poner la cantidad en 1
    if (checkItemInCart) {
      updatedCart[itemIndex].quantity += 1
      setTotalPrice(getTotalPrice(updatedCart))
    }
    // Retornar el carrito actualizado
    setUser({ ...user, cart: updatedCart })
  }

  const decItemQuantity = (newItem: Item) => {
    const updatedCart = [...user.cart]

    const itemIndex = updatedCart.findIndex((item) => item.id === newItem.id)
    const checkItemInCart = updatedCart.some((item) => item.id === newItem.id)

    if (!checkItemInCart) return

    // Si la cantidad es menor a 1 entonces asignar la cantidad en 1
    if (updatedCart[itemIndex].quantity - 1 < 1) {
      updatedCart[itemIndex].quantity = 1
      return setUser({ ...user, cart: updatedCart })
    }

    updatedCart[itemIndex].quantity -= 1

    setTotalPrice(getTotalPrice(updatedCart))
    setUser({ ...user, cart: updatedCart })
  }

  const removeProductItemToCart = (id: string) => {
    const updatedCart = [...user.cart]
    const checkItemInCart = updatedCart.some((item) => item.id === id)

    if (!checkItemInCart) return

    const updateItems = updatedCart.filter((item) => item.id !== id)
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
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useCartContext = () => useContext(Context)
