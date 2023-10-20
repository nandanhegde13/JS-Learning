/*
Iterables are iterable objects (like Arrays).

Iterables can be accessed with simple and efficient code.

Iterables can be iterated over with for..of loops
*/

//sets
const letters = new Set(["a","b","c","d"]);
for(let x of letters)
{
    console.log(x);
}

//maps
const fruits = new Map(["apples",300],["bananas",400]);
for(let x of fruits)
{
    console.log(x);
}