import { type FooterBannerProps } from '@/models'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonClass } from '../atoms/Button'

export const FooterBanner = ({ footerBannerData }: FooterBannerProps): JSX.Element => {
  const { discount, largeText1, largeText2, saleTime, smallText, midText, desc, buttonText, image, product } =
    footerBannerData
  return (
    <div className='container m-auto py-20 px-10 bg-[#f02d34] text-white relative rounded-lg h-auto tablet:h-[400px] leading-normal w-full mt-20'>
      <div className='flex flex-col gap-5 tablet:flex-row justify-between'>
        <div className='mb-4'>
          <p>{discount}</p>
          <h3 className='font-extrabold text-7xl'>{largeText1}</h3>
          <h3 className='font-extrabold text-7xl'>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>

        <div className='max-w-[500px] flex flex-col gap-3 items-start'>
          <p className='text-lg'>{smallText}</p>
          <h3 className='font-extrabold text-6xl'>{midText}</h3>
          <p className='text-lg text-pretty'>{desc}</p>
          <Link href={`/product/${product.toLowerCase()}`} className={classNames(buttonClass.secondary)}>
            {buttonText}
          </Link>
        </div>

        <figure className='absolute -top-0 -right-10 w-[250px] h-[250px] tablet:w-[400px] tablet:h-[400px] aspect-square  tablet:-top-1/4 tablet:left-1/4'>
          <Image src={image} alt={image} className='w-full h-full object-cover' width={500} height={500} />
        </figure>
      </div>
    </div>
  )
}
