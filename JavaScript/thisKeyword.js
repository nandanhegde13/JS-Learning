"use strict";
const person ={
firstName :"John",
lastName :"Doe",
fullName : function()
    {
        return this.firstName +" "+this.lastName;
    }

}
console.log(this);
console.log(person.fullName);
{
  
   console.log(this);
}

const car = {
    name:"Creta 20",
    company:"Hyundai",
    color:"white",
    drive :function(carColor)
    {
       return "Put the gear and start moving"+this.name+carColor;
    }
}

const creta ={
    name:" creta 2020"
}
console.log(car.drive.call(creta,"redcar"));

console.log(car.drive.apply(creta,["red","blue"]));
console.log(Math.max.apply(Math,[2,4,5]));
console.log(car.drive.bind(creta));

let myfun = (a,b) =>a+b;
console.log(myfun(2,4));