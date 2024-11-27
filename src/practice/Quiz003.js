import './Quiz003.css';
import { useState } from 'react';


function Quiz003() {
    // 배열안에 태그넣어도 됨
    let [box, setBox] = useState([<div className="box">박스</div>, <div className="box">박스</div>]);

    //let [arr, setArr] = useState([1,1]);  // 배열 수 증가시켜서 map 으로 반복출력하기

    return(
        <div>
            <div style={{margin:'10px'}}>
            <button onClick={()=>{
                let newBox = [...box];
                newBox.push(<div className='box'>박스</div>);
                setBox(newBox);
            }}>추가</button>
            </div>
            {
                box
            }
            
        </div>
    )


    // return (
    //     <div>
    //         <div style={{ margin: '10px' }}>
    //             <button onClick={() => {    // 배열 수 증가시켜서 map 으로 반복출력하기
    //                 let temp = [...arr];
    //                 temp.push(0);
    //                 //temp.unshift(0);
    //                 //let temp = [0,...arr];
    //                 //let temp = [...arr,0];
    //                 setArr(temp);
    //             }}>추가</button>
    //         </div>
    //         {
    //             arr.map(() => {
    //                 return <div className='box'>박스</div>
    //             })
    //         }

    //     </div>
    // )


}

export default Quiz003;