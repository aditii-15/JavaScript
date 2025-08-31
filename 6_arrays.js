// let arr = [];
// console.log(typeof arr);

//? Array using array constructor
// let fruits =  new Array("apple", "grape", "watermelon");
// console.log(fruits);

//? using array literal
// let fruits = ["apple", "grape", "watermelon"];
// console.log(fruits);

//? Accessing elements
// let fruits = ["apple", "grape", "watermelon"];
// console.log(fruits[1]);

//? Modify Elements
// let fruits = ["apple", "grape", "watermelon"];
// fruits[2] = "Mango"
// console.log(fruits);

//? For of loop
// let fruits = ["apple", "grape", "mango", "banana", "watermelon"];
// for(let item of fruits)
// console.log(item);

//? For in loop (in - index(0, 1, 2,...))
// let fruits = ["apple", "grape", "mango", "banana", "watermelon"];
// for(let item in fruits)
// console.log(item);

//? forEach Method
// let fruits = ["apple", "grape", "mango", "banana", "watermelon"];
// fruits.forEach((currElem, index, array) => {
//     console.log(`${currElem} ${index}`);
// });

//! WAP to  multiply each element with 2
const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((curElem) => {
    console.log(curElem * 2);
    // it performs an action on each element
});

const doubleValue = numbers.map((curElem) => {
    return curElem * 2;
    // creates a new array with transformed elements
})
console.log(doubleValue);

//* Push Method

let people = ["Ram", "Shyam", "Karan", "Riya"];
people.push("Shreya");
console.log(people);

//* Pop Method

let animals = ["Elephant", "Tiger", "Lion", "Monkey", "Gorilla", "Sparrow"];
animals.pop("Sparrow");
console.log(animals);

//* Unshift Method

let fastfood = ["Pizza", "Burger", "Roll"];
fastfood.unshift("Pasta");
console.log(fastfood);

//* Shift Method
let drinks = ["coke", "pepsi", "fanta", "sprite"];
drinks.shift();
console.log(drinks);

//* Splice Method - add or remove elements

let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(1, 1, "grapes");
// console.log(fruits);

fruits.splice(-1, 0, "grapes"); // this will not delete anything
console.log(fruits);

//* Searching

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
console.log(num.indexOf(4 ));
