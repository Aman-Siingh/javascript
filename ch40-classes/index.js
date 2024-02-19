class Product{

    constructor(name , price ){

        this.name = name ;
        this.price = price;

    }

    displayObject(){

        console.log(`Product : ${this.name}`);
        console.log(`Price $${this.price}`);

    }
}

const product1  = new Product("Shirt", 1000);
const product2 = new Product("Pants", 5000);

product1.displayObject();