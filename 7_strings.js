//? Strings is created with single or double quotes

const str = "Hello World";
console.log(str.length);
// including space

//? Escape Character (', ", /)

// let text = "My name is \"Aditi Mishra\" and Im B.tech '1st year' student.";
// console.log(text);

//* String Search Method
//indexOf()

// let names = "Aditi Mishra";
// console.log(names.indexOf("Mishra"));

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

// match all()
// let Text = "Hello JavaScript, Welcome to the learning of JavaScript";
// let matchResult = Text.matchAll("JavaScript");
// console.log(matchResult);


//Includes() it gives the result in true or false

// let text = "Hello JavaScript, Welcome to the learning of JavaScript";
// let includeResult = text.includes("Java");
// console.log(includeResult);

// startsWith()
// let text = "Hello JavaScript, Welcome to the learning of JavaScript";
// let result = text.startsWith("welcome");
// console.log(result);

//endsWith()
let text = "Hello JavaScript, Welcome to the learning of JavaScript";
// let result = text.endsWith("welcome");
let result = text.endsWith("JavaScript");
console.log(result);

//? Extracting Strings Parts;

//slice()
//! In the word Aditi print only dit
// let Names = "Aditi Mishra";
// let finalResult = Names.slice(5); // (it prints Mishra)
// let finalResult = Names.slice(-12, 6); //(it prints Aditi)
// let finalResult = Names.slice(1, 4);
// console.log(finalResult);

//substring()
// let texts = "Hello World, welcome to the world dof JavaScript";
// let finalResult = texts.substring(-6); // Hello will also print
// console.log(finalResult);

// Todo Questions

// let texts = "Hello World, welcome to the JavaScript course";
// let Result = texts.slice(1);
// let Result = texts.replace("World", "Aditi");
// let Result = texts.substring(1);
// console.log(Result);

// charAt()

// let texts = "Hello World, welcome to the JavaScript course";
// let results = texts.charAt(8); // output - r
// // let results = texts.charAt(-8); // it returns empty string
// console.log(results);

//! Questions

//* WAP that prints the letter 'a' through 'z' in the console

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

for(char = 97; char <= 122; char++){
console.log(String.fromCharCode(char));
};

//* WAP to check if all the vowels are present in the string or not

const checkResult = (str) => {
    const vowels = "aeiou";
    for(let char of vowels){
        // console.log(vowels);
        // console.log(str.includes(char));
        if(!str.includes(char)){
            return false;
        }
    }
    return true;
};

console.log(checkResult("My name is Aditi Mishra"));
// output will be false as it doesn't contain o and u

//* WAP to count the number of vowels in a string

const countVowels = (str) => {
    const Vowels = "aeiou";
    let count = 0;
    for(let char of str){
        if (Vowels.includes(char)){
            count++;
        }
    }
    return count;
};

console.log(countVowels("Hello World")); // it will give 3

//! Question

const pangramChecker = (str) => {
    let inputArr = str.toLowerCase().split("");
    console.log(inputArr);
    const values = inputArr.filter((curElem) => 
        curElem.charCodeAt() >= "a".charCodeAt() 
        && curElem.charCodeAt() <= "z".charCodeAt()
    );
    console.log(values);
    
    console.log([...new Set(values)].length); // it will erase the duplicate letter
    
};

console.log(pangramChecker("The quick brown fox jumps over the lazy dog"));