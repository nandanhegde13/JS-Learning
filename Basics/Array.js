var friend1 = "arjun";
var friend2 = "Visal";
var friend3 = "Ramesh";

var myFriends = [friend1,friend2,friend3];
console.log(myFriends[1]);

//for loop
for( var i =0; i<myFriends.length;i++)
{
    console.log(myFriends[i]);
}

//for of loop
for(let elements of myFriends)
{
    console.log(elements);
}

myFriends.forEach((elements,index,array)=>{
console.log(elements+index);

});


const myNumbers = [1,2,3,4,5];
myNumbers.unshift(4,6);
console.log(myNumbers);

const plants = ['brocoli','cauliflower','kale','tomato','cabbage'];
console.log(plants.pop());
console.log(plants);

console.log(plants.shift());
console.log(plants);

//sol1
const months = ['Jan','Feb','Mar','Apr','May'];
const newMonth = months.splice(months.length,0,"December");
//sol2
console.log(newMonth);

//sol3
const updatMonth = months.splice(2,1,'March');
console.log(months);

//Map and reduce method
const array1 = [1,4,9,16,25];
let newArr = array1.map((curElem)=>curElem*2).filter((curElem)=> curElem>10);
console.log(newArr);


let arr = [5,6,2];
 let sum = arr.reduce((accumlator,curElem,index,arr)=>{

    return accumlator+=curElem;
 });
 console.log(sum);

