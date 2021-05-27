const HEXtitle= document.querySelector(".hextitle");
const clickbtn = document.querySelector('button');
const body = document.querySelector('body');


function GenHexNum(){
   	var result = "#"
	const HexCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];	
	for (var i=0; i<6; i++){
 	const number = Math.floor(Math.random()*16);
 	result += HexCode[number];
 	// 왜 17이 아니고 16일까
}	
	return result 
}

function changebtn(){

	HEXtitle.innerText = 'HEX COLOR:#3474FF';
	HEXtitle.style.color = 'black';
	HEXtitle.style.fontSize = '90px'; 
	clickbtn.addEventListener('click', WriteHex);

}


function WriteHex(Hexnumber){
	var Hexnumber = GenHexNum();
	HEXtitle.innerText = `HEX COLOR:${Hexnumber}`;
	HEXtitle.style.color = 'black';
	HEXtitle.style.fontSize = '90px'; 

}


function changebg(){

	body.style.backgroundColor = GenHexNum();
 //처음에는 여기에 clickbtn.addEventListener('click', GenHexNum); 

}



function init(){
	changebtn();
	clickbtn.addEventListener('click', changebg);
		
}

 init()


