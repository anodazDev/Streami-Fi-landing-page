import React from 'react'
import Image from 'next/image'
import TokenomicChartImage from '../public/media/img/Tokenomic/TokenomicChart.svg'
import RoadmapImage from '../public/media/img/Roadmap/Roadmap.svg'
import Styles from '../styles/components/TokenomicRoadmap.module.scss'

export default function index() {
    return (
    <>
    <div className={`${Styles.bg_gradient_dark} ${Styles.bottom_triangle_gradient} ${'flex'}`}>
        <div className={`${'mx-auto w-full'}`}>
            {/* Tokenomic */}
            <div className={`${Styles.layout_M} ${'!mb-32'} `}>
                {/* Tokenomic title */}
                <div className={`${'container mx-auto mb-8 text-center'}`} data-aos="zoom-out">
                    <label className={`${Styles.font_header} ${'font-semibold text-white'}`}>TOKENOMIC</label>
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
                    <label className={`${Styles.font_sub_header} ${'font-semibold text-white'}`}>Total amount 1000000</label>
                </div>
            </div>
            {/* Roadmap */}
            <div className={`${'relative mb-32'}`}>
                {/* Roadmap title */}
                <div className={`${Styles.layout_M} ${'container mx-auto text-center'}`} data-aos="zoom-out">
                    <label className={`${Styles.font_header} ${'font-semibold text-white'}`}>ROAD<span className={`${'font-semibold'}`} style={{color: "#CB4297"}}>MAP</span></label>
                </div>
                {/* Roadmap Image */}
                <div className={`${Styles.image_x_auto} ${'w-full flex mx-auto'}`} data-aos="fade-in">
                    <Image
                        src={RoadmapImage}
                        alt="Picture of the author"
                        style={{ width: "100%" }}
                        className="mx-auto"
                        />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}