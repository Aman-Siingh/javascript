// reduce() --- 


let numbers=[1,34,56,77,56];

const total = numbers.reduce(sum);

function sum(accumiilator , element){

    return accumiilator+element;
}

console.log(total);