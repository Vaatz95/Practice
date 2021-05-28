console.log("hello, vanilla.");
const arrow1 = document.querySelectorAll("input");
const img = document.querySelector('.boxbg');
const Num = document.querySelector('.Number');
const getNum = document.querySelectorAll('button');



function Pickbg(){
	getNum[0].addEventListener('click',changeImg0)
	getNum[1].addEventListener('click',changeImg1)
	getNum[2].addEventListener('click',changeImg2)
	getNum[3].addEventListener('click',changeImg3)
	getNum[4].addEventListener('click',changeImg4)

}

function changeImg0(){
	
	img.setAttribute("src", `images/image-1.png`)
}

function changeImg1(){
		
	img.setAttribute("src", `images/image-2.png`)
}

function changeImg2(){
		
	img.setAttribute("src", `images/image-3.png`)
}
function changeImg3(){
		
	img.setAttribute("src", `images/image-4.png`)
}

function changeImg4(){
		
	img.setAttribute("src", `images/image-5.png`)
}



function clikcArr(){

	arrow1[0].addEventListener('click', ChangePicB)
	arrow1[1].addEventListener('click', ChangePicA)

}

var num = 1;

function ChangePicB(){
	
if(num){
	if(num ==1) return;
		num--;


	}
	
	img.setAttribute("src", `images/image-${num}.png`)
	
    }


function ChangePicA(){
	
if(num){
	if(num ==5) return;
		num++;
	
	img.setAttribute("src", `images/image-${num}.png`)
    }
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
	clikcArr()
	Pickbg()
}

init()
