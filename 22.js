//Methods
//Function inside object

const person={
    firstName:"Nandan",
    age:22,
    about: function()
           {
              console.log(`person name is ${this.firstName} and age is ${this.age}`);

           }

}

person.about();

