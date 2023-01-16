//object
//object store key value pairs
//object don't have index
const key = "email";
const person =
{
  name:"Harshith",
  age:22,
  "person hobbies" : ["sleeping","eating","music"]   
}

console.log(person);
console.log(person.name);
person.gender="male";
console.log(person);
console.log(person["name"]);
person[key] = "hegdenandan013@gmail.com";
console.log(person);


//looping objects
console.log("\n")
for(let key in person)
{
    console.log(key);
}

//object destructuring

const band= {
    bandName:"led zepplin",
    famousSong :"stairway to heaven",
};

const {var1,var2}=band;
console.log(var1)