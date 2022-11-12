

let fruits = ['apple', 'banana', 'grape', 'mango', 'orange', 'strawberry', 'pear']
fruits.shift();
fruits.unshift('anar');
fruits.pop();
fruits.push('litchi');

// forEach method to iterate over the array
// fruits.forEach((element)=>console.log(element))

// for of method to iterate over array
// for (element of fruits) {
//     console.log(element)
// }

// for in loop to iterate over object
let bio = {
    name: "Donald Trump",
    age: 70,
    country: 'USA'
}

// for (element in bio)
//     console.log(`${element}: ${bio[element]}`)


// let arr = ['1', 2, 3, hello];
// let arr = new Array(hello, 2, "string", 3, '1');

// arr = arr.sort();

// make an array of n size 
let arr = new Array(12, 13);
// console.log(arr.length);
// arr.forEach((element) => {
//     if (typeof (element) == 'object') {
//         for (ele in element) {
//             console.log(`${ele}: ${element[ele]}`)
//         }
//     }
//     else
//         console.log(element);
// });




// ------------push, pop, unshift and shift methods -----------
let a = new Array(1, 3, 6);
// for (element of a)
// console.log(element)
a.push(9);
a.push(11);
a.pop();
a.unshift(0);
a.unshift(-3);
a.shift();
a.push(1);
a.push(4);
// a.sort();

console.log("Array elements:");
for (element of a)
    console.log(element)
console.log("New processes below\n\n");














// --------- arr.indexOf('xyz'), arr.lastIndexOf('xyz'), arr.includes('xyz')-------------- 
// console.log("index of -1 is", a.indexOf("-1"));

// console.log("last index of -1 is", a.lastIndexOf("-1"));

// console.log(a.includes(1)) // true or false


let channels = [{
    name: "Aman Dhattarwal",
    subscribers: 4
},
{
    name: "Apna College",
    subscribers: 3
},
{
    name: "Code With Harry",
    subscribers: 5
}
];

// ------------ includes searches for primitive data types only ---------------
// console.log(channels.includes({
//     name: "Aman Dhattarwal",
//     subscribers: "4M"
// }));  // false even though it exists



// ----------- find can search for reference data types as well as primitive data type ----------------
// retuns object or element if true and undefined if false 
// console.log(channels.find(function (element) {
//     return element.subscribers === 5;
// }));
// }) != undefined);





// ------------ concat method --------------
let vegetables = ['cauliflower', 'peas', 'cucumber', 'raddish'];
// let fruitsPlusVegetables = fruits.concat("bitter");
let fruitsPlusVegetables = fruits.concat(vegetables);
// console.log("Fruits", fruits, "Done Fruits");
// console.log("vegetables", vegetables, "Done vegetables");
// console.log("fruitsPlusVegetables", fruitsPlusVegetables, "Done fruitsPlusVegetables");



// ------------- slice method --------------
// console.log(fruits)
// fruits = fruits.slice(fruits.length - 2);
// console.log(fruits)

// ---------spread operator to concat array ----------
// let newVegetable = [...fruits, ...['cauliflower', 'peas', 'cucumber', 'raddish']];
// console.log(newVegetable)










// --------- Join method ----------
let student = ['B', 'i', 'b', 'e', 'k'];
// console.log(student)
// join converts array to string
student = student.join(''); // join('') separator ''
// console.log(student);


// -------- split method ---------
let str = "Bibek Bhattarai";
// console.log(str);
str = str.split('a');
str = str.join('');
// console.log(str);







//  --------- filter method ----------
// find returns the first matching object 
// filter return all the matching object in an array
let cities = [

    {
        name: 'Pokhara',
        population: 500
    },
    {
        name: "Chitwan",
        population: 600
    },
    {
        name: 'Kathmandu',
        population: 900,
    },
    {
        name: 'Tanahun',
        population: 200,
    },
    {
        name: 'Biratnagar',
        population: 700,
    }
]
// console.log(cities.filter(function (element) {
//     return element.population > 500;
// }))



// --------- map method ---------
// map returns array after calculation

// console.log(cities);

// cities = cities.map(function (element) {
//     return element.population + 500;
// })
// console.log(cities.map(function (element) {
// return element.population;
// }))





// -------------------------------------Array Destructuring-------------------------------------
// const bio_data = ["Bibek", 20, "Nepal", "C++", "TU"];
// let [name, age, country, ...restData] = bio_data;
// console.log(name, age, country, restData);
// -----------------------------------------------------------------------------------------------------------------
