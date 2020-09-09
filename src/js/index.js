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
const boldButton = document.querySelector(".bold--js");
const cursiveButton = document.querySelector(".cursive--js");
const blueButton = document.querySelector(".blue--js");
const greenButton = document.querySelector(".green--js");
const redButton = document.querySelector(".red--js");
const defaultButton = document.querySelector(".default--js");

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

boldButton.addEventListener("click", ()=>{
    editor.classList.toggle("editor__textarea--bold");
})

cursiveButton.addEventListener("click", ()=>{
    editor.classList.toggle("editor__textarea--cursive");
})

blueButton.addEventListener("click", ()=>{
    editor.classList.toggle("editor__textarea--blue");
    editor.classList.remove("editor__textarea--green");
    editor.classList.remove("editor__textarea--red");
})

greenButton.addEventListener("click", ()=>{
    editor.classList.toggle("editor__textarea--green");
    editor.classList.remove("editor__textarea--blue");
    editor.classList.remove("editor__textarea--red");
})

redButton.addEventListener("click", ()=>{
    editor.classList.toggle("editor__textarea--red");
    editor.classList.remove("editor__textarea--green");
    editor.classList.remove("editor__textarea--blue");
})

defaultButton.addEventListener("click", ()=>{
    editor.classList.remove("editor__textarea--blue");
    editor.classList.remove("editor__textarea--green");
    editor.classList.remove("editor__textarea--red");
    editor.classList.remove("editor__textarea--cursive");
    editor.classList.remove("editor__textarea--bold");
})