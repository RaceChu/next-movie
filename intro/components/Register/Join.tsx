import Image  from "next/image";
import {SetStateAction, useRef, useState} from "react";
import {any} from "prop-types";


export default function Join() {
    const battleTag = useRef<any>();
    const m_gender = useRef<any>();
    const m_birth_year = useRef<any>();
    const m_residence = useRef<any>();
    const m_youtube_url = useRef<any>();
    const tb_comment = useRef<any>();

    let data = {test : 'msg'};

    const [text, setText] = useState('');
    const onChange = (e: { target: {
                            id: SetStateAction<string>;
                            value: SetStateAction<string>; }; }) => {
        setText(e.target.value)
        let t = e.target.id;
        let data = {t: 'test'};



        console.log('test : '+data.t);
        // console.log(e.target.id);


    };

    const send = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        const tag = battleTag.current.value;
        console.log(tag);
        e.preventDefault();
        return null;
    };


    return (
        <section className="page-section spad contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="comment-title">Join us</h4>
                        <p>Welcome Ajae Guild</p>
                        <div className="row">
                            <div className="col-md-9">
                                <ul className="contact-info-list">
                                    <li>
                                        <div className="cf-left">Kakao Talk</div>
                                        <div className="cf-right">open.kakao.com/o/gvPN28Qc</div>
                                    </li>
                                    <li>
                                        <div className="cf-left">Phone</div>
                                        <div className="cf-right">+82 010-1234-5678</div>
                                    </li>
                                    <li>
                                        <div className="cf-left">E-mail</div>
                                        <div className="cf-right">ckjenter@gmail.com</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="#"><i className="fa fa-pinterest"></i></a>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-behance"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contact-form-warp">
                            <h4 className="comment-title">Join Category</h4>
                            <form className="comment-form" onSubmit={send}  >
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" ref={battleTag} id={"battleTag"}  placeholder="Battle Tag" onChange={onChange} value={text} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text"  ref={m_gender} placeholder="Gender - 남 or 여" maxLength={1}  onChange={onChange}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text"  ref={m_birth_year} placeholder="Birth Year - 85" maxLength={2}  onChange={onChange}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text"
                                               ref={m_residence}
                                               placeholder="Residence - 부산"
                                               max={5}
                                               onChange={onChange}/>
                                    </div>
                                    <div className="col-lg-12">
                                        <input type="text"  ref={m_youtube_url} placeholder="Youtube Url"  onChange={onChange} />
                                    </div>
                                    <div className="col-lg-12">
                                            <textarea ref={tb_comment}  placeholder="Message"></textarea>
                                            <button className="site-btn btn-sm" onClick={send}>Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}