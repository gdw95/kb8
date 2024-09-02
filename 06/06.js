//dom 생성된 후 이벤트를 감지
document.addEventListener('DOMContentLoaded', () => {

  const bt1 = document.querySelector('button');
  const img = document.querySelector('#msg > img');

  // 버튼의 이벤트 달기
  bt1.addEventListener('click', () => {
    let n= Math.floor(Math.random()*6)+1;//1~6
    img.setAttribute('src', `../img/${n}.png`);
    img.setAttribute('alt', `${n}`);
  });

});