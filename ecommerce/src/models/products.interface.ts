export interface Image {
  url: string;
}

export interface Slug {
  current: string;
}

export interface Product {
  _id: string;
  images: Image;
  name: string;
  slug: Slug;
  price: number;
  details: string;
}

export interface ProductCartProps {
  productCardData: Product;
}

export interface ProductsGalleryProps {
  productsData: Product[];
}

export interface ProductDetailsProps {
  name: string
  price: number
  details: string
}