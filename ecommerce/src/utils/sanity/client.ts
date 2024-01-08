// ./src/utils/sanity/client.ts
import { createClient, groq } from 'next-sanity'

const projectId = '9uya2qmi'
const dataset = 'production'
const apiVersion = '2024-01-06'
const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN

const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true,
  token,
  perspective: 'published'
})

export async function getBannerData (): Promise<any> {
  return await client.fetch(
    groq`*[_type == "banner"][0] {
      buttonText,
      product,
      desc,
      smallText,
      midText,
      largeText1,
      largeText2,
      saleTime,
      discount,
      "image": image.asset->url,
    }`
  )
}

export async function getProductsData (): Promise<any> {
  return await client.fetch(
    groq`*[_type == "product"] {
      _id,
      "images": images[].asset->{url},
      name,
      slug, 
      price,
      details,
      }`
  )
}

export async function getProductBySlug (slug: string): Promise<any> {
  return await client.fetch(
    groq`*[_type == "product" && slug.current == "${slug}"][0] {
      _id,
      "images": images[].asset->{url},
      name,
      slug, 
      price,
      details,
      }`
  )
}
