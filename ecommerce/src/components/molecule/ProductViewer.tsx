'use client'
import { type ProductViewerProps } from '@/models'
import Image from 'next/image'
import React, { useState } from 'react'

export const ProductViewer = ({ imagesData, name }: ProductViewerProps): JSX.Element => {
  const [index, setIndex] = useState(0)
  const [prevImgUrl, setPrevImgUrl] = useState('')

  const handleSetIndex = (i: number): void => {
    if (prevImgUrl === imagesData[i].url) {
      // if previous image is the same, don't change
      return
    }

    // but if previous image is not the same, change
    setIndex(i)
    setPrevImgUrl(imagesData[i].url)
  }

  return (
    <div>
      <figure className='h-[200px] overflow-hidden rounded-lg tablet:w-[400px] tablet:h-[400px] cursor-pointer bg-gray-100 aspect-square grid place-content-center duration-500 transition-colors hover:bg-[#f02d34]'>
        <Image src={imagesData[index].url} alt={name} width={500} height={500} className='w-full h-full object-cover' />
      </figure>
      <div className='flex gap-2.5 mt-5'>
        {imagesData?.map((image: { url: string }, i: number) => (
          <figure key={i}>
            <Image
              className={
                i === index
                  ? 'rounded-lg  w-[70px] cursor-pointer bg-[#f02d34]'
                  : 'rounded-lg  bg-gray-100 w-[70px] cursor-pointer'
              }
              src={image.url}
              alt={name}
              onMouseEnter={() => { handleSetIndex(i) }}
              width={50}
              height={50}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}
