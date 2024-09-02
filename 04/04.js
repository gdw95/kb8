//dom 생성된 후 이벤트를 감지
document.addEventListener('DOMContentLoaded', () => {
 //버튼의 요소 가져오기, 2 가지 방법
 const bt1 = document.getElementById('bt1');
 const bt2 = document.querySelector('#bt2');
 const bt3 = document.querySelector('#bt3');
 const msg = document.querySelector('#msg');

 // 버튼의 이벤트 달기
 bt1.addEventListener('click', () => {
  alert('function함수');
 });
 bt2.addEventListener('click', () => {
  alert('화살표 함수');
 });
 bt3.addEventListener('click', () => {
  // msg.innerHTML = '<h2>랜덤수생성</h2>';
  //자바스크립트는 const(상수) 아니면 let(변수)
  let n =Math.floor(Math.random()*6)+1;
  console.log(n);
   msg.innerHTML = `<h2>${bt3.textContent}:<span>${n}</span></h2>`;
 });
});