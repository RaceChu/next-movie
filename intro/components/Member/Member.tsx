import axios from 'axios';
import {useStore} from "../_Common/KakaoLogin";
// import top from '/components/_Common/Top';

export default function Member(){

    function test_ajax(){
        axios.post('http://localhost:8080/tsst_Ajax.do',{
            m_mail : 'test'
        })
            .then( response => {
                console.log(response)
            })
            .catch( response => {
                console.log(response)
            });
    }

    return (
        <section className="footer-top-section" style={{minHeight:"700px"}}>
            <div className="container">
                <div className="footer-top-bg">
                    <img src="/styels/img/footer-top-bg.png" alt=""/>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-logo text-white">
                            <img src="/styels/img/footer-logo.png" alt=""/>
                                <p>image Area.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">:
                        <div className="footer-widget mb-5 mb-md-0">
                            <h4 className="fw-title">Member Posts</h4>
                             <p><input type={"button"} value={"test_ajax"} onClick={test_ajax}/></p>
                            <div className="latest-blog">
                                <div className="lb-item">
                                    <div className="lb-thumb set-bg" data-setbg="/styels/img/latest-blog/1.jpg">
                                        image area
                                    </div>
                                    <div className="lb-content">
                                        <div className="lb-date">RaceChu#3344</div>
                                        <p>부산 / 84</p>
                                        <p>Only have one position for one person</p>
                                        <a href="#" className="lb-author">By RaceChu</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}