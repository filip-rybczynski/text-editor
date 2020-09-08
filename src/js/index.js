import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');

const entry = localStorage.getItem('entry');
let result = '';

if (entry) {
    result = entry;
}


let editor = document.querySelector(".editor__textarea");

const loadButton = document.querySelector(".load--js");
const saveButton = document.querySelector(".save--js");

loadButton.addEventListener("click", ()=>{
    const loadedText = localStorage.getItem('savedText');
    // let content = editor.value;
    // console.log(content);
    // console.log("Loading");
    editor.value = loadedText;
});

saveButton.addEventListener("click", ()=>{
// let content = editor.value;
localStorage.setItem('savedText', editor.value);
// console.log("Saved successfully");
});