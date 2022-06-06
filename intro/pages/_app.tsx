// pages/_app.js
import  '../styles/css/bootstrap.min.css';
// import  '../styles/css/owl.carousel.css';
import  '../styles/css/style.css';
import  '../styles/css/animate.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
