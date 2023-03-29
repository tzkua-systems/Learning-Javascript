//keep a copy of an object
//var collectionCopy = JASON.parse(JASON.stringify(collection));

//while loop
var myArray = [];
var i = 0;
while(i < 7) {
    myArray.push(i);
    i++;
}

//console.log(myArray);

//for loop
var yourArray = [];
for (var i = 0; i < 7; i++) {
    yourArray.push(i);
}

//console.log(yourArray);

//
var evenArray = [];

for (var i = 0; i < 10; i += 2) {
    evenArray.push(i);
}
for (var i = 8; i >= 0; i -= 2)
    evenArray.push(i);

//console.log(evenArray);

//
var oddArray = [];

for (var i = 1; i < 10; i += 2) {
    oddArray.push(i);
}
for (var i = 9; i > 0; i -= 2)
    oddArray.push(i);

//console.log(oddArray);

//

var sumArray = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < sumArray.length; i++) {
    total += sumArray[i];
}

//console.log(total);

//JSON
var person = {
    name: "Tobi",
    age: 35,
    address: {
        city: "Ikeja",
        state: "Lagos",
        country: "Nigeria"
    },
    spouse: "Martha"
}

//person  = JSON.stringify(person);
//person = JSON.parse(person);

console.log(person);

///////////////////////////////////
//////////////////////////////////

class Rectangle {
    constructor(width, height, color) {
        console.log("The Rectangle is created")

        this.width = width;
        this.height = height;
        this.color = color;
    }

    getArea() {
        return this.width * this.height;
    }

    printDescription() {
        console.log(`I am rectangle of ${this.width} x ${this.height} and color ${this.color}`);
    }
}


const myRectangle1 = new Rectangle(5, 3, "blue");
const myRectangle2 = new Rectangle(10, 5, "red");

myRectangle1
myRectangle2

myRectangle1.printDescription();

///
class Person {
    constructor (name, age) {

        this.name = name;
        this.age = age;
    }

    describe () {
        console.log (`I am ${this.name} and I am {this.age} years old`);
    }
}

//
class Programmer extends Person {
    constructor (name, age, yearsOfExperience) {
        super (name, age);

        this.yearsOfExperience = yearsOfExperience;
    }
    
    code () {
        console.log (`{this.name} is coding`);
    }

}

let person1 = new Person ("Jeff", 25);
let programmer1 = new Programmer ("Dom", 30, 12);

const programmers = [
    new Programmer ("Dave", 16, 3),
    new Programmer ("Sandra", 18, 6)
];


function developSoftware (programmers) {
    for (let programmer of programmers) {
        console.log(programmer);
        programmer.code();
    }
}

programmer1.describe();

///factory function
function createPerson(name) {
    return {
        sing() {
            return `I am ${name}`
            //sing: () => `I am ${name}`
        }
    }
}

const tobi = new createPerson(`Tobi`);  //or
const tobi = createPerson('Tobi')
const martha = new createPerson(`Martha`); //or
const martha = createPerson('Martha')

///constructor function
function SuperElement (type, content) {
    this.el = document.createElement (type)
    this.el.innerText = content
    document.body.append(this.el)
    this.el.addEventListener('click', () => {
        console.log(this.el)
    })
}

const h1 = new SuperElement('h1', 'Hellooooo')

const array = ['a', 'b', 'c']

const myElements = array.map(item => {
    return new SuperElement('p', item)
})

///polymorphism
class Animal {
    constructor (name) {
        this.name = name;
    }

    makeSound () {
        console.log('Generic Animal Sound!');
    }
}

class Dog extends Animal {
    constructor (name) {
        super(name);
    }

    makeSound () {
        super.makeSound();  //generic
        console.log('Woof! Woof!');  //specific
    }
}

const a1 = new Animal('Birds');
const a2 = new Dog('Bingo');

//
//Tenary Operators
let points = 110;
let type = points > 100 ? "gold" : "silver";

console.log(type);


//
//Write a function that takes two numbers 
//and returns the maximum of the two

function max(num1, num2) {
    if (num1 > num2)
        return `${num1} is the maximum number`;
    else
        return `${num2} is the maximum number`;
    }

console.log(max(3,6))
