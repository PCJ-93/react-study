import './Practice001.css';
import logo from '../logo.svg';
import {useState} from 'react';


function Practice001() {

    let count = ['하나','둘','셋','넷','다섯'];
    let [cnt, setCount] = useState(0);
    // let [txt, setText] = useState('하나');

    return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                {count[cnt]}
            </p>
            
            <button onClick={()=>{
            //{cnt+1<count.length?setCount(cnt+1):setCount(0)};
            {cnt>count.length-2?setCount(0):setCount(cnt+1)};
            // if(txt == '하나'){
            //     setText('둘');
            // }else if(txt == '둘'){
            //     setText('셋');
            // }else{
            //     setText('하나');
            // }
            
        }}>변경버튼</button>
        </header>
    </div>
    );
    
}

export default Practice001;