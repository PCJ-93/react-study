import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { saveUserName, clearUserName, saveUserInfo, setWeatherInfo } from "./store/store";


function Login(){

    // redux store 에 있는 slice 에 값변경 등의 action 함수를 호출하려면
    // dispatch 에 감싸서 요청해야한다.
    let dispatch = useDispatch();

    // redux 에 저장된 상태값 접근(사용)
    let reduxState = useSelector((state)=>{return state});
    console.log(reduxState);
    console.log(reduxState.user);
    console.log(reduxState.weather);
    let user = useSelector((state)=>{return state.user});
    let weather = useSelector((state)=>{return state.weather});
    console.log(user);
    console.log(weather);


    let [id, setId] = useState('');
    let [pw, setPw] = useState('');


    return (

        <div style={{'padding':'50px 50px 50px 350px'}}>

            <button onClick={ ()=>{
                dispatch(saveUserName('abc'));
                console.log(user);
                } }>saveUserName</button> <br/><br/>

            <button onClick={ ()=>{
                dispatch(clearUserName());
                console.log(user);

            } }>clearUserName</button> <br/><br/>

            <button onClick={ ()=>{
                dispatch(saveUserInfo( { id: 'abc', name: 'Bob' } ));
                console.log(user);

            } }>saveUserInfo</button> <br/><br/>

            <button onClick={ ()=>{
                dispatch(setWeatherInfo( { weather: 'rainy', temperature: '13', hmdt: '80%' } ));
                console.log(weather);

            } }>setWeatherInfo</button> <br/><br/>

            <h1>React Spring Login</h1>

            id: <input type="text" onChange={(e)=>{
                setId(e.target.value);
            }}></input> <br/><br/>

            pw: <input type="password" onChange={(e)=>{
                setPw(e.target.value);
            }}></input> <br/><br/>

            <button onClick={()=>{
                axios.post(
                    '/api/login',
                    {
                        id: id,
                        pw: pw
                    },
                    {
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(response => {
                    console.log(response.data);
                    if(response.data == 'ok'){
                        //로그인성공
                        //어디페이지로갈지~~
                        //ReactRouterDom -> navigate("/")
                        //뭐보여줄지~~
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            }}>로그인</button> <br/><br/>

            <button onClick={()=>{
                axios.post('/api/loginCheck')
                .then(response => {
                    console.log(response.data);
                })
                .catch(error =>{
                    console.log(error);
                })
            }}>로그인여부체크</button> <br/><br/>


<button onClick={()=>{
                axios.post(
                    '/api/loginJWT',
                    {
                        id: id,
                        pw: pw
                    },
                    {
                        headers:{
                            'Content-Type': 'application/json'
                        }
                    }
                )
                .then(response => {
                    console.log(response.data); //로그인 성공
                    let accessToken = response.data; // accessToken JWT
                    // 토큰은 localStorage 저장 해준다
                    // 다음에 API 요청할때 사용 할 수 있게..
                    localStorage.setItem("accessToken", accessToken);
                    // 로그인 성공한 토큰 저장 !

                    // response.data.body.accessToken -> localStorage
                    // response.data.body.userId -> store
                    // response.data.body.userName -> store

                    // 로그인 성공시 해야하는 처리~~ - 페이지전환 - 성공메세지 - 로그인->마이페이지
                })
                .catch(error => {
                    console.log(error);
                })
            }}>로그인JWT</button> <br/><br/>

            <button onClick={()=>{

                console.log(localStorage.getItem("accessToken"));

                axios.post(
                    '/api/loginCheckJWT',
                    {
                        param1: "abc"
                    },
                    {
                        headers: {
                            "Content-Type":"application/json",
                            "Authorization": "Bearer " + localStorage.getItem("accessToken") // "Bearer " 붙여줘야 인식 한다
                        }
                    }
                )
                .then(response => {
                    console.log(response.data);
                    //후처리 -> 화면 갱신 state 변수 설정 ...
                })
                .catch(error =>{
                    console.log(error);
                })
            }}>로그인여부체크JWT</button> <br/><br/>


        </div>

    )

}

export default Login;