console.log("hello, vanilla.");
const arrow1 = document.querySelectorAll("input");
const img = document.querySelector('.boxbg');
const Num = document.querySelector('.Number');
const getNum = document.querySelectorAll('button');
var num = 0;


function Pickbg(){
	getNum[0].addEventListener('click',changeImg0)
	getNum[1].addEventListener('click',changeImg1)
	getNum[2].addEventListener('click',changeImg2)
	getNum[3].addEventListener('click',changeImg3)
	getNum[4].addEventListener('click',changeImg4)

}

function changeImg0(){
		num = 0 ; 
	img.setAttribute("src", `images/image-${num}.png`)
	}

function changeImg1(){
	num = 1	
	img.setAttribute("src", `images/image-${num}.png`)
}

function changeImg2(){
	num = 2
	img.setAttribute("src", `images/image-${num}.png`)
}
function changeImg3(){
	num = 3		
	img.setAttribute("src", `images/image-${num}.png`)
}

function changeImg4(){
	num = 4	
	img.setAttribute("src", `images/image-${num}.png`)
}

// 그러면 num를 var로 정하고 해당 박스 안에서 그 숫자 넘버로 활용 ~

function clikcArr(){

	arrow1[0].addEventListener('click', PreSlide)
	arrow1[1].addEventListener('click', nextSlide)

}






function nextSlide(){

 num = (num >= 4) ? 0 : ++num;
 img.setAttribute("src", `images/image-${Math.abs(num)}.png`)	
}

function PreSlide(){

num = (num <= -4) ? Math.abs(0) : --num;
    img.setAttribute("src", `images/image-${Math.abs(num)}.png`)
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



