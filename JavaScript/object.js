const person ={
    firstName :"Nandan",
    lastName:"Hegde",
    age:"50",
    eye:"blue",

    fullName: function(){
         return this.firstName+this.lastName;
    }
}

console.log(person.lastName);
