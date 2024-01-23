// callbacks --- a function is passed as a argument to another function


sum(displayPage,3,3);

function sum(callbacks,x,y){

    let result = x+y;
    callbacks(result);

}

function display(result){

    console.log(result);

}

function displayPage(result){
    document.getElementById("myH1").textContent=result;  
}
