import create from "zustand";

export const JoinData = create( (set:any) =>({
    data :  {
        battleTag : ''
        ,kakaoId  : ''
        ,phoneNum : ''
        ,tier     : ''
        ,comment  : ''
        }
        ,setData : (key:string,val:string) =>{
            // console.log(key +':'+val);
            set((state:any) => (state.data[key] = val))
            // key : val
        }

    }
));
export default function Join(){
    const {data,setData} = JoinData();
     const dataChange = (e:any) =>{
         // console.log(e.target.value);
         setData(e.target.name,e.target.value);
    }
    return (
        <section className="page-section spad contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="comment-title">Join us</h4>
                        <p>Welcome to Ajae guild</p>
                        <div className="row">
                            <div className="col-md-9">
                                <ul className="contact-info-list">
                                    <li>
                                        <div className="cf-left">Kakao Talk</div>
                                        <div className="cf-right">애드워드애릭</div>
                                    </li>
                                    <li>
                                        <div className="cf-left">Phone</div>
                                        <div className="cf-right">+82 010-1234-5678</div>
                                    </li>
                                    <li>
                                        <div className="cf-left">E-mail</div>
                                        <div className="cf-right">admin@ajae.com</div>
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
                            <form className="comment-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Battle Tag"      name="battleTag"  value={data.battleTag}  onChange={dataChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="text" placeholder="Kakao ID(EMAIL)"  name="kakaoId"  value={data.kakaoId} onChange={dataChange}/>
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="text" placeholder="Phone Number"     name="phoneNum" value={data.phoneNum} onChange={dataChange}/>
                                    </div>
                                    <div  className="col-lg-6">
                                        <input type="text" placeholder="Current Tier"     name="tier"     value={data.tier} onChange={dataChange}/>
                                    </div>
                                    <div className="col-lg-12">
                                            {/*<textarea placeholder="Message">{data.comment}</textarea>*/}
                                            <button className="site-btn btn-sm">Send</button>
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