

function generate() {
    const numOfChar = Number(document.getElementById("numOfChar").value);
    const lowerCase = document.getElementById("lowerCase").checked;
    const upperCase = document.getElementById("upperCase").checked;
    const numbers = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num = '0123456789';
    const spe = '!@#$%&*';

    let allowedChar = "";
    let password = '';

    if (lowerCase) {
        allowedChar += lower;
    }

    if (upperCase) {
        allowedChar += upper;
    }

    if (numbers) {
        allowedChar += num;
    }

    if (special) {
        allowedChar += spe;
    }

    if(allowedChar.length===0){
        window.alert("Choose atleast one parameter");
        
    }

    for (let i = 0; i < numOfChar; i++) {
        let index = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[index];
    }

    if(allowedChar.length!==0){
        document.getElementById("result").innerText = `${password}`;

        // document.getElementById("container").style.boxShadow = "10px 10px 50px #00ff00";
        // document.getElementById("button").style.backgroundColor = "#00ff00";

    }
}
