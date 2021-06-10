function test1(){ //보구1
  if(document.getElementById("122-4").checked)
  {document.getElementById("133-4").checked = false;
  document.getElementById("144-4").checked = false;
  document.getElementById("133-1").checked = true;
  document.getElementById("144-1").checked = true;}
}
function test2(){ //보구2
  if (document.getElementById("133-4").checked)
  {document.getElementById("122-4").checked = false;
  document.getElementById("144-4").checked = false;
  document.getElementById("122-1").checked = true;
  document.getElementById("144-1").checked = true;}
}
function test3(){ //보구3
  if (document.getElementById("144-4").checked)
  {document.getElementById("122-4").checked = false;
  document.getElementById("133-4").checked = false;
  document.getElementById("122-1").checked = true;
  document.getElementById("133-1").checked = true;}
}
function test11(){ //엑스트라 x 시 해제
  if(document.getElementById("122-5").checked || document.getElementById("133-5").checked || document.getElementById("144-5").checked)
  {document.getElementById("155-1").checked = false;}
  else if(document.getElementById("122-5").checked == false || document.getElementById("133-5").checked == false || document.getElementById("144-5").checked == false)
  {document.getElementById("155-1").checked = true;}

}
function test21(){ // 체크박스 1
  if (document.getElementById("122-4").checked || document.getElementById("122-5").checked)
  {document.getElementById("166-1").checked = false;}
}
function test22(){ // 체크박스 2
  if (document.getElementById("133-4").checked || document.getElementById("133-5").checked)
  {document.getElementById("166-2").checked = false;}
}
function test23(){ // 체크박스 3
  if (document.getElementById("144-4").checked || document.getElementById("144-5").checked)
  {document.getElementById("166-3").checked = false;}
}
function A00(){ //atk
const aa = Number(document.getElementById("11-1").value);
return aa;
}
function B00(){ //0.23
const aa = Math.round(23)/100;
return aa;
}
function C01(){ //버스터 첫수 보너스(0.5) (보구 포함)
  let aa;
  if(document.getElementById("122-3").checked || (document.getElementById("111-3").checked && document.getElementById("122-4").checked))
  {aa = Math.round(5)/10;}
  else{aa=0;}
return aa;
}
function C02_1_1(){ // 평1st a 1 q 0.8 b 1.5
  let aa;
  if(document.getElementById("122-1").checked)
  {aa = 1;}
  else if(document.getElementById("122-2").checked)
  {aa = Math.round(8)/10;}
  else if(document.getElementById("122-3").checked)
  {aa = Math.round(15)/10;}
  else {aa=0;};
  return aa;
}
function C02_1_2(){ // 평2nd a 1.2 q 0.96 b 1.8
  let aa;
  if(document.getElementById("133-1").checked)
  {aa = Math.round(12)/10;}
  else if(document.getElementById("133-2").checked)
  {aa = Math.round(96)/100;}
  else if(document.getElementById("133-3").checked)
  {aa = Math.round(18)/10;}
  else {aa=0;};
  return aa;
}
function C02_1_3(){ // 평3rd a 1.4 q 1.12 b 2.1
  let aa;
  if(document.getElementById("144-1").checked)
  {aa = Math.round(14)/10;}
  else if(document.getElementById("144-2").checked)
  {aa = Math.round(112)/100;}
  else if(document.getElementById("144-3").checked)
  {aa = Math.round(21)/10;}
  else {aa=0;};
  return aa;
}
function C02_2(){ //보 aqb 1-0.8-1.5
  let aa;
  if(document.getElementById("111-1").checked && 
  (document.getElementById("122-4").checked || document.getElementById("133-4").checked || document.getElementById("144-4").checked))
  {aa = 1;}
  else if(document.getElementById("111-2").checked && 
  (document.getElementById("122-4").checked || document.getElementById("133-4").checked || document.getElementById("144-4").checked))
  {aa = Math.round(8)/10;}
  else if(document.getElementById("111-3").checked && 
  (document.getElementById("122-4").checked || document.getElementById("133-4").checked || document.getElementById("144-4").checked))
  {aa = Math.round(15)/10;}
  else {aa=0;};
  return aa;
}
function C03_1_1(){ //#커맨드버프1st-아퀵버엑(색뻥)
  let aa;
  if(document.getElementById("122-1").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-1").value) - Number(document.getElementById("44-11").value) +
  Number(document.getElementById("44-21").value) - Number(document.getElementById("44-31").value) ) / 100;}
  else if(document.getElementById("122-2").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-2").value) - Number(document.getElementById("44-12").value) +
  Number(document.getElementById("44-22").value) - Number(document.getElementById("44-32").value) ) / 100;}
  else if(document.getElementById("122-3").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-3").value) - Number(document.getElementById("44-13").value) +
  Number(document.getElementById("44-23").value) - Number(document.getElementById("44-33").value) ) / 100;}
  else {aa=1;};
  return aa;
}
function C03_1_2(){ //#커맨드버프2nd-아퀵버엑(색뻥)
  let aa;
  if(document.getElementById("133-1").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-1").value) - Number(document.getElementById("44-11").value) +
  Number(document.getElementById("44-21").value) - Number(document.getElementById("44-31").value) ) / 100;}
  else if(document.getElementById("133-2").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-2").value) - Number(document.getElementById("44-12").value) +
  Number(document.getElementById("44-22").value) - Number(document.getElementById("44-32").value) ) / 100;}
  else if(document.getElementById("133-3").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-3").value) - Number(document.getElementById("44-13").value) +
  Number(document.getElementById("44-23").value) - Number(document.getElementById("44-33").value) ) / 100;}
  else {aa=1;};
  return aa;
}
function C03_1_3(){ //#커맨드버프3rd-아퀵버엑(색뻥)
  let aa;
  if(document.getElementById("144-1").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-1").value) - Number(document.getElementById("44-11").value) +
  Number(document.getElementById("44-21").value) - Number(document.getElementById("44-31").value) ) / 100;}
  else if(document.getElementById("144-2").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-2").value) - Number(document.getElementById("44-12").value) +
  Number(document.getElementById("44-22").value) - Number(document.getElementById("44-32").value) ) / 100;}
  else if(document.getElementById("144-3").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-3").value) - Number(document.getElementById("44-13").value) +
  Number(document.getElementById("44-23").value) - Number(document.getElementById("44-33").value) ) / 100;}
  else {aa=1;};
  return aa;
}
function C03_1_4(){ //#커맨드버프4th-엑(색뻥)
  let aa;
  if(document.getElementById("155-1").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-5").value) - Number(document.getElementById("44-15").value) +
  Number(document.getElementById("44-25").value) - Number(document.getElementById("44-35").value) ) / 100;}
  else {aa=1;};
  return aa;
}
function C03_2(){ //#커맨드버프-보(색뻥)
  let aa;
  if((document.getElementById("111-1").checked) &&
  (document.getElementById("122-4").checked || document.getElementById("133-4").checked || document.getElementById("144-4").checked))
  {aa = Math.round(100 + Number(document.getElementById("44-1").value) - Number(document.getElementById("44-11").value) +
  Number(document.getElementById("44-21").value) - Number(document.getElementById("44-31").value) ) / 100;;}
  else if((document.getElementById("111-2").checked) &&
  (document.getElementById("122-4").checked || document.getElementById("133-4").checked || document.getElementById("144-4").checked))
  {aa = Math.round(100 + Number(document.getElementById("44-2").value) - Number(document.getElementById("44-12").value) +
  Number(document.getElementById("44-22").value) - Number(document.getElementById("44-32").value) ) / 100;;}
  else if((document.getElementById("111-3").checked) &&
  (document.getElementById("122-4").checked || document.getElementById("133-4").checked || document.getElementById("144-4").checked))
  {aa = Math.round(100 + Number(document.getElementById("44-3").value) - Number(document.getElementById("44-13").value) +
  Number(document.getElementById("44-23").value) - Number(document.getElementById("44-33").value) ) / 100;;}
  else {aa=1;}
  return aa;
}
function D00(){ //클래스계수
  let ele = document.getElementsByName("88"); 
  for(i = 0; i < ele.length; i++) {
    if(ele[i].checked)
    checked1_value = Math.round(100 * Number(ele[i].value)) /100};
  return checked1_value;
}
function E00(){ //클래스상성
  let ele = document.getElementsByName("99"); 
  for(i = 0; i < ele.length; i++) {
    if(ele[i].checked)
    checked2_value = Math.round(10 * Number(ele[i].value)) /10};
  return checked2_value;
}
function F00(){ //히든상성
  let ele = document.getElementsByName("100"); 
  for(i = 0; i < ele.length; i++) {
    if(ele[i].checked)
    checked3_value = Math.round(10 * Number(ele[i].value)) /10};
  return checked3_value;
}
function H00(){ //크리티컬 계수2
  let aa;
  if(document.getElementById("166-1").checked || document.getElementById("166-2").checked || document.getElementById("166-3").checked)
  {aa = 2;}
  else {aa=1;}
  return aa;
}
function I00(){ // 아퀵버브체는 3.5 x가1개이상은0 아닌경우는 브체이므로2
  let aa;
  if(((document.getElementById("122-1").checked || (document.getElementById("111-1").checked && document.getElementById("122-4").checked))
  && (document.getElementById("133-1").checked || (document.getElementById("111-1").checked && document.getElementById("133-4").checked))
  && (document.getElementById("144-1").checked || (document.getElementById("111-1").checked && document.getElementById("144-4").checked))) 
||
  ((document.getElementById("122-2").checked || (document.getElementById("111-2").checked && document.getElementById("122-4").checked))
  && (document.getElementById("133-2").checked || (document.getElementById("111-2").checked && document.getElementById("133-4").checked))
  && (document.getElementById("144-2").checked || (document.getElementById("111-2").checked && document.getElementById("144-4").checked)))
||
  ((document.getElementById("122-3").checked || (document.getElementById("111-3").checked && document.getElementById("122-4").checked))
  && (document.getElementById("133-3").checked || (document.getElementById("111-3").checked && document.getElementById("133-4").checked))
  && (document.getElementById("144-3").checked || (document.getElementById("111-3").checked && document.getElementById("144-4").checked)))
  )
  {aa = Math.round(35) / 10 ;}
  else if(document.getElementById("122-5").checked || document.getElementById("133-5").checked || document.getElementById("144-5").checked){aa=0;}
  else {aa=2;}
return aa;
}
function J00(){ // 공방버프
  let aa = Math.round(100 + Number(document.getElementById("22-1").value) - Number(document.getElementById("22-2").value) +
  Number(document.getElementById("22-3").value) - Number(document.getElementById("22-4").value) ) / 100;
  return aa;
}
function K01_1_1(){ // 크리티컬버프 크리안터지면0-1st평 엑스트라제외
  let aa;
  if((document.getElementById("122-1").checked || document.getElementById("122-2").checked || document.getElementById("122-3").checked)
  && document.getElementById("166-1").checked)
  {aa=Math.round(100 + Number(document.getElementById("55-1").value) - Number(document.getElementById("55-2").value)) / 100;}
  else {aa=0;}
  return aa;
}
function K01_1_2(){ // 크리티컬버프 크리안터지면0-2nd평 엑스트라제외
  let aa;
  if((document.getElementById("133-1").checked || document.getElementById("133-2").checked || document.getElementById("133-3").checked)
      && document.getElementById("166-2").checked)
      {aa=Math.round(100 + Number(document.getElementById("55-1").value) - Number(document.getElementById("55-2").value)) / 100;}
  else {aa=0;}
  return aa;
}
function K01_1_3(){ // 크리티컬버프 크리안터지면0-3rd평 엑스트라제외
  let aa;
  if((document.getElementById("144-1").checked || document.getElementById("144-2").checked || document.getElementById("144-3").checked)
      && document.getElementById("166-3").checked)
  {aa=Math.round(100 + Number(document.getElementById("55-1").value) - Number(document.getElementById("55-2").value)) / 100;}
  else {aa=0;}
  return aa;
}
function K01_2(){ // 턴수특공버프-평
  let aa;
  if(document.getElementById("122-1").checked || document.getElementById("122-2").checked || document.getElementById("122-3").checked
    || document.getElementById("133-1").checked || document.getElementById("133-2").checked || document.getElementById("133-3").checked
    || document.getElementById("144-1").checked || document.getElementById("144-2").checked || document.getElementById("144-3").checked
    || document.getElementById("155-1").checked)
  {aa = Math.round(100 + Number(document.getElementById("66-1").value)) / 100;}
  else {aa=0;}
  return aa;
}
function K02(){ // (보구버프(보뻥) + 특공버프)-보
  let aa;
  if(document.getElementById("122-4").checked || document.getElementById("133-4").checked || document.getElementById("144-4").checked)
  {aa = Math.round(100 + Number(document.getElementById("44-4").value) - Number(document.getElementById("44-14").value) +
  Number(document.getElementById("44-24").value) - Number(document.getElementById("44-34").value) +
  Number(document.getElementById("66-1").value)) / 100;}
  else {aa=1;}
  return aa;
}
function L00(){ //버스터체인보너스(ATK*0.2)
  let aa;
  if((document.getElementById("122-3").checked || (document.getElementById("111-3").checked && document.getElementById("122-4").checked))
  && (document.getElementById("133-3").checked || (document.getElementById("111-3").checked && document.getElementById("133-4").checked))
  && (document.getElementById("144-3").checked || (document.getElementById("111-3").checked && document.getElementById("144-4").checked)))
  {aa = Math.round(2 * Number(document.getElementById("11-1").value)) / 10 ;}
  else{aa=0;}
return aa;
}
function M00(){ // 추가데미지
  let aa = Number(document.getElementById("77-1").value) - Number(document.getElementById("77-2").value) +
  Number(document.getElementById("77-3").value)
  return aa;
}
function N00(){ // 보구배율
  let aa = Math.round(Number(document.getElementById("11-2").value)) / 100 ;
  return aa;
}
function O00(){ // 보구특공
  let aa = Math.round(100 + Number(document.getElementById("66-2").value)) / 100;
  return aa;
}


