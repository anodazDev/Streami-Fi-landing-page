import React from 'react'
import Image from 'next/image'
import PlatfromBoxImage from '../../public/media/img/PlatfromBox.svg'
import GameplayBoxImage from '../../public/media/img/GameplayBox.svg'
import GameplayArrowImage from '../../public/media/img/GameplayArrow.svg'
import Styles from '../../styles/components/StreamiFi/PlatfromGameplay.module.scss'

export default function index() {
  return (
    <>
    <div className={`${Styles.bg_gradient_dark} ${Styles.bottom_triangle_gradient} ${'flex'}`}>
      <div className={`${'mx-auto w-full'}`}>
        <div className={`${Styles.layout_M} ${Styles.mb_8rem}`}>
            <div className={`${Styles.image_x_auto} ${'container flex mx-auto'}`} data-aos="fade-in">
                <Image
                    src={PlatfromBoxImage}
                    alt="Picture of the author"
                    width="700"
                    height="350"
                    className="mx-auto"
                    />
            </div>
            <div className={`${Styles.text_center} ${'container mx-auto'}`} data-aos="zoom-out" data-aos-delay="400">
                <button className={`${Styles.btn_pill_10} ${Styles.btn_border_white} ${Styles.text_white} ${'btn py-2 px-4'}`}>PLATFROM</button>
            </div>
        </div>
        <div className={`${'relative'}`}>
          <div className={`${Styles.layout_M} ${Styles.mb_10rem}`}>
              <div className={`${Styles.image_x_auto} ${'container flex mx-auto'}`}>
                  <Image
                      src={GameplayBoxImage}
                      alt="Picture of the author"
                      width="700"
                      height="350"
                      className={`${'mx-auto'}`}
                      />
              </div>
          </div>
          <div className={`${Styles.gameplay_animattion_box}`}>
              <div className={`${'absolute'}`}>
                <Image
                  src={GameplayArrowImage}
                  alt="Picture of the author"
                  width="100"
                  height="100"
                  className={`${'mx-auto'}`}
                  />
              </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

