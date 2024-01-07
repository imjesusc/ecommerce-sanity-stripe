import { HeroBanner, ProductsGallery } from "@/components/organisms";
import { getBannerData, getProductsData } from "@/utils/sanity/client";

export default async function HomePage() {
  const bannerData = await getBannerData()
  const productsData = await getProductsData()
  return (
  <main>
   <HeroBanner bannerData={bannerData ?? {}} />
      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
     <ProductsGallery productsData={productsData ?? []} />
   Footer Banner
  </main>
  )
}
