import ColorBox from './ColorBox.js';
import './Quiz004.css';
import { useState } from 'react';

function Quiz004() {


    let [boxes, setBoxes] = useState(['red', 'blue', 'green', 'black']);

    const xBox = (index)=>{
        let temp = [...boxes];
        temp.splice(index, 1);
        setBoxes(temp);
    };

    return (
        <div>
            <div>
                <button onClick={() => {
                    let temp = ['red', ...boxes];
                    setBoxes(temp);
                }}>앞빨간박스추가</button>
                <button onClick={() => { 
                    let temp = ['blue', ...boxes];
                    setBoxes(temp);
                }}>앞파란박스추가</button>
                <button onClick={() => {
                    let temp = ['green', ...boxes];
                    setBoxes(temp);
                }}>앞초록박스추가</button>

                <button onClick={() => { 
                    let temp = [...boxes, 'red'];
                    setBoxes(temp);
                }}>뒤빨간박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes, 'blue'];
                    setBoxes(temp);
                }}>뒤파란박스추가</button>
                <button onClick={() => { 
                    let temp = [...boxes, 'green'];
                    setBoxes(temp);
                }}>뒤초록박스추가</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.shift();
                    setBoxes(temp);
                }}>앞 박스 삭제</button>
                <button onClick={() => {
                    let temp = [...boxes];
                    temp.pop();
                    setBoxes(temp);
                }}>뒤 박스 삭제</button>
            </div>

            {
                //['red', 'blue', 'green', 'black']
                boxes.map((value,index)=>{
                    return <ColorBox bgColor={value} index={index} xBox={xBox}/>
                })
            }

        </div>
    );
}

export default Quiz004;