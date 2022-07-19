import React, { useState, useEffect } from 'react'
import Styles from '../styles/components/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '../public/media/img/Nav/Logo.png'
export default function Navbar() {
    const [colorscroll, setColorscroll] = useState(false)
    const changeColor = () => {
        if (window.scrollY > 60) {
            setColorscroll(true)
        } else {
            setColorscroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeColor)
        return () => {
            window.removeEventListener('scroll', changeColor)
        }
    }
        , [])
    return (
        <>
            <nav className={`
                ${'fixed top-0 left-0 w-full px-8 z-50 transition-all duration-300 ease-in-out'}
                ${colorscroll
                    ? Styles.Active
                    : Styles.Inactive
                }
            `}>
                <div className={`${'flex justify-between items-center h-[60px]'}`}>
                    <div className={`${'flex items-center'}`}>
                        <Image
                            src={LogoImage}
                            alt="Streami-Fi"
                            layout='intrinsic'
                            width={56}
                            height={56}
                        />
                    </div>
                    <div className={`${'flex items-center'}`}>
                        <div className={`${'flex items-center w-[120px] justify-center'}`}>
                            <Link href="/">
                                <a className={`${'text-white !text-lg '}`}>
                                    HOME
                                </a>
                            </Link>
                        </div>
                        <div className={`${'flex items-center w-[120px] justify-center'}`}>
                            <Link href="/">
                                <a className={`${'text-white !text-lg '}`}>
                                    EARN
                                </a>
                            </Link>
                        </div>
                        <div className={`${'flex items-center w-[120px] justify-center'}`}>
                            <Link href="/">
                                <a className={`${'text-white !text-lg '}`}>
                                    GAME
                                </a>
                            </Link>
                        </div>
                        <div className={`${'flex items-center w-[120px] justify-center'}`}>
                            <Link href="/">
                                <a className={`${'text-white !text-lg '}`}>
                                    CONTACT
                                </a>
                            </Link>
                        </div>
                        <div className={`${'flex items-center justify-center'}`}>
                            <Link href="/">
                                <button className={` 
                                    ${'btn py-1 px-4 rounded-lg text-white border-white border-2 transition-all duration-300 ease-in-out '}  
                                    ${'hover:text-primary-600  hover:bg-white hover:scale-110	'}
                                `}>
                                    CONNECT WALLET
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}
