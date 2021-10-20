import { add, addToday } from "./addProject";

export function navbar(){
  let nav = document.createElement('div');
  nav.setAttribute('class', 'navbar');

  let title = document.createElement('h1');
  title.textContent = "ToDo List";

  nav.appendChild(title);
  return nav;
}

export function sidebar(){
  let sidenav = document.createElement('div');
  sidenav.setAttribute('class', 'sidenav');

  let buttonDiv1 = document.createElement('div');
  buttonDiv1.setAttribute('class', "sideButtonDiv");
  let todayBtn = document.createElement('button');
  todayBtn.setAttribute('class', 'sidebutton today');
  todayBtn.textContent = "Today";
  let rightarrow1 = document.createElement('i');
  rightarrow1.setAttribute('class', 'fas fa-arrow-right');

  let buttonDiv2 = document.createElement('div');
  buttonDiv2.setAttribute('class', "sideButtonDiv");
  let upcoming = document.createElement('button');
  upcoming.setAttribute('class', 'sidebutton upcoming');
  upcoming.textContent = "Upcoming Events";
  let rightarrow2 = document.createElement('i');
  rightarrow2.setAttribute('class', 'fas fa-arrow-right');

  // let buttonDiv3 = document.createElement('div');
  // buttonDiv3.setAttribute('class', "sideButtonDiv newProjectDiv");
  // let newProject = document.createElement('button');
  // newProject.setAttribute('class', 'sidebutton newProject');
  // newProject.textContent = "New Project";
  // newProject.onclick = add;
  // let rightarrow3 = document.createElement('i');
  // rightarrow3.setAttribute('class', 'fas fa-arrow-right right');

  // let buttonDiv4 = document.createElement('div');
  // buttonDiv4.setAttribute('class', "sideButtonDiv");
  // let existingProject = document.createElement('button');
  // existingProject.setAttribute('class', 'sidebutton existingProject');
  // existingProject.textContent = "Existing Project";
  // let rightarrow4 = document.createElement('i');
  // rightarrow4.setAttribute('class', 'fas fa-arrow-right');


  
  

  todayBtn.appendChild(rightarrow1);
  upcoming.appendChild(rightarrow2);
  // newProject.appendChild(rightarrow3);
  // existingProject.appendChild(rightarrow4);
  buttonDiv1.appendChild(todayBtn);
  buttonDiv2.appendChild(upcoming);
  // buttonDiv3.appendChild(newProject);
  // buttonDiv4.appendChild(existingProject);
  sidenav.appendChild(buttonDiv1);
  sidenav.appendChild(buttonDiv2);
  // sidenav.appendChild(buttonDiv3);
  // sidenav.appendChild(buttonDiv4);
  
  let content = document.createElement('div');
  content.setAttribute('class', 'content');
  document.body.appendChild(content);


  
  return sidenav;
}

