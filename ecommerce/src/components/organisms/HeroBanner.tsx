import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HeroBannerProps } from '@/models'


export const HeroBanner = ({bannerData}: HeroBannerProps) => {
const {smallText, midText, largeText1, product, image, desc, buttonText} = bannerData

  return (
    <div className='py-20 px-10 bg-[#d5d5d5] rounded-lg relative h-[500px] leading-normal w-full container m-auto'>
    <div className='grid gap-1'>
      <p className='text-base tablet:text-2xl '>{smallText}</p>
      <h3 className='text-3xl tablet:text-6xl mt-1 font-bold'>{midText}</h3>
      <h1 className='text-white text-8xl uppercase font-bold tablet:text-[150px]'>{largeText1}</h1>
      <figure className='absolute -top-12 -right-10 w-[300px] h-[300px] tablet:right-[20%] tablet:w-[450px] tablet:h-[450px] aspect-square'>
      <Image src={image} alt={smallText} className='w-full h-full object-cover'
     width={500} height={500}/>
      </figure>
      <div className='mt-5'>
        <Link href={`product/${product}`} className='rounded-lg py-2.5 px-4 bg-[#f02d34] text-white border-0 mt-10 text-lg font-medium cursor-pointer z-10'>
          {buttonText}
        </Link>
        
        <div className='absolute right-10 bottom-5 w-[300px] leading-4 flex flex-col text-gray-500 gap-2 text-end'>
          <h5 className='text-gray-600'>Description</h5>
          <p>{desc}</p>
        </div>
      </div>

    </div>
  </div>

  )
}
