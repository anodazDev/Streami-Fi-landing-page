import React from 'react'
import Image from 'next/image'
import TokenomicChartImage from '/public/media/img/Tokenomic/TokenomicChart.png'
import TokenomicLogoComponent from '/public/media/img/Tokenomic/Logo_round.png'
import TokenomicBlurLogoComponent from '/public/media/img/Tokenomic/Logo_round_blur.png'
import RoadmapImage from '/public/media/img/Roadmap/Roadmap.svg'
import GradientImage from '/public/media/img/Tokenomic/Gradient.png'
import Styles from '../styles/components/TokenomicRoadmap.module.scss'

export default function index() {
    return (
        <>
            <div className={`${Styles.bg_gradient_dark} ${Styles.bottom_triangle_gradient} ${'flex pt-32'}`}>
                <div className={`${'mx-auto w-full'}`}>
                    {/* Tokenomic */}
                    <div className={`${'relative flex flex-col '}`}>
                        {/* Tokenomic Main Box*/}
                        <div className={`${Styles.layout_L} ${''} `}>
                            {/* Tokenomic title */}
                            <div className={`${'container mx-auto mb-8 text-center'}`} data-aos="zoom-out">
                                <label className={`${'font-semibold text-white '} ${'text-3xl md:text-4xl '}`}>TOKENOMIC</label>
                            </div>
                            {/* Tokenomic Image */}
                            <div className={` ${' mx-auto'}`}>
                                <div className={`${Styles.image_x_auto} ${'container flex mx-auto mb-8'}`} data-aos="fade-in">
                                    <Image
                                        src={TokenomicChartImage}
                                        alt="Picture of the author"
                                        width="700"
                                        height="350"
                                        className="mx-auto"
                                    />
                                </div>
                            </div>
                            {/* Tokenomic decsription */}
                            <div className={`${'container mx-auto text-center'}`} data-aos="fade-in">
                                <label className={`${'font-semibold text-white'} ${' text-xl lg:text-3xl'}`}>Total amount 1000000</label>
                            </div>
                            {/* top left */}
                            <div className={`${'absolute right-[32%] top-[11%]'} ${'hidden xl:block'}`} data-aos="fade-up" data-aos-delay="200">
                                <Image
                                    src={TokenomicBlurLogoComponent}
                                    alt="Picture of the author"
                                    width="40"
                                    height="40"
                                />
                            </div>
                            {/* bottom right */}
                            <div className={`${'absolute left-[33%] top-[82%]'}  ${'hidden xl:block'}`} data-aos="fade-down" data-aos-delay="200">
                                <Image
                                    src={TokenomicBlurLogoComponent}
                                    alt="Picture of the author"
                                    width="40"
                                    height="40"
                                />
                            </div>
                        </div>
                        {/* Tokenomic Compenent Box*/}
                        <div className={`${'absolute w-full h-full top-0 -z-10'}`}>
                            {/* top left */}
                            <div className={`${'absolute left-[-65px] top-[20%]'} ${'!opacity-25 xl:!opacity-100'}`} data-aos="fade-up" data-aos-delay="200">
                                <Image
                                    src={TokenomicLogoComponent}
                                    alt="Picture of the author"
                                    width="130"
                                    height="130"
                                />
                            </div>
                            {/* top right */}
                            <div className={`${'absolute right-[-70px] top-[15%]'} ${'!opacity-25 xl:!opacity-100'}`} data-aos="fade-down" data-aos-delay="300">
                                <Image
                                    src={TokenomicLogoComponent}
                                    alt="Picture of the author"
                                    width="140"
                                    height="140"
                                />
                            </div>
                            {/* bottom left */}
                            <div className={`${'absolute left-[15%] top-[65%]'} ${'!opacity-25 xl:!opacity-100'}`} data-aos="fade-down" data-aos-delay="400">
                                <Image
                                    src={TokenomicLogoComponent}
                                    alt="Picture of the author"
                                    width="80"
                                    height="80"
                                />
                            </div>
                            {/* bottom right */}
                            <div className={`${'absolute right-[15%] top-[55%]'} ${'!opacity-25 xl:!opacity-100'}`} data-aos="fade-down" data-aos-delay="500">
                                <Image
                                    src={TokenomicLogoComponent}
                                    alt="Picture of the author"
                                    width="80"
                                    height="80"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Roadmap */}
                    <div className={`${'relative mb-[20] z-10 pt-36'}`}>
                        {/* Roadmap Image */}
                        <div className={`${Styles.image_x_auto} ${'w-full flex mx-auto'}`} data-aos="fade-in">
                            {/* Roadmap title */}
                            <div className={`${'mx-auto text-right absolute '} ${' -top-8 sm:-top-0 left-8 md:left-[15%] xl:left-[20%]'}`} data-aos="zoom-out">
                                <label className={`${'font-semibold text-white leading-none '} ${'text-2xl md:text-4xl xl:text-[56px]'}`}>ROAD</label>
                                <br />
                                <label className={`${'font-semibold  leading-none  text-[#CB4297]'} ${'text-2xl md:text-4xl xl:text-[56px]'}`}>MAP</label>
                            </div>
                            <Image
                                src={RoadmapImage}
                                alt="Picture of the author"
                                style={{ width: "100%" }}
                                className="mx-auto"
                            />
                        </div>
                    </div>
                    {/* Gradient */}
                    <div className={`${'absolute z-0 bottom-0'}`}>
                        <Image
                            src={GradientImage}
                            alt="Picture of the author"
                            style={{ width: "100%" }}
                            className="mx-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}