// creating the application by a js function; the function is triggered when the button is clicked. 
function diceGame() {
    var randomNumber1 = Math.floor(Math.random()*6)+1; //creating a random number for the first dice
    
    var randomNumber2 = Math.floor(Math.random()*6)+1; //creating a random number for the second dice

    var randomImgName1 = "dice" + randomNumber1; // creating a random image name as string with the random number
    document.querySelector(".img1").setAttribute("src", "./images/" + randomImgName1 + ".png" ); // dom manipulation by grabbing the first dice by its class and setting its src attribute to the newname1.
    
    var randomImgName2 = "dice" + randomNumber2; // creating a random image name as string with the random number for second dice. 
    document.querySelector(".img2").setAttribute("src", "./images/" +randomImgName2 + ".png"); // dom manipulation by grabbing the second dice by its class and setting its src attribute to the newname2.

    if (randomNumber1>randomNumber2) { //if dice1 is higher than dice2, then performing the following action; 
        document.querySelector("h1").innerHTML = "Player 1 Wins!" ; //grabbing the html element by its class "h1" by dom and changing its context by inner html. 
    } else if (randomNumber1<randomNumber2) { // else if dice1 is lower than dice2, then performing the following action; 
        document.querySelector("h1").innerHTML = "Player 2 Wins!" ; //grabbing the html element by its class "h1" by dom and changing its context by inner html. 
    } else { //else, where the both dice numbers are equal then perform the following action; 
        document.querySelector("h1").innerHTML = "Draw!" ;  //grabbing the html element by its class "h1" by dom and changing its context by inner html.
    }
}

//integrating background music 
var aud = document.getElementById("myAudio");
function play() {
  aud.play();
}
function pause() {
  aud.pause();
}
aud.play();

