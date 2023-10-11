var year = 2020;

if(year%4===0)
{
    if(year%100 ===0)
    {
        if(year%400===0)
        {
            console.log("The year "+year +"is a leap year")

        }else
        {
            console.log("The year "+year +"is not a leap year")

        }
    }else{
        console.log("It is a leap year");
    }
}
else
{
    console.log("The year is not a leap year");
}


//5 falsy values
//0,"",undefined,null,NaN

if(0)
{
  console.log("OMG, we loss the game ");
}else{
   console.log("Yay,We won the game");
}

//ternary Operator
var age=20;
var eligible = age>18?console.log("yes") : console.log("no"); 
eligible;