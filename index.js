const textInput = document.querySelector('.texteria__input');
const output = document.querySelector('.texteria__output');
const btn = document.querySelector('.btn');

textInput.addEventListener("input", (event) => {
    qwe  = event.currentTarget.value;
    output.textContent = qwe.toLowerCase()
  });


  function copy(event) {
    event.preventDefault();
    const copyText = document.querySelector('#output');
    copyText.select()
    document.execCommand('copy')
  }

  document.querySelector('#copy').addEventListener('click', copy)