import React from 'react'
import Image from 'next/image'
import PlatfromBoxImage from '../public/media/img/Platfrom/PlatfromBox.svg'
import GameplayBoxImage from '../public/media/img/Gameplay/GameplayBox.svg'
import GameplayArrowImage from '../public/media/img/Gameplay/GameplayArrow.svg'
import GameplayGoodImage from '../public/media/img/Gameplay/GameplayGood.svg'
import GameplayPerfectImage from '../public/media/img/Gameplay/GameplayPerfect.svg'
import Styles from '../styles/components/PlatfromGameplay.module.scss'

export default function index() {
  return (
    <>
      <div className={`${Styles.bottom_triangle_gradient} ${'flex bg-gradient-to-b from-primary-600 to-[#0B0B0B]'}`}>
        <div className={`${'mx-auto w-full'}`}>
          {/* Platfrom */}
          <div className={`${Styles.layout_L}  ${'!mb-32 flex flex-col'}`}>
            {/* Platfrom Main Image */}
            <div className={` ${' w-4/5 mx-auto relative'}`} data-aos="fade-in">
              <Image
                src={PlatfromBoxImage}
                alt="Picture of the author"
                layout='intrinsic'
              />
            </div>
            {/* Platfrom btn */}
            <div className={` ${' mx-auto'}`} data-aos="zoom-out" data-aos-delay="400">
              <button className={`  
              ${'btn py-2 px-4 rounded-lg text-white border-white border-2 transition-all duration-300 ease-in-out '} 
              ${'hover:text-primary-600  hover:bg-white hover:scale-110	'}
              `}>
                PLATFROM
              </button>
            </div>
          </div>
          {/* Gameplay */}
          <div className={`${'relative flex flex-col'}`}>
            {/* Gameplay Main Image*/}
            <div className={`${Styles.layout_M} ${'flex'}`}>
              <div className={` ${' mx-auto'}`}>
                <div className='relative'>
                  <Image
                    src={GameplayBoxImage}
                    alt="Picture of the author"
                    layout='intrinsic'
                  />
                  {/* image left */}
                  <div className={`${'absolute top-[15%] -left-8'}`} data-aos="fade-left" data-aos-delay="600">
                    <Image
                      src={GameplayArrowImage}
                      alt="Picture of the author"
                      width="124"
                      height="124"
                      className={`${Styles.rotate_270} ${'mx-auto'}`}
                    />
                  </div>
                  {/* perfect */}
                  <div className={`${'absolute top-1/2 -left-20'}`} data-aos="zoom-out" data-aos-delay="600">
                    <Image
                      src={GameplayPerfectImage}
                      alt="Picture of the author"
                      layout='intrinsic'
                    />
                  </div>
                  {/* image bottom */}
                  <div className={`${'absolute bottom-[5%] left-[15%]'}`} data-aos="fade-down" data-aos-delay="300">
                    <Image
                      src={GameplayArrowImage}
                      alt="Picture of the author"
                      width="80"
                      height="80"
                      className={`${Styles.rotate_180} ${'mx-auto'}`}
                    />
                  </div>
                  {/* image right */}
                  <div className={`${'absolute top-[8%] -right-4 w-[32px] h-[32px]'}`} data-aos="fade-up" data-aos-delay="400">
                    <Image
                      src={GameplayArrowImage}
                      alt="Picture of the author"
                      layout='intrinsic'
                      className={`${'mx-auto'}`}
                    />
                  </div>
                  {/* good */}
                  <div className={`${'absolute top-1/4 -right-8 '}`} data-aos="zoom-out" data-aos-delay="400">
                    <Image
                      src={GameplayGoodImage}
                      alt="Picture of the author"
                      layout='intrinsic'
                      className={`${'mx-auto'}`}
                    />
                  </div>

                </div>

              </div>

            </div>
            {/* Gameplay Compenent Box*/}
            <div className={`${'absolute w-full h-full top-0 -z-10'}`}>
              {/* top left */}
              <div className={`${'absolute '}`} style={{ left: -60 }} data-aos="fade-up" data-aos-delay="200">
                <Image
                  src={GameplayArrowImage}
                  alt="Picture of the author"
                  width="150"
                  height="150"
                  className={`${'mx-auto'}`}
                />
              </div>
              {/* mid right */}
              <div className={`${'absolute'}`} style={{ right: -40, top: "50%" }} data-aos="fade-down" data-aos-delay="500">
                <Image
                  src={GameplayArrowImage}
                  alt="Picture of the author"
                  width="110"
                  height="110"
                  className={`${Styles.rotate_180} ${'mx-auto'}`}
                />
              </div>
            </div>
          </div>
          {/* Gameplay Content*/}
          <div className={`${'relative'}`}>
            <div className={`${Styles.layout_L} ${' !mb-40'}`}>
              <div className={`
              ${' flex min-h-[200px] w-full relative '}
              ${'flex-col lg:flex-row'}
              `}>
                {/* Gameplay Title*/}
                <div className={`${'w-full flex justify-center items-center'} ${'lg:w-5/12 mb-8'}`} data-aos="fade-left">
                  <h1 className={`${'m-auto text-white font-bold !text-6xl'}`}>Gameplay</h1>
                </div>
                {/* Gameplay Description*/}
                <div className={` ${'w-10/12 flex items-center border-white border-4 rounded-3xl mx-auto'} ${'lg:w-7/12'}`} data-aos="fade-right">
                  <div className={` ${'w-12 h-full border-r-4 border-white border-dashed'}`}></div>
                  <div className={`${'w-9/12 p-6 flex mx-auto '}`}>
                    <p className=' text-white'>
                      <span className={` text-red-500`}>Streami-Fi </span>
                      is a music listening platform that lets you earn
                      by listening to music from your favorite artists. or new artists
                      and new songs then  We are also d eveloping games for you to
                      have more fun. by bringing the songs in  Our platform ladies
                      make in-game notes for  you to enjoy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

