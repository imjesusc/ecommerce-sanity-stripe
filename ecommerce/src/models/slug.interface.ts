export interface SlugPageProps {
  params: {
    slug: string
  }
}

interface Image {
  url: string
}

export interface ProductViewerProps {
  imagesData: Image[]
  name: string
}
