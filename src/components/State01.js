import { useState } from "react";

function State01(){
    //React Hooks
    //useState -> 상태를 저장하는 변수 (재렌더링 시에도 계속 유지해야하는 데이터)
    //state 변수값이 변경된경우 -> 재렌더링 re-rendering
    // 조건 : set함수를 통해서 변경된 경우

    let cnt = 0;

    //const|let [변수명, set함수명] = useState(초기값);
    let [count, setCount] = useState(0);

    return(
        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>
            <button onClick={()=>{
                cnt++;
                console.log('클릭됨');
                console.log(cnt);
            }}>cnt증가</button>

            <p>{count}</p>
            <button onClick={()=>{
                //count++; //set함수 사용이 아닌경우, 값은 증가하나 재랜더링은X
                //setCount( count += 1 );
                setCount( count + 1 );
                //setCount(1);
                console.log('count증가클릭됨');
                console.log(count+1);
            }}>count증가(state)</button>
        </div>
    );
};


export default State01;