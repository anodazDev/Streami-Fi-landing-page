import React, { useState, useEffect } from 'react'
import Styles from '/styles/components/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '/public/media/img/Nav/Logo.png'
import Bar from '/public/media/img/Nav/Bar.png'
import Close from '/public/media/img/Nav/Close.png' 
export default function Navbar() {
    const [colorscroll, setColorscroll] = useState(false)
    const [navActive, setNavActive] = useState(false)
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
                {/* navbar PC  */}
                <div className={`${' justify-between items-center h-[60px]'} ${' hidden lg:flex'}`}>
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
                {/* navbar Mobile */}
                <div className={`${' justify-between items-center h-[60px]'} ${' flex lg:hidden'}`}>
                    <div className={`${'flex items-center cursor-pointer w-4/12'}`}
                        onClick={() => setNavActive(!navActive)}
                    >
                        <Image
                            src={Bar}
                            alt="Streami-Fi"
                            layout='intrinsic'
                            width={56}
                            height={56}
                        />
                    </div>
                    <div className={`${'flex items-center justify-center w-full'}`}>
                        <div className={`${'flex items-center'}`}>
                            <Image
                                src={LogoImage}
                                alt="Streami-Fi"
                                layout='intrinsic'
                                width={52}
                                height={52}
                            />
                        </div>

                    </div>
                    <div className={`${'flex items-center cursor-pointer w-4/12'}`}>
                    </div>

                </div>
            </nav>
            {/* nav Active */}
            <div className={`
                ${'w-full h-screen absolute top-0  z-[999] p-6 flex flex-col transition-all duration-300 ease-in-out'}
                ${'bg-gradient-to-br from-primary-500 to-secondary-500'}
                ${navActive ? Styles.navActive : Styles.navInactive}
            `}>
                <div className={`${'flex items-center w-full justify-end '}`}
                    onClick={() => setNavActive(!navActive)}
                >
                    <Image
                        src={Close}
                        alt="Streami-Fi"
                        layout='intrinsic'
                        width={48}
                        height={48}
                    />
                </div>
                <div className={`${'flex items-center w-full pb-3 justify-center '}`}
                    onClick={() => setNavActive(!navActive)}
                >
                    <Image
                        src={LogoImage}
                        alt="Streami-Fi"
                        layout='intrinsic'
                        width={80}
                        height={80}
                    />
                </div>

                <div className={`${'flex items-center w-full py-3 justify-center '}`}
                    onClick={() => setNavActive(!navActive)}
                >
                    <Link href="/">
                        <a className={`${'text-white !text-2xl '}`}>
                            HOME
                        </a>
                    </Link>
                </div>
                <div className={`${'flex  items-center w-full py-3 justify-center'}`}
                    onClick={() => setNavActive(!navActive)}
                >
                    <Link href="/">
                        <a className={`${'text-white !text-2xl '}`}>
                            EARN
                        </a>
                    </Link>
                </div>
                <div className={`${'flex items-center w-full py-3 justify-center'}`}
                    onClick={() => setNavActive(!navActive)}
                >
                    <Link href="/">
                        <a className={`${'text-white !text-2xl '}`}>
                            GAME
                        </a>
                    </Link>
                </div>
                <div className={`${'flex items-center w-full py-3 justify-center'}`}
                    onClick={() => setNavActive(!navActive)}
                >
                    <Link href="/">
                        <a className={`${'text-white !text-2xl '}`}>
                            CONTACT
                        </a>
                    </Link>
                </div>
                <div className={`${'flex items-center py-3 justify-center'}`}
                    onClick={() => setNavActive(!navActive)}
                >
                    <Link href="/">
                        <button className={` 
                                    ${'btn py-1 px-4 rounded-lg !text-xl text-white border-white border-2 transition-all duration-300 ease-in-out '}  
                                    ${'hover:text-primary-600  hover:bg-white hover:scale-110	'}
                                `}>
                            CONNECT WALLET
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
