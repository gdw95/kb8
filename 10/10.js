document.addEventListener('DOMContentLoaded', () => {

 //버튼이 눌러졌을때 중복없이 숫자 7개
 //배열의 랭스가 7. 
 //while문 사용. include 사용. for문X
 //요소가져오기
 const divNum = document.querySelector('#divNum');
 const divplus = document.querySelector('.divplus');//클래스.//id#
 const divBounus = document.querySelector('#divBonus');
 const bt = document.querySelector('.sec>button');

 //요소숨기기
 divNum.style.display = 'none';
 divplus.style.display = 'none';
 divBounus.style.display = 'none';//함수로 만들기 가능

 //버튼클릭
 bt.addEventListener('click', (e) => {
  e.preventDefault();

  let arr = [];
  while (arr.length < 7) {//7개의 숫자를 만들어서 배열에 집어넣어야함.
   let n = Math.floor(Math.random() * 45) + 1;//1~45
   if (!arr.includes(n)) arr.push(n);
  }

  let arrBonus = arr.splice(6, 1);
  arr.sort((a, b) => a - b);
  console.log(arr);
  console.log(arrBonus);

  //map()
  arr = arr.map(item => `<span class='sp${Math.floor(item / 10)}'>${item}</span>`);
  arr = arr.join('');
  divNum.innerHTML = arr;
  console.log(arr);

  arrBonus = arrBonus.map(item => `<span class='sp${Math.floor(item / 10)}'>${item}</span>`);
  arrBonus = arrBonus.join('');
  divNum.innerHTML = arr;
  console.log(arrBonus);

  //요소 노출
 divNum.style.display = 'block';
 divplus.style.display = 'block';
 divBounus.style.display = 'block';//함수로 만들기 가능

 })
});