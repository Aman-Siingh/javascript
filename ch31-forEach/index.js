// for Each ----- apply a function to each elements of a array

// {arrayName}.forEach({function you want to apply }) 

// Example -1 

let num = [1,2,3,4,5];

function double(elements){

    elements=elements*2;
    console.log(elements);


} // this function will double each element of array 

function square(element){

    element= Math.pow(element,2);
    console.log (element);


}

function display(element){

    console.log(element);
}

// num.forEach(square);
// num.forEach(display);


// Example -2

let fruits = ["apple",'orange','banana',"mango"];

fruits.forEach(capitalize);
fruits.forEach(display);


function display(element){

    console.log(element);
}

function upperCase(element, index , array){

    array[index] = element.toUpperCase();
}

function capitalize(element,index,array){

    array[index] = element.charAt(0).toUpperCase() + element.slice(1);


}
