import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const entry = localStorage.getItem("entry");
let result = "";

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

const editorContent = {
  text: "",
  isBold: false,
  isItalics: false,
  isBlue: false,
  isGreen: false,
  isRed: false,
};

loadButton.addEventListener("click", () => {
  const loadedText = localStorage.getItem("savedText");
  // let content = editor.value;
  // console.log(content);
  // console.log("Loading");
  editor.value = loadedText;
});

saveButton.addEventListener("click", () => {
  // let content = editor.value;
  localStorage.setItem("savedText", editor.value);
  // console.log("Saved successfully");
  editorContent.text = editor.value;
});

boldButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--bold");
  editorContent.isBold = !editorContent.isBold;
  }
);

cursiveButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--cursive");
  editorContent.isItalics = !editorContent.isItalics;
});

blueButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--blue");
  editor.classList.remove("editor__textarea--green");
  editor.classList.remove("editor__textarea--red");
  editorContent.isBlue = !editorContent.isBlue;
  editorContent.isGreen = false;
  editorContent.isRed = false;
  console.log(editorContent);
});

greenButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--green");
  editor.classList.remove("editor__textarea--blue");
  editor.classList.remove("editor__textarea--red");
  editorContent.isGreen = !editorContent.isGreen;
  editorContent.isBlue = false;
  editorContent.isRed = false;
});

redButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--red");
  editor.classList.remove("editor__textarea--green");
  editor.classList.remove("editor__textarea--blue");
  editorContent.isRed = !editorContent.isRed;
  editorContent.isGreen = false;
  editorContent.isBlue = false;
});

defaultButton.addEventListener("click", () => {
  editor.classList.remove("editor__textarea--blue");
  editor.classList.remove("editor__textarea--green");
  editor.classList.remove("editor__textarea--red");
  editor.classList.remove("editor__textarea--cursive");
  editor.classList.remove("editor__textarea--bold");
  editorContent.isBold = false;
  editorContent.isItalics = false;
  editorContent.isRed = false;
  editorContent.isGreen = false;
  editorContent.isBlue = false;
});
