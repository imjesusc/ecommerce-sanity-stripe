export interface SlugPageProps {
  params: {
    slug: string
  }
}

export interface ProductViewerProps {
  imagesData: Array<{ url: string }>;
  name: string;
}