var arr_nonp = [0,0,0,0]; //1~4번째 평타 array
var arr_np = [0,0,0]; //1~3번째 보구 array
var arr_result = [0,0,0,0]; //1~4번째 카드 최종결과  array

function ZZZ(){ //카드 체크 검사
  if(document.getElementById("122-1").checked || document.getElementById("122-2").checked || document.getElementById("122-3").checked)
  {arr_nonp[0] = A00() * B00() * (C01() + C02_1_1() * C03_1_1()) * D00() * E00() * F00() * H00() * J00() * (K01_1_1() + K01_2()) + L00() + M00();}
  if(document.getElementById("133-1").checked || document.getElementById("133-2").checked || document.getElementById("133-3").checked)
  {arr_nonp[1] = A00() * B00() * (C01() + C02_1_2() * C03_1_2()) * D00() * E00() * F00() * H00() * J00() * (K01_1_2() + K01_2()) + L00() + M00();}
  if(document.getElementById("144-1").checked || document.getElementById("144-2").checked || document.getElementById("144-3").checked)
  {arr_nonp[2] = A00() * B00() * (C01() + C02_1_3() * C03_1_3()) * D00() * E00() * F00() * H00() * J00() * (K01_1_3() + K01_2()) + L00() + M00();}

  if(document.getElementById("155-1").checked)
  {arr_nonp[3] = A00() * B00() * (C01() +             C03_1_4()) * D00() * E00() * F00() * I00() * J00() *  K01_2()              + L00() + M00();}

  if(document.getElementById("122-4").checked)
  {arr_np[0] = A00() * B00() * (C02_2() * C03_2()) * D00() * E00() * F00() * J00() * K02() * N00() * O00() + M00();}
  if(document.getElementById("133-4").checked)
  {arr_np[1] = A00() * B00() * (C02_2() * C03_2()) * D00() * E00() * F00() * J00() * K02() * N00() * O00() + M00();}
  if(document.getElementById("144-4").checked)
  {arr_np[2] = A00() * B00() * (C02_2() * C03_2()) * D00() * E00() * F00() * J00() * K02() * N00() * O00() + M00();}
  if(document.getElementById("122-5").checked)
  {arr_nonp[0] = 0;
  arr_np[0] = 0;
  arr_nonp[3] = 0;}
  if(document.getElementById("133-5").checked)
  {arr_nonp[1] = 0;
  arr_np[1] = 0;
  arr_nonp[3] = 0;}
  if(document.getElementById("144-5").checked)
  {arr_nonp[2] = 0;
  arr_np[2] = 0;
  arr_nonp[3] = 0;}
}
function arr(){ // 최종 배열 
  if(arr_nonp[0]!==0 && arr_np[0]===0){
    arr_result[0] = arr_nonp[0];}
  else if(arr_np[0]!==0 && arr_nonp[0]===0){
    arr_result[0] = arr_np[0];}
  else{arr_result[0]=0;};

  if(arr_nonp[1]!==0 && arr_np[1]===0){
    arr_result[1] = arr_nonp[1];}
  else if(arr_np[1]!==0 && arr_nonp[1]===0){
    arr_result[1] = arr_np[1];}
  else{arr_result[1]=0;};

  if(arr_nonp[2]!==0 && arr_np[2]===0){
    arr_result[2] = arr_nonp[2];}
  else if(arr_np[2]!==0 && arr_nonp[2]===0){
    arr_result[2] = arr_np[2];}
  else{arr_result[2]=0;};
  arr_result[3] = arr_nonp[3];
}

