//? Assignment operators
// These are the symbols used to assign values to variables.
// They take the values on the right side of the operator and assign it 
// to the left side

var myFavNum = 15;


//? Arithemetic operators 
// addition(+)
var x = 5;
var y = 9;
var sum = x + y;
console.log(sum);

// subtraction(-)
var x = 15;
var y = 7;
var difference = x - y;
console.log(difference);

// multilpication(*)
var x = 11;
var y = 6;
var product = x * y;
console.log(product);

// division(/)
var x = 27;
var y = 6;
var divide = x / y;
console.log(divide);

// modulus(%)
var x = 17;
var y = 5;
var remainder = x % y;
console.log(remainder);

//! Trick question
var result = 0.1 + 0.2;
console.log(result.toFixed(2));

//? String operators
var str1 = "Hello ";
var str2 = "World";
var str3 = str1 + str2;
console.log(str3);

// equal (==)
console.log(5 == 5);
console.log(5 == 15);

// strict equal (===) check if two values are equal without performing type correction
console.log(5 === "5");

// not equal (!=)
console.log(5 != "5");

//! Question

//* Equal
let num1 = 5;
let num2 = "5";

if (num1 == num2){
    console.log("equal");
} 
else{
    console.log("not equal");
    
}

//* Strict Equal
let a = 5;
let b = "5";

if (a === b){
    console.log("equal");
}
else{
    console.log("not equal");
}


//? Logical Operator
// there are mainly three operators &&, ||, !

//* && operator (and operator)
var x = 5;
var y = 10;
console.log(x > 0 && y > 0);

//* || operator (or operator)
var m = 6;
var n = 8;
console.log(m > 5 || b > 10);

//* ! operator (not operator)
var isClose = false;
console.log(!isClose);

//! Question

var age = 15;
var drivingLicense = true;

// age > 18
// age == 18
console.log(age >= 18  && drivingLicense);

//? Conditional (ternary) Operator

var age = 15;
var result = age >= 18 ? "Yes" : "No";
console.log(result);


