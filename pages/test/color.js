import React from 'react'
import Styles from '../../styles/color.module.scss'
export default function color() {
    return (
        <>
            <div className={Styles.colorContainer}>
                <div className={Styles.colorbox}>
                    {/* map div 9 time */}
                    {
                        Array.from({ length: 11 }, (_, i) => (
                            <div className={`${Styles.box} ${Styles.primary}`} key={i}>
                                {i}
                            </div>
                        ))
                    }
                </div>
                <div className={Styles.colorbox}>
                    {/* map div 9 time */}
                    {
                        Array.from({ length: 11 }, (_, i) => (
                            <div className={`${Styles.box} ${Styles.secondary}`} key={i}>
                                {i}
                            </div>
                        ))
                    }
                </div>
                <div className={Styles.colorbox}>
                    {/* map div 9 time */}
                    {
                        Array.from({ length: 11 }, (_, i) => (
                            <div className={`${Styles.box} ${Styles.tertiary}`} key={i}>
                                {i}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
