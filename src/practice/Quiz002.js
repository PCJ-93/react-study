import './Quiz002.css';
import { useState } from 'react';
import TextItem from './TextItem';

function Quiz002() {
  let text = ['하나','둘','셋','넷','다섯'];
  let content = ['내용하나','내용둘','내용셋','내용넷','내용다섯'];

  return (
    <div className="App">

      {
        text.map( (item, index)=>{
          return <TextItem text={text[index]} content={content[index]}/>
          //return <TextItem text={item}/>
        })
      }

    </div>
  );
}

export default Quiz002;
