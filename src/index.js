import './style.css'
import { navbar, sidebar } from './main'
import { addBtn } from './addProject'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import { displayStructure, print } from './display'


export function dels(yes){
  console.log("ehy");

}

// TO add navbar
document.body.appendChild(navbar());
// To add sidebar
document.body.appendChild(sidebar());


addBtn();
displayStructure();
print();