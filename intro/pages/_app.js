// pages/_app.js
import  '../styles/css/bootstrap.min.css';
// import  '../styles/css/owl.carousel.css';
import  '../styles/css/style.css';
import  '../styles/css/animate.css';
import Top from "../components/_Common/Top";
import Footer from "../components/_Common/Footer";

export default function MyApp({ Component, pageProps }) {
    if(pageProps !== '')
    return(
        <div>
            <Top />
            <Component {...pageProps} />
            <Footer />
        </div>
    )

}