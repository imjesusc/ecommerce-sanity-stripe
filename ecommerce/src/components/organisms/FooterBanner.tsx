import { FooterBannerProps } from '@/models'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const FooterBanner = ({footerBannerData}: FooterBannerProps) => {
  const {discount, largeText1, largeText2, saleTime, smallText, midText, desc, buttonText, image,name, product} = footerBannerData
  return (
    <div className='container m-auto py-20 px-10 bg-[#f02d34] text-white relative rounded-lg h-auto tablet:h-[400px] leading-normal w-full mt-20'>
      <div className='flex flex-col gap-5 tablet:flex-row justify-between'>
        <div className='left'>
        <p className='m-5'>{discount}</p>
        <h3 className='font-extrabold text-7xl ml-6'>{largeText1}</h3>
        <h3 className='font-extrabold text-7xl ml-6'>{largeText2}</h3>
        <p className='m-5'>{saleTime}</p>
        </div>

        <div className='max-w-[500px]'>
          <p className='text-lg'>{smallText}</p>
          <h3 className='font-extrabold text-6xl'>{midText}</h3>
          <p className='text-lg text-pretty'>{desc}</p>
          <Link href={`/product/${product}`}>
            <button className='rounded-lg py-2.5 px-4 bg-white text-red border-0 mt-10 text-lg font-medium cursor-pointer text-red-500' type='button'>{buttonText}</button>
          </Link>
        </div>

        <figure className='absolute -top-20  tablet:-top-1/4 left-1/4'>
        <Image src={image} alt={image} className='w-full h-full object-cover' width={500} height={500}/>
        </figure>
        </div>
    </div>
  )
}
