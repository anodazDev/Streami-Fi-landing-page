import React from 'react'
import Styles from '/styles/components/header.module.scss'
// import Headerbackground from '../public/media/img/Headerbackground.svg'

import Image from 'next/image'
import ListenToEarn from '/public/media/img/Header/ListenToEarn.png'
import ModelCharator from '../public/media/img/Header/Model.png'

export default function head() {
  return (
    <>
      {/* background && overlay-->scss */}
      <div className={`${Styles.bg_gradient} ${'flex w-full  relative'} ${'pb-12 xl:pb-40'}`}>
        {/* flex container*/}
        <div className={` ${Styles.layout_M} ${'container mx-auto flex  '} ${'!mt-40 xl:-scroll-mt-80 flex-col-reverse lg:flex-row'}`}>
          {/* left */}
          <div className={`${' flex  flex-col justify-center items-center '} ${'w-full lg:w-5/12 mb-12 lg:mb-0'}`} >
            <div data-aos='fade-up'>
              {/* title */}
              <div className={`${'w-10/12 pb-4 border-b-white border-b-2'}`}>
                <h1 className={` ${'text-white  '} ${'!text-4xl lg:!text-6xl'}`}>
                  Streami-Fi
                </h1>
              </div>
              {/* subtitle */}
              <div className={`${' pb-4'} ${'w-full md:w-10/12 lg:w-full xl:w-10/12'}`}>
                <p className={` ${'text-white  leading-6 py-4'} ${' !text-lg xl:!text-xl'}`}>
                  Make music enjoy to earn.
                  More than listen music, We have game and
                  Metaverse Concert Project for user to spend
                  and earn in the same time in music world.
                </p>
              </div>
              {/* button */}
              <div className={`${'w-8/12 pb-4'}`}>
                <button className={` 
                ${'btn py-2 px-4 rounded-lg text-white border-white border-2 transition-all duration-300 ease-in-out '}  
                ${'hover:text-primary-600  hover:bg-white hover:scale-110	'}
              `}>
                  WHITEPAPER
                </button>
              </div>
            </div>

          </div>
          {/* right */}
          <div className={`${' flex justify-center items-center '} ${'w-full lg:w-7/12'}`} >
            {/* image */}
            <div className={`${'relative'}`} data-aos='fade-down'>
              <Image
                src={ListenToEarn}
                alt="Listen to earn"
                layout='intrinsic'
              />
              {/* absolute image */}
              <div className={`${'img-fluid  absolute -right-2  '} ${'w-[35%] 2xl:w-[30%]  -top-[35%] xl:-top-[20%] 2xl:-top-[10%]'}`} >

                <Image
                  data-aos='fade-left'
                  layout="responsive"
                  width={240}
                  height={530}
                  data-aos-delay='200'
                  src='/media/img/Header/Model.png'
                  alt="Model"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
