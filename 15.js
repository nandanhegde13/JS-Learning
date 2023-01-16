// primitive ReferenceError

let num1 = 6;
let num2 = num1;
num2 =7;
console.log(num1);
console.log(num2);

// reference type
let arr1 = ["item1", "item2"];
let arr2 = arr1;

console.log("array1 :"+arr1);
console.log(arr2);
arr1.push("Item3");
console.log(arr1);
console.log(arr2);

