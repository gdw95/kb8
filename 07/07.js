//select값 변경 함수
const handleChange = (s1, s2, lb1, lb2, t1, t2) => {
 if (s1.value == 'C') s2.value = 'F';
 else s2.value = 'C';

 lb1.innerHTML = s1.value;
 lb2.innerHTML = s2.value;

 t1.value = '';
 t2.value = '';

}



document.addEventListener('DOMContentLoaded', () => {
 //요소가져오기
 const sel1 = document.querySelector('#sel1');
 const sel2 = document.querySelector('#sel2');

 const txt1 = document.querySelector('#tex1');
 const txt2 = document.querySelector('#tex2');

 const lb1 = document.querySelector('label[for=txt1]');//속성값
 const lb2 = document.querySelector('label[for=txt2]');

 // console.log(lb1, lb2) //콘솔로그로 확인해보기 

 //selct box, 셀1의 값이 바뀌면 셀2의 값도 바뀜(change). 클릭이벤트X, 값은 옵션밸류값으로들고옴
 sel1.addEventListener('change', () => {
  // if (sel1.value == 'C') sel2.value = 'F';//나의 값이 뭔지에 따라 sel2 값이 바뀜
  // else sel2.value = 'C'; //한 줄 코딩 중괄호 생략 가능

  handleChange(sel1, sel2, lb1, lb2, txt1, txt2);

 });

 sel2.addEventListener('change', () => {
  // if (sel2.value == 'C') sel1.value = 'F';
  // else sel1.value = 'C';

  handleChange(sel2, sel1, lb2, lb1, txt1, txt2);

 });//함수로 짜면 더 간단해짐. 돔컨텐트 위에 짜도 가능. 

 txt1.addEventListener('input', () => {
  if (sel1.value === 'C') {
   //섭씨를 화씨로
   txt2.value = (parseFloat(txt1.value) * (9 / 5) + 32).toFixed(3);//형변환 해야함
  }
  else {
   //화씨를 섭씨로
   txt2.value = ((parseFloat(txt1.value) - 32) * (5 / 9)).toFixed(3);
  }

 });

});