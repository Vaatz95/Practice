const todoForm = document.querySelector('.js-toDoForm'),
	toDoInput = todoForm.querySelector("input"),
	toDOList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function filterFn(toDo){
	return toDo.id === 1;


}

function deleteToDo(event){
	const btn = event.target;
	const li = btn.parentNode;
	toDOList.removeChild(li)
	const cleanToDos = toDos.filter(function(toDo){
		return toDo.id !== parseInt(li.id);


	});
	toDos = cleanToDos
	SaveToDos();
}
// filter , for each 기억하기 , parseInt는 무엇인가


function SaveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
	const item =document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newID = toDos.length + 1;
	delBtn.innerText = "X";
	delBtn.addEventListener('click', deleteToDo);
	span.innerText = text;
	item.appendChild(delBtn);
	item.appendChild(span);
	item.id = newID
	toDOList.appendChild(item);
	const toDoObj = { 
		text: text,
		id: newID
		};
	toDos.push(toDoObj);
	SaveToDos()
// 복습해서 방식을 기억해두자

}


function handleSubmit(event){
	event.preventDefault();
	const currentValue = toDoInput.value;
	paintToDo(currentValue);
	toDoInput.value ="";
}


function loadToDOs(){
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if(loadedToDos !== null){
	 const parsedToDos = JSON.parse(loadedToDos)
	 parsedToDos.forEach(function(execute){
	 	paintToDo(execute.text)
	 })
	
	}

}

function init(){
	loadToDOs();
	todoForm.addEventListener('submit', handleSubmit)
}
  init();