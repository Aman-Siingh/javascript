
const result = document.getElementById("result");
const  toFah = document.getElementById("toFah");
const toCel = document.getElementById("toCel");
const msg = document.getElementById("msg");
let temp;
let converted;

function convert(){

    if(toFah.checked){

        temp= result.value;
        temp=Number(temp);
        converted = (temp * 9/5) + 32;
        msg.textContent= converted;
    }

    else if (toCel.checked){
        temp= result.value;
        temp=Number(temp);
        converted = (temp - 32) * 5/9;
        msg.textContent= converted;

    }

    else{
        msg.textContent="Select the convertion";
    }
}
