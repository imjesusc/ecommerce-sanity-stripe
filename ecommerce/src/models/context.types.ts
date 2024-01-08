import { type CartItem } from '.'

export interface User {
  name: string
  active: boolean
  cart: CartItem[]
  purchases: any[]
}
