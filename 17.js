//functions
//normal function
function func()
{
    console.log("Hello User")

}
func();

//function with parameter
function func2(name)
{
    console.log("Hello EveryOne..I am "+name);
}

func2("nandan");



function search(arr, target)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===target)
        {
              return i;
        }
    }
    return -1;
}

let arr1 = [1,2,3,4,5];
console.log(search(arr1,5));


//function expression with anonymous function

let isEven = function(number)
{
   if((number) % 2===0)
   return true;
   return false;
}

console.log(isEven(6));

//arrow function
const square = parameter=>parameter*parameter;
console.log(square(6));


//function inside function

const app = () =>
{   
    const myFunc =()=>
    {
        console.log("Hello from myFunc");
    }
    myFunc();
    console.log("inside app");
 
}

app();



//lexical scope 
// 

function myApp()
{
    const myVar = "Value1";
    function myFunction()
    {
       //const myVar = "value59";
       console.log("Inside myFunction",myVar);

    }
     console.log(myVar);
     myFunction();

}

myApp();



//block scope vs function scope

/*

{
    let firstName = "nandan";
    const lastName = "hegde"
}
console.log(firstName);  //  17.js:95 Uncaught ReferenceError: firstName is not defined
console.log(lastName);  //  at 17.js:95:13

*/
let  myName = "nandan";
 function myFunction()
 {
    
    console.log(myName);
 }

 myFunction();


 //rest parameters

 function funct(a,b,...c)
 {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
 }

 funct(3,4,5,6,7,8);


 //parameter destructuring

//  const person ={
//     firstName :"Nandan",
//     gender:"male"
//  }

//  function printDetails({firstName,gender})
//  {
//     console.log(firstName);
//     HTMLFormControlsCollection.log(gender);
//  }

//  printDetails(person);


//callback functions

function isEven1(x)
{
    if(x%2===0)
    return true;
    return false;
}

function abc(a)
{
    return(a(11));
}

console.log(abc(isEven1));