import './Practice002';
import { useState } from 'react';

function Practice002( ){

    //*Hint <ColorBox bgColor={value} />

    let [color,setColor] = useState('white');
    
    let [count,setCount] = useState([0]);

    return(
        <div>

            <button onClick={()=>{
                let temp = [...count];
                temp.push(0);
                setCount(temp);
            }}>추가</button>

            <button onClick={() => { 
                let newcolor = 'red';
                setColor(newcolor);

                let temp = [...count];
                temp.unshift(0); 
                setCount(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => { }}>앞파란박스추가</button>
            <button onClick={() => { }}>앞초록박스추가</button>

            <button onClick={() => { }}>뒤빨간박스추가</button>
            <button onClick={() => { }}>뒤파란박스추가</button>
            <button onClick={() => { }}>뒤초록박스추가</button>


            <div className='container'>
                {
                    count.map(()=>{
                        return <div className="box" style={{ backgroundColor : color }}> 박스 </div>;
                    })
                }
            </div>

        </div>
        
    );

    
}

export default Practice002;