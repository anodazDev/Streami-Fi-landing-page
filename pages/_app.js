import '../styles/globals.scss'
import '../styles/index.css'
import AOS from "aos";
import { useEffect } from "react";
import Head from 'next/head'
import "aos/dist/aos.css";



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-in",
      once: true,
      duration: 800,
      delay: 200,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>


  )
}

export default MyApp
