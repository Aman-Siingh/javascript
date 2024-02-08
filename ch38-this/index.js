// this = reference to the object where THIS is used
//       (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "Aman ",
    favFood: "Burger",
    sayHello: function() { console.log(`Hi! I am ${this.name}.`) },
    eat: function() { console.log(`${this.name} is eating ${this.favFood}.`)}
};

const person2 = {
    name: "Ayush",
    favFood: "pizza",
    sayHello: function() { console.log(`Hi! I am ${this.name}.`) },
    eat: function() { console.log(`${this.name} is eating ${this.favFood}.`)}
};

person1.eat();
person2.eat();
