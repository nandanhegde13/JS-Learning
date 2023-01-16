//Switch

let day = prompt("Enter day number");
switch(Number(day)){
    case 1:console.log("Sunday");
            break;
    case 2:console.log("Monday");
            break;
    case 3:console.log("tuesday");
            break;
    case 4:console.log("wednesday");
            break;
    case 5:console.log("thursday");
            break; 
    case 6:console.log("friday");
            break;
    case 7:console.log("saturday");
            break;
    default:console.log("Invalid day");

}


//While
number =0
while(number<5)
{
    console.log(number);
    number++;
}

//do while
number1 = 0
do{
    console.log(number);
    number--;
}while(number>10)

//for loop
let abc = 10;
for(let i=10;i>=0;i--)
{
    console.log(i);
    if(i==5)
    continue;
    if(i==2)
    break;
}