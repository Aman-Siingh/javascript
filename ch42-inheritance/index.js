class Animal{

    alive = true ;

    eat(){
        console.log(`this ${this.name} is Eating`);
    }

    sleeping(){
        console.log(`this ${this.name} is sleeping `);
    }
}

class rabbit extends Animal{
    name = "Rabbit ";
}

class fish extends Animal{
    name="Fish"
}

console.log(new fish().alive);
new fish().eat();
new fish().sleeping();

console.log(new rabbit().alive);
new rabbit().eat();
new rabbit().sleeping();