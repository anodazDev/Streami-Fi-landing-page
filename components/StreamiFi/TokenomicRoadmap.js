import React from 'react'
import Image from 'next/image'
import PlatfromBoxImage from '../../public/media/img/PlatfromBox.svg'
import GameplayBoxImage from '../../public/media/img/GameplayBox.svg'
import GameplayArrowImage from '../../public/media/img/GameplayArrow.svg'
import GameplayGoodImage from '../../public/media/img/GameplayGood.svg'
import GameplayPerfectImage from '../../public/media/img/GameplayPerfect.svg'
import PageStyles from '../../styles/components/StreamiFi/TokenomicRoadmap.module.scss'
import Styles from '../../styles/components/StreamiFi/Shered.module.scss'

export default function index() {
    return (
    <>
    <div className={`${PageStyles.bg_gradient_dark} ${PageStyles.bottom_triangle_gradient} ${'flex'}`}>
        <div className={`${'mx-auto w-full'}`}>
            {/* Platfrom */}
            <div className={`${Styles.layout_M} ${Styles.mb_8rem}`}>
            {/* Platfrom Main Image */}
            <div className={`${Styles.image_x_auto} ${'container flex mx-auto'}`} data-aos="fade-in">
                <Image
                    src={PlatfromBoxImage}
                    alt="Picture of the author"
                    width="700"
                    height="350"
                    className="mx-auto"
                    />
            </div>
            {/* Platfrom btn */}
            <div className={`${Styles.text_center} ${'container mx-auto'}`} data-aos="zoom-out" data-aos-delay="400">
                <button className={`${Styles.btn_pill_10} ${Styles.btn_border_white} ${Styles.text_white} ${'btn py-2 px-4'}`}>PLATFROM</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}