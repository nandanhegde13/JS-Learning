console.log(10==10);
console.log(10==="10");
console.log(10<5&&5>4);

//ternary operator
var age = 10;
let votable = (age>18)?"Old Enough":"Too young";
console.log(votable);

//nullish Coalescing operator(??)
//The ?? operator returns the first argument if it is not nullish (null or undefined).
let name = null;
let text = "missing";
let result = name ?? text;
console.log(result);


/*The Optional Chaining Operator (?.)
The ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
*/
const car = {name:"Fiat",whhels:"4"};
console.log(car?.name);