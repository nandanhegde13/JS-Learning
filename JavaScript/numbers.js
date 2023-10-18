var a =  10;
var b= 20;
var c ="100"
var d = "a";
console.log(c/d);
console.log(b+d);
console.log(isNaN(c/d));
console.log(10/0);
console.log(typeof Infinity);
console.log(a.toString());
let y = new Number(123);
let x=123;
console.log(x===y);
let z = new Number(123);
console.log(x===z) //FALSE=> comparing two javascript object will always return false
let t = BigInt(12334556644332234455);
console.log(typeof t);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isInteger(20));
console.log(Number.isSafeInteger(100000000000));

//number Methods
console.log(100+23).toString()
console.log(34.666666.toFixed(3));
console.log(34.666666.toPrecision(3));
console.log(parseInt("10.33"));
console.log(parseFloat(10.333));

// Number Properties
console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

