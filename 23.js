//creating object without method


const user={
    name:"nandan",
    age:22,
    email:"hegdenandan013@gmail.com",
    gender:"male",
    about:function()
          {
            return `My name is $user.name} and i am ${age} yeas old`;
          },
    isAdult : function()
              {
                if(this.age>18)
                return true;
              }       
}

console.log(user);

//creating user with function
function createUser(name,age,email,gender){
    const user = {};
    user.name=name;
    user.age=age;
    user.email = email;
    user.gender=gender;
    user.about = function()
    {
      return `My name is $user.name} and i am ${age} yeas old`;
    },
    user.isAdult =  function()
    {
      if(this.age>18)
      return true;
      return false;
    } 
    return user;  
}

const user2 = createUser("Girish",22,"hegdegirish@gmail.com","male");
console.log(user2);
console.log(user2.isAdult())

//creating object method outside object

const  userMethods ={
    about : function()
    {
      return `My name is ${this.name} and i am ${this.age} yeas old`;
    },
    isAdult :  function()
    {
      if(this.age>18)
      return true;
      return false;
    } 
 
}


function createUser1(name,age,email,gender){
    const user = {};
    user.name=name;
    user.age=age;
    user.email = email;
    user.gender=gender;
    user.about = userMethods.about;
    user.isAdult = userMethods.isAdult;
    return user;  
}

const user3 = createUser1("Harish",25,"hegdeharish@gmail.com","male");
console.log(user3);
console.log(user3.about());

