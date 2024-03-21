// Super Class :


class Animal {

    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}

class Rabbit  extends Animal{

    constructor(runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    
    }
}