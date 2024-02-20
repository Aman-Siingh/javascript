class Product{

    constructor(name , price ){

        this.name = name ;
        this.price = price;

    }

    displayObject(){

        console.log(`Product : ${this.name}`);
        console.log(`Price $${this.price}`);

    }

    calculateTax(salesTax){

        return this.price + (this.price * salesTax);
    }


}

const salesTax = 0.03; 

const product1  = new Product("Shirt", 1000);
const product2 = new Product("Pants", 5000);

product1.displayObject();

const total = product1.calculateTax(salesTax);

console.log(total);