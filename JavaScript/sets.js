//set is a collection of unique values.
//Each value can occur only once in a set
//
const letters = new Set(["a","b","c"]);
letters.add("x");
let x = "20";
letters.add(x);
letters.forEach(function my(element){console.log(element)})
console.log(letters.values());
console.log(letters.has("a"));
console.log(letters.delete("b"));