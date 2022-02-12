const textarea = document.querySelector(".textarea--js");
const saveTracker = document.querySelector(".save-tracker--js");

textarea.addEventListener("input", saveTrackerDebounce(changeToSave, 1000));

function saveTrackerDebounce(fn, delay) {
    let timer;
    return function() {
      saveTracker.innerHTML = "Typing..."
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn()
      }, delay)
  };
}

function changeToSave() {
  saveTracker.innerHTML = "Saved!!";

  setTimeout(() => {
    saveTracker.innerHTML = ""
  }, 2000)
}
