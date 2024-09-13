let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
let isShuffle = false;
let cnt = 0;

document.addEventListener('DOMContentLoaded', () => {

 //요소가져오기
 const cols = document.querySelectorAll('.col');
 const bt = document.querySelector('button');
 const msg = document.querySelector('#msg');

 bt.addEventListener('click', (e) => {
  e.preventDefault();
  if (!isShuffle) {
   isShuffle = true;

   //배열 섞기
   arr.sort(() => Math.random() - 0.5);
   console.log(arr)
   bt.innerHTML = '게임중'

   msg.innerHTML = ' ';
   for(let [idx, col] of cols.entries){
    col.innerHTML = idx +i;
   }
  }

 });

 //div 박스처리
 for (let col of cols) {
  col.addEventListener('click', () => {


   //폭탄이 섞이지 않으면 클릭 불가하도록
   if (!isShuffle) {
    msg.innerHTML = '시작버튼을 누르고 폭탄을 섞으세요';
    return;
   }

   //이미지가 있는 지 확인
   if (col.innerHTML.includes('img')) return; //이미지 중복클릭 막기. return 값으로 콜백함수 빠져나감

//실패인경우 더이상 클릭되지않게
if(msg.innerHTML)

   //let idx = col.getAttribute('id').slice(-1) - 1;//arr 배열의 슬라이스 기능 사용의미 알것
   console.log(idx, arr[idx])


   if (arr[idx] == 0) {
    //하트
    col.innerHTML = '<img src="../img/hart.png">';//innerHtml 이미지첨부 가능
   } else {
    //폭탄
    col.innerHTML = '<img src="../img/boom.png">';
    msg.innerHTML = '<h2>실패</h2>';
    isShuffle = false;//폭탄 나오고 이미지 클릭 막기
    bt.innerHTML = '다시 시작';
   }

   //다시 시작 버튼을 누르면 게임 초기화되도록
   //하트가 8개가 되면
   if(cnt == 8){
    msg.innerHTML = '<h2>성공</h2>';

    //전체 하트
    let i = arr.indexOf(1);
    document.querySelector(`#box${i+1}`).innerHTML = '<img src="../img/hart.png">';


   }

  })
 }
});
//isShuffle 이 false값이 됐을때의 함수를 만들기도 가능. 

 //버튼, 결과알림 문구 정리
