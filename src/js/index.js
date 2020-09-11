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

let editorContent = {
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

  editorContent = JSON.parse(localStorage.getItem("fullContent"));

  editor.value = editorContent.text;

  if (editorContent.isBold) {
    editor.classList.add("editor__textarea--bold");
  }
  if (editorContent.isItalics) {
    editor.classList.add("editor__textarea--cursive");
  }
  if (editorContent.isBlue) {
    editor.classList.add("editor__textarea--blue");
    editor.classList.remove("editor__textarea--green");
    editor.classList.remove("editor__textarea--red");
  }
  if (editorContent.isGreen) {
    editor.classList.add("editor__textarea--green");
    editor.classList.remove("editor__textarea--blue");
    editor.classList.remove("editor__textarea--red");
  }
  if (editorContent.isRed) {
    editor.classList.add("editor__textarea--red");
    editor.classList.remove("editor__textarea--green");
    editor.classList.remove("editor__textarea--blue");
  }
});

saveButton.addEventListener("click", () => {
  // let content = editor.value;
  localStorage.setItem("savedText", editor.value);
  // console.log("Saved successfully");
  editorContent.text = editor.value;
  const editorJSONString = JSON.stringify(editorContent);
  localStorage.setItem("fullContent", editorJSONString);
  console.log(JSON.parse(editorJSONString));
});

boldButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--bold");
  editorContent.isBold = !editorContent.isBold;
  boldButton.classList.toggle("isOn");
});

cursiveButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--cursive");
  editorContent.isItalics = !editorContent.isItalics;
  cursiveButton.classList.toggle("isOn");
});

blueButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--blue");
  editor.classList.remove("editor__textarea--green");
  editor.classList.remove("editor__textarea--red");
  editorContent.isBlue = !editorContent.isBlue;
  editorContent.isGreen = false;
  editorContent.isRed = false;
  blueButton.classList.toggle("isOn");
  greenButton.classList.remove("isOn");
  redButton.classList.remove("isOn");
});

greenButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--green");
  editor.classList.remove("editor__textarea--blue");
  editor.classList.remove("editor__textarea--red");
  editorContent.isGreen = !editorContent.isGreen;
  editorContent.isBlue = false;
  editorContent.isRed = false;
  greenButton.classList.toggle("isOn");
  blueButton.classList.remove("isOn");
  redButton.classList.remove("isOn");
});

redButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--red");
  editor.classList.remove("editor__textarea--green");
  editor.classList.remove("editor__textarea--blue");
  editorContent.isRed = !editorContent.isRed;
  editorContent.isGreen = false;
  editorContent.isBlue = false;
  redButton.classList.toggle("isOn");
  greenButton.classList.remove("isOn");
  blueButton.classList.remove("isOn");
});

// redButton.addEventListener("mousedown", () => {
//     redButton.classList.add("isOn");
// })

// redButton.addEventListener("mouseout", () => {
//     redButton.classList.toggle("isOn");
// })

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
  boldButton.classList.remove("isOn");
  cursiveButton.classList.remove("isOn");
  blueButton.classList.remove("isOn");
  redButton.classList.remove("isOn");
  greenButton.classList.remove("isOn");
});
