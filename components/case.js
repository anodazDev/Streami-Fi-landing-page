import React from 'react'
import Image from "next/image"
import Styles from '../styles/components/case.module.scss'

export default function Case() {
    return (
        <>
            <div className={`
                ${Styles.overlay} 
                ${' bg-gradient-to-br from-primary-300 to-supplement-500 flex align-bottom'} 
                ${'min-h-auto 2xl:min-h-[640px]'}
            `}>
                <div className={`${Styles.layout_L} ${' flex  flex-wrap '}`}>
                    <div className={`${' mx-[4%] w-full flex justify-end relative'}`}>
                        <div className={`${' w-fit px-5 py-2 justify-center items-center bg-black rounded-[9999px] absolute bottom-1/2 translate-y-1/2'}`}>
                            <h2 className={`${'text-white'}`}>ASSETUSE CASE</h2>
                        </div>
                    </div>
                    <div className={`
                        ${'items-center justify-center relative z-[2] '} 
                        ${' hidden lg:flex w-full lg:w-4/12 xl:5/12 '}
                    `}>
                        <div className={`${'img-fluid w-full object-bottom absolute bottom-0 overflow-y-hidden '} `}>
                            
                            <img
                            className={`${'-mb-[18%]'}`}
                                data-aos="fade-right"
                                data-aos-delay="200"
                                alt='Streami-Fi Streami Fi'
                                src='/media/img/Case/Headphone2.png'
                            />
                        </div>
                    </div>
                    <div className={`${'  mt-14 flex flex-wrap p-2'} ${'w-full lg:w-8/12 xl:w-7/12  '}`}>
                        <div className={`${'flex flex-wrap   p-2'} ${'w-full sm:w-1/2'}`}>
                            <div className={`
                                ${'w-full border-2 border-white rounded-xl p-4'} 
                                ${'bg-black/[0.25] sm:bg-transparent'}
                            `}
                                data-aos="fade-down"
                                data-aos-delay="200"
                            >
                                <div className={`${'border-b-2 border-white w-3/4 mb-4'}`}>
                                    <h4 className={`${'text-white  break-normal w-[125%]'}`}>
                                        Year of Purchase
                                    </h4>
                                </div>
                                <div className={`${'text-white'}`}>
                                    Match the year of purchase of the headphones to the song for extra tokens!
                                </div>
                            </div>
                        </div>
                        <div className={`${' flex  flex-wrap p-2'} ${'w-full sm:w-1/2'}`}>
                            <div className={`
                                ${'w-full border-2 border-white rounded-xl p-4'} 
                                ${'bg-black/[0.25] sm:bg-transparent'}
                            `}
                                data-aos="fade-down"
                                data-aos-delay="400"
                            >
                                <div className={`${'border-b-2 border-white w-3/4 mb-4'}`}>
                                    <h4 className={`${'text-white  break-normal w-[125%]'}`}>
                                        Streami-fi Headphones
                                    </h4>
                                </div>
                                <div className={`${'text-white'}`}>
                                    For a limited time, a random headphones
                                    box will be available
                                    for purchase, and users who
                                    own headphones will be rewarded with
                                    more SMF tokens
                                    while playinggames or listening to music.

                                </div>
                            </div>
                        </div>
                        <div className={`${'flex flex-wrap p-2'} ${'w-full sm:w-1/2'}`}>
                            <div className={`
                                ${'w-full border-2 border-white rounded-xl p-4'} 
                                ${'bg-black/[0.25] sm:bg-transparent'}
                            `}
                                data-aos="fade-down"
                                data-aos-delay="600"
                            >
                                <div className={`${'border-b-2 border-white w-3/4 mb-4'}`}>
                                    <h4 className={`${'text-white  break-normal w-[125%]'}`}>
                                        Limited Artist Edition
                                    </h4>
                                </div>
                                <div className={`${'text-white'}`}>
                                    Artist-themed
                                    or signatureheadphones
                                    that increase the number
                                    of tokens youreceive when you play
                                    or listen to their music.
                                </div>
                            </div>
                        </div>
                        <div className={`${'flex flex-wrap  p-2'} ${'w-full sm:w-1/2'}`}>
                            <div className={`
                                ${'w-full border-2 border-white rounded-xl p-4'} 
                                ${'bg-black/[0.25] sm:bg-transparent'}
                            `}
                                data-aos="fade-down"
                                data-aos-delay="800"
                            >
                                <div className={`${'border-b-2 border-white w-3/4 mb-4'}`}>
                                    <h4 className={`${'text-white  break-normal w-[125%]'}`}>
                                        Gift
                                    </h4>
                                </div>
                                <div className={`${'text-white'}`}>
                                    Users can purchase Gifts
                                    to sendto someone they like while they
                                    perform or play the game.The higher
                                    the value of
                                    the gift, the more tokensthe recipient will receive.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