function result(){ //최종공정
  ZZZ();
  arr();
  const aaa = arr_result[0] + arr_result[1] + arr_result[2] + arr_result[3];
  document.getElementById("result_1st").innerHTML = "최대 "+ Number(Math.round(arr_result[0] * 11) / 10) +
  "<br><br>최소 "+ Number(Math.round(arr_result[0] * 9) / 10);
  document.getElementById("result_2nd").innerHTML = "최대 "+ Number(Math.round(arr_result[1] * 11) / 10) +
  "<br><br>최소 "+ Number(Math.round(arr_result[1] * 9) / 10);
  document.getElementById("result_3rd").innerHTML = "최대 "+ Number(Math.round(arr_result[2] * 11) / 10) +
  "<br><br>최소 " + Number(Math.round(arr_result[2] * 9) / 10);
  document.getElementById("result_extra").innerHTML = "최대 "+ Number(Math.round(arr_result[3] * 11) / 10) +
  "<br><br>최소 "+ Number(Math.round(arr_result[3] * 9) / 10);
  document.getElementById("result_total").innerHTML = "최대 "+ Number(Math.round(aaa * 11) / 10) +
  "<br><br>최소 "+ Number(Math.round(aaa * 9) / 10);
  arr_nonp = [0,0,0,0];
  arr_np = [0,0,0];
  arr_result = [0,0,0,0];
}

result();
window.addEventListener("click",result);