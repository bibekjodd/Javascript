


function hello(a = "Trump") {
    console.log("Hello Mr. " + a);
}
console.log("Before Timeout");
// setTimeout(hello, 1000);
let timeout = setTimeout(hello, 1000, "Donald Trump");
console.log("After Timeout but appears before timeout");

clearTimeout(timeout);

