class Car{
    
    constructor(brand, model, year, color, price,gas)
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;

    }
    honk()
    {
        console.log("Tuut tuut");
        console.log(`Brand: ${this.brand}  Model: ${this.model}  Year:${this.year}  Color:${this.color} Price:${this.price}$ Gas: ${this.gas}`);
    }

    race()
    {
        let today = new Date();
        this.gas -= 5 + (today.getFullYear()-this.year);
        console.log("After race");
        console.log(this);
    }

    
}

let car1 = new Car("Honda","CR-V",2023,"Red",50000,45);
let car2 = new Car("Ford","F-150",2020,"Black",25000,30);
let car3 = new Car("BMW","X5",2022,"Green",60000,65);
let car4 = new Car("Mazda","CX-5",2019,"White",15000,60);
let car5 = new Car("Audi","Q7",2018,"Silver",52000,47);
let car6 = new Car("Kia","Forte",2020,"Blue",21000,56);

car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();

//for(let i=0;i<7;i++){
    car1.race();
    car2.race();
    car3.race();
    car4.race();
    car5.race();
    car6.race();
//}
