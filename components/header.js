import React from 'react'
import Styles from '../styles/components/header.module.scss'
// import Headerbackground from '../public/media/img/Headerbackground.svg'
import Image from 'next/image'

export default function head() {
  return (
    <>
      {/* background && overlay-->scss */}
      <div className={`${Styles.bg_gradient} ${' w-full min-h-screen relative'}`}>
        {/* flex container*/}
        <div className={` ${Styles.layout_L} ${'container mx-auto flex'}`}>
          {/* left */}
          <div className={`${'w-1/2'}` } data-aos='fade-up'>
            {/* title */}
            <div className={`${'w-10/12 pb-4 border-b-white border-b-2'}`}>
              <h1 className={` ${'text-white !text-6xl '}`}>
                Streami-Fi
              </h1>
            </div>
            {/* subtitle */}
            <div className={`${'w-8/12 pb-4'}`}>
              <p className={` ${'text-white text-3xl leading-6 py-4'}`}>
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
      </div>
    </>
  )
}
