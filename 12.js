//if else condition

var age = 19;
if(age<18)
{
    console.log("You are not eligible for voting")

}
else{
    console.log("You are eligible for voting");

}

//ternary operator
var age1 = 20
var res = age1>18?"Eligible for voting":"Not eligible for voting";
console.log(res)


//and or operator
var age2=19
var naionality = "Indian"
if(age2>20 && naionality=== 'Indian')
{
    console.log("Eligible for voting");
}
else{
    console.log("not eligible for voting")
}

if(age2>20 || naionality=== 'Indian')
{
    console.log("Eligible for voting");
}
else{
    console.log("not eligible for voting")
}

