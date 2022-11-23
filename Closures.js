
// -------- closure --------
// function along with it's lexical scope

// function x() {
//     var a = 2;
//     function y() {
//         console.log(a)
//     }
//     y();
// }
// x();



// function x() {
//     // function bundled together along with its lexical scope is closure
//     var a = 2;
//     function y() {
//         console.log(a)
//     }
//     return y; // it not only returns y but also the reference to var a.
// }

// var a = 7;
// x()();  // 2

// -------- closures uses --------
// module design pattern
// currying
// functions like once
// memoize
// maintaining state in async world
// settimeouts
// iterators
// and ...





// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function close(i) {
//             setTimeout(() => {
//                 console.log(i)
//                 console.log(i *= 2)
//             }, 1000 * i);
//         }
//         close(i);
//     }
//     console.log('hello');
// }

// x();


// -------- data hiding --------
// function counter() {
//     function incrementCounter() {
//         count++;
//         console.log(count);
//     }
//     let count = 1;
//     return incrementCounter
// }

// const counter1 = counter();
// counter1() // 2
// counter1() // 3
// counter1() // 4

// const counter2 = counter();
// counter2(); // 2

// const counter3 = counter1;
// counter3(); // 5 

function ConstructorFunction() {
    this.count = 9;
    count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = () => {
        count--;
        console.log(count);
    }
}

const newObj = new ConstructorFunction();
newObj.incrementCounter();
newObj.decrementCounter();
console.log(newObj.count)