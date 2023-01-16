//Undefined

let firstName 
console.log(typeof(firstName));


//null

let myVariable = null
console.log(myVariable);
myVariable = "nandan";
console.log(typeof(myVariable));
console.log(typeof (null));// its a bug in javascript

//BigInt

let myNumber = 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let bigNum  = BigInt(123456789);
// console.log(typeOf(bigNum));
let bigNum2 = 123456789n
// console.log(typeOf(bigNum2));

console.log(bigNum+bigNum2);
let normalnum =1;
// console.log(bigNum+normalnum);

// booleans & comparision operator

let num1 =5;
let num2 = "5";

//booleans
console.log(num1>num2,typeof(num1>num2));
console.log(num1==num2)
console.log(num1===num2);







