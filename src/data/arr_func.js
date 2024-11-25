// map() 함수 설명

// 기본 배열
let arr = [10,20,30,1,2];

//javascript 유용한 함수

// 1) map
arr.map(()=>{     // 반복 실행 하면서 return 가능..
    console.log('arr map');
});

arr.forEach(()=>{ // 반복문 내부에 코드실행 하고 끝..
    console.log('arr forEach');
});

arr.map((item)=>{     // map내부 함수 매개변수 (item) 배열 안에 값 주입
    console.log(item);
});

arr.map((item, index)=>{     // map내부 함수 매개변수 (item,index) 배열 안에 값과 인덱스 주입
    console.log('값:'+item+' index:'+index+' 배열[index]:'+arr[index]);
});

let result1 = arr.map(()=>{ // [ 99, 99, 99, 99, 99 ]
    return 99;
});
console.log(result1);

let result2 = arr.map((item)=>{     // [ undefined, undefined, undefined, undefined, undefined ]
    console.log(item);
});
console.log(result2);

let result3 = arr.map((item)=>{  // 매개변수(item)로 배열값 순서대로 사용
    return '보유한 값: '+ item;
});
console.log(result3);

let menuArr = ['우동', '라면', '김밥'];
let result5 = menuArr.map((item, index)=>{
    return '<p>'+item+'<p>';
});
console.log(result5);

// ()=>{return data} ,  ()=>data
let result6 = menuArr.map( (item, index)=>'<p>'+item+'<p>' );
console.log(result6);


// let arr = [10,20,30,1,2];

// 2) filter // 필터링
let result7 = arr.filter((value)=>{  //매개변수명은 마음대로. item,value...~~
    return value != 20;  // 조건 결과가 참인 값들만 return
});
console.log(result7);


// 3) find   값을 찾는거
let result8 = arr.find((value)=>{
    return value == 30;
});
console.log(result8);


// 4) findIndex   인덱스값을 찾는거
let result9 = arr.findIndex((value, index)=>{
    return value == 20;
});
console.log(result9);

// find : 찾는값이 없으면 undfined
let result10 = arr.find((value)=>{  
    return value == 50;
});
console.log(result10);

// findIndex : 찾는값이 없으면 -1
let result11 = arr.findIndex((value, index)=>{  
    return value == 50;
});
console.log(result11);



let [n1, n2, n3] = [10, 20, 30];
console.log(n1);
console.log(n2);
console.log(n3);

//let [count, setCount] = [return 0, return function set함수()]

let obj = {
    num1:30,
    num2:50
};
console.log(obj.num2);

let {num1, num2} = obj;
console.log(num1);
console.log(num2);
