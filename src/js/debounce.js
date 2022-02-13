export default function debounce(fn, delay, saveTracker) {
    let timer;
    const autoSaving = () => {
        saveTracker.innerHTML = "Editing...";
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn()
      }, delay)
    }
    return autoSaving
}