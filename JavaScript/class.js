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