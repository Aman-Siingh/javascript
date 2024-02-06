// function expresson is different from function declaration


setTimeout(function(){
    console.log("hello")
}, 3000);   


// we can pass a whole function as a argument 


let num = [1,2,3,4,5,6,7,];


const square = num.map(function(element){
    return Math.pow(element,2);
})

console.log(square);

const sum = num.reduce(function(accumilator,element){

    return accumilator+element;
})

console.log(sum);

