// map, filter and reduce explained with emoji 😂

/*map([🐮, 🍠, 🐔, 🌾], cook)
=> [🍔, 🍟, 🍗, 🍞]

filter([🍔, 🍟, 🍗, 🍞], isVegetarian)
=> [🍟, 🍞]

reduce([🍔, 🍟, 🍗, 🍞], eat)
=> 💩
*/


//map
const myArr = [1,2,3,4,5];
const newArr = myArr.map((x)=>x*x);
console.log(newArr);

//filter
let filteredArray = myArr.filter((x)=>x%2===0);
console.log(filteredArray);

//reduce
let reducedArray = myArr.reduce( function (accumulator,x){
     return accumulator+x;
},0 )

console.log(reducedArray);