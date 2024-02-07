// arrow function ---  it is a concise way of writing a function 
//                     (parameters)=> block of code




const hello = (name) => console.log(`Hello ${name}`); 

let num = [1,2,3,4,5,6,7,8,9,];


const square = num.map((element) => { return Math.pow(element,2)});

console.log(square);

const sum = square.reduce((accumilator,element) => {return accumilator+element});

console.log(sum);




