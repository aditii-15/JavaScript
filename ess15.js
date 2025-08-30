//* Examples-

//? Ex-1
var myName = "Shreya";

if (true){
    var myName = "Aditi";
    console.log(myName);
}

var myName = "Mishra";
console.log(myName);

//? Ex-2 (This shows error as const variable can be used only once)
// const myName = "Shreya";

// if (true){
//     const myName = "Aditi";
//     console.log(myName);
// }

// const myName = "Mishra";
// console.log(myName);

//* Template Strings

// let firstName = "Aditi ";
// let lastName = "Mishra";

// let fullName = firstName + lastName;
// console.log(fullName);

let firstName = "Aditi";
let lastName = "Mishra";

let fullName = `${firstName} ${lastName}` // this is use in latest
console.log(fullName);

//? Question

let age = 20;

let message = `I am ${age} years old`;
console.log(message);

//! Ques
let num = 6;
console.log(`5 * ${num} = ${5 * num}`);

//* Fat Arrow Function

//? This is the normal way
// const sum = function (a, b){
//     let result = `The sum of ${a} and ${b} is ${a + b}`;
//     console.log(result);
// };
// console.log(sum(10, 5));

//* Fat Arrow Function
//? eg 1

const sum = (a, b) => console.log( `The sum of ${a} and ${b} = ${a + b}`);
sum(10, 7);

//? eg 2

const square = (x) => console.log(`The square of ${x} = ${x * x}`);
square(5);

//! Ques

const calculator = (x, y, operator) => {
    let result;
    switch(operator){
        case "+":
            return  x + y; // this will also work

            case "-":
                result =  x - y;
                return result; // this will also work

                case "/":
                    if (y === 0){
                        return "0 is not allowed"
                    }
                    else{
                        result = x/y;
                        return result;
                    }

                    case "*":
                        return x *  y;

                default:
                    return "No operator found"
    }
}
console.log(calculator(5, 7, "+"));
console.log(calculator(16, 8, "-"));
console.log(calculator(10, 0, "/"));
console.log(calculator(5, 8, "*"));

//! Reverse a string without using built in reverse method

// let str = "Aditi Mishra";
// console.log(str[2]); // Output - i


const isReverse = (str) => {
    let reverse = "";
    for(let char = str.length-1; char >= 0; char--){
        reverse = reverse + str[char];       
    }
    return reverse;
};

console.log(isReverse("Aditi Mishra"));


//! Check if the word is Palindrone

const isPalindrone = (str) => {
    let reverse = "";
    for(let char = str.length-1; char >= 0; char--){
        reverse = reverse + str[char];       
    }
    // if (str === reverse){
    //     return true;
    // }
    // else {
    //     return false;
    // }

   return str === reverse ? true : false;
};

console.log(isPalindrone("level"));