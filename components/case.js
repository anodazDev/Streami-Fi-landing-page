import React from 'react'
import Image from "next/image"
import Styles from '../styles/components/case.module.scss'

export default function Case() {
    return (
        <>
        {/* background */}
            <div className={`
                ${Styles.overlay} 
                ${' bg-gradient-to-br from-[#C52CD1] to-[#F66D5C] flex align-bottom'} 
                ${'min-h-auto 2xl:min-h-[640px]'}
            `}>
                {/* layout spaceing */}
                <div className={`${Styles.layout_L} ${' pb-4 flex  flex-wrap '}`}>
                    {/* Asset Use Case  */}
                    <div className={`${'  w-full flex  relative'} ${' justify-center lg:justify-end'}`}>
                        <div className={`${' w-fit px-12 py-2 justify-center items-center bg-[#111111] rounded-[9999px] absolute bottom-1/2 translate-y-1/2'}`}>
                            <h1 className={`${'text-white !text-5xl '}`}>Asset Use Case</h1>
                        </div>
                    </div>
                    {/* headphones */}
                    <div className={`
                        ${'items-center justify-center relative z-[2] pr-2 '} 
                        ${' hidden lg:flex w-full lg:w-4/12 xl:w-5/12 '}
                    `}>
                        <div className={`${' flex  h-full absolute bottom-0  '} ${'items-center xl:items-end'} `}>

                            <img
                                className={`${'img-fluid w-full'} ${' mb-0 xl:-mb-[8%]'}`}
                                data-aos="fade-right"
                                data-aos-delay="200"
                                alt='Streami-Fi Streami Fi'
                                src='/media/img/Case/Headphone2.png'
                            />
                        </div>
                    </div>
                    {/* content right */}
                    <div className={`${'  mt-14 flex flex-wrap '} ${'w-full lg:w-8/12 xl:w-7/12  '}`}>
                        <div className={`${'flex flex-wrap   p-4'} ${'w-full sm:w-1/2'}`}>
                            <div className={`
                                ${'w-full border-2 border-white rounded-xl p-4'} 
                                ${'bg-black/[0.25] sm:bg-transparent'}
                            `}
                                data-aos="fade-down"
                                data-aos-delay="200"
                            >
                                <div className={`${'border-b-2 border-white w-3/4 mb-4'}`}>
                                    <h3 className={`${'text-white  break-normal w-[125%]'}`}>
                                        Year of Purchase
                                    </h3>
                                </div>
                                <div className={`${'text-[#260742] font-semibold '}`}>
                                    <h4>
                                        Match the year of purchase of the headphones to the song for extra tokens!
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className={`${' flex  flex-wrap p-4'} ${'w-full sm:w-1/2'}`}>
                            <div className={`
                                ${'w-full border-2 border-white rounded-xl p-4'} 
                                ${'bg-black/[0.25] sm:bg-transparent'}
                            `}
                                data-aos="fade-down"
                                data-aos-delay="400"
                            >
                                <div className={`${'border-b-2 border-white w-3/4 mb-4'}`}>
                                    <h3 className={`${'text-white  break-normal w-[125%]'}`}>
                                        Streami-fi Headphones
                                    </h3>
                                </div>
                                <div className={`${'text-[#260742] font-semibold'}`}>
                                    <h4>
                                        For a limited time, a random headphones
                                        box will be available
                                        for purchase, and users who
                                        own headphones will be rewarded with
                                        more SMF tokens
                                        while playinggames or listening to music.
                                    </h4>

                                </div>
                            </div>
                        </div>
                        <div className={`${'flex flex-wrap p-4'} ${'w-full sm:w-1/2'}`}>
                            <div className={`
                                ${'w-full border-2 border-white rounded-xl p-4'} 
                                ${'bg-black/[0.25] sm:bg-transparent'}
                            `}
                                data-aos="fade-down"
                                data-aos-delay="600"
                            >
                                <div className={`${'border-b-2 border-white w-3/4 mb-4'}`}>
                                    <h3 className={`${'text-white  break-normal w-[125%]'}`}>
                                        Limited Artist Edition
                                    </h3>
                                </div>
                                <div className={`${'text-[#260742] font-semibold'}`}>
                                    <h4>
                                        Artist-themed
                                        or signatureheadphones
                                        that increase the number
                                        of tokens youreceive when you play
                                        or listen to their music.
                                    </h4>

                                </div>
                            </div>
                        </div>
                        <div className={`${'flex flex-wrap  p-4'} ${'w-full sm:w-1/2'}`}>
                            <div className={`
                                ${'w-full border-2 border-white rounded-xl p-4'} 
                                ${'bg-black/[0.25] sm:bg-transparent'}
                            `}
                                data-aos="fade-down"
                                data-aos-delay="800"
                            >
                                <div className={`${'border-b-2 border-white w-3/4 mb-4'}`}>
                                    <h3 className={`${'text-white  break-normal w-[125%]'}`}>
                                        Gift
                                    </h3>
                                </div>
                                <div className={`${'text-[#260742] font-semibold'}`}>
                                    <h4>
                                        Users can purchase Gifts
                                        to sendto someone they like while they
                                        perform or play the game.The higher
                                        the value of
                                        the gift, the more tokensthe recipient will receive.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
