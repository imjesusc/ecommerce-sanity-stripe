interface Image {
  url: string
}

export interface ProductDetailsProps {
  name: string
  price: number
  details: string
  _id: string
  images: Image[]
}
