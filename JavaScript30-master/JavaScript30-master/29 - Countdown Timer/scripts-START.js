let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const Endtime = document.querySelector('.display__end-time')

function timer(seconds) {
    clearInterval(countdown)
    const now =  Date.now();
    const then = now + seconds * 1000; //밀리세컨드
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {

     const secondsLeft = Math.round((then - Date.now()) /1000);
   if(secondsLeft <= 0){
       clearInterval(countdown)
       return;
   }
   displayTimeLeft(secondsLeft)
    },1000);
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds/60);
    const remainSeconds = seconds % 60;
    const display = `${minutes}:${remainSeconds < 10 ? '0' : ''}${remainSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
    
}

function displayEndTime(timeEnd){
 const End =  new Date(timeEnd) //처음에는 console.log를 활용해서 집어넣은데 자꾸 1970년 값으로 나와서 의아해 했는데 밀리세컨드로 전환된 timer의 값을 집어넣으면 그 추가된 시간만큼의 new Date()가 나온다.
 const hour = End.getHours();
 const minutes = End.getMinutes();
 const adjustedHour = hour > 12 ? hour -12 : hour; 

 const Enddisplay = `See u at ${adjustedHour} : ${minutes < 10 ? '0':''}${minutes}`

 Endtime.textContent = Enddisplay;

}

function startTimer(){
   const seconds = parseInt(this.dataset.time);
   timer(seconds);
}

function set_time(e){
 e.preventDefault();
const minus = this.minutes.value;
const covert = minus * 60;
timer(covert);
this.reset()

}


const buttons = document.querySelectorAll('.timer__button');
buttons.forEach( button => button.addEventListener('click', startTimer ))

const custom = document.customForm; //document.(대상의 네임 값을 적어넣으면 그냥 바로 대상으로 잡힌다. 꿀팁)
custom.addEventListener('submit', set_time)