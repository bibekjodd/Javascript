
// objects are reference data types so redeclartion can be done i.e const object can be changed
const course = {
    lecture: 10,
    section: 3,
    title: 'Javascript',
    notes: {
        introduction: "Welcome to JS course"
    },
    enroll() {
        console.log("You are successfully enrolled");
    }
}
course.lecture = 11;  // objects are dynamic 
// for(element in course)
// console.log(element,course[element]);
// console.log(course);










// factory function to make object
function createCourse(title = "Javascript") {
    // const course = {
    return {
        lecture: 10,
        section: 3,
        title: title,
        notes: {
            introduction: "Welcome to JS course"
        },
        enroll() {
            console.log("You are successfully enrolled");
        }
    }
    // return course;
}

const newCourse = createCourse('Java');
// console.log(newCourse)









// constructor function
function Course(title = "Java") {
    this.title = title;
    this.enroll = function () {
        console.log("You are now successfully enrolled");
    }
    this.lecture = 11;
}


const courses = new Course();
// console.log(courses);
delete courses.title;
courses.checkEnrollment = function () {
    console.log("Enrollment Status: Okay");
}
// console.log(courses.constructor)
// console.log(courses)













//--------- primitive data types ---------- 
let number_1 = 10;
let number_2 = number_1;    // pass by value

number_1 = 15;

// console.log(number_1)   // 15
// console.log(number_2)   // 10


// --------- reference data types ---------- 
let obj_1 = {
    number: 10
}
let obj_2 = obj_1;  // pass by reference
obj_1.number = 12;
obj_2.number = 20;
obj_2.name = "Bibek Bhattarai";
// console.log(obj_1)
// console.log(obj_2)













//    ------ clone objects --------
const udemy = {
    title: "Javascript",
    enroll() {
        console.log("You are successfully enrolled in", this.title, "course of Udemy");
    }
}

// const coursera = {
//     title: "Python",
//     enroll() {
//         console.log("You are successfully enrolled in", this.title, "in Coursera");
//     }
// }
const coursera = { ...udemy };   // spread operator
coursera.title = "Python";
coursera.chapters = 22;
// udemy.enroll();
// coursera.enroll();

// ------- Object.assign() --------
let youThoob = Object.assign(coursera, udemy);
youThoob.title = "C++";
// youThoob = Object.assign({});
// console.log(youThoob)

// for (key in youThoob)
// console.log(key, ":", youThoob[key]);

//  Object.keys(obj) gives array of keys from object
// for (let key of Object.keys(youThoob)) 
// console.log(key, ":", youThoob[key]);

const newestCourse = {};
// for (let key of Object.keys(youThoob))
    // newestCourse[key] = youThoob[key];

// console.log(youThoob)
// console.log(newestCourse)
