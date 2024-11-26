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

    let [cnt, setCnt] = useState([0,0,0]);

    //let [mc, setMc] = useState(0);  // modal 버튼을 숫자로 줄때

    let [modalFlag, setModalFlag] = useState(false);   // modal 버튼을 true false 로 줬을때
    return (
        <div>
            <div className='black-nav'>
                <h4>Blog Header</h4>
                <div style={{ color: 'orange', fontSize: '20px' }}>{title}</div>
                    {/* jsx 안에 스타일은 객체형식으로 넣어준다 */}
            </div>

            {
                news.map((item,index) => {
                    return (
                        <div className='post-list'>
                            <h4><span onClick={() => {
                                setModalFlag(!modalFlag);
                            }}>{news[index]}</span> <span onClick={() => {
                                const newLikes = [...cnt];
                                newLikes[index] += 1;
                                setCnt(newLikes);
                                }}>❤</span> {cnt[index]}</h4>
                            <p>내용 무</p>
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
                //temp[0] = 'Today News';
                temp.splice(0, 1, 'Today News');
                setNews(temp);
            }}>제목 변경</button>
            {                 // modal 버튼을 true false 로 줬을때
                modalFlag == true ? <Modal news={news} setNews={setNews} bgColor={'lightgreen'} /> : null
            }


            {/* {mc%2==0?null:<Modal/>}         modal 버튼을 숫자로 줄때 */}

        </div>
    )
}

export default NewsBlog;