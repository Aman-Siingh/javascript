// .filter ----- create a array after filtering element according to the function passed 


let numbers =[1,2,3,4,5,6,7,8,9];

const newNumber = numbers.filter(odd);
const newNumber1 = numbers.filter(even);

function even(element){

    return element%2===0;
}

function odd(element){

    return element%2!==0;
}

console.log(newNumber);
console.log(newNumber1);