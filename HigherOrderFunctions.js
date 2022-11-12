console.clear();



const add = (num1, num2) => {
    return num1 + num2;
}


const sub = (num1, num2) => num1 - num2;

const mult = (num1, num2) => num1 * num2;

const div = (num1, num2) => num1 / num2;

// -------- higher order function --------
const calculator = (num1, num2, func) => { // higher order function => calculator
    return func(num1, num2); // callback function => func
}


console.log(add(2, 5));
console.log(sub(2, 5));
console.log(mult(2, 5));
console.log(div(2, 5));

console.log("")
console.log(calculator(2, 5, add))
console.log(calculator(2, 5, sub))
console.log(calculator(2, 5, mult))
console.log(calculator(2, 5, div))