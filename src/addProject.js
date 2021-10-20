import { display } from "./display";


export function add(){

  let sidenav = document.querySelector('.sidenav');
  let addingNewProject = document.createElement('div');
  addingNewProject.classList.add('addingNewProject');
  let input = document.createElement('input');
  input.placeholder = "Title";

  let arrowRight = document.querySelector('.right');

  let dateInput = document.createElement('input');
  dateInput.type = "date";
  let submitbtn = document.createElement('button');
  submitbtn.textContent = "Submit";
  addingNewProject.appendChild(input);
  addingNewProject.appendChild(dateInput);
  addingNewProject.appendChild(submitbtn)


  if(sidenav.children.length==4){
   sidenav.insertBefore(addingNewProject, sidenav.children[3]);
   arrowRight.style.transform = "rotateZ(90deg)";
  }
  else{
    arrowRight.style.transform = "rotateZ(0deg)";
    sidenav.removeChild(document.querySelector('.addingNewProject'));
  }
}



export function addEvent(){
  let content = document.querySelector('.content');
  let div = document.createElement('div');
  div.setAttribute('class', 'newEvent');
  
  let cross = document.createElement('button');
  let i = document.createElement('i');
  i.setAttribute('class', 'fas fa-times-circle');
  cross.setAttribute('class', 'closeAdd');
  cross.id = "closeEvent";
  cross.appendChild(i);
  cross.onclick = hide;

  let input = document.createElement('input');
  input.placeholder = "Title";
  input.id = "eventInput";

  let inputDate = document.createElement('input');
  inputDate.type = "date";
  inputDate.id = "eventDate";

  let btn = document.createElement('button');
  btn.textContent = "Submit";
  btn.id = "eventButton";
  btn.onclick = display;

  div.appendChild(cross);
  div.appendChild(input);
  div.appendChild(inputDate);
  div.appendChild(btn);
  if(document.querySelector(".newEvent")==null){
    content.appendChild(div);
  }
}

export function hide(){
  let div = document.querySelector('.newEvent');
  div.removeChild(document.getElementById("eventInput"));
  div.removeChild(document.getElementById("eventDate"));
  div.removeChild(document.getElementById("eventButton"));
  div.removeChild(document.getElementById("closeEvent"));
  div.classList.remove('newEvent');
  div.classList.add('newEventHidden');
}



export function addBtn(){
  let content = document.querySelector('.content')
  let plusBtn = document.createElement('button');
  plusBtn.setAttribute('class', 'add');
  plusBtn.onclick = addEvent;
  let i1 = document.createElement('i');
  i1.setAttribute('class', 'fas fa-plus');

  plusBtn.appendChild(i1);
  content.appendChild(plusBtn);
}