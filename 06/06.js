document.addEventListener('DOMContentLoaded', () => {

  //이미지 가져오기
  const imgs = document.querySelectorAll('.dice > img');
  console.log(imgs);

  //버튼 가져오기
  const bts = document.querySelectorAll('button');
  console.log(bts);

  //결과 가져오기
  const msg = document.querySelector('#msg');
  console.log(msg);

  //버튼클릭 0~5번 주사위 for문 이용
  // bts[0].addEventListener('click', () =>{});
    for (let bt of bts){
      // console.log(bt);
      bt.addEventListener('click',() =>{
        //컴퓨터 랜덤수
        let comN = Math.floor(Math.random()*6) + 1; //1~6
        imgs[0].setAttribute('src', `../img/${comN}.png`);//속성을바꿔줄때 setAttribute 사용
        imgs[0].setAttribute('alt', `${comN}.png`);

      //사용자 선택
      console.log(bt.textContent.charAt(0));
      let userN = parseInt(bt.textContent.charAt(0))//숫자를 문자데이터로 바꿔줌
      imgs[1].setAttribute('src', `../img/${userN}.png`);
      imgs[1].setAttribute('alt', `${userN}.png`);

      //결과출력
      if(comN === userN) {
        msg.textContent = '맞음';
      }
      else {
        msg.textContent = '틀림';
      }
      });
    }
  
});