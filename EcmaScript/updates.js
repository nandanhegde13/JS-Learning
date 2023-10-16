const myName  =  "Nadan Hegde";
console.log(myName);

let name = "Nandan";
console.log(name);

function bioData()
{
    const myFirstName = "Nandan";
    console.log(myFirstName);
}
//console.log(myFirstName);//will give error since const is a block scope.


//Template literals
var myCity = "Sirsi";
console.log(`My Name is ${myName} and I am from ${myCity}`);

//default argument
function add(a,b=5)
{
    var answer=(a+b);
    return answer;
}
console.log(add(5));

const sum = function()
    {
         console.log("Hey there");
    }

sum();//bracket is must to call anonymous function

//Arrow Function
const sumArrow = (a) =>{
    console.log("Hello "+a);
}

sumArrow("Nandan");

