import { useState } from "react";
import Box from "./Box";

function Props02(){

    // point -> 배열이 state 변수 처리 -> 재랜더링이 일어나도 데이터가 유지
    let [textArr, setTextArr] = useState(['아침','점심','저녁','야식']);
    let [detailArr, setDetailArr] = useState(['배고프다', '졸리다', '피곤하다','행복하다']);
    //let [num,setNum] = useState(0);

    return (
        <div>
            {
                textArr.map((item, index)=>{
                    // return <Box text={item} detail={detailArr[index]}/>;
                    return <Box text={textArr[index]} detail={detailArr[index]}/>;
                })
            }
            <button onClick={()=>{
                // 버튼을 누르면
                // 화면에 내용이 추가로 표시
                // 두번째 야식
                // 살찐다
                let temp = [...textArr];  // array deep copy
                temp.push('두번째 야식');  // 복사된 배열에 값추가
                //textArr.push('두번째야식');
                detailArr.push('살찐다');
                setTextArr(temp);  //복사된것을 셋스테이트에 넣어서 주소변경 시켜서 재랜더링 되게함     // 참조타입 변수 (배열)
                setDetailArr(detailArr);  // 참조타입 변수 (배열)  위에서 재랜더링해서 얘는 그대로함
                //setNum(num+1);           // 기본타입변수 (숫자형 변수)
            }}>추가버튼</button>
        </div>
    );
}

export default Props02;