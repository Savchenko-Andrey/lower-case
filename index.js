const textInput = document.querySelector('.texteria__input');
const output = document.querySelector('.texteria__output');

textInput.addEventListener("input", (event) => {
    qwe  = event.currentTarget.value;
    output.textContent = qwe.toLowerCase()
  });