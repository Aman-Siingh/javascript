// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                    function()}


const person1 ={

    firstName : "Aman",
    lastName : "Singh",
    age : 18,
    isEmployed : true ,
    sayHello :()=> console.log("Hey, I am Aman ")
}

const person2 ={

    firstName : "Ayush",
    lastName : "Singh",
    age : 20,
    isEmployed : false ,
    sayHello :()=> console.log("Hey, I am Ayush")

}

console.log(person1.firstName);

person1.sayHello();