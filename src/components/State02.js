// 반복문사용
function State02(){

    let text = "";
    let textArr = [];  // 배열
    for(let i=0; i<5; i++){
        //text += "<p>안녕하세요~<p>";   // 단순<p>포함된 텍스트가 나옴
        textArr.push(<p>안녕하세요~</p>);   // 빈 배열에 값추가
    }

    let numArr = [1,2,3,4,5]; // 단순갯수로 활용할 배열

    let msgArr = ['안녕','hi','hello','헤이'];

    return(
        <div>
            {textArr}
            <hr/>  {/*구분선*/}
            {
                numArr.map(()=>{  // map으로 배열갯수만큼 리턴값 반복
                    return (<p>안녕하세요~</p>)
                })
            }
            <hr/>
            {
                msgArr.map((item)=>{  // map으로 배열에있는 매개변수 차례대로받아서 리턴
                    return (<p>{item}</p>)
                })
            }
        </div>
    );
}

export default State02;