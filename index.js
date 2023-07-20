//Submitted by Bilal Mohammed(C0882358)
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
        console.log(`${this.brand} car Tuut tuut`);
        console.log(`Brand: ${this.brand}  Model: ${this.model}  Year:${this.year}  Color:${this.color} Price:${this.price}$ Gas: ${this.gas}`);
    }

    race(i,today)
    {
        
        this.gas -= 5 + (today.getFullYear()-this.year);
        console.log(`${this.brand} car has ${this.gas} gas value`);
    }

    
}

let objectsArray = [];
let car1 = new Car("Honda","CR-V",2023,"Red",50000,45);
objectsArray.push(car1);
let car2 = new Car("Ford","F-150",2020,"Black",25000,30);
objectsArray.push(car2);
let car3 = new Car("BMW","X5",2022,"Green",60000,65);
objectsArray.push(car3);
let car4 = new Car("Mazda","CX-5",2019,"White",15000,60);
objectsArray.push(car4);
let car5 = new Car("Audi","Q7",2018,"Silver",52000,47);
objectsArray.push(car5);
let car6 = new Car("Kia","Forte",2020,"Blue",21000,56);
objectsArray.push(car6);


for(let obj of objectsArray)
{
    obj.honk();
}



 let today = new Date();
 let turns = 7;
 for(let i=0;i<turns;i++)
 {
    console.log(`After turn ${i+1}`);
    for(let j=0;j<objectsArray.length;j++)
    {
       objectsArray[j].race(i,today);
    }
 }

