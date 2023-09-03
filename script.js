const button = document.querySelector(".rollBtn");
function rollTheDice(){
var randomNumber1 = Math.ceil(Math.random() * 6);
document.querySelector(".img1").src = (`./images/dice${randomNumber1}.png`);
var randomNumber2 = Math.ceil(Math.random() * 6);
document.querySelector(".img2").src = (`./images/dice${randomNumber2}.png`);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Draw!🚩";
}
}
button.addEventListener("click", rollTheDice);

