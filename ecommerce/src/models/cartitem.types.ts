interface Image {
  url: string
}
export interface CartItem {
  id: string
  name: string
  price: number
  image: Image
  quantity: number
}
