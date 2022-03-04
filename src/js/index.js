import "../scss/main.scss";
import debounce from "./debounce.js";

const editor = document.querySelector(".editor__textarea");
let editorContent = {
  text: "",
  isBold: false,
  isItalic: false,
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
const autoSaveCheckbox = document.querySelector(".auto-save--js");

const textFormatButtons = document.querySelectorAll(
  ".editor__side-buttons > .editor__button"
);

const saveTracker = document.querySelector(".save-tracker--js");

const autoSave = debounce(saveAll, 1500, saveTracker);

function saveAll() {
  localStorage.setItem("savedText", editor.value);
  editorContent.text = editor.value;
  const editorJSONString = JSON.stringify(editorContent);
  localStorage.setItem("fullContent", editorJSONString);

  saveTracker.innerHTML = "Saved!!";

  setTimeout(() => {
    if (saveTracker.innerHTML === "Saved!!") {
      saveTracker.innerHTML = "";
    }
  }, 2000);
}

const entry = localStorage.getItem("auto-load");

autoSaveCheckbox.checked =
localStorage.getItem("auto-save") === "true" || false;

if (entry === "true") {
  autoLoadCheckbox.checked = true;

  if (autoSaveCheckbox.checked) {
    console.log("added!");
    editor.addEventListener("input", autoSave);
  }

  if (localStorage.getItem("text-only") === "true") {
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
    if (editorContent.isItalic) {
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
    if (editorContent.isItalic) {
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

saveButton.addEventListener("click", saveAll);

boldButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--bold");
  editorContent.isBold = !editorContent.isBold;
  boldButton.classList.toggle("isOn");
});

italicButton.addEventListener("click", () => {
  editor.classList.toggle("editor__textarea--italic");
  editorContent.isItalic = !editorContent.isItalic;
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
  editorContent.isItalic = false;
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

autoSaveCheckbox.addEventListener("change", () => {
  if (autoSaveCheckbox.checked) {
    localStorage.setItem("auto-save", "true");
    saveAll();
    editor.addEventListener("input", autoSave);

    textFormatButtons.forEach(button => 
        button.addEventListener("click", autoSave));
      
  } else {
    localStorage.setItem("auto-save", "false");
    editor.removeEventListener("input", autoSave);
    textFormatButtons.forEach(button => 
      button.removeEventListener("click", autoSave));
  }

  localStorage.setItem(
    "auto-save",
    document.querySelector(".auto-save--js").checked
  );
});

const openInstructions = document.querySelector(".open--js");
const toggleArrow = document.querySelector(".instructions__toggle:before");
const instructions = document.querySelector(".instructions--js");
const instructionWidth = instructions.offsetWidth;
let areInstHidden = true;

openInstructions.addEventListener("click", () => {
  instructions.classList.toggle("instructions--shown");
  instructions.classList.toggle("instructions--hidden");

  if (areInstHidden) {
    document.documentElement.style.setProperty("--arrow-border-bottom", "0");
    document.documentElement.style.setProperty(
      "--arrow-border-top",
      "1em solid beige"
    );
    document.documentElement.style.setProperty("--arrow-position", "-1.15em");
  } else {
    document.documentElement.style.setProperty("--arrow-border-top", "0");
    document.documentElement.style.setProperty(
      "--arrow-border-bottom",
      "1em solid beige"
    );
    document.documentElement.style.setProperty("--arrow-position", "1.15em");
  }

  areInstHidden = !areInstHidden;
});

openInstructions.addEventListener("keydown", (event) => {
  if (event.which === 13 || event.which === 32) {
    if (areInstHidden) {
      instructions.style.right = "0em";
      document.documentElement.style.setProperty("--arrow-border-bottom", "0");
      document.documentElement.style.setProperty(
        "--arrow-border-top",
        "1em solid beige"
      );
      document.documentElement.style.setProperty("--arrow-position", "-1.15em");
    } else {
      instructions.style.right = "-36em";
      document.documentElement.style.setProperty("--arrow-border-top", "0");
      document.documentElement.style.setProperty(
        "--arrow-border-bottom",
        "1em solid beige"
      );
      document.documentElement.style.setProperty("--arrow-position", "1.15em");
    }
    areInstHidden = !areInstHidden;
  }
});
