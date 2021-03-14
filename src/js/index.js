import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

let editor = document.querySelector(".editor__textarea");
let editorContent = {
  text: "",
  isBold: false,
  isItalics: false,
  isBlue: false,
  isGreen: false,
  isRed: false,
};

const loadButton = document.querySelector(".load--js");
const saveButton = document.querySelector(".save--js");
const boldButton = document.querySelector(".bold--js");
const italicButton = document.querySelector(".italic--js");
const blueButton = document.querySelector(".blue--js");
const greenButton = document.querySelector(".green--js");
const redButton = document.querySelector(".red--js");
const defaultButton = document.querySelector(".default--js");
const textOnlyCheckbox = document.querySelector(".text-only--js");
const autoLoadCheckbox = document.querySelector(".auto-load--js");

const entry = localStorage.getItem("auto-load");

if (entry == "true") {
  autoLoadCheckbox.checked = true;

  if (localStorage.getItem("text-only") == "true") {
    textOnlyCheckbox.checked = true;
    const loadedText = localStorage.getItem("savedText");
    editor.value = loadedText;
  } else {
    let editorContent = JSON.parse(localStorage.getItem("fullContent"));

    editor.value = editorContent.text;

    if (editorContent.isBold) {
      editor.classList.add("editor__textarea--bold");
      boldButton.classList.add("isOn");
    }
    if (editorContent.isItalics) {
      editor.classList.add("editor__textarea--italic");
      italicButton.classList.add("isOn");
    }
    if (editorContent.isBlue) {
      editor.classList.add("editor__textarea--blue");
      blueButton.classList.add("isOn");
    }
    if (editorContent.isGreen) {
      editor.classList.add("editor__textarea--green");
      greenButton.classList.add("isOn");
    }
    if (editorContent.isRed) {
      editor.classList.add("editor__textarea--red");
      redButton.classList.add("isOn");
    }
  }
}

loadButton.addEventListener("click", () => {
  const textOnlyOn = document.querySelector(".text-only--js").checked;
  if (textOnlyOn) {
    const loadedText = localStorage.getItem("savedText");

    editor.value = loadedText;
  } else {
    editor.classList.remove(
      "editor__textarea--blue",
      "editor__textarea--italic",
      "editor__textarea--green",
      "editor__textarea--red",
      "editor__textarea--bold"
    );

    boldButton.classList.remove("isOn");
    italicButton.classList.remove("isOn");
    greenButton.classList.remove("isOn");
    redButton.classList.remove("isOn");
    blueButton.classList.remove("isOn");

    editorContent = JSON.parse(localStorage.getItem("fullContent"));

    editor.value = editorContent.text;

    if (editorContent.isBold) {
      editor.classList.add("editor__textarea--bold");
      boldButton.classList.add("isOn");
    }
    if (editorContent.isItalics) {
      editor.classList.add("editor__textarea--italic");
      italicButton.classList.add("isOn");
    }
    if (editorContent.isBlue) {
      editor.classList.add("editor__textarea--blue");
      blueButton.classList.add("isOn");
    }
    if (editorContent.isGreen) {
      editor.classList.add("editor__textarea--green");
      greenButton.classList.add("isOn");
    }
    if (editorContent.isRed) {
      editor.classList.add("editor__textarea--red");
      redButton.classList.add("isOn");
    }
  }
});

saveButton.addEventListener("click", () => {
  localStorage.setItem("savedText", editor.value);
  editorContent.text = editor.value;
  const editorJSONString = JSON.stringify(editorContent);
  localStorage.setItem("fullContent", editorJSONString);
});

boldButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--bold");
  editorContent.isBold = !editorContent.isBold;
  boldButton.classList.toggle("isOn");
});

italicButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--italic");
  editorContent.isItalics = !editorContent.isItalics;
  italicButton.classList.toggle("isOn");
});

blueButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--blue");
  editor.classList.remove("editor__textarea--green", "editor__textarea--red");
  editorContent.isBlue = !editorContent.isBlue;
  editorContent.isGreen = false;
  editorContent.isRed = false;
  blueButton.classList.toggle("isOn");
  greenButton.classList.remove("isOn");
  redButton.classList.remove("isOn");
});

greenButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--green");
  editor.classList.remove("editor__textarea--blue", "editor__textarea--red");
  editorContent.isGreen = !editorContent.isGreen;
  editorContent.isBlue = false;
  editorContent.isRed = false;
  greenButton.classList.toggle("isOn");
  blueButton.classList.remove("isOn");
  redButton.classList.remove("isOn");
});

redButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--red");
  editor.classList.remove("editor__textarea--green", "editor__textarea--blue");
  editorContent.isRed = !editorContent.isRed;
  editorContent.isGreen = false;
  editorContent.isBlue = false;
  redButton.classList.toggle("isOn");
  greenButton.classList.remove("isOn");
  blueButton.classList.remove("isOn");
});

defaultButton.addEventListener("click", () => {
  editor.classList.remove(
    "editor__textarea--blue",
    "editor__textarea--italic",
    "editor__textarea--green",
    "editor__textarea--red",
    "editor__textarea--bold"
  );
  editorContent.isBold = false;
  editorContent.isItalics = false;
  editorContent.isRed = false;
  editorContent.isGreen = false;
  editorContent.isBlue = false;
  boldButton.classList.remove("isOn");
  italicButton.classList.remove("isOn");
  blueButton.classList.remove("isOn");
  redButton.classList.remove("isOn");
  greenButton.classList.remove("isOn");
});

textOnlyCheckbox.addEventListener("change", () => {
  localStorage.setItem(
    "text-only",
    document.querySelector(".text-only--js").checked
  );
});

autoLoadCheckbox.addEventListener("change", () => {
  localStorage.setItem(
    "auto-load",
    document.querySelector(".auto-load--js").checked
  );
});

const openInstructions = document.querySelector(".open--js");
const toggleArrow = document.querySelector(".instructions__toggle:before")
const instructions = document.querySelector(".instructions--js");
const instructionWidth = instructions.offsetWidth;
let areInstHidden = true;

openInstructions.addEventListener("click", () => {
  
  instructions.classList.toggle("instructions--shown");
  instructions.classList.toggle("instructions--hidden");
  
  if (areInstHidden) {
    document.documentElement.style.setProperty("--arrow-border-bottom", "0");
    document.documentElement.style.setProperty("--arrow-border-top", "1em solid beige");
    document.documentElement.style.setProperty("--arrow-position", "-1.15em");

  } else {
    document.documentElement.style.setProperty("--arrow-border-top", "0");
    document.documentElement.style.setProperty("--arrow-border-bottom", "1em solid beige");
    document.documentElement.style.setProperty("--arrow-position", "1.15em");
  } 



  areInstHidden = !areInstHidden;
});

openInstructions.addEventListener("keydown", () => {
    if (event.keyCode == 13 || event.keyCode == 32) {
        if (areInstHidden) {
            instructions.style.right = "0em";
            document.documentElement.style.setProperty("--arrow-border-bottom", "0");
            document.documentElement.style.setProperty("--arrow-border-top", "1em solid beige");
            document.documentElement.style.setProperty("--arrow-position", "-1.15em");
        
          } else {
            instructions.style.right = "-36em";
            document.documentElement.style.setProperty("--arrow-border-top", "0");
            document.documentElement.style.setProperty("--arrow-border-bottom", "1em solid beige");
            document.documentElement.style.setProperty("--arrow-position", "1.15em");
          }
          areInstHidden = !areInstHidden;
        
    }
});
