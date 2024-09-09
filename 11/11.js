document.addEventListener('DOMContentLoaded', () => {
 //요소가져오기
 const txt1 = document.querySelector('#txt1');
 const sec1 = document.querySelectorAll('.secBt1');
 const sec2 = document.querySelectorAll('.secBt2');
 const sec3 = document.querySelectorAll('.secBt3');
 const secBt41 = document.querySelector('#secBt41');
 const secBt42 = document.querySelector('#secBt42');


 //오브젝트 생성
let obj = {//키와 값으로 분리되어 출력
 apple: '❤',
 carrot: '😘',
 banana: '💕',//trailing 쉼표
};//이모지도 문자열


//json, object
let jsonDt;//json 은 문자열로 출력됨


secBt41.addEventListener('click', (e)=>{
 e.preventDefault();

 // jsonDt = JSON.stringfly(obj);
 jsonDt = JSON.stringify(obj);
 console.log('obj = ', obj);
 console.log('obj = ', obj["apple"]);
 console.log('obj = ', jsonDt);
 // console.log('obj = ', jsonDt["apple"]);
})


secBt42.addEventListener('click' , (e)=>{
 e.preventDefault();

 let obj2 = JSON.parse(jsonDt) ;

 console.log('obj2 = ', obj2) ;
 console.log('obj2 = ', obj2["apple"]) ; 
})


 //추가
 for (let bt of sec1) {
  bt.addEventListener('click', (e) => {
   e.preventDefault();

   let addItem = bt.innerHTML.replace('추가', '');
   txt1.value = txt1.value + addItem;
   console.log(bt.innerHTML);

   // let deleteItem = bt.innerHTML.replace('삭제', '');
   // txt1.value = txt1.value - deleteItem;
   // console.log(bt.innerHTML);
  })
 }

 //삭제
 for (let bt of sec2) {
  bt.addEventListener('click', (e) => {
   e.preventDefault();
   let addItem = bt.innerHTML.replace('삭제', '');
   console.log('addItem', addItem);

   //case1
   // txt1.value = txt1.value.replaceAll(addItem,'');<<매우간단하게


   let tmArr = Array.from(txt1.value);//이모지형태로 분리
   // let tmArr = Array.txt1.value.split();//유니코드 형태로 분리

   //case2
   // for(let i=0; i<tmArr.length; i++){
   //  if (tmArr[i] == addItem) tmArr[i]='';
   // }

   //case3
   tmArr = tmArr.filter(item => item != addItem);

   tmArr = tmArr.join('');
   txt1.value = tmArr;
   console.log(tmArr);

  })
 }

 //자료변경
 for (let bt of sec3) {
  bt.addEventListener('click', (e) => {
   e.preventDefault();

   let items = bt.innerHTML.split('→');
   console.log('items = ', items);

   //txt1.value = txt1.value.replaceAll(items[0], items[1]);

   let tmArr = Array.from(txt1.value);
   tmArr = tmArr.map(item => item == items[0] ? items[1] : item);
   txt1.value = tmArr.join('');
  

  })
 }

});