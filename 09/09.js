document.addEventListener('DOMContentLoaded', () => {
 //요소가져오기
 const text1 = document.querySelector('#txt1');
 const text2 = document.querySelector('#txt2');
 const bt1 = document.querySelector('#bt1');
 const bt2 = document.querySelector('#bt2');

 //회문 처리
 bt1.addEventListener('click', (e) => {
  e.preventDefault();
  let s1 = text1.value.replaceAll(' ', '');//replaceAll()함수: 공백없애줌.(소주만병만주소 회문)
  let s2 = '';

  //반복문이용
  // for(let i = s1.length - 1 ; i>=0; i--){
  //  s2 = s2 + s1[i];
  // }

  //split, 배열 이용, 배열의 reverse()함수 사용 가능.
  //배열안의 요소를 다 묶어주는 함수가 join().
  s2 = s1.split('').reverse().join('');

  console.log('s1=', s1);
  console.log('s2=', s2);

  if (s1 == s2) text2.value = '회문입니다.';
  else txt2.value = '회문이 아닙니다.';

 });

 //숫자합계처리, 순회사용
 bt2.addEventListener('click', (e) => {
  e.preventDefault();

  let total = 0;
  for (let c of text1.value) {
   if (!isNaN(c)) {
    total = total + parseInt(c);
   }
  }

  if (total == 0) text2.value = '숫자가 존재하지 않습니다.';
  else text2.value = total;

 });
})