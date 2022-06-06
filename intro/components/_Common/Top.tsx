import Image  from "next/image";
import Marquee from "react-fast-marquee"; //https://www.react-fast-marquee.com/documentation/#gradientColor
import Link from 'next/link';
import {KAKAO_AUTH_URL} from "./KakaoLogin";
import {useStore} from "./KakaoLogin";
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from "react";
import {getCookie} from "./Cookie";
import {removeCookie} from "./Cookie";

export default function Top(){
    const {text,setText} = useStore();
    const [show, setShow] = useState(false);
    const ModalClose = () =>{
        setShow(false);
    };
    const tag = getCookie("tag");
    console.log('tag 1 : '+tag);
    useEffect(() => {
        if(typeof tag !== 'undefined'){
            setText(tag);
        }
    },[]);

    const LoginAction = () =>{
        if(typeof tag !== 'undefined'){
            removeCookie();
            setText('KaKao login');
        }else{
            setShow(true);
        }

    }

    useEffect(() => {
        window.addEventListener(
            "message",
            (e) => {
                if (e.origin === "http://localhost:3000" && e.data.message) {
                    console.log("e : "+e);
                }

            },
            false
        );
    }, []);

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
                        <a  onClick={LoginAction}>
                            <span>{text}</span>
                        </a >
                        {/*<a><input onClick={()=>{Change();}} type={"button"} value={"button"}/></a>*/}
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
                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    size="lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            KAKAO LOGIN
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <KAKAO_AUTH_URL data={show} closeModal={ModalClose}  />
                    </Modal.Body>
                </Modal>

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