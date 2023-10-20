/*Different Kinds of Loops
JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true
*/

//for loop
for(let i=0;i<5;i++)
{
    console.log(i);
}

//for in loop
const object  = {name:"nandan",cast:"Brahmin",eyecolor:"brown"};
for(let x in object)
{
    console.log(object[x]);
}

const numbers = [45, 4, 9, 16, 25];

for (let x in numbers) {
  console.log( numbers[x]);
}

//Array.forEach()

const number = [43,45,55,67];
number.forEach((element)=>{console.log(element)})

//for of loop
const cars = ["BMW","VOLVO","MINI"];
for(let x of cars)
{
    console.log(x);
}

const language = "Kannada";
for(let x of language)
{
    console.log(x);
}

//While loop
let i=0;
while(i<10)
{
    console.log(i);
    i++;
   
}

console.log(i);

//do while loop
{
    do{
        console.log(i);
        i++;
    }while (i<15);
}

//continue keyword
for(let i =0;i<6;i++)
{
    if(i==3) continue;
    console.log(i);
    if (i==4) break;
}