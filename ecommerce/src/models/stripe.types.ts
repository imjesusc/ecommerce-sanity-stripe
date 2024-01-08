export interface ProductToSendStripe {
  id: string
  quantity: number
  price: number
  name: string
  image: {
    url: string
  }
}
