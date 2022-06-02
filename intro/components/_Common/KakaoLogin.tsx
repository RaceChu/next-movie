import create from "zustand";
import {width} from "dom-helpers";
import {useState} from "react";
const CLIENT_ID = "2bb682ba12e101ce04adffcedec70ca6";
// const REDIRECT_URI =  "http://localhost:3000/LoginSuccess";
const REDIRECT_URI =  "http://localhost:8080/KakaoLogin.do";

export const useStore =  create((set:any) =>({
    text : 'KaKao login'
    ,Change(){
        set((state:any) => ({text : 'RaceChu'}))
    }
}));

export const KAKAO_AUTH_URL = (props:any) =>{
    const onChangeUrl = () => {
        let url = document.getElementById("i_url").contentWindow.location.href;
        if(url === 'http://localhost:3000/LoginSuccess'){
            console.log('in :')
            props.closeModal();
        }

    }

    return (
        <div>
            <iframe id={"i_url"} width={'100%'} height={"500px"} frameBorder={"0"} src={`https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`} onLoad={onChangeUrl} />
        </div>
        )
}

