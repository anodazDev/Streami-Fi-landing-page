import '../styles/globals.scss'
import '../styles/index.css'
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";



function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-in",
      once: true,
      duration: 800,
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>


  )
}

export default MyApp
