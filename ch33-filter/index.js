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


let ages = [12,13,18,18,19,35,56,72,7,8,10,67,];


const adults= ages.filter(isAdult);
const child = ages.filter(isChild);

function isAdult(element){

    return element>=18;
}

function isChild(element){

  
    return element<18;
}

console.log(child);
console.log(adults);