/*
Create a single object, using an object literal.
Create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().
*/

//Using an Object Literal

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//Using the JavaScript Keyword new
const person1 = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


//JAvascript objects are mutable
const x = person
/*
The object x is not a copy of person. It is person. Both x and person are the same object.

Any changes to x will also change person, because x and person are the same object.
*/

console.log(delete person.age);

myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    },
    get age1()
    {
        return this.age;
    },
    set lang(lang)
    {
        this.language = "Kannada"
    }
  }

  console.log(myObj.cars["car2"]);
  console.log(Object.values(myObj));
  console.log(typeof JSON.stringify(myObj));

  //accessors
console.log(myObj.age1);


//Prototype inheritance
//All objects inherits properties and methods from prototype
/*Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype */

function Person(first,last,age,eyecolor)
{
    this.firstName = first;
    this.lastName = last;
    this.age  =age;
    this.eyeColor = eyecolor;
}

Person.prototype.name = function()
{
    return this.firstName;
}