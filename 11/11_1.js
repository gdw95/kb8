
//오브젝트 생성
let obj = {
 apple: '❤',
 carrot: '😘',
 banana: '💕',//trailing 쉼표
};//이모지도 문자열


//jason패키지에서 데이터를 땡겨와서 
//오브젝 접근
console.log(obj['apple']);
console.log(obj.apple);

//오브젝의 순회(전체 사용하기)
for(let k in obj){//key값
 console.log(`${k} => ${obj[k]}`);
}
for(let k of Object.keys(obj)){
 console.log(`${k} => ${obj[k]}`);
}
for(let k of Object.values(obj)){
 console.log(`${k}`);
}
for(let [k, item] of Object.entries(obj)){//구조분해할당으로 가져옴
 console.log(`${k} => ${item}`);
}

//자료추가
obj['수박'] = '🎶';
console.log(obj);

obj['수박'] = '🐱‍🐉';
console.log(obj)

//자료삭제
delete obj['수박'];
console.log(obj);

//오브젝 병합
obj2 = {orange: '😎'};
obj = {...obj, ...obj2};
console.log(obj);

//