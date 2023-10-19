console.log(new Date());
console.log(new Date("2023-10-19"));
console.log(new Date(2023,11));
console.log(new Date(2018, 5, 35, 10, 33, 30));
console.log(new Date(2018, 11, 24, 10, 33));
console.log(new Date(2018, 11, 24, 10));
console.log(new Date(2018, 11, 24));
console.log(new Date(2018, 11));
console.log(new Date().toString());
console.log(new Date().toDateString());
console.log(new Date().toUTCString());
console.log(new Date().toISOString());
console.log(new Date("2015/03/25"));// some browser will return NaN for this
console.log(new Date("25-03-2015"));//some browser will return NaN for this
console.log(new Date("MAr 25 2015"));
console.log(new Date("25 Mar 2013"));
console.log(new Date("JANUARY, 25, 2015"));//commas are ignored Names are case insensitive
console.log(Date.parse("Mar 21 2012"));

