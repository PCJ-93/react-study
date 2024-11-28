// Practice002.js 와 연결된 컴포넌트파일

function ColorBox(props) {
    return (
        <div className='box' style={{ backgroundColor: props.bgColor }}>
            <button onClick={()=>{  // Quiz004 전용 x박스
                props.xBox(props.index);
            }}>X</button>
        </div>
    );
}

export default ColorBox;