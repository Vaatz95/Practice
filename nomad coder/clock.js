 const clockContainer = document.querySelector ('.js-clock'),
 		clockTitle = clockContainer.querySelector('h1');

function getTime(){
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	clockTitle.innerText= 
	`${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

	}


 function init(){
	getTime();
	setInterval(getTime, 1000);
	//setInterval(함수, 밀리세컨드); 	

	// 삼항 연산자 체크 ? 참에서실행 : 거짓에서 실행     및  `${}` 
 }

 init()