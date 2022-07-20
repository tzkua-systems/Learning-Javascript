 // let, const, char
 let name = 'This is Tobi Taiwo';
 console.log(name.substring(0, 12));

 //alert(name);

 // Strings, Numbers, Boolean, null, undefined
 const country = 'Nigeria'
 const age = 60
 console.log(typeof country);

 // Concatenation
 console.log('My country is ' + country + ' and she is ' + age + ' years old');

 //Template String
 const hello = `My country is ${country} and she is ${age} years old`;
 console.log(hello.toUpperCase());

 //Arrays
 const fruits = ['mangoes', 'bananas', 'oranges', 'apples'];

 fruits.push('grapes');
 fruits.unshift('peas');
 fruits.push(5);

 console.log(fruits);

 //
 const person = {
     firstName: 'Tobi',
     lastName: 'Taiwo',
     Sex: 'Male',
     Hobbies: ['Engineer', 'Developer', 'Designer', 'Marketer'],
     Address: {
         Street: 'Wale Fajemisin Street',
         Area: 'Unity Estate, Ojodu',
         City: 'Lagos'
     }
 }

 person.firstName = 'Martha';

 console.log(person);
 console.log(person.Hobbies[1])

 //

 <ul id="todo"></ul>
 const todos = [
     {
         id: 1,
         text: 'morning prayer',
         isCompleted: true
     },
     {
        id: 2,
        text: 'afternoon prayer',
        isCompleted: false
    },
    {
        id: 3,
        text: 'evening prayer',
        isCompleted: true
    }
 ];

 //console.log(todos);
 var output = '';
 for (var i = 0, i < todos.length; i++) {
     output += '<li>'+todos[i].text+'</li>';
 }
 output = document.getElementById('todos').innerHTML;


 //functions
 function greet() {}

 //tenary operator, where ? = then and : = else
 let points = 110;
 let type = points > 100 ? 'gold' : 'silver';

 console.log(type);

 // For loop
 for (let i = 0; i < 10; i++)
 {
     console.log(`for loop number: ${i}`);
 }

 //while loop
 let i = 0;
 while (i < 10)
 {
     console.log(`while loop number: ${i}`);
     i++;
 }

 // === is const equal , // = or , && = and

 ///////////////////////////////////////////////////////////////

 //PROMISES
 let p = new Promise(function(resolve, reject) {
//let p = new Promise((resolve, reject) => {
     let a = 1 + 1
     if (a == 2) {
        resolve('success')
     } else {
        reject('Failed')
     }
 })

 p.then(function(message) {
//p.then((message) => {
     console.log(`This is in the then ${message}`)
 }) .catch(function(message) {
//.catch((message) => {
     console.log(`This is in the catch ${message}`)
 })

 
 //compare CALLBACKS &&& PROMISES
 const userLeft = false
 const userWatchingAnother = false
//callback
 function watchTutorialCallback (callback, errorCallback) {
     if (userLeft) {
        errorCallback ({
            name: 'User Left',
            message: ': :('
        })
     } else if (userWatchingAnother) {
        errorCallback ({
            name: 'User Watching Another Video',
            message: ':My Tutorial < Another Video'
        })
     } else {
        callback('Thumbs up, Please subscribe')
     }
 }

 watchTutorialCallback((message) => {
     console.log('Success: ' + message)
 }, (error) => {
     console.log(error.name + ' ' + error.message)
 })

 //promises
 function watchTutorialPromises() {
     return new Promise((resolve, reject) => {
        if (userLeft) {
            reject ({
                name: 'User Left',
                message: ': :('
            })
        } else if (userWatchingAnother) {
            reject ({
                name: 'User Watching Another Video',
                message: ': My Tutorial < Another Video'
            })
        } else {
            resolve('Thumbs up! Please subscribe')
        }
    })
}

watchTutorialPromises().then((message) => {
    console.log(`Success: ${message}`)
}).catch((error) => {
    console.log(`${error.name} ${error.message}`)
})
