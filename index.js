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

// const PI = 3.1459;
// let rad;
// let area;

// document.getElementById("submit").onclick = function(){

//     rad = document.getElementById("myText").value;
//     rad=Number(rad);
//     area= PI*rad**2;

//     document.getElementById("area").textContent=` Area is ${area} meters`;
// }

// let count=0;

// document.getElementById("incr").onclick = function(){

//     count++;
//     document.getElementById("count").textContent= count;
// }
// document.getElementById("decr").onclick = function(){

//     count--;
//     document.getElementById("count").textContent= count;
// }
// document.getElementById("reset").onclick = function(){

//     count=0;
//     document.getElementById("count").textContent= count;
// }

// let age;
// const word = document.getElementById("myP");

// document.getElementById("submit").onclick=function(){
        
//     age=document.getElementById("age").value;
//     age=Number(age);

//     if(age<18){
//         word.textContent=`You Must 18+`
//     }
//     else if(age>=18){
//         word.textContent=`You are old enough`
//     }
//     else{
//         word.textContent=`Enter a valid age`
//     }
// }

// const subscribe = document.getElementById("subscribe");
// const visa = document.getElementById("visa");
// const mastercard =  document.getElementById("mastercard");
// const submit = document.getElementById("submit");
// const msg1 = document.getElementById("msg1");
// const msg2 = document.getElementById("msg2");

// submit.onclick=function(){

//     if(subscribe.checked){
//         msg1.textContent="You are subscribed"
        
//         if(visa.checked){
//             msg2.textContent=`and you are paying through VISA`
    
//         }
//         else if (mastercard.checked){
//             msg2.textContent=`and you are paying through MASTERCARD`
//         }
//         else{
//             msg2.textContent=`Select a Payment gateway`
//         }
//     }

//     else{
//         msg1.textContent=`You are NOT subcribed`
//     }

    
// }

// let time = 6;
// let greeting = time<12 ? "Good morning" : "Good evening ";
// console.log(greeting);

// let purchasedAmount=80;
// let discount = purchasedAmount >100 ? 10:0;

// console.log(`Your total is $${purchasedAmount - (purchasedAmount*(discount/100))}`);


// let testScore=95;
// let grade;

// switch(true){

//     case testScore>90:
//         grade="A"

// }

// console.log(grade);

// String methods 

let userName = "Aman"

console.log(userName.charAt(0));
console.log(userName.indexOf("m"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);
console.log(userName.toUpperCase());
console.log(userName.repeat(2));
console.log(userName.startsWith("A"));
console.log(userName.endsWith("m"));