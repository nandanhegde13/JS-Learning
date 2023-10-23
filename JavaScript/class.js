class Car{
    name;
    year;
    constructor(name,year)
    {
        this.name = name;
        this.year = year;

    }

    model()
    {
        return this.name+" "+this.year;
    }
}

const car1 = new Car("Audi","2020");
console.log(car1.model());


class Person{
      constructor (name,age)
      {
        this.name = name;
        this.age = age;

      }

      bio()
      {
        return this.name+this.age;
      }


}


const person1 = new Person("Nandan",23);
const person2 = new Person("Nandan Hegde",23);



//inheritance

class Employee extends Person{
    
   
    constructor(eid,salary)
    {      super();
        this.eid = eid;
        this.salary = salary;
    }

    static hello(x)
    {   

        console.log("Hello"+x.eid);
    }

}
var emp1 = new Employee(123,12345);
console.log(emp1.age);
console.log(Employee.hello());
const emp3 = new Employee(123,12345);
console.log(Employee.hello(emp3));




