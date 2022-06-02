import Image  from "next/image";
import Marquee from "react-fast-marquee"; //https://www.react-fast-marquee.com/documentation/#gradientColor
import Link from 'next/link';
import axios from 'axios';
import {KAKAO_AUTH_URL} from "./KakaoLogin";
import {useStore} from "./KakaoLogin";
import create from 'zustand';
import {getCookie} from "./Cookie";
import Modal from 'react-bootstrap/Modal';
import {useEffect} from "react";
import {Button} from "react-bootstrap";
import { Route } from 'react-router-dom';



export default function Top(){
    const KakaoRedirectHandler = () => {
            let params = new URL(document.location.toString()).searchParams;
            let code = params.get("code");                // 인가코드 받는 부분
            let grant_type = "authorization_code";
            let client_id = "7e2f309b2a984d79124a7c72fc5ab349";

            axios.post(`https://kauth.kakao.com/oauth/token?
                            grant_type=${grant_type}
                            &client_id=${client_id}
                            &redirect_uri=http://localhost:3000/Top
                            &code=${code}`
                , {
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                    }
                }).then((res) => {
                console.log(res)
                // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
            }).catch(response => {
               console.log(response);
            });
    }
    return (
        <section>
            <header className="header-section">
                <div className="container">
                    <a className="site-logo" href="">
                        <Image src={require('/styles/img/over_logo.png')} width={40} height={40} />
                    </a>
                    <div className="user-panel">
                        {/*<a  href={KAKAO_AUTH_URL}>*/}
                        {/*<a  onClick={loginPopup}>*/}
                        <a>
                            <span>kakao Login</span>
                        </a >
                        <a><input onClick={()=>{KakaoRedirectHandler();}} type={"button"} value={"button"}/></a>
                    </div>
                    <div className="nav-switch">
                        <i className="fa fa-bars"></i>
                    </div>
                    <nav className="main-menu">
                        <ul>
                            <li><Link href={`/`}><a href="#">Home</a></Link></li>
                            <li><Link href={`/About`}><a href="#">About Guild</a></Link></li>
                            <li><Link href={`/member`}><a href="#">Member</a></Link></li>
                            <li><Link href={`/CivilWar`}><a href="#">Civil War</a></Link></li>
                            <li><Link href={`/Analytics`}><a href="#">Analytics</a></Link></li>
                        </ul>
                    </nav>
                </div>
                {/*<Button variant="primary" onClick={() => setShow(true)}>*/}
                {/*    Custom Width Modal*/}
                {/*</Button>*/}

            </header>
            <div className="latest-news-section" >
                <div className="ln-title">Latest News</div>
                <div className="news-ticker">
                    <Marquee className="news-ticker-contant"
                             pauseOnClick={true}
                             speed={50}
                             gradient={false}
                    >
                        <div className="nt-item"><span className="new">Staff</span>애드워드 애릭,  조미료,  형들..]
                        </div>
                        <div className="nt-item"><span className="strategy">new Member</span>
                            Haseyo
                        </div>
                        <div className="nt-item"><span className="racing">Last Week Rank</span>
                            [Rank 1st 애드워드 애릭, 2 st 조미료 3 st 형들..]
                        </div>
                    </Marquee>
                </div>
            </div>
        </section>
    )
}