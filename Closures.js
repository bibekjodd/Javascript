
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



function x() {
    // function bundled together along with its lexical scope is closure
    var a = 2;
    function y() {
        console.log(a)
    }
    return y; // it not only returns y but also the reference to var a.
}

var a = 7;
x()();  // 2

// -------- closures uses --------
// module design pattern
// currying
// functions like once
// memoize
// maintaining state in async world
// settimeouts
// iterators
// ... 