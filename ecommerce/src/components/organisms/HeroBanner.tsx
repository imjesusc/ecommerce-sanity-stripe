import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HeroBannerProps } from '@/models'


export const HeroBanner = ({bannerData}: HeroBannerProps) => {
const {smallText, midText, largeText1, product, image, desc, buttonText} = bannerData

  return (
    <div className='hero-banner-container container m-auto'>
    <div>
      <p className='beats-solo'>{smallText}</p>
      <h3>{midText}</h3>
      <h1>{largeText1}</h1>
      <Image src={image} alt='headphones' className='hero-banner-image'
     width={500} height={500}/>
      <div>
        <Link href={`product/${product}`}>
          <button type='button'>{buttonText}</button>
        </Link>
        <div className='desc'>
          <h5>Description</h5>
          <p>{desc}</p>
        </div>
      </div>

    </div>
  </div>

  )
}
