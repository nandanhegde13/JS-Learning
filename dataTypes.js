/*six primitive datatypes in javascript
   1)undefined
   2)Boolean
   3)Number
   4)String 
   5)BigInt
   6)Symbol 
*/

var name = "Nandan";
var age=12;
var isMarried =false;
var city;
var country;

console.log(country);
console.log(9-"5");//bug
console.log(9+"5")
console.log(""+"");
console.log("Vinod"-"thapa");//Nan
console.log(false-true);//-1

//Difference between null vs undefined
var useLess = null;
var useLess = undefined;
console.log(useLess);
console.log(typeof null)//object-bug

//Nan is a property of the global object;
//In other words,it is a variable in global scope
var myPhoneNumber = 9980865436;
console.log(myPhoneNumber);

console.log(NaN === NaN)
console.log(Number.isNaN(NaN));

