let myArr = [1,2,3,4,5];
let mappedArray = myArr.map(function(x)
{
    return x*x
})
console.log(mappedArray);


//custom map

function myPolyfillMap(arr,cb){
    let newArray = [];
    for(let i=0;i<arr.length;i++)
    {
         newArray.push((cb(arr[i])));
    }
    return newArray;
}

function square(x)
{
    return x*x;
}

console.log(myPolyfillMap(myArr,square))



//Filter

let fArray = [2,4,6,7,9,13,14,16]


let evenArray = fArray.filter(function(x){return x%2===0})
console.log(evenArray);


function myPolyfillFilter(arr,cb)
{
    let filteredArray= [];
    for(let i=0;i<arr.length;i++)
    {
        filteredArray.push(cb(arr[i]));

    }
    return filteredArray

}

function isEven(x)
{
    return x%2===0?true:false
}

myPolyfillFilter(myArr,isEven);