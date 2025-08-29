//? If Else Statement

var temp = 35;

if (temp > 40) {
    console.log("let's go to the beach"); 
}
else {
    console.log("Take a nap");
    
}

//? else if clause for additional conditions

var temp = 35;

if (temp > 40) {
    console.log("let's go to the beach"); 
}
else if(temp > 30 && temp < 40) {
    console.log("Watch a show");
}
else {
    console.log("Take a nap");
    
}

//* Question

let Voterage = 20;
let isCitizen = true;
let isRegistered = true;

// checking eligiblity with mutiple conditions

if (Voterage >= 18){
    if(isCitizen){
        if(isRegistered){
            console.log("You are eligible to vote");
        }
        else {
            console.log("You are not eligible due to registration status");
            
        }
}
    else {
        console.log("You are not eligible due to citizenship status");
    }
}
else {
    console.log("You are not eligible to vote (Younger)");
    
}


//! WAP to check if the number is odd or even

var num ="8";
if(num %2 === 0){
    console.log("Num is even");
}
else {
    console.log("Num is odd");
}

//! WAP to check if a number is positive, negative or zero

var num = 12;
if (num === 0){
    console.log("Number is zero");
}
else if (num > 0){
    console.log("Number is positive");
}
else {
    console.log("Number is negative");
}

//? Switch Statement 

var day = "Sunday";

switch(day){
    case "Monday": 
        console.log("Today is Monday");
        break;

    case "Friday":
        console.log("Weekend is on");
        break;
       
    case "Sunday":
        console.log("Lets go to movie");
        break;
    
    default:
        console.log("No condition match");
        break;
}

//! Question 

var areaOfShapes = "circle";
var a = 5;
var b = 10;
var result;

switch (areaOfShapes) {
    case "square": 
        result = a * a;
        console.log(result);
        break;

    case "rectangle": 
        result = a * b;
        console.log(result);
        break;

    case "circle":
        var r = 2
        result = 3.14 * (r * r);
        console.log(result);
        break;

    default:
        console.log("No shape match");
}

//? While loop

// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//? Do-While loop

// var i = 1;
// do{
//     console.log(i);
//     i++;
// } while (i <= 10)

//? For loop

// for (var i = 1; i <= 10; i++){
//     console.log(i);
// }

//! print the table of 5

// var num = 1;
// while (num <= 10) {
//     console.log("5 * " + num + " = " + (5*num));
//     num++;
// }

//! Calculate the sum of numbers from 1 to 10 using for loop

var sum = 0;
for(var i = 1; i <= 10; i++){
    var sum = sum + i;
} 
console.log(sum);

//! WAP to check if a year is leap year or not

var year = 2002;

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year, "It's a leap year");
}
else{
    console.log(year, "It's not a leap year");
}

//! WAP to make a star pattern

for(var i = 1; i <= 5; i++){
    var pattern = "";
    for(var j = 1; j <= i; j++){
        pattern = pattern + " * ";
    }
    console.log(pattern);
}