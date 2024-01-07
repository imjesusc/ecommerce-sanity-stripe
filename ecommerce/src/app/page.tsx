import { HeroBanner } from "@/components/organisms";
import { getBannerData } from "@/utils/sanity/client";

export default async function HomePage() {
  const bannerData = await getBannerData()

  return (
  <main>
   <HeroBanner bannerData={bannerData ?? {}} />
      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      {JSON.stringify(bannerData)}
      <div className="products-container">
        {[1,2,3].map((product) => (
          <p key={product}>Product</p>
        ))}
      </div>
   Footer Banner
  </main>
  )
}
