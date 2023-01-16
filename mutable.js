//mutable

var person1={
    name:"nandan",
    age:22
}
// var person2 = {
//     name:"hegde",
//     age:22
// }

const person2 = person1;
console.log(person1);
console.log(person2);

person2.age = 23;
console.log(person1);
console.log(person2);


// immutable

const person3 = Object.assign({},person1);
// or
// const person3 ={...person1}

console.log(person1);
console.log(person3);

person3.age=43;
console.log(person1);
console.log(person3);