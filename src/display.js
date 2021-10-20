
const todayevents = [];
const upcomingevents = [];


const addEvent = function(title, date){
  this.title = title;
  this.date = date;
}



export function displayStructure(){
  let content = document.querySelector('.content');
  let div = document.createElement('div');
  div.setAttribute('class', 'display');
  content.appendChild(div);
}

export function display(){

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  let title = document.getElementById('eventInput').value;
  let date = document.getElementById('eventDate').value;
  if(!date || !title){
    return;
  }
  let event = new addEvent(title, date);
  if(event.date==today){
    todayevents.push(event);
  }
  else{
    upcomingevents.push(event);
  }
  print();
}

export function print(){
  let count = 0;  
  let displays = document.querySelector('.display');
  displays.innerHTML = "";
  let div = document.createElement('div');
  div.setAttribute('class', 'todayEvents');

  let todayEventHead = document.createElement('div');
  todayEventHead.setAttribute('class', 'todayEventHead');
  let todayEventBody = document.createElement('div');
  todayEventBody.setAttribute('class', 'todayEventBody');
  todayEventHead.textContent = "Today's Events";
  let ul = document.createElement('ul');
  ul.id = "todaylist";

  for(let i=0;i<todayevents.length;i++){
    let myDiv = document.createElement('div');
    myDiv.setAttribute('class', 'myDiv');
    myDiv.id = `a${count}`;
    count++;

    let eventTitle = document.createElement('p');
    eventTitle.textContent = todayevents[i].title;
    
    let eventDate = document.createElement('p');
    eventDate.textContent = todayevents[i].date;

    let btn = document.createElement('button');
    btn.setAttribute('class', 'deleteItemButton')
    let dlticon = document.createElement('i');
    dlticon.setAttribute('class', 'far fa-trash-alt');
    dlticon.id = 'delItem';
    btn.addEventListener('click',function(e){
      let removeDivId = this.parentNode.id.slice(this.parentNode.id.slice.length-1);
      todayevents.splice(Number(removeDivId), 1);
      print();
    })
    btn.appendChild(dlticon);

    myDiv.appendChild(eventTitle);
    myDiv.appendChild(eventDate);
    myDiv.appendChild(btn);
    ul.appendChild(myDiv);
  }
  todayEventBody.appendChild(ul);

  div.appendChild(todayEventHead);
  div.appendChild(todayEventBody);
  displays.appendChild(div);

  let ul2 = document.createElement('ul');
  ul2.id = "upcominglist";

  count = 0;
  for(let i=0;i<upcomingevents.length;i++){
    let myDiv2 = document.createElement('div');
    myDiv2.setAttribute('class', 'myDiv');
    myDiv2.id = `a${count}`;
    count++;

    let eventTitle2 = document.createElement('p');
    eventTitle2.textContent = upcomingevents[i].title;
    
    let eventDate2 = document.createElement('p');
    eventDate2.textContent = upcomingevents[i].date;

    let btn2 = document.createElement('button');
    btn2.setAttribute('class', 'deleteItemButton')
    let dlticon2 = document.createElement('i');
    dlticon2.setAttribute('class', 'far fa-trash-alt');
    dlticon2.id = 'delItem';
    btn2.addEventListener('click',function(e){
      let removeDivId2 = this.parentNode.id.slice(this.parentNode.id.slice.length-1);
      upcomingevents.splice(Number(removeDivId2), 1);
      print();
    })
    btn2.appendChild(dlticon2);

    myDiv2.appendChild(eventTitle2);
    myDiv2.appendChild(eventDate2);
    myDiv2.appendChild(btn2);
    ul2.appendChild(myDiv2);
  }

  let div2 = document.createElement('div');
  div2.setAttribute('class', 'upcomingEvents');

  let upcomingEventHead = document.createElement('div');
  upcomingEventHead.setAttribute('class', 'upcomingEventHead');
  let upcomingEventBody = document.createElement('div');
  upcomingEventBody.setAttribute('class', 'upcomingEventBody');
  upcomingEventHead.textContent = "Upcoming Events";
  upcomingEventBody.appendChild(ul2);
  div2.appendChild(upcomingEventHead);
  div2.appendChild(upcomingEventBody);
  displays.appendChild(div2);
}


// when delete button is clicked on items


function del(e){
  console.log(e.id);
}