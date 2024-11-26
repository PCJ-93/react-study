function TextItem({ text, content }) {
    return (
        <div className='textItem'>
            <p className='title'>제목 : {text}</p>
            <p>내용 : {content}</p>
        </div>
    )
}

// function TextItem(props){
//     return(
//         <div className='textItem'>
//         <p className='title'>제목 : {props.text}</p>
//         <p>내용 : {props.content}</p>
//       </div>
//     )
// }

export default TextItem;