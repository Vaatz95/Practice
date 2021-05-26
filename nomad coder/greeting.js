const form= document.querySelector(".js-form"),
	input = form.querySelector("input"),
	greeting = document.querySelector(".js-greetings");

  const USER_LS = "currentUser",
  		SHOWING_ON ="showing";

function saveValue(text){
	localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
	event.preventDefault();
	const CurrentName = input.value;
	paintGreeting(CurrentName);
	saveValue(CurrentName);
}


function ask(){
	form.classList.add(SHOWING_ON);
	form.addEventListener('submit',handleSubmit)

}


function paintGreeting(text){
		form.classList.remove(SHOWING_ON);
	greeting.classList.add(SHOWING_ON);
	greeting.innerText = `Hello ${text}`;



}

function loadname(){
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null){
		ask();

	} else {
		paintGreeting(currentUser);

	}

}





function init(){
	loadname();


}

init()