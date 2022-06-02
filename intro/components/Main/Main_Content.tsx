export default function Main_Content(){
    return (
        <section className="hero-section" >
            <video
                autoPlay={true}
                loop={false}
                muted={true}
                width="100%"
                style={{opacity:"0.5"}}
            >
                <source src={require('/styles/video/0000.mp4')}  type="video/mp4"  />
                Sorry, your browser doesn't support embedded videos.
            </video>
            <div className="jb-text">
                <p>흠..문구 뭐라고 쓰지</p>
            </div>
            <div className="emphasized"  />
            {/*<div className="hero-slider owl-carousel">*/}
            {/*    <div className="hs-item set-bg slider-1"   >*/}
            {/*        <div className="hs-text">*/}
            {/*            <div className="container">*/}
            {/*                <h2>The Best <span>Games</span> Out There</h2>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    )
}