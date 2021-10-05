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

 console.log(todos);

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

 