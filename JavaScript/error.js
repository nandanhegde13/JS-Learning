//javascript actually create error object with name and message property
//Six different values can be returned by the error name property
/*
1)EvalError
2)RangeError
3)ReferenceError
4)SyntaxError
5)TypeError
6)URIError  

try{

    consolelog(Hello);
}catch(e)
{
    console.log(e);
}finally{
    console.log("Exception Bypassed");
}


//throw statement
var num = 15;
try{
    if(num>20)
    {
        throw "Number is too high"
    }
    else if(num<10)
    {
        throw "number is too low";
    }
    else{
        console.log("Valid number : "+num);
    }
}catch(err)
{
    console.log(err);
}
*/