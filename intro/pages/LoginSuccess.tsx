import {getCookie} from '../components/_Common/Cookie';
import {useStore} from "../components/_Common/KakaoLogin";
import axios from "axios";
import {useState} from "react";
import qs from "qs";

export default  function LoginSuccess(){

    // if (typeof document !== 'undefined') {
        // let params = new URL(document.location.toString()).searchParams;
        // let code = params.get("code");                // 인가코드 받는 부분
        // console.log('code : '+code);
        // let grant_type = "authorization_code";
        // let client_id = "2bb682ba12e101ce04adffcedec70ca6";
        // let redirect_uri  = 'http://localhost:3000/LoginSuccess';
        // let redirect_uri  = 'http://localhost:8080/KakaoLogin.do';
        // const headers = {
        //     'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //     'Accept': '*/*'
        // }
        // const payload = qs.stringify({
        //     grant_type: grant_type,
        //     client_id: client_id,
        //     redirect_uri: redirect_uri,
        //     code: code
        // });

        // axios.post(`https://kauth.kakao.com/oauth/token`
        //     , payload,{headers}
        //     )
        //     .then((res) => {
        //     console.log('res : '+res)
        //     // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
        //     })
        //     .catch(response => {
        //     console.log('response : '+response);
        // });
    // }

    return(
        <div>
            <div>Hello</div>
        </div>
    )


}