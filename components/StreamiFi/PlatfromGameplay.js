import React from 'react'
import Image from 'next/image'
import PlatfromBoxImage from '../../public/media/img/PlatfromBox.svg'
import GameplayBoxImage from '../../public/media/img/GameplayBox.svg'
import GameplayArrowImage from '../../public/media/img/GameplayArrow.svg'
import GameplayGoodImage from '../../public/media/img/GameplayGood.svg'
import GameplayPerfectImage from '../../public/media/img/GameplayPerfect.svg'
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
          <div className={`${Styles.layout_M} ${'relative'}`}>
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
          <div className={`${Styles.gameplay_animation_box}`}>
              {/* top left */}
              <div className={`${'absolute'}`} style={{left: -60}} data-aos="fade-up" data-aos-delay="200">
                <Image
                  src={GameplayArrowImage}
                  alt="Picture of the author"
                  width="150"
                  height="150"
                  className={`${'mx-auto'}`}
                  />
              </div>
              {/* image bottom */}
              <div className={`${'absolute'}`} style={{left: "36.5%",top: "82%"}} data-aos="fade-down" data-aos-delay="300">
                <Image
                  src={GameplayArrowImage}
                  alt="Picture of the author"
                  width="50"
                  height="50"
                  className={`${Styles.rotate_180} ${'mx-auto'}`}
                  />
              </div>
              {/* image right */}
              <div className={`${'absolute'}`} style={{right: "27.5%",top: "7%"}} data-aos="fade-up" data-aos-delay="400">
                <Image
                  src={GameplayArrowImage}
                  alt="Picture of the author"
                  width="35"
                  height="35"
                  className={`${'mx-auto'}`}
                  />
              </div>
              {/* good */}
              <div className={`${'absolute'}`} style={{right: "30.7%",top: "27%"}} data-aos="zoom-out" data-aos-delay="400">
                <Image
                  src={GameplayGoodImage}
                  alt="Picture of the author"
                  width="120"
                  height="60"
                  className={`${'mx-auto'}`}
                  />
              </div>
              {/* mid right */}
              <div className={`${'absolute'}`} style={{right: -40,top: "50%"}} data-aos="fade-down" data-aos-delay="500">
                <Image
                  src={GameplayArrowImage}
                  alt="Picture of the author"
                  width="110"
                  height="110"
                  className={`${Styles.rotate_180} ${'mx-auto'}`}
                  />
              </div>
              {/* image left */}
              <div className={`${'absolute'}`} style={{left: "27.5%",top: "17%"}} data-aos="fade-left" data-aos-delay="600">
                <Image
                  src={GameplayArrowImage}
                  alt="Picture of the author"
                  width="80"
                  height="80"
                  className={`${Styles.rotate_270} ${'mx-auto'}`}
                  />
              </div>
              {/* perfect */}
              <div className={`${'absolute'}`} style={{left: "27%",top: "50%"}} data-aos="zoom-out" data-aos-delay="600">
                <Image
                  src={GameplayPerfectImage}
                  alt="Picture of the author"
                  width="160"
                  height="80"
                  className={`${'mx-auto'}`}
                  />
              </div>
          </div>
        </div>
        <div className={`${'relative'}`}>
          <div className={`${Styles.layout_M} ${Styles.mb_10rem}`}>
              <div className={`${Styles.gamemplay_content_box} ${'container flex mx-auto grid grid-cols-10 gap-2 relative'}`}>
                <div className={`${'lg:col-span-4 flex col-span-10'}`} data-aos="fade-left">
                  <label className={`${Styles.text_white} ${Styles.font_header} ${'m-auto'}`}><b>Gameplay</b></label>
                </div>
                <div className={`${Styles.border_white_3} ${Styles.border_radius_20} ${'lg:col-span-6 grid grid-cols-10 relative col-span-10'}`}  data-aos="fade-right">
                  <div className={`${Styles.gameplay_description_border_strip} ${'col-span-1'}`}></div>
                  <div className={`${'col-span-9 p-6 flex '}`}>
                    <label className={`${Styles.text_white} ${'m-auto'}`}>
                      <span className={`${Styles.text_danger}`}>Streami-Fi</span> is a music listening platform that lets you earn 
                      by listening to music from your favorite artists. or new artists 
                      and new songs then  We are also d eveloping games for you to 
                      have more fun. by bringing the songs in  Our platform ladies 
                      make in-game notes for  you to enjoy.
                    </label>
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

