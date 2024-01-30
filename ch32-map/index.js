// map ---- it ittrate over each elemnt of an Array a applies a function over each element 
// iit return a new array 


function toUpper(element){

    return element.toUpperCase();
}

let A = ["mango", "apple ", "banana", "orange"];

const B = A.map(toUpper);

console.log(A);
console.log(B);


const dates = ["2002-09-01", "2005-07-03",'2024-06-30'];

function format(element){
     const parts = element.split("-");
     console.log(`${parts[2]}/${parts[1]}/${parts[0]}`);

}

dates.map(format);