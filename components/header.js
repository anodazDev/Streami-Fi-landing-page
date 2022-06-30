import React from 'react'
import Styles from '../styles/components/header.module.scss'

export default function head() {
  return (
    <>
      <h1 className={`${Styles.bg} ${'text-primary !text-xl md:!text-2xl xl:!text-4xl bg-Primary-600 '} `}> 
        Hello world!
      </h1>
    </>
  )
}
