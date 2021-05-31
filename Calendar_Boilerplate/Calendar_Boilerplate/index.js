console.log("hello, vanilla.");
const H2 = document.querySelector('h2');
const CurrentDate = document.querySelector('.Date')
var today = new Date();
var Year = today.getFullYear();
var date = today.getDate();
var Month = today.getMonth();
var day = today.getDay();
var first_day = new Date(today.getFullYear(),today.getMonth(),1).getDay();
var lastDate= new Date(today.getFullYear(),today.getMonth()+1,0).getDate();
var calender = document.querySelector('table');
var btn = document.querySelectorAll('button');
var month = today.getMonth();


function MakCalender(){

var calender = document.querySelector('table');
var addrow = calender.insertRow();
   
   for(i = 0; i<first_day ; i++){
		cell = addrow.insertCell();
		

	}
	

	for(i = 1; i <=lastDate; i++){

	if(first_day != 7){
		cell = addrow.insertCell();
		cell.setAttribute('id',[i]);
		cell.innerHTML = [i];
		first_day += 1;
		
// 처음에는 setAttribute를 사용하지 않고 innerHTML만 적었는데 
// 후에 나올 빨간색으로 표시하기 부분을 위해서 각 id 값에 번호를 추가해줌


	}else{
		addrow = calender.insertRow();
		cell = addrow.insertCell();
		cell.setAttribute('id',[i]);
		cell.innerHTML = [i];
		first_day = first_day - 6;

	}

	}
	}
 
 //if 안에 for 구문에 대해서 확실하게 이해하게 된 좋은 기회
 // 셀과 열을 활용하는 것으로 방향을 틀었지만 줄 바꿈 조건이 고민이었음 First day는 항상 0 ~ 6 일월화수목금토 기준으로 생성되니 이것이 기준으로 적격


  function highlight(){
  	for (i = 1; i <= lastDate; i++){
  		set_target = document.getElementById([i])
  		set_targetVal = set_target.getAttribute('id');
  	  if( date == set_targetVal){
  	  	set_target.style.color = "red";
  	  }
  	}
  // id 값을 뽑아내는 것과 id 안에 넘버로 목표를 설정하는 차이


  }
 	

function PreButton(){
	btn[0].addEventListener('click',Pre); 
}

function NextButton(){
	btn[1].addEventListener('click',Next);
}




  
function Pre(){

while(calender.rows.length > 1){
	calender.deleteRow(calender.rows.length -1 );}


month = month - 1;

if(month === -1){
	Year = Year - 1;
	month = month + 12;
}

first_day = new Date(Year,month,1).getDay();
lastDate= new Date(Year,month+1,0).getDate();
first_Date = new Date(Year,month,1).getDate();

MakCalender()
SmallDateP()

}





function Next(){
while(calender.rows.length > 1){
calender.deleteRow(calender.rows.length -1 )}


month = month + 1;

if(month === 12){
	Year = Year + 1
	month = month -12
}

 first_day = new Date(Year,month,1).getDay();
 lastDate = new Date(Year,month+1,0).getDate();
 first_Date = new Date(Year,month,1).getDate();

MakCalender()


SmallDateN()

showDate()

}


var MonthName = ["JaN", "FEB", 'MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
var DayName = ['SUN' ,'MON','TUE','WED','THU','FRI','SAT']
var first_day = new Date(today.getFullYear(),today.getMonth(),today.getDate()).getDay();

function showDate(){

	switch(day){
	case 0:
	day = 'SUN';
	break;
	case 1:
	day = 'MON';
	break;
	case 2:
	day = 'TUE';
	break;
	case 3:
	day = 'WED';
	break;
	case 4:
	day = 'THU';
	break;
	case 5:
	day = 'FRI';
	break;
	case 6:
	day = 'SAT';
	break;
	
}

H2.innerHTML = `${DayName[first_day]} <br><br> ${date}`

}



function SmallDateN(){

Month = Month + 1 
if(Month === 13){
Month = Month - 12;}
 
 	

CurrentDate.innerText =`${Month}  ${Year}`

 }


function SmallDateP(){

Month = Month - 1 
if(Month === 0){
Month = Month + 12;}
 
 	

CurrentDate.innerText =`${Month}  ${Year}`

 }








function init(){
 
 	MakCalender()
 	highlight()
	PreButton()
 	NextButton()
 	showDate()
 	SmallDateN()


}

init()