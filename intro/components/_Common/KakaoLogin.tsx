import create from "zustand";
const CLIENT_ID = "2bb682ba12e101ce04adffcedec70ca6";
const REDIRECT_URI =  "http://localhost:8080/KakaoLogin.do";
import {getCookie} from "./Cookie";
import { useRouter} from "next/router";
import {useState} from "react";

export const useStore =  create((set:any) =>({
    text : 'KAKAO LOGIN'
    ,setText(tag:any){
        set((state:any) => ({text : tag}))
    }
}));

export const KAKAO_AUTH_URL = (props:any) =>{
    const {text,setText} = useStore();
    const router = useRouter();
    const onChangeUrl = () => {
        try {
            // @ts-ignore
            let url = document.getElementById("i_url").contentWindow.location.href;
                if (url === 'http://localhost:3000/LoginSuccess') {
                    const tag = getCookie("tag");
                    console.log('in :'+tag);
                    props.closeModal();
                    setText(tag);
                }else if (url === 'http://localhost:3000/Register'){
                    router.push('/Register');
                    const mail = getCookie("mail");

                    props.closeModal();
                }
        }catch (e){
            console.log('iframe error :'+e);
        }

    }

    return (
        <div>
            <iframe id={"i_url"} width={'100%'} height={"500px"} frameBorder={"0"} src={`https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`} onLoad={onChangeUrl} />
        </div>
        )
}

