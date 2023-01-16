//it not specified in ECMA documentation to compile before execution
// compilation is required to early error checking and to determine the scope of variable
//compilation includes 3 phases 1)Tokenizing/lexing 2)Parsing 3)Code generation


console.log(this);
console.log(window);
console.log(firstName);
var firstName = "nandan";
console.log(firstName);


//lexical scope


const lastName = "Hegde";
const printName = function()
{
    const firstName = "Nandan"
    function myFunction()
    {
        console.log(firstname);
        console.log(lastName);
    }
}

printName();




