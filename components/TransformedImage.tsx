"use client"

import { dataUrl, debounce, download, getImageSize } from '@/lib/utils'
import { CldImage, getCldImageUrl } from 'next-cloudinary'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { useState } from 'react'

export default function TransformedImage ({ image, type, title, transformationConfig, isTransforming, setIsTransforming, hasDownload = true }: TransformedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    download(getCldImageUrl({
      width: image?.width,
      height: image?.height,
      src: image?.publicId,
      ...transformationConfig
    }), title)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
        <h3 className="text-3xl font-bold text-gray-700">
          Transformed
        </h3>
      </div>

      {image?.publicId && transformationConfig ? (
        <div className="relative">
          <CldImage
            width={getImageSize(type, image, "width")}
            height={getImageSize(type, image, "height")}
            src={image?.publicId}
            alt={image.title}
            sizes={"(max-width: 767px) 100vw, 50vw"}
            placeholder={dataUrl as PlaceholderValue}
            className="h-fit min-h-72 w-full rounded-[10px] border border-dashed bg-gray-100/20 object-cover p-2"
            onLoad={() => {
              setIsLoaded(true)
              setIsTransforming && setIsTransforming(false);
            }}
            onError={() => {
              debounce(() => {
                setIsTransforming && setIsTransforming(false);
              }, 8000)()
            }}
            {...transformationConfig}
          />

          {isTransforming && (
            <div className="transforming-loader">
              <Image
                src="/icons/spinner.svg"
                width={50}
                height={50}
                alt="spinner"
              />
              <p className="text-white/80">Please wait...</p>
            </div>
          )}
          <div>
            {hasDownload && isLoaded && !isTransforming && (
              <button
                className="p-2 mt-2 flex items-center gap-2 px-2 bg-gray-200 rounded-lg"
                onClick={downloadHandler}
              >
                Download Image
                <Image
                  src="/icons/download.svg"
                  alt="Download"
                  width={24}
                  height={24}
                  className="pb-2"
                />
              </button>
            )}
          </div>
        </div>
      ) : (
          <div className="flex-center h-full min-h-72 flex-col gap-5 rounded-md border border-dashed bg-gray-50 shadow-inner">
          Transformed Image
        </div>
      )}
    </div>
  )
}