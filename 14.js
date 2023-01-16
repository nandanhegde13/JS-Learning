//Arrays
//ordered collection of elements
//reference type
//arrays are objects
let arr = [1,2,3,4,5]
console.log(arr);
console.log(arr[1]);
arr.push("Mango");
console.log(arr);
console.log(typeof arr);
console.log(Array.isArray(arr));

// Array Methods

arr.push("Orange");//add element at last,donot return any value
console.log(arr);

var lastElement = arr.pop("Orange") // Delete last element returns poped value
console.log(arr+" :"+lastElement);

arr.unshift("Banana")//add element at start dont return any value
console.log(arr);

arr.shift();//remove element from first return poped value
console.log(arr);

console.log(arr.length);

// cloning arrays

let ar1 = ["item1","Item2"];
let ar2 = ar1.slice(0);
let ar3 = [].concat(ar1);
let ar4 = [...ar1];
console.log(ar1);
console.log(ar2);
console.log(ar3);
console.log(ar4);

//loops on array

let fruits = ["apple","mango","grapes","banana"];

for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
    
}
console.log("\n")

for(let i in fruits)
{
    console.log(fruits[i]);
}
  console.log("\n");

for(let i of fruits)
{
    console.log(i)
}

console.log("\n");
fruits.forEach(element => {
    console.log(element);
});



//destructuring arrays 

const names = ["nandan","harish","girish"];
let [myVar1, myVar2] = names;
console.log(myVar1,myVar2);



