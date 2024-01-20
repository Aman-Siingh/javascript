// rest parameter --"..." , use to create a array or bundle element into a array  


// function openFridge(...food){
//     console.log(food);
// }

// let food1="mango";
// let  food2="bread";
// let food3="milk";
// let food4="egg";

// openFridge(food1,food2,food4,food3);


function average(...numbers){

    let result =0;

    for(let num of numbers){

        result+=num;
        result=Math.floor(result/numbers.length);

    }
    console.log(result);
}

average(1,2,4,5);

function sum(...numbers){

    let result =0;

    for(let num of numbers){

        result+=num;

    }
    console.log(result);
}

sum(1,2,3,4,5);

function combineStrings(...strings){

    return strings.join("-");
}

const fullName=combineStrings("Mr", "Aman", "Singh");

console.log(fullName);