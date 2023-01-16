function calculate(a,b)
{
    let result = a+b;
    return result;
}

console.log(calculate(2,3))



//closure
function add(x)
{   let a = 10;
    function addChild()
    {
       console.log(a+x);
    }
    return addChild;
}

let res = add(10);
res();
