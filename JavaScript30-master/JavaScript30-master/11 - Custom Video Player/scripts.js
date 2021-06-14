//1. 타겟 지정
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const play_btn = player.querySelector('.toggle');
const skip = player.querySelectorAll('[data-skip]');
const range = player.querySelectorAll('.player__slider');
const progress = player.querySelector('.progress')
const progress_bar = player.querySelector('.progress__filled')
const FullMode = player.querySelector('.Full')


//2. 함수 구성 
function play(){
	const play = video.paused ? 'play' : 'pause'
	video[play]();

}

function UpdateBtn(){
	const icon = this.paused ? '►' : '❚ ❚'; 
	console.log(icon);
	play_btn.innerHTML = icon;
  
}



function skip_work(){
	console.log(this.dataset.skip)
	video.currentTime += parseFloat(this.dataset.skip);

	//parseFloat = 문자열을 실수로 전환
	//dataset.skip = 안에 skip 항목에 25라는 값이 내포되어 있음 반대로는 -10
}

function SliderUpdate(){
	// 사전에 미리 name 부분을 media.property 부분과 동일하게 설정해놓았음.
	video[this.name] = this.value;
	// video 안에 있는 프로퍼티 이건 video 관련 해서 체크해야함
}

function progress_Status(){ 
	const present = (video.currentTime / video.duration ) * 100;
	progress_bar.style.flexBasis = `${present}%`;


}

function changeProgress(e){
	const changeSpot = (e.offsetX / progress.offsetWidth) * video.duration;
	// div 안에서 클릭시 선택된 X 좌표와 전체 progress 디비의 폭을 활용 그 비율에서 video의 총 시간을 나눈다.
	video.currentTime = changeSpot;
	
}

function FullScreenON(e){
	if(video.requestFullscreen){
		video.requestFullscreen();
}
}


//3.addEventListener 활용해서 버튼 클릭시 함수 실행
 video.addEventListener('click', play)
 video.addEventListener('play', UpdateBtn)
 video.addEventListener('pause', UpdateBtn)
 video.addEventListener('timeupdate', progress_Status)

 // media 관련 addEventListener 인자도 체크해야함
 //http://www.w3big.com/ko/tags/ref-av-dom.html
 play_btn.addEventListener('click', play)
 // 위에 video 의 play와 pause 랑 연동되서 버튼 명령어에 따라 icon 관련 EventListener를 추가할 필요가 없다;
 skip.forEach(btn => btn.addEventListener('click' , skip_work));
 range.forEach(slider => slider.addEventListener('change', SliderUpdate));
 range.forEach(slider => slider.addEventListener('mousemove', SliderUpdate));
 // video 혹 media 관련 property 를 찾아서 숙지해놓는게 좋을듯 
 // https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=horajjan&logNo=220336323302
 let mousedown = false;

 progress.addEventListener('click', changeProgress)
 progress.addEventListener('mousemove', (e) => mousedown && changeProgress(e));
 // 약간의 트릭인데  && 앞에 구문이 진실이면 뒤에 부분으로 넘어가지만 
 // 앞에 부분이 거짓이면 아무일도 일어나지 않는다.
 //	() => { if(mousedown){ changeProgress(); }})
 progress.addEventListener('mousedown', () => mousedown = true)
 progress.addEventListener('mouseup', () => mousedown = false)
 FullMode.addEventListener('click', FullScreenON)

/*function(){
 	mousedown = true;
 } */
