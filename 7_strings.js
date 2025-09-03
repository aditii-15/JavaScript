//? Strings is created with single or double quotes

const str = "Hello World";
console.log(str.length);
// including space

//? Escape Character (', ", /)

// let text = "My name is \"Aditi Mishra\" and Im B.tech '1st year' student.";
// console.log(text);

//* String Search Method
//indexOf()

let names = "Aditi Mishra";
console.log(names.indexOf("Mishra"));

//Array.from()
let Name = "Shreya Mishra";
let strArr = Array.from(Name);
// console.log(strArr);
let strMap = strArr.map((curElem, index) =>
    `${curElem} - ${index}`);
console.log(strMap);

//lastindexOf()
let message = "Hello JavaScript, Welcome to the learning of JavaScript";
let index = message.lastIndexOf("JavaScript");
console.log(index); // Here rhe last word javascript index is print

//match()
// let text = "Hello JavaScript, Welcome to the learning of JavaScript";
// let result = text.match(/Javascript/i);
// console.log(result);
// if we add i in the match it will solve the problem of case sensitivity

//Includes()
let text = "Hello JavaScript, Welcome to the learning of JavaScript";
let includeResult = text.includes("Java");
console.log(includeResult);
