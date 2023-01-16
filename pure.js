//impure function

var a = 5
function fn(b)
{
    return a+b;
}

console.log(fn(2));


//pure function

function fn2(a,b)
{
   return a+b;
}

console.log(fn2(10,20));