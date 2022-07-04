import React from 'react'
import Image from 'next/image'
import TokenomicChartImage from '../../public/media/img/Tokenomic/TokenomicChart.svg'
import RoadmapImage from '../../public/media/img/Roadmap/Roadmap.svg'
import PageStyles from '../../styles/components/StreamiFi/TokenomicRoadmap.module.scss'
import Styles from '../../styles/components/StreamiFi/Shared.module.scss'

export default function index() {
    return (
    <>
    <div className={`${PageStyles.bg_gradient_dark} ${PageStyles.bottom_triangle_gradient} ${'flex'}`}>
        <div className={`${'mx-auto w-full'}`}>
            {/* Tokenomic */}
            <div className={`${Styles.layout_M} ${Styles.mb_8rem}`}>
                {/* Tokenomic title */}
                <div className={`${Styles.text_center} ${'container mx-auto mb-8'}`} data-aos="zoom-out">
                    <label className={`${Styles.font_header} ${Styles.text_white} ${'font-semibold'}`}>TOKENOMIC</label>
                </div>
                {/* Tokenomic Image */}
                <div className={`${Styles.image_x_auto} ${'container flex mx-auto mb-8'}`} data-aos="fade-in">
                    <Image
                        src={TokenomicChartImage}
                        alt="Picture of the author"
                        width="700"
                        height="350"
                        className="mx-auto"
                        />
                </div>
                {/* Tokenomic decsription */}
                <div className={`${Styles.text_center} ${'container mx-auto'}`} data-aos="fade-in">
                    <label className={`${Styles.font_sub_header} ${Styles.text_white} ${'font-semibold'}`}>Total amount 1000000</label>
                </div>
            </div>
            {/* Roadmap */}
            <div className={`${'relative'} ${Styles.mb_8rem}`}>
                {/* Roadmap title */}
                <div className={`${Styles.text_center} ${Styles.layout_M} ${'container mx-auto'}`} data-aos="zoom-out">
                    <label className={`${Styles.font_header} ${Styles.text_white} ${'font-semibold'}`}>ROAD<span className={`${'font-semibold'}`} style={{color: "#CB4297"}}>MAP</span></label>
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