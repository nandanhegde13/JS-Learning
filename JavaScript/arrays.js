const arr1 = ["FIAT","BMW","Mercedez","Audi"];
console.log(arr1[2]);
console.log(arr1.toString());
console.log(typeof arr1);
console.log(arr1.length);
console.log(arr1.sort());
for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}

arr1.forEach((element) => {console.log(element+"1")});

var res = arr1.push("Alto");
console.log(res);
console.log(res);
console.log(res);


const points = [40];
console.log(Array.isArray(arr1));
console.log(arr1 instanceof Array);

