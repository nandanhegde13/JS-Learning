function f()
{
    console.log("Hello I am Nandan");
}
f();

(function f1()
{
    console.log("This is self invoking Function");
})();

var f2 = function fun2()
{
    console.log("fun2");
}
f2();

console.log(f2.toString());

//Arrow function
var r = (a,b) => a+b;
console.log(r(2,3));