


let choice = ['Noob', 'Pro'];

let interval = setInterval(() => {
    let random = Math.ceil(Math.random() * 100);
    if (random & 1)
        console.log("You are " + choice[1]);
    else
        console.log("You are " + choice[0]);
}, 500);

setTimeout(() => {
    clearInterval(interval);
}, 3001);