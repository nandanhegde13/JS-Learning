var str = 'Nandan Hegde Hosmane';
console.log(str.indexOf("Hegde",5));
console.log(str.lastIndexOf("Hegde",7));//return -1 if text is not found
console.log(str.search("Hegde"));
/*
indexof() and search() do look same but they functions differently.indexof() cannot take regex as parameters and search() cannot take second parameter for start position
*/
let arr = str.match("dan");
console.log(arr);

const iterator = str.matchAll("an");
console.log(iterator);
console.log(str.includes("Hegde",1));//case sensitive and cannot give regex
console.log(str.startsWith("Nandan"));
console.log(str.startsWith("Nandan",5));
console.log(str.endsWith("ane"));

