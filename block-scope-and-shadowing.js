

// -------- lexical scope  --------
// the scope for an item where it was created


// block is piece of code where multiple statements can be combined as a single statement 
// where js expects a single statement
{
    // compound statement
    // const a = 7;
    // console.log(a);
}




{
    // -------- global scope --------
    // var a = 1;

    // -------- block scope --------
    // let b = 2;

    // -------- block scope --------
    // const c = 3;
}
// console.log(a) global scope working fine.



// -------- shadowing --------
// var x = 9;
// const y = 11;
// {
//     var x = 8;  // var shadows previous declaration
//     const y = 6;  // y is block scoped
// }
// console.log(x)  // 8 shadowed from block scope
// console.log(y)  // 11 not shadowed from block



// -------- illegal shadowing --------
let a = 7;
{
    // var a = 20; // illegal
    // let a = 4; // legal shadowing
    // console.log(a)
}
