function hello(){
    console.log("hello world");
}

for(let x in hello)
{
    console.log(hello.x);
}

let arr = [1,2,3,4,5];
console.log(Object.keys(arr));
// console.log(hello)
// console.log(Object.keys(hello));
