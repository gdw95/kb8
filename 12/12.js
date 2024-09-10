//Open API 데이터 가져오기
const getData = (selDt, ul) => {
 console.log(selDt)
 const testAPI = '82ca741a2844c5c180a208137bb92bd7';
 let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
 url = `${url}key=${testAPI}&targetDt=${selDt}`;

 console.log(url);

 fetch(url)//패치함수
  .then(resp => resp.json())//멈추면
  .then(data => {//json 으로 받아서 하는 일 
   let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
   console.log(dailyBoxOfficeList)

   
   let openDt = data.boxOfficeResult.openDt;
   console.log(openDt)

   let tm = dailyBoxOfficeList.map(item =>
    `<li class='mvli'>
            <span class='rank'>${item.rank}</span>
            <sapn class='movieNm'>${item.movieNm}</sapn>
            <span class='openDt'>${item.openDt}</span>
          </li>`)

   tm = tm.join('')
   ul.innerHTML = tm;
   console.log(tm)

 
  })
  .catch(err => console.error(err));//오류가나면
}


//어제날짜함수생성
const getYesterday = () => {
 const yesterday = new Date();//const 상수로 값변경불가이지만 바꿀 것
 yesterday.setDate(yesterday.getDate() - 1);

 const year = yesterday.getFullYear();
 let month = yesterday.getMonth() + 1;
 let day = yesterday.getDate();

 console.log('yesterday :', yesterday);

 //월, 일 2자리
 month = month < 10 ? '0' + month : month;
 day = day < 10 ? '0' + day : day;

 // month = `0${month}`.slice(-2);
 // month = `${month}`.padStart(2,0);//제공되어지는 함수
 // console.log("month = ", month);

 //yyyy-mm-dd
 return `${year}-${month}-${day}`;

}


//DOM
document.addEventListener('DOMContentLoaded', () => {//돔이다만들어지고나서~

 //요소가져오기
 const dt = document.querySelector('#dt');
 const ul = document.querySelector('.sec > ul');

 //데이터가져오기(어제날짜가져오기)
 let yesterday = getYesterday();

 console.log('yesterday :', yesterday);

 //date 요소의 최대값을 설정
 dt.max = yesterday;

 //데이터가져오기 날짜가바뀔때마다 데이터값이변하므로 change
 dt.addEventListener('change', () => {

  getData(dt.value.replaceAll('-', ''), ul);
 })

});