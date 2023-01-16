//find method

const myArray = ["Hello","cat","dog","lion"];
// function isLength3(string)
// {
//     return string.length==3;
// }

console.log(myArray.find(string=>string.length===3));



const users = [
{userId : 2, userName: "harshith"},
{userId : 3, userName: "harsh"},
{userId : 4, userName: "nitish"},
{userId : 5, userName: "adi"}

];

console.log(users.find(user=> user.userId===3));


//every method


const numbers = [1,2,3,2,4];
console.log(numbers.every(number =>number%2===0))


//some method
console.log(numbers.some(number=>number%2===0));



//fill method

const myArray1 = new Array(10).fill(-1);
console.log(myArray1);

myArray.fill(0,2,4)
