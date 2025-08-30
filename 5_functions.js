// Example

// 1st student
var a = 5, 
    b = 10;

var sum1 = a + b;
console.log(sum1);

// 2nd student
var a = 15,
    b = 25;

var sum2 = a + b;
console.log(sum2);

// 3rd student
var a = 20;
    b = 15;

var sum3 = a + b;
console.log(sum3);


//* Lets make a reusable code

function sum(a , b){
    return a + b;    
}

console.log(sum(5,5));
console.log(sum(35,45));
console.log(sum(58,57));

//! Question

function greet(name){
    console.log("Hello " + name + ", Welcome to the course of JavaScript");
}
greet("Ram");
greet("Aditi");

//? IIFE - Immediately Invoked Function expression

//Syntax
// (function(){
//     //code
// })();

(function (a, b) {
    console.log(a + b);
})(5, 10);