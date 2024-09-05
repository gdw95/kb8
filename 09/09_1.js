//문자열 연습
let s = 'Hello JS!';


console.log('문자열 : ', s);
console.log('문자열길이 : ', s.length);
console.log('첫번째글자 : ', s.charAt(0));
console.log('첫번째글자 : ', s[0]);
console.log('맨마지막글자 : ', s[s.length - 1]);
console.log('맨마지막글자 : ', s.charAt(s.lenfth - 1));
console.log('맨마지막글자 : ', s.slice(-1));
console.log('**문자열분리 : ', s.split(''));//파이썬에서도 사용.

s = '1';
console.log('숫자확인 : ', isNaN(s));//콘솔 창에 false가 나와야 숫자.





//문자열 배열 순회
for(let c of s ){
 console.log(c);
}
for(let i in s){
 console.log(i, '=>', s[i]);
}

//문자열 검색(확인), 함수 지원
console.log('JS문자열 확인 : ', s.includes('JS'));
console.log('JS문자열 확인 : ', s.indexOf('JS'));

//문자열 특정 부분 추출
console.log('JS문자열 자르기 : ', s.substring(5.0));
console.log('JS문자열 자르기 : ', s.slice('JS'));

