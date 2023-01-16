//is the square of the number is even
//imperitive
const x=5;

const xSquared =x*x
let isEven;
if(xSquared%2 ===0)
{
    isEven =true;
}

else {
    isEven = false;
}

console.log(isEven);


//declerative

const isSquareEven = (y) => ((y*y)%2===0 ? true:false);
console.log(isSquareEven(4))