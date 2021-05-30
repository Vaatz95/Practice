console.log("hello, vanilla.");
const H2 = document.querySelector('h2');
const CurrentDate = document.querySelector('.Date')
var today = new Date();
var Year = today.getFullYear();
var date = today.getDate();
var Month = today.getMonth();
var day = today.getDay();
var table = document.querySelector('tbody');
var cell = table.querySelectorAll("td");


function PreMonth(){
	today = newDate(today.getFullYear(),today.getMonth()-1,today.getDate());
}


function NextMonth(){
	today = newDate(today.getFullYear(),today.getMonth()+1, today.getDate());	

}


function writeDay(){
var firstday = new Date(today.getFullYear(),today.getMonth(),1)
var lastday = new Date(today.getFullYear(),today.getMonth()+1,0);

 for( i = firstday.getDate(); i < lastday.getDate()+1; i++){
	cell[i+5].innerHTML = `${i}`} 


	}

function hightlight(){
	var	i = today.getDate()	
	if(i){cell[i+5].style.color = 'red'}

}







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
			
H2.innerHTML =`${day} <br> ${date}`

}

function SmallDate(){
	switch(Month){
	case 0:
	Month = 'JAN';
	break;
	
	case 1:
	Month = 'FEB';
	break;
	
	case 2:
	Month = 'MAR';
	break;
	
	case 3:
	Month = 'APR';
	break;
	
	case 4:
	Month = 'MAY';
	break;
	
	case 5:
	Month = 'JUN';
	break;
	
	case 6:
	Month = 'JUL';
	break;
	
	case 7:
	Month = 'AUG';
	break;
	
	case 8:
	Month = 'SEP';
	break;
	
	case 9:
	Month = 'OCT';
	break;
	
	case 10:
	Month = 'NOV';
	break;
	
	case 11:
	Month = 'DEC';
	break;

}


CurrentDate.innerText =`${Month}  ${Year}`


}



function init(){
 	showDate()
 	SmallDate()
 	writeDay()
 	hightlight()
}

init()