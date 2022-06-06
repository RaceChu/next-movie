export default function Member(){
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