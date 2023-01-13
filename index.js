
function theDice(){
var randomNumber1 = Math.floor(Math.random() * 6)+ 1;

var randomDiceImages = "./images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImages);

// for the second dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDice2Images = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomDice2Images);



if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🎉 Player 1 wins"
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "A Draw 🤝"
}

else{
    document.querySelector("h1").innerHTML = "Player 2 wins 🎉"
}

}



// for the third dice

// var randomNumber3 = Math.floor(Math.random() * 6) +1;

// var randomDice3Images = "/images/dice" + randomNumber3 + ".png";

// document.querySelector(".img3").setAttribute("src", randomDice3Images);

// for the fourth dice

// var randomNumber4 = Math.floor(Math.random() * 6) + 1;

// var randomDice4Images = "/images/dice" + randomNumber4 + ".png";

// document.querySelector(".img4").setAttribute("src", randomDice4Images);





   




