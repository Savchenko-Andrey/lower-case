const form = document.querySelector("#message-form");
const textInput = document.querySelector('.texterea__input');
const output = document.querySelector('.texterea__output');
const btnClear = document.querySelector('.btn__clear')


textInput.addEventListener('input', (event) => {
    qwery = event.currentTarget.value;
    output.textContent = qwery.toLowerCase()
    localStorage.setItem(LOCALSTORAGE_KEY, qwery.toLowerCase());
});

// localStorage
const LOCALSTORAGE_KEY = "output";
updateOutput();

function updateOutput() {
    output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
}

// button copy
function copy(event) {
    event.preventDefault();
    const copyText = document.querySelector('#output');
    copyText.select()
    document.execCommand('copy')
}

document.querySelector('#copy').addEventListener('click', copy)
