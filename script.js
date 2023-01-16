console.log("Hello");
// Types of functions
//normal function
/*
function sayHello(param)
{
    console.log("Hello "+param);
    return "Hegde";
}

var res = sayHello("nandan");
console.log(res);

//Function are first class citizen(function can be treated as variables)
//function expression

let fnContainer = function fn()
{
    console.log("function expression");
}
fnContainer();


// anonymous funtion

let fnContainer1 = function ()
{
    console.log("function expression");
    console.log("I am anonymous");
}
fnContainer1();


//iife ->immediately invoked function expression

(function fn1(){
    console.log("I am IFFEE");
})();

 // arrow function 

 let arrow = (param)=> console.log(param*param)
arrow(5);


// passing function as parameter to other function

function smaller()
{
    console.log("I am smaller")
}

var res;
function bigger(fn)
{  res = fn();
   return res 
}

console.log(bigger(smaller));

// function returning function

function outer()
{  console.log("I am outer")
    return function inner()
    {
       return "i am inner";
    }
}


var res2 = outer();
console.log(res2);
console.log(res2());


*/
//console.log(global);
console.log(window);
console.log(this);

//local scope


var varName =10;
function fn()
{
    var VarName =20;
    console.log(varName);

}

fn();



