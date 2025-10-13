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

//* Searching and indexOf

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// console.log(num.indexOf(7)); // output 6

//* lastIndexOf

// const nums = [1, 2, 3, 6, 5, 4, 6, 8, 7];
// const result = nums.indexOf(6);
// console.log(result);
// const result1 = nums.lastIndexOf(6);
// console.log(result);


//* Includes - it returns if the value is given or not in the form of true or false
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = num.includes(6);
// console.log(result);

//todo 
//! Add Dec at the end of the array

// const months = ["Jan", "Feb", "May", "June", "April"];
// months.splice(months.length, 0, "Dec");
// console.log(months);

//! Change may to May

const months = ["Jan", "Feb", "may", "June", "April"];
const indexToUpdate = months.indexOf("may");
months.splice(indexToUpdate, 2, "May");
console.log(months);

//* Filters in Array

//Find Method
const num = [1, 2, 3, 4, 5, 4, 6, 7, 6, 8, 9];
const result = numbers.find((curElem) => {
    return curElem > 5;
});
console.log(result);

//* Filter-

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result1 = nums.filter((currElem) => {
//     return currElem > 4;
// });
// console.log(result1);

//! Ques Delete the value of 5 in the array

let value = 5;
const no = [1, 2, 3, 4, 5, 6, 5, 7, 8, 9];

let updatedCart = no.filter((currElem) => {
    return currElem != value;
});

console.log(updatedCart);

//! Ques (It contains object)

const products = [{Item: "Purse", price: 1200},{Item: "Paints", price: 600},
                 {Item: "Glasses", price: 450}, {Item: "Books", price: 300}, ];

let filterProducts = products.filter((currElem) => {
    return currElem.price <= 500;  
});
console.log(filterProducts);

//* Sort and Compare Array

// Sort
const fruit = ["Mango", "Passionfruit", "Orange", "Apple", "Watermelon", "Banana"];
fruit.sort();
console.log(fruit);

// Compare
const number = [1, 2, 4, 3, 5, 6, 7, 8, 9];
number.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
});
console.log(number);

//? For ascending order code
// const sortedNumbers = number.sort((a,b) => {
//     if (a > b) {
//         return 1;
//     }
//     else if (b > a) {
//         return -1;
//     }
// });
// console.log(number);

//? Descending order code
// const sortedNumbers = number.sort((a,b) => {
//     if (a > b) {
//         return -1;
//     }
//     else if (b > a) {
//         return 1;
//     }
// });
// console.log(number);

//! Using map method write the sqaure of the array

const numb = [1, 2, 3, 4, 5, 6];
let results = numb.map((curElem) => curElem * curElem); 
console.log(results);

//! Using map method WAP that takes an array of strings and return a new array where each string is capitalized.

const words = ["apple", "banana", "guava", "mango", "watermelon"];

let Result = words.map((curElem) => {
    return curElem.toUpperCase();
});
console.log(Result);

//! Using map methods WAP that takes array and returns new array where each number is squared, but only if its even number

const Nums = [1, 2, 3, 4, 5, 6, 7, 8];

const result1 = Nums.map((curElem) => {
    if(curElem % 2 === 0){
       return curElem * curElem;
    }
})
.filter((curElem) => curElem != undefined);
console.log(result1);

//! Using map method WAF that takes ana rray of names and return a new array where each name is prefixed witth "Ms."

const names = ["Riya", "Priya", "Jiya", "Aditi", "Shreya"];

const prefixName = names.map((curName) => `Ms. ${curName}`);
console.log(prefixName);

//* Array.Reduce (It doesn't contain in double quotes)

const productPrice = [200, 500, 780, 600, 900];

const totalPrice = productPrice.reduce((accumulator, curElem) => {
    return accumulator + curElem;
}, 0);
console.log(totalPrice);
