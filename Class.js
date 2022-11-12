// Templates for creating objects
// Encapsulates data with code to work on that data
// Classes are in fact "special functions"


class Product {
    constructor(itemName, price, discount, productcode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productcode = productcode;
    }
}

// let pencil = new Product('pencil', 20, 2, 'P10');
// console.log(pencil)

// -------------- getter and setter method aren't functions -------------
let Product1 = class {
    constructor(itemName, price, discount, productcode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productcode = productcode;
    }

    get getDiscountValue() {
        return this.discount;
    }

    set setDiscountValue(value) {
        this.discount = value;
    }

    discountValue = () => this.discount * this.price / 100;
}

let pen = new Product1('Pen', 10, 1, 'P7');
// console.log(pen)
pen.setDiscountValue = 9;
// console.log(pen.getDiscountValue)
// console.log(pen)
// console.log(pen.discountValue());







class Student {
    constructor(name) {
        this.name = name;
        // console.log("Passed by Result class", name);
    }
    getName() {
        return "The name of student is " + this.name;
    }
}

class Result extends Student {
    constructor(name) {
        super(name);
        // super();
    }

    getName() {
        return "Result of student is " + this.name;
    }
}

let student1 = new Student("Bibek");
console.log(student1.getName());
let result1 = new Result("100");
console.log(result1.getName());