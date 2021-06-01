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




//cell의 id 값을  숫짜 날짜로 해서 ${}에 집어넣고 setDate에 id를 집어넣고 거기에 getDay를 활용하면 해당 날짜의 수가 나오고 
//그걸 다시 var DayName [] 에 입력해서 해당 요일을 표시하면 됨




function ChangeDate(){  
i = reply_click()
target = document.getElementById([i]);
targetNum= target.getAttribute('id');

var DayName = ['SUN' ,'MON','TUE','WED','THU','FRI','SAT']
var d = new Date();
	d.setFullYear(Year)
	d.setMonth(Month-1);
	d.setDate(targetNum);
	d.getDate();
	d.getDay();
H2.innerHTML = `${DayName[d.getDay()]} <br><br> ${d.getDate()}`

}



function Pre_Date(){
var DayName = ['SUN' ,'MON','TUE','WED','THU','FRI','SAT']
var d = new Date();
	d.setFullYear(Year);
	d.setMonth(Month-1);
	var d_M = d.getMonth()


	if(d_M === Month){

	H2.innerHTML = `${DayName[today.getDay()]} <br><br> ${today.getDate()}`
	} else { 
			
			d.setDate(1);
			d.getDate();
			d.getDay();

		H2.innerHTML = `${DayName[d.getDay()]} <br><br> ${d.getDate()}`}
}

	
	

function set_first(){
var DayName = ['SUN' ,'MON','TUE','WED','THU','FRI','SAT']
if (Month === 12){
	today.setFullYear(Year+1)
}
today.setMonth(Month-1)
today.setDate(1);
today.getDate()
today.getDay();

H2.innerHTML = `${DayName[today.getDay()]} <br><br> ${today.getDate()}`
}




function MakCalender(){

var calender = document.querySelector('table');
var addrow = calender.insertRow();

	
   
   for(i = 0; i<first_day ; i++){
		cell = addrow.insertCell();
		

	}
	

	for(i = 1; i <=lastDate; i++){

	if(first_day != 7){
		
		cell = addrow.insertCell();
		cell.innerHTML =  `<button id= '${i}' onClick="reply_click()" style = "border: none; background : transparent";>${[i]}</button>`;
		first_day += 1;

		target = document.getElementById(i);
		target.addEventListener('click',ChangeDate); 
		
		

	
	} else{

		
		addrow = calender.insertRow();
		cell = addrow.insertCell();
		cell.innerHTML =`<button id= '${i}' onClick="reply_click()" style = "border: none; background : transparent";>${[i]}</button>`;
		first_day = first_day - 6;

		target = document.getElementById(i);
		target.addEventListener('click',ChangeDate); 

	}

	}

	}



	function reply_click() {

  		var a = window.event.target.getAttribute('id')
  		return a 
	}


 //	cell.setAttribute('id',[i]);
 //if 안에 for 구문에 대해서 확실하게 이해하게 된 좋은 기회
 // 셀과 열을 활용하는 것으로 방향을 틀었지만 줄 바꿈 조건이 고민이었음 First day는 항상 0 ~ 6 일월화수목금토 기준으로 생성되니 이것이 기준으로 적격


 function highlight(){
 
  	for (i = 1; i <= lastDate; i++){
  		set_target = document.getElementById([i])
  		set_targetVal = set_target.getAttribute('id');
  	  if( date == set_targetVal){
  	  	set_target.style.background = "red";
  	  	}
  	  }
  	}
 
  // id 값을 뽑아내는 것과 id 안에 넘버로 목표를 설정하는 차이


  
 	

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
Pre_Date()
highlight()


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

set_first()

highlight()


}




function showDate(){
var DayName = ['SUN' ,'MON','TUE','WED','THU','FRI','SAT']
var first_day = new Date(today.getFullYear(),today.getMonth(),today.getDate()).getDay();


H2.innerHTML = `${DayName[first_day]} <br><br> ${date}`

}



function SmallDateN(){
var MonthName = ["JAN", "FEB", 'MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']



Month = Month + 1 
if(Month === 13){
Month = Month - 12;}
 
CurrentDate.innerText =`${MonthName[Month-1]}  ${Year}`

 }


function SmallDateP(){
var MonthName = ["JAN", "FEB", 'MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
Month = Month -1 
if(Month === 0){
Month = Month + 12;}
 
	
CurrentDate.innerText =`${MonthName[Month-1]}  ${Year}`

 }



function set_first(){
var DayName = ['SUN' ,'MON','TUE','WED','THU','FRI','SAT']
if (Month === 12){
	today.setFullYear(Year+1)
}
today.setMonth(Month-1)
today.setDate(1);
today.getDate()
today.getDay();

H2.innerHTML = `${DayName[today.getDay()]} <br><br> ${today.getDate()}`
}




function init(){
 	
 	MakCalender()
	PreButton()
 	NextButton()
 	showDate()
 	SmallDateN()
 	highlight()

 	
}

init()