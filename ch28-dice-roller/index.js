
function rollDice(){

    const numofDice = document.getElementById("numOfDice").value;
    let diceResult = document.getElementById("diceResult");
    let diceImage = document.getElementById("diceImage");

    let image = [];
    let value = [];



    for (let i=1; i<=numofDice ;i++){

        let num = Math.floor(Math.random()*6)+1

        value.push(num);

        image.push(`<img src="dice/${num}.svg">`);

       

    }

    diceResult.textContent=value.join(" - ")
    diceImage.innerHTML=image.join("  ")
}

