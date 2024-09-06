let arr = [1,2,3,4,5];

console.log('arr = ', arr)
console.log('arr 개수 : ', arr.length)

//배열 요소 접근
console.log('맨 처음 요소 접근 : ', arr[0])
console.log('두번째 요소 접근 : ', arr[1])

//배열의 전체 요소에 접근 : 배열의 순회, 여러개의 요소에 어떻게 접근하는 지.
console.log('for')
for (let i = 0; i< arr.length; i++){
 console.log(`${i}번째 : ${arr[i]}`);
}
console.log('for ... in')
for (let i in arr){
 console.log(`${parseInt(i)+1}번째 : ${arr[i]}`);
}
console.log('for ... of')
for(let item of arr){
 console.log(`${item} : ${item % 2 == 0 ? "짝" : "홀"}`);//삼항연산자 수식 사용 가능
}

for(let [i, item] of arr.entries()){//사용빈도 많음. 오류
 console.log(`${parseInt(i)+1}번째 : ${item} : ${item % 2 == 0 ? "짝" : "홀"}`);//삼항연산자 수식 사용 가능
}

arr.forEach((item,i) => {
 console.log(`${item} : ${item % 2 == 0 ? "짝" : "홀"}`);
})

//arr = []
//arr.length = 0;
//console.log('arr : ', arr)
//순서로 구분 배열(array), 키값으로 구분 오브젝

arr.push(6)//배열에 데이터 추가
console.log('arr pushh :', arr)
arr.pop()//배열에 데이터 없애기
console.log('arr pop :', arr)

arr.unshift(6)//맨앞에 데이터추가
console.log('arr unshipt :', arr)
arr.shift()
console.log('arr shipt :', arr)


//스플라이스로 삭제
arr.splice(2,1)//splice(인덱스, 개수)
console.log('arr splice : ', arr)

//스플라이스로 변경
arr.splice(2,1,'a');
console.log('arr splice : ', arr)

//스플라이스로 추가
arr.splice(2,0,3);
console.log('arr splice : ', arr)


for(let item of arr){
 let item2 = item*2;
 arr.push(item2);
}
console.log('arr for of 결과 arr2 : ', arr2);//아래 map()와 동일하게 for문


arr2=[];
//map(), // map(항목, 인덱스)
//콜백함수의 매개변수가 1개이면 ()생략가능
arr2 = arr.map((item)=>{
 return item*2;
});
console.log('arr map 결과 arr2 : ', arr2);

//콜백함수의 바디에 return 만 있으면 {}와 return 생략가능
arr2 = arr.map(item=> item*2);//map()을 사용하면 코드간략화가 가능.
console.log('arr map 결과 arr2 : ', arr2);


arr = [1,2,3,4,5];
arr2 = arr.map((item)=>{
let item2 = item*2;
return item2;
});
console.log('arr map 결과: ', arr2)

//filter()
arr2 = arr.filter(item=> item % 2 == 0);
console.log('arr filter 결과: ', arr2)//filter() 의 특징: 조건에 맞는 결과값이 push가 됨.

//sort()
arr = [4,5,2,1,3]
console.log(`${arr}=>정렬 ${arr.sort((a, b)=> b-a)}`)