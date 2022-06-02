import Image from "next/image";
export default function CivilWar(){
    return (
        <section className="footer-top-section" style={{minHeight:"700px"}}>
            <div className="container">
                <div className="footer-top-bg">
                    <img src="/styels/img/footer-top-bg.png" alt=""/>
                </div>
                <div className="row">
                    <ul className="community-post-list">
                        <li>
                            <div className="community-post">
                                <div className="post-content">
                                    <h5>정규내전<span>by 애드워드 애릭</span></h5>
                                    <div className="post-date">Mar 04, 2022</div>
                                    <div  className={"civilWarList"}>
                                        <p>1 Round  <div style={{float:"right"}}>왕의길</div></p>
                                        <table className="table" >
                                            <tr>
                                                <td colSpan={3} style={{textAlign:"center",color:"#00D5FF"}}>Blue Team</td>
                                                <td>|</td>
                                                <td colSpan={3} style={{textAlign:"center",color:"#FA7248"}}>Red Team</td>
                                            </tr>
                                            <tr>
                                                <td>100%</td>
                                                <td>Win</td>
                                                <td >조미료
                                                    <div style={{float:"right",paddingLeft:"5px"}}><Image width={"25px"} height={"25px"}  src={require('/styles/img/youtube.png')}  /></div>
                                                    <div style={{float:"right",paddingLeft:"5px"}}><Image width={"25px"} height={"25px"}  src={require('/styles/img/potg1.png')}  /></div>
                                                </td>
                                                <td>|</td>
                                                <td>애드워드 애릭
                                                    <div style={{float:"right",paddingLeft:"5px"}}><Image width={"25px"} height={"25px"}  src={require('/styles/img/youtube.png')}  /></div>
                                                </td>
                                                <td>Lose</td>
                                                <td>0%</td>
                                            </tr>
                                            <tr>
                                                <td>100%</td>
                                                <td>Win</td>
                                                <td>형들님 우린 할 수 있어
                                                    <div style={{float:"right",paddingLeft:"5px"}}><Image width={"25px"} height={"25px"}  src={require('/styles/img/youtube.png')}  /></div>

                                                </td>
                                                <td>|</td>
                                                <td>김정태
                                                    <div style={{float:"right",width:"15px",paddingLeft:"5px"}}><span>POTG</span></div>
                                                </td>
                                                <td>Lose</td>
                                                <td>0%</td>
                                            </tr>
                                            <tr>
                                                <td>100%</td>
                                                <td>Win</td>
                                                <td>형들님 우린 할 수 있어
                                                    <div style={{float:"right",paddingLeft:"5px"}}><Image width={"25px"} height={"25px"}  src={require('/styles/img/youtube.png')}  /></div>

                                                </td>
                                                <td>|</td>
                                                <td>김정태
                                                    <div style={{float:"right",width:"15px",paddingLeft:"5px"}}><span>POTG</span></div>
                                                </td>
                                                <td>Lose</td>
                                                <td>0%</td>
                                            </tr>
                                            <tr>
                                                <td>100%</td>
                                                <td>Win</td>
                                                <td>형들님 우린 할 수 있어
                                                    <div style={{float:"right",paddingLeft:"5px"}}><Image width={"25px"} height={"25px"}  src={require('/styles/img/youtube.png')}  /></div>

                                                </td>
                                                <td>|</td>
                                                <td>김정태
                                                    <div style={{float:"right",width:"15px",paddingLeft:"5px"}}><span>POTG</span></div>
                                                </td>
                                                <td>Lose</td>
                                                <td>0%</td>
                                            </tr>
                                            <tr>
                                                <td>100%</td>
                                                <td>Win</td>
                                                <td>형들님 우린 할 수 있어
                                                    <div style={{float:"right",paddingLeft:"5px"}}><Image width={"25px"} height={"25px"}  src={require('/styles/img/youtube.png')}  /></div>

                                                </td>
                                                <td>|</td>
                                                <td>김정태
                                                    <div style={{float:"right",width:"15px",paddingLeft:"5px"}}><span>POTG</span></div>
                                                </td>
                                                <td>Lose</td>
                                                <td>0%</td>
                                            </tr>
                                            <tr>
                                                <td>100%</td>
                                                <td>Win</td>
                                                <td>김정태
                                                    <div style={{float:"right",paddingLeft:"5px"}}><Image width={"25px"} height={"25px"}  src={require('/styles/img/youtube.png')}  /></div>

                                                </td>
                                                <td>|</td>
                                                <td>형들님 우린 할 수 있어
                                                    <div style={{float:"right",width:"15px",paddingLeft:"5px"}}><span>POTG</span></div>
                                                </td>
                                                <td>Lose</td>
                                                <td>0%</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}