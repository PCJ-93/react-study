
function Basic01() {
    
    let hello = "안녕하세요";
    let hello2 = "Nice to meet you";
    let flag = false;

    let hi = "";
    for (let i = 0; i < 5; i++) {
        hi += "안녕~";
    }

    return (
        <div className="App">
            <h1>리액트</h1>
            <h2 className="font-red">hello</h2>    {/*문자그대로인식*/}
            {// 방법 1 ) return문 안에서 if문을 쓰고싶으면 if문 말고 삼항연산자로 한다
                //flag ? <h2>{hello}</h2> : <h2>{hello2}</h2>
                //방법 2 ) &&연산자 사용 (조건연산자)
                flag && <h2>{hello}</h2>
            }
            { //방법 2 ) !연산자 사용 (조건연산자)
                //flag == false && <h2>{hello2}</h2>
                !flag && <h2>{hello2}</h2>
            }
            <h2 style={{ color: 'blue' }}>{hi}</h2>
        </div>
    );


    //if문 사용시 return문을 통째로 감싸줘야한다
    //flag: true -> hello
    //flag: false -> hello2

    // if(flag){
    // //JSX 영역
    // return (
    //   <div className="App">
    //     <h1>리액트</h1>
    //     <h2>hello</h2>    {/*문자그대로인식*/}
    //     <h2>{hello}</h2>  {/*변수로인식*/}
    //     <h2>{hi}</h2>
    //   </div>
    // );

    // }else{
    // return (
    //   <div className="App">
    //     <h1>리액트</h1>
    //     <h2>hello</h2>    {/*문자그대로인식*/}
    //     <h2>{hello2}</h2>  {/*변수로인식*/}
    //     <h2>{hi}</h2>
    //   </div>
    // );
    // }

}

export default Basic01;