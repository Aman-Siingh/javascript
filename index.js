// check all window. functions

// window.alert("Confirm submission")

// document.getElementById("myH1").textContent = "Aman Singh";
// document.getElementById("myP").textContent = "Passionate Software developer";

// let Name="Aman Singh";
// let Age= 18;
// let isStudent="True";

// document.getElementById("p1").textContent=`My name is ${Name}`;
// document.getElementById("p2").textContent=`I am ${Age} year old `;
// document.getElementById("p3").textContent=`Enrolled :${isStudent}`;

// How to fetch date form HTML file  using Js .

//  studentName = window.promt("Enter your name");


// let studentName;
// document.getElementById("submit").onclick = function(){

//     studentName=document.getElementById("myText").value;

//     console.log(studentName);

//     document.getElementById("myH1").textContent =`Welcome ${studentName}`;
// }

// Data type conversion 

// let x= "AMAN";
// let y= "AMAN";

// x = Number(x);
// y = String(y);

// console.log(x , typeof x);
// console.log(y , typeof y);

const PI = 3.1459;
let rad;
let area;

document.getElementById("submit").onclick = function(){

    rad = document.getElementById("myText").value;
    rad=Number(rad);
    area= PI*rad**2;

    document.getElementById("area").textContent=` Area is ${area} meters`;
}

