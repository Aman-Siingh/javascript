// reduce() --- 


let numbers=[1,34,56,77,56];

const total = numbers.reduce(sum);

function sum(accumiilator , element){

    return accumiilator+element;
}

console.log(total);

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce (getMax);
const minimum = grades.reduce (getMin);

console.log (maximum);
console.log(minimum);

function getMax (accumulator, element){
    return Math.max (accumulator, element);
}
function getMin (accumulator, element){
    return Math.min(accumulator, element);
}