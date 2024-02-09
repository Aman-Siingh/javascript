//  constructor --- this is the special method of defining properties and methods of a function 


function Car(name , year , model){

    this.name =name,
    this.year = year ,
    this.model = model

}

const car1 = new Car("ford", 2024, "mustang");

console.log(car1);