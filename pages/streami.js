import React from 'react'
import Image from 'next/image'
import PlatfromBoxImage from '../public/media/img/PlatfromBox.svg'

export default function index() {
  return (
    <>
    <div className="bg-gradient-dark-0 bottom-triangle-gradient flex">
      <div className='container'>
        <div className="layout_M">
            <div className='container flex image-x-auto' data-aos="fade-in">
                <Image
                    src={PlatfromBoxImage}
                    alt="Picture of the author"
                    width="700"
                    height="350"
                    className="mx-auto"
                    />
            </div>
            <div className='container text-center' data-aos="zoom-out" data-aos-delay="200">
                <button className="btn btn-pill-10 btn-border-white py-2 px-4 text-white">PLATFROM</button>
            </div>
        </div>
        <div className="layout_M mb-10rem">
            <div className='container flex image-x-auto' data-aos="fade-in">
                <Image
                    src={PlatfromBoxImage}
                    alt="Picture of the author"
                    width="700"
                    height="350"
                    className="mx-auto"
                    />
            </div>
            <div className='container text-center' data-aos="zoom-out" data-aos-delay="200">
                <button className="btn btn-pill-10 btn-border-white py-2 px-4 text-white">PLATFROM</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

