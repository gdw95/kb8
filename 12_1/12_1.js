
//전역변수
const testAPI = '82ca741a2844c5c180a208137bb92bd7';


//footer 영화상세정보 데이터 가져오기(장르)
const getDetail = (genreNm) => {
  const mvinfo = document.querySelector('#mvinfo');
  let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?`;
  url = `${url}&key=${testAPI}&movieCd=${genreNm}`;

  console.log(url);

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let movieInfo = data.movieInfoResult.movieInfo;
      let gn = movieInfo.genres
                        .map(item =>
                          item.genreNm
                        )
                        .join(' ')//배열을 문자열로
      let companys = movieInfo.companys
                              .map(item =>
                                `${item.companyNm}(${item.companyPartNm})`
                              )//백틱문자로 문자열로->배열
                              .join(' ')//배열을 한 번 더 문자열

      // console.log(movieInfo)
      // console.log(data.movieInfoResult)
      console.log(gn)
      console.log(companys)

      mvinfo.innerHTML = `
        <div>${movieInfo.movieNm} (${movieInfo.openDt})</div>
        <ul>
          <li>장르 : ${gn}</li> 
          <li>출연진 : ${companys}</li>
        </ul>
      ` ;//선언한 변수명 사용

    })
    .catch(err => console.error(err))
  

}







//Open API 데이터 가져오기 ->전역변수로
const getData = (r3, ul, gubun) => {
  console.log('gubun= ', gubun);

  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${r3}`;
  if (gubun !== 'T') {//T가 아니면
    url = `${url}&repNationCd=${gubun}`;
  }

  console.log(url);

  fetch(url)//패치함수
    .then(resp => resp.json())//멈추면
    .then(data => {//json 으로 받아서 하는 일 
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList)


      // let openDt = data.boxOfficeResult.openDt;
      // console.log(openDt)

      let tm = dailyBoxOfficeList.map(item =>
        `<a href="#" onClick="getDetail(${item.movieCd})">
          <li class='mvli'>
            
            <span class='rank'>${item.rank}</span>
            <span class='movieNm'>${item.movieNm}</span>
            <span class='openDt'>${item.openDt}</span>
            <span class='rankInten'>
            ${item.rankInten > 0 ?
          '<span class="spRed">▲</span>' : item.rankInten < 0 ?
            '<span class="spBlue">▼</span>' : '-'}
            ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}
            </span>
          </li>
        </a>`)

      tm = tm.join('')
      ul.innerHTML = tm;
      // console.log(tm)

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

//radio 값 가져오기
const getGubun = () => {
  //radio 요소 가져오기
  const r1 = document.querySelector('#r1');
  const r2 = document.querySelector('#r2');
  const r3 = document.querySelector('#r3');

  console.log("r1 =", r1.checked);
  console.log("r2 =", r2.checked);
  console.log("r3 =", r3.checked);

  if (r1.checked) return r1.vlaue;
  else if (r2.checked) return r2.value;
  else if (r3.checked) return r3.value;

  //radio 버튼의 클릭된 것만 가져오기
  const gubun = document.querySelector('input[name=mvGubun]:checked');
  console.log('gubun =', gubun.value);
  return gubun.value;
}

//footer genreNm 










//DOM 생성 후
document.addEventListener('DOMContentLoaded', () => {

  //요소가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');
  // const fieldset = document.querySelector('fieldset') ;
  // const radios = document.querySelectorAll('input[type=radio]') ; 
  // const radios = document.getElementsByName('mvGubun');
  const radios = document.querySelectorAll('input[name=mvGubun]');


  //어제날짜가져오기
  let yesterday = getYesterday();
  console.log('yesterday :', yesterday);

  //date 요소의 최대값을 설정
  dt.max = yesterday;

  //date 의 기본값
  dt.value = yesterday;

  //gubun 값
  console.log(getGubun());


  //기본 첫 페이지 보이기
  getData(dt.value.replaceAll('-', ''), ul, getGubun());


  //데이터가져오기 날짜가바뀔때마다 데이터값이변하므로 change
  dt.addEventListener('change', () => {

    getData(dt.value.replaceAll('-', ''), ul, getGubun());
  });

  // r3.addEventListener('change', () => {

  //   getData(dt.value.replaceAll('-', ''), ul, getGubun());
  // });
  for (let radio of radios) {
    radio.addEventListener('click', () => {
      if (radio.checked) getData(dt.value.replaceAll('-', ''), ul, radio.value);

    })
  }
})