const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgnumber){
	const image = new Image();
	image.src = `images/${imgnumber + 1}.jpg`;
	image.classList.add("bgImage");
	body.prepend(image);
}
	//prepend ? 는 무엇인가 
	//appendchild 가장 마자막에 배치
	//animation fadeIn 활용법 검색해보기


function genRandom(){
	const number = Math.floor(Math.random() * IMG_NUMBER);
	return number;

}


function init(){
	const randomNumber = genRandom();
	paintImage(randomNumber)


}


init();