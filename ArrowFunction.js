console.clear()


// let sum = (a, b) => a + b;
// let sum = (a, b) => {
//     console.log("first")
//     return a + b;
// }

// let x10 = a => a * 10;

// console.log(sum(2, 3));  // 5
// console.log(x10(2));  // 20
// sum(2,3);


const obj = {
    say: "Good morning",
    name: ["Trump", "Putin", "Oli", "Modi"],
    func() { // parents this
        this.name.forEach((names) => {
            console.log(this.say, names);
        })
    },
    func1() { // own this
        this.name.forEach(function (names) {
            console.log(this.say, names);
        })
    }
}

// obj.func();
// console.log("\n")
// obj.func1();  // undefine say



// ---------------------------function currying---------------------------
function sum(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

const sumCurry = (num1) => (num2) => (num3) => num1 + num2 + num3;
// --------------------------------------------------------------------------------------------

console.log(sum(5)(3)(8))
console.log(sumCurry(5)(3)(8))