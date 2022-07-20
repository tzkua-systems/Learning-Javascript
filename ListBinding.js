class ListBinding {
    constructor (element) {
        this.listElement = element;
        this.textList = [];
    }

    /*makes an <li>text</li> element/tag */
    static creatListItem (text) {
        const li = document.createElement('li');
        li.textContent = text;
        return li;
    }


    update () {
        /* remove all the existing <li> elements/tags */
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild);
        }
    }

    /*fill <ul>or <ol> tag with <li> */
    //for (const text of this.textList) {
        //this.listElement.appendChild(ListBinding.creatListItem(text));
    //}


    add (text) {
        this.textList.push(text);
        this.update ();
    }

    remove (index) {
        this.textList.splice (index, 1);
        this.update ();
    }


}


///Another Example - Traversy
//Constructor
function Book (title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    //Object Literal
    //this.getSummary = function() {
        //return `This ${title} is written by ${author} in the year ${year}`
    //};

}
    //getSummary
    Book.prototype.getSummary = function() {
        return `This ${this.title} is written by ${this.author} in the year ${this.year}`
    };

    //getBookAge
    Book.prototype.getAge = function() {
        const years = new Date().getFullYear() - this.year;
        return `This ${title} is ${years} years old`;
    };
    
    //Revised or Change Year
    Book.prototype.revise = function(newYear) {
        this.year = newYear;
        this.revised = true;
    };

//Instantiate an Object
const book1 = new Book ('Book One', 'John Doe', '2013');
const book2 = new Book ('Book Two', 'Mary Jane', '2015');
const book3 = new Book ('Book Three', 'Will Smith', '2018');

book2.revise('2018');


//Inheritance
function Magazine (title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//use maazine constructor
Magazine.prototype.constructor = Magazine;


const mag1 = new Magazine ('Mag One', 'Mike Jay', '2016', 'Jan');

console.log(mag1);
console.log(mag1.getSummary());



////////////////////////////////////////////
////////////FUNCTION TYPES

//anonymous function  &&&  arrow function representation
const sayHello = function() {  
    return `Hello`
}
//or
const sayHello = () => `Hello`
console.log(sayHello())

const sayHello1 = function(name) {
    return `Hello ${name}`
}
//or
const sayHello1 = name => `Hello ${name}`
console.log(sayHello1('Tobi'))

const sayHello2 = function (firstName, lastName) {
    return `Hello ${firstName} ${lastName}`
}
//or
const sayHello2 = (firstName, lastName) => `Hello ${firstName} ${lastName}`
console.log(sayHello2('Tobi', 'Taiwo'))

//callback function  &&&  arrow function representation
setTimeout(function() {
    console.log('Hello')
}, 1000)
//or
setTimeout(() => {
    console.log('Hello')
}, 1000)

//Named function  &&&  arrow function representation
//NOT
function sayHello() {
    console.log('Hello')
}
sayHello()

function Person(n) {
    this.name = n
}
const me = new Person ('Tobi')

//object methods function  &&& arrow function representstion
//NOT
const me = {
    talk: function () {
        return 'hello'
    }
}
//or
const you = {
    talk: () => 'hello'
}


///////////////////////NOT
document.body.addEventListener('click', function() {
    console.log(this)
})
//or
document.body.addEventListener('click', () => {
    console.log(this)
})

//HIGHER ORDER FUNCTIONS [Inner & Outer Function]
function outer(callback) {
    callback()
}
function inner() {
    console.log(this)
}
outer(inner);
//or
function outer(callback, obj) {
    callback.call(obj)
}
function inner() {
    console.log(this)
}
outer(inner, {name: 'Tobi'})

//CLOSURES [Inner & Outer Function]
function human(n) {
    const name = n
    function sayHi() {
        console.log(`Hi, I am ${name}`)
    }
    function sayHowYouFeel() {
        console.log(`${name} is feeling cool!`)
    }
    sayHi()
    sayHowYouFeel()
}
console.log(human('Tobi'))
//or

function human(name) {
    function sayHi() {
        console.log(`Hi, I am ${name}`)
    }
    function sayHowYouFeel() {
        console.log(`${name} is feeling cool!`)
    }
    sayHi()
    sayHowYouFeel()
}

const tobi  = human('Tobi')
const martha = human('Martha')


function clickHandler(size) {
    return function() {
        document.body.style.fontSize = `${size}px`
    }
}

document.getElementById('size-12').onclick = clickHandler(12)

