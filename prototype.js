/*Array.prototype.myFunction = function()
{
    console.log(this);
}

let arr = [1,4,3,7];
arr.myFunction();

*/

Array.prototype.myMap = function(cb){
    let newArr = [];
    for(let i=0;i<this.length;i++){
       newArr.push(cb(arr[i]))
    }
    return newArr;
}

function square(x)
{
    return x*x;
}

let arr = [1,2,3,4,5];
let mappedArr = arr.myMap();
