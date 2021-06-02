console.log("hello, vanilla.");
const Start = document.querySelectorAll('input');
var Test = document.querySelector('h2');
var btn = document.querySelector('button')
var Num = [];
var N = [];

//
//
//
//
//단순히 숫자만을 형성해서 비교하기에는 힘듬 관련 수를 array 집어넣고 그 인덱스 값 혹은 value 값을 비교하는 방향이 맞음
// 밑에 	

// 이건 안에 버튼 하나 만들고 btn.addeventlistener(click, 'genNum')를 활용하면 됨 

function genNum(){

	
	N[0] = Math.floor(Math.random()*10)

do {
	N[1] = Math.floor(Math.random()*10)

   } while (N[0] === N[1])
	
do { 
	N[2] = Math.floor(Math.random()*10) 
	
	} while (N [2] === N [1] || N[2] === N[0] )


}

// 버튼의 클릭 횟수를 체크... 이건 좀 알아보자 
// input 버튼에 넣은 value 값을 Array로 해서 [0],[1],[2] 에 input이라는 Array로 집어넣어주고 
// if 구문을 활용해 index 위치와 값이 같은 조건 과 index[] 에 값은 동일하지만 안에 변수는 다를 경우를 if 두개 조건무을 활용해 판단
// 물론 for 안에서 3번 반복 하도록 하고 현 if가 발생할때마다 볼 이냐 스트라이크 냐에 값에 ++를 추가한다
	

	function Game_Start(){
		Start[0].addEventListener('click',genNum)

	}



	function TEST_1(){
		
	btn.addEventListener('click',TEST)
	
	}




	function TEST(){
  
     Num = document.getElementById('num').value;
	
	}

function init(){

	TEST_1()
	TEST()
	Game_Start()
}

init()

//Start[1].addEventListener('click',Reset);
