const refs = {
    startChangeColorBtn: document.querySelector('[data-start]'),
    stopChangeColorBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
    spinner: document.querySelector('.spinner-grow'),
}
const DELAY = 1000;
let intervalID = null; 
refs.startChangeColorBtn.addEventListener('click', onChangeColor)
refs.stopChangeColorBtn.addEventListener('click', stopChangeColor)
refs.stopChangeColorBtn.disabled = true


function onChangeColor(event) {
    refs.stopChangeColorBtn.disabled = false
    refs.startChangeColorBtn.disabled = true
        refs.spinner.classList.remove('d-none') 
        console.log(1);
    intervalID = setInterval(() => {
        refs.body.style.background = `linear-gradient(to right, ${getRandomHexColor()} 0%, ${getRandomHexColor()} 100%)`
    }, DELAY)
    
}
function stopChangeColor() {
    clearInterval(intervalID)
 refs.stopChangeColorBtn.disabled = true
    refs.startChangeColorBtn.disabled = false
    refs.spinner.classList.add('d-none')
    
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

