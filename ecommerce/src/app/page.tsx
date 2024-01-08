import React from 'react'
import { FooterBanner, HeroBanner, ProductsGallery } from '@/components/organisms'
import { getBannerData, getProductsData } from '@/utils/sanity/client'

export default async function HomePage (): Promise<JSX.Element> {
  const bannerData = await getBannerData()
  const productsData = await getProductsData()
  return (
    <main className="p-4">
      <HeroBanner bannerData={bannerData ?? {}} />
      <div className="text-center my-10 gap-4">
        <h2 className="text-3xl text-gray-600">Beset Selling Products</h2>
        <p className="text-gray-400">Speakers of many variations</p>
      </div>
      <ProductsGallery productsData={productsData ?? []} />
      <FooterBanner footerBannerData={bannerData ?? {}} />
    </main>
  )
}
