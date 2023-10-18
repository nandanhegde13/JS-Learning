var str = "Nandan hegde Hosmane";
console.log(str.length);
var sliced = str.slice(1,4);
console.log(sliced);
console.log(str.slice(-6));//osmane->counts from end
console.log(str.substring(1,4));
console.log(str.substring(-6,9));//Substring considers negtive value is zero
console.log(str.substr(3,7));//substr considers second parameter as length all other similar to slice
console.log(str.replace('Nandan','Nandu'));
console.log(/NANDAN/i,'Nandu');//case insensitive
console.log(/NANDAN/g,'Nandu');//replace all occurence
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.concat("Sirsi"));
console.log(str.concat("        ").trim());
console.log("    "+str.trimStart());
console.log(str.trimEnd());
console.log(str.padStart(4,"0"));
console.log(str.padEnd(4,"X"));

//methods to extract string characters 
console.log(str.charAt(5));
console.log(str.charCodeAt(5));
console.log(str[5]);

/*
Property access might be a little unpredictable:
It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)

*/

//string to an array
console.log(str.split(" "));
console.log(str.split(""));
console.log(str.split());