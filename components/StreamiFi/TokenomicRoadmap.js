import React from 'react'
import Image from 'next/image'
import TokenomicChartImage from '../../public/media/img/Tokenomic/TokenomicChart.svg'
import PageStyles from '../../styles/components/StreamiFi/TokenomicRoadmap.module.scss'
import Styles from '../../styles/components/StreamiFi/Shared.module.scss'

export default function index() {
    return (
    <>
    <div className={`${PageStyles.bg_gradient_dark} ${'flex'}`}>
        <div className={`${'mx-auto w-full'}`}>
            {/* Platfrom */}
            <div className={`${Styles.layout_M} ${Styles.mb_8rem}`}>
                {/* Tokenomic title */}
                <div className={`${Styles.text_center} ${'container mx-auto mb-10'}`} data-aos="zoom-out">
                    <label className={`${Styles.font_header} ${Styles.text_white}`}>TOKENOMIC</label>
                </div>
                {/* Tokenomic */}
                <div className={`${Styles.image_x_auto} ${'container flex mx-auto'}`} data-aos="fade-in">
                    <Image
                        src={TokenomicChartImage}
                        alt="Picture of the author"
                        width="700"
                        height="350"
                        className="mx-auto"
                        />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}