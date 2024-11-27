import './NewsBlog.css';
import { useState } from 'react';
import Modal from './Modal';


function NewsBlog() {

    //javascript 코드
    let title = 'React Study';
    // let news1 = '오늘의 뉴스';
    // let news2 = '어제의 뉴스';
    // let news3 = '내일의 뉴스';

    // let [new1, setNes1] = useState('오늘의 뉴스');
    // let [new2, setNes2] = useState('어제의 뉴스');
    // let [new3, setNes3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의뉴스']);

    let [cnt, setCnt] = useState([0, 0, 0]);
    //let [cnt2, setCnt2] = useState(0);

    //let [mc, setMc] = useState(0);  // modal 버튼을 숫자로 줄때

    let [modalFlag, setModalFlag] = useState(false);   // modal 버튼을 true false 로 줬을때

    let [selectedTitle, setSelectedTitle] = useState('');

    let [likeCount, setLikeCount] = useState(0);

    let [inputText, setInputText] = useState('');

    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: 'orange', fontSize: '20px' }}>{title}</div>
                {/* jsx 안에 스타일은 객체형식으로 넣어준다 */}
            </div>

            {
                news.map((item, index) => {
                    return (
                        <div className='post-list'>
                            <h4><span onClick={() => { // 제목클릭
                                setSelectedTitle(item); //어떤뉴스를눌렀는지 => 저장
                                setModalFlag(!modalFlag); // 모달창on/off전환  // modal 버튼을 true false 로 줬을때
                                setLikeCount(cnt[index]); // 좋아요눌렀을때 바뀌는 값 넣는다(아래 하트옆에span태그에있는거)
                            }}>{news[index]}</span> <span onClick={() => {
                                const newLikes = [...cnt];
                                newLikes[index] += 1;
                                setCnt(newLikes);
                            }}>❤</span> {cnt[index]}</h4>
                            <p>내용 무</p>
                            <button onClick={()=>{
                                
                                let temp = [...news];
                                temp.splice(index,1);
                                setNews(temp);
                                
                                cnt.splice(index, 1);
                                
                            }}>삭제</button>
                        </div>
                    )
                })
            }


            {/* <div className='post-list'>
            <h4 onClick={() => {
                setModalFlag(!modalFlag);
            }}>{item}<span onClick={(event) => {
                event.stopPropagation();   //하트클릭할때 부모요소인 h4까지 같이눌러지는 것을 막아주는거
                likeUp(index) 
                }}>❤</span> {cnt[index]}</h4>
            <p>내용 무</p>
        </div> */}


            {/* <div className='post-list'>
                <h4><span onClick={() => {
                    setModalFlag(!modalFlag);

                    // if(modalFlag){
                    //     setModalFlag(false);
                    // }else{
                    //     setModalFlag(true);
                    // }

                    // setModalFlag(true);
                    //setMc(mc+1);
                }}>{news[0]}</span> <span onClick={() => { setCnt1(cnt1 + 1) }}>❤</span> {cnt1}</h4>
                <p>내용 무</p>
            </div>

            <div className='post-list'>
                <h4>{news[1]} <span onClick={() => { setCnt2(cnt2 + 1) }}>❤</span> {cnt2}</h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>{news[2]} <span onClick={() => { setCnt3(cnt3 + 1) }}>❤</span> {cnt3}</h4>
                <p>내용 무</p>
            </div> */}

            {/* <div className='post-list'>
                <h4>오늘의 뉴스</h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>어제의 뉴스</h4>
                <p>내용 무</p>
            </div>
            <div className='post-list'>
                <h4>내일의 뉴스</h4>
                <p>내용 무</p>
            </div> */}
            <button onClick={() => {
                // news[0] = 'Today News';
                // setNews(news);
                //setNews(['Today News', '어제의 뉴스', '내일의뉴스']);
                let temp = [...news];
                temp[0] = 'Today News';
                //temp.splice(0, 1, 'Today News');
                setNews(temp);
            }}>제목 변경</button>

            <div>
                <input type='text' id='input_news' value={inputText} onChange={(event) => { // value: 입력된값inputText에 저장  onChange: 값이 바뀔때마다 event 실행되는거
                    //console.log(this.value); // 오류!
                    //console.log(event);
                    //console.log(event.target.value);  // event 발생한.. target 이곳에.. value 값.. = (input란에 입력된 값) 
                    setInputText(event.target.value);
                }} />
                <button onClick={() => {
                    if (inputText.trim() == '') {
                        alert('값을 입력해주세요.');
                        return;
                    }

                    // 양측에 있는 띄어쓰기를 미리 제거 후 비교
                    // inputText = inputText.trim();
                    // if (inputText == '') {
                    //     alert('값을 입력해주세요.');
                    //     return;
                    // }

                    // 검사 빡세게 하는경우     길이가0이거나 비어있거나 널이거나 찾을수없거나
                    // if(inputText.length == 0 || inputText == '' || inputText == null || inputText == undefined){
                    //     alert('값을 입력해주세요.');
                    //     return;
                    // }

                    let temp = [...news];
                    temp.push(inputText);
                    setNews(temp);

                    cnt.push(0);

                    setInputText(''); // 버튼누를때 쓴거 지우는거 위에 value={inputText}
                
                    // let temp2 = [...cnt];
                    // temp2.push(cnt2);
                    // setCnt(temp2);


                    //입력된 값 확인
                    //news 배열에 추가저장
                    /*
                    let title = document.getElementById('input_news').value;
                    console.log(title);
                    let temp = [...news];
                    //temp.unshift(title);
                    temp.push(title);
                    setNews(temp);
                    document.getElementById('input_news').value = '';
                    */
                }}>발행</button>
            </div>

            {                 // modal 버튼을 true false 로 줬을때
                modalFlag == true ? <Modal likeCount={likeCount} title={selectedTitle} news={news} setNews={setNews} bgColor={'lightgreen'} /> : null
            }




            {/* {mc%2==0?null:<Modal/>}         modal 버튼을 숫자로 줄때 */}

        </div>
    )
}

export default NewsBlog;