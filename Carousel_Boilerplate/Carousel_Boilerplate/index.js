console.log("hello, vanilla.");
const btn = document.querySelector("button");
const arrow1 = document.querySelectorAll("input");
const box = document.querySelector('.box');


function boxCot (){
	box.innerText = '1'
	box.style.fontSize ='70px';
	box.style.textAlign = 'center';


}


function arrowbtn (){
	arrow1[0].style.backgroundColor = 'white';
	arrow1[0].value ="<";
	arrow1[0].style.fontSize = '15px';
	arrow1[0].style.fontWeight = 'bold';
	arrow1[1].style.backgroundColor = 'white';
	arrow1[1].value =">";
	arrow1[1].style.fontSize = '15px';
	arrow1[1].style.fontWeight = 'bold';


	
}


function init(){

	arrowbtn()
	boxCot()
}

init()