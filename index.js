

const body = document.body;
body.classList.add('bg-black')
body.classList.add('text-white')
const div = document.createElement('div');
div.textContent = "newly created div";
div.className = 'text-green-500 hover:text-green-600'
body.appendChild(div);
div.style.cursor = 'pointer';





const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.log(event.target)
    console.log(event);
    console.log(event.clientX);
    console.log(event.clientY);
})


const input = document.querySelector('input');
const showText = document.getElementById('showText');
input.focus();

// input.addEventListener('keypress', (event) => {
//     showText.innerText = `Pressed ${event.key} Code: ${event.keyCode}`;
// })

// input.addEventListener('keyup', (event) => {
//     showText.innerText = `Pressed ${event.key} Code: ${event.keyCode}`;
// })

// input.addEventListener('keydown', (event) => {
//     showText.innerText = `Pressed ${event.key} Code: ${event.keyCode}`;
// })

input.addEventListener('change', (event) => {
    showText.innerText = event.target.value;
    // document.body.style.background = 'red'
})

const typingText = "Hello My Name is Bibek Bhattarai. I reside in the heart of Nepal."
const typingEffect = document.getElementById('typingEffect');
let start = 0;
end = typingText.length;
typingEffect.style.borderRight = '2px solid #fff';

const colors = ['tomato', 'pink', 'green', 'cyan', 'purple', 'black'];

// let func = setInterval(() => {
//     if (start == end-1) {
//         typingEffect.style.borderRight = "none";
//         clearInterval(func);
//     }
//     typingEffect.textContent += typingText[start++];
//     // typingEffect.innerText = "Hello bibek bhattarai";
//     // document.body.style.background = colors[Math.floor(colors.length * Math.random())]
// }, 100);
button.addEventListener('click', () => {
    clearInterval(func);
})

// func()

const childDiv = document.getElementById('childDiv');
const parentDiv = document.getElementById('parentDiv');

parentDiv.addEventListener('click', () => {
    alert("Parent Div Event Called");
}, true)

childDiv.addEventListener('click', () => {
    alert("Child Div Event Called");
    event.stopPropagation();
})




