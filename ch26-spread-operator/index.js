// spread operator "...{arrayName}"- use to unpack the array 

let nums = [1,2,3,4,5,6,7];

let max = Math.max(...nums);
let mn = Math.min(...nums);

console.log(max);
console.log(mn);

let fruits = ["apple", "orange ", "mango"];
let vegetable = ["tomato", "potato", "carrorts"];

let food = [...fruits,...vegetable,"eggs", "milks"];

console.log(food);