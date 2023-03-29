
//1111111111111111111111111111111111111111111111111111
function max(num1, num2) {
    if (num1 > num2)
        return `num1:${num1} is the maximum number`;
    else if (num1 < num2)
        return `num2:${num2} is the maximum number`;
    else
        return `num1:${num1} is the same as num2:${num2}`;
    }

console.log(max(10,10))

function maximum(number1, number2) {
    return (number1 > number2) ? number1 : number2;
}

console.log(maximum(7,6))


//222222222222222222222222222222222222222222222222222222
function isLandscape(width, height) {
    if (width > height) 
        return `True: image is a landscape`;
    else
        return `False: image is a portrait`;
    }

console.log(isLandscape(300, 800))

function isLandscaped(wide, high) {
    //return (wide > high) ? true : false;
    return (wide > high);
}

console.log(isLandscaped(800, 300))


//333333333333333333333333333333333333333333333333333333
function FizzBuzz(input) {
    if (typeof input != 'number')
        return NaN
        //return `Not a number`;
    
    if ((input % 3 == 0) && (input % 5 == 0)) 
        return `FizzBuzz`;

    if (input % 3 == 0) 
        return `Fizz`;

    if (input % 5 == 0) 
        return `Buzz`;
    
    return input
    //if (input % 3 != 0 || input % 5 != 0) 
        //return `${input}`;
}

//const output = FizzBuzz(true);
//console.log(output)

console.log(FizzBuzz(false))


//44444444444444444444444444444444444444444444444444444444
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    //if (speed <= speedLimit)
    if (speed < speedLimit + kmPerPoint) {
        return `Ok`;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        return `License Suspended`;
    else
        return `Points ${points}`;
    }

console.log(checkSpeed(180));


//55555555555555555555555555555555555555555555555555555555
// function showNumbers(limit) {
//     for (let number = 0; number <= limit; number++) {
//         if (number % 2 === 0) 
//             return `${number} EVEN`;
//         else
//             return `${number} ODD`;
//     }
// }

// console.log(showNumbers(10));

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i, 'ODD');

        //const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        //console.log(i, message);
    }
}


//66666666666666666666666666666666666666666666666666666666
const array = [0, null, undefined, '', 1, 2, 3];

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        //if (typeof value == 'number');
        if (value)
            count ++;
    return count;
}

console.log(countTruthy(array));


//777777777777777777777777777777777777777777777777777777
const movie = {
    title: 'Anikulapo',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Afolayan',
    status: 1
};

function showProperties(obj) {
    for (let key in obj) {
        //console.log(key);
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

showProperties(movie);


//88888888888888888888888888888888888888888888888888888888
function sum(limit) {
    let sum = 0;

    for (let number = 0; number <= limit; number++)
        if (number % 3 === 0 || number % 5 == 0)
            sum += number;

    return sum;
}


console.log(sum(10)); 


//9999999999999999999999999999999999999999999999999999999
// const marks = [80, 80, 50]

// function calculateGrade(marks) {
//     let sum = 0;
//     for (let mark of marks)
//         sum += mark;

//     let average = sum / marks.length;

//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A'
// }

// console.log(calculateGrade(marks));

//OR
const marks = [80, 80, 50]

function calculateGrade(marks) {
    const average = calculateAverage(marks)
        if (average < 60) return 'F';
        if (average < 70) return 'D';
        if (average < 80) return 'C';
        if (average < 90) return 'B';
        return 'A'
    }

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

console.log(calculateGrade(marks))
    

//101010101010101010101010101010101010101010101010101010

function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++)
         pattern += '*';
        console.log(pattern);
    }
}

showStars(10)

//11111111111111111111111111111111111111111111111111111

