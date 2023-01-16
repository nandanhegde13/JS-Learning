//Itrables:
//Iterables are those on which we can apply for of loop
const arr = [1,2,3,4,5,6];
for( let x of arr)
{
    console.log(x);
}


for (let x of "nandan")
{
    console.log(x);
}

// array like objects
// array like objects are those which has length property\

//Sets
//sets are iterables
//No-index based access
//not ordered
//unique items only
//also have its own method
//store data


const items =["item","item2","item3"];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(items);
if(numbers.has(1)){
    console.log("1 is present");
}

for(let x of numbers)
{
    console.log(x);
}


//Map object(different from map method)
//just like objects
// guaranteed order
//in onject key van be string or symbol
//in map key can be of any dat type
// const person = {
//     firstName:"nandan",
//     age:" 23"
// }

// console.log(person.age);
// console.log(person[firstName]);

const person1 = new Map();
person1.set('firstName',"Harshith")
person1.set("age",7);
person1.set(1,"one");
console.log(person1);
for ( let key of person1.keys())
{
    console.log(key,typeof key)
}

//clone using Object.assign
const obj=
{
  key1:"value1",
  key2:"value2"
}

const obj2 =Object.assign({}, obj);
obj.key3 = "value3"
console.log(obj);



//optional chaining
const user={
    firstName:"harshith",
    //address:{houseNumber:'1234}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);



