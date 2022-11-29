// const dotContainer = document.createElement("span");
// dotContainer.className = 'dot';
// dotContainer.textContent = "."

const dots = new Array(3).fill(document.createElement("span"));

const editMessage = document.createElement("span");
editMessage.textContent = "Editing";

for (let i = 0; i < 3; i++) {
  const dot = document.createElement("span");
  dot.className = 'dot';
  dot.textContent = ".";
  editMessage.append(dot);
}



export default function debounce(fn, delay, saveTracker) {
    let timer;
    const autoSaving = () => {
      console.log("bump")
      if(saveTracker.innerHTML === '' || saveTracker.innerHTML === 'Saved!!' ) {
        saveTracker.innerHTML = '';
        saveTracker.appendChild(editMessage);
      }
        
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn()
      }, delay)
    }
    return autoSaving
}