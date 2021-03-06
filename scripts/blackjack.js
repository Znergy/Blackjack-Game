/* 
* Application: Blackjack
* Author: Ryan Jones
* Version: 01/28/2017
* File Name: blackjack.js
*/


/*
* Things To Work On:
- Add Dealer Cards
- Add Hit onclick code
- Add Stay onclick code
- Add win/lose code
*/


// var to store the card values

var cardOne = "";
var cardTwo = "";
var cardThree = "";
var cardFour = "";
var cardFive = "";

var dealerCardOne = "";
var dealerCardTwo = "";

// var for game state

var winner = true;

// var to store the user card value

var userCardValue = 0;
var dealerCardValue = 0;

// var for storing user amounts

var userMoney = 100;
var userBetAmount = 0;

// var for bet sizes

var oneDollar = 1;
var fiveDollar = 5;
var tenDollar = 10;
var twentyFive = 25;
var fiftyDollar = 50;

// Var for quoted text

var totalText = "Total Money: ";
var betText = "Bet Amount: ";

// This sets the users total money to my userMoney var, not needed when I let the user add money or set their money

document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;

document.getElementById("hitAgain").style.display="none";

document.getElementById("playAgain").style.display="none";

document.getElementById("hit").style.display="none";

document.getElementById("stayx").style.display="none";

document.getElementById("hitOnceMore").style.display = "none";



/*
- This will clear the bet amount and reset the users total money
*/
document.getElementById("clearBtn").onclick=function() {

    if(userBetAmount != 0) {

    document.getElementById("betAmount").innerHTML = betText;

    // reset the total money to 100

    document.getElementById("totalMoney").innerHTML = totalText;

    // if the bet amount is 0 don't run.. 

    userMoney = userMoney + userBetAmount;

    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;

    }

    userBetAmount = 0;
}



/*
--*-- CARD LOGIC BELOW --*--
*/


/*
- This is for controlling the stay action
*/

/*
- If dealerCardValue is less than userCardValue then we need a hit function to occur
- If dealerCardValue is greater than or equal to 17, then game over. Compare to the userCardValue, see who wins
- If dealerCardValue is greater than 17, but equal to the user, the tie game.
- 
*/

document.getElementById("stayx").onclick=function() {
    
    // This also will trigger the dealer to receive cards.. and also inform the player if he won or lost..
    
    document.getElementById("hit").style.display = "none";
    document.getElementById("hitAgain").style.display = "none";
    document.getElementById("stayx").style.display = "none";
    document.getElementById("playAgain").style.display = "block";
    
    // Card One

    var cardNumOne = 0;

    var theCard = "";

    var random = Math.random();

    random = 13 * random;

    random = Math.floor(random);

    if(random == 0) {
        theCard = "Ace";
        cardNumOne = 11;
    } else if (random == 1) {
        theCard = "Two";
        cardNumOne = 2;
    } else if (random == 2) {
        theCard = "Three";
        cardNumOne = 3;
    } else if (random == 3) {
        theCard = "Four";
        cardNumOne = 4;
    } else if (random == 4) {
        theCard = "Five";
        cardNumOne = 5;
    } else if (random == 5) {
        theCard = "Six";
        cardNumOne = 6;
    } else if (random == 6) {
        theCard = "Seven";
        cardNumOne = 7;
    } else if (random == 7) {
        theCard = "Eight";
        cardNumOne = 8;
    } else if (random == 8) {
        theCard = "Nine";
        cardNumOne = 9;
    } else if (random == 9) {
        theCard = "Ten";
        cardNumOne = 10;
    } else if (random == 10) {
        theCard = "Jack";
        cardNumOne = 10;
    } else if (random == 11) {
        theCard = "Queen";
        cardNumOne = 10;
    } else if (random == 12) {
        theCard = "King";
        cardNumOne = 10;
    }

    // Card Two

    var cardType = "";
    var cardNumTwo = 0;

    var rNumber = Math.random();
    rNumber = 13 * rNumber;
    rNumber = Math.floor(rNumber);

    if(rNumber == 0) {
        cardType = "Ace";
        cardNumTwo = 11;
    } else if (rNumber == 1) {
        cardType = "Two";
        cardNumTwo = 2;
    } else if (rNumber == 2) {
        cardType = "Three";
        cardNumTwo = 3;
    } else if (rNumber == 3) {
        cardType = "Four";
        cardNumTwo = 4;
    } else if (rNumber == 4) {
        cardType = "Five";
        cardNumTwo = 5;
    } else if (rNumber == 5) {
        cardType = "Six";
        cardNumTwo = 6;
    } else if (rNumber == 6) {
        cardType = "Seven";
        cardNumTwo = 7;
    } else if (rNumber == 7) {
        cardType = "Eight";
        cardNumTwo = 8;
    } else if (rNumber == 8) {
        cardType = "Nine";
        cardNumTwo = 9;
    } else if (rNumber == 9) {
        cardType = "Ten";
        cardNumTwo = 10;
    } else if (rNumber == 10) {
        cardType = "Jack";
        cardNumTwo = 10;
    } else if (rNumber == 11) {
        cardType = "Queen";
        cardNumTwo = 10;
    } else if (rNumber == 12) {
        cardType = "King";
        cardNumTwo = 10;
    }

    var totalNum = cardNumOne + cardNumTwo;

    // this will change cardNumOne to 1 if both cards are Aces
    if(cardNumOne == 0 && cardNumTwo == 0) {
        cardNumOne = 1;
        cardNumTwo = 11;
    }

    // this gives a special message if you score 21

    if (totalNum != 21) {
    document.getElementById("dealerCards").innerHTML = document.getElementById("dealerCards").innerHTML + theCard + ", " + cardType + ". Your total is, " + totalNum + ".";
    } else {
       document.getElementById("dealerCards").innerHTML = document.getElementById("dealerCards").innerHTML + theCard + ", " + cardType + ". Blackjack!";
    }

    dealerCardValue = totalNum;
    
    dealerCardOne = theCard;
    dealerCardTwo = cardType;

        
    if (dealerCardValue > 21 || dealerCardValue < userCardValue && userCardValue <= 21) {
        alert("You won, " + userBetAmount);
        userMoney = userMoney + (userBetAmount * 2);
        
        document.getElementById("totalMoney").innerHTML = "Total Money: " + userMoney;
        
        userBetAmount = 0;
        document.getElementById("betAmount").innerHTML = "Bet Amount: " + userBetAmount;
        
    } else if (dealerCardValue <= 21 && dealerCardValue > userCardValue) {
        alert("You lost, " + userBetAmount);
        
        document.getElementById("totalMoney").innerHTML = "Total Money: " + userMoney;
        
        userBetAmount = 0;
        document.getElementById("betAmount").innerHTML = "Bet Amount: " + userBetAmount;
    } else if (userCardValue == dealerCardValue) {
        alert("You tied, and got " + userBetAmount + " back.");
        userMoney = userMoney + userBetAmount;
        
        document.getElementById("totalMoney").innerHTML = "Total Money: " + userMoney;
        
        userBetAmount = 0;
        document.getElementById("betAmount").innerHTML = "Bet Amount: " + userBetAmount;
    } else if (userCardValue > 21) {
        alert("You lost, " + userBetAmount);
        
        document.getElementById("totalMoney").innerHTML = "Total Money: " + userMoney;
        
        userBetAmount = 0;
        document.getElementById("betAmount").innerHTML = "Bet Amount: " + userBetAmount;
        
    }
    
    resetGame();
}

/*
- This will wipe everything clear, the user cards, card values, etc.
*/
document.getElementById("playAgain").onclick=function() {
    
    if (dealerCardValue > 21 || dealerCardValue < userCardValue && userCardValue <= 21) {
        alert("You won, " + userBetAmount);
        userMoney = userMoney + (userBetAmount * 2);
        
        document.getElementById("totalMoney").innerHTML = "Total Money: " + userMoney;
        
        userBetAmount = 0;
        document.getElementById("betAmount").innerHTML = "Bet Amount: " + userBetAmount;
        
    } else if (dealerCardValue <= 21 && dealerCardValue > userCardValue) {
        alert("You lost, " + userBetAmount);
        
        document.getElementById("totalMoney").innerHTML = "Total Money: " + userMoney;
        
        userBetAmount = 0;
        document.getElementById("betAmount").innerHTML = "Bet Amount: " + userBetAmount;
    } else if (userCardValue == dealerCardValue) {
        alert("You tied, and got " + userBetAmount + " back.");
        userMoney = userMoney + userBetAmount;
        
        document.getElementById("totalMoney").innerHTML = "Total Money: " + userMoney;
        
        userBetAmount = 0;
        document.getElementById("betAmount").innerHTML = "Bet Amount: " + userBetAmount;
    } else if (userCardValue > 21) {
        alert("You lost, " + userBetAmount);
        
        document.getElementById("totalMoney").innerHTML = "Total Money: " + userMoney;
        
        userBetAmount = 0;
        document.getElementById("betAmount").innerHTML = "Bet Amount: " + userBetAmount;
        
    }
    
    resetGame();
    
    
}

function resetGame() {
    
    cardOne = "";
    cardTwo = "";
    cardThree = "";
    cardFour = "";
    
    document.getElementById("dealCards").style.display="block";
    
    userCardValue = 0;
    
    dealerCardValue = 0;
    
    document.getElementById("userCards").innerHTML = "User's Cards: ";
    document.getElementById("dealerCards").innerHTML = "Dealer Cards: ";
    
    document.getElementById("playAgain").style.display = "none";
    
    document.getElementById("hit").style.display = "none";
    document.getElementById("stayx").style.display = "none";
    
}


/*
- Math for random card selection.. this creates a random number between 0 and 51 (which is equal to cards)
*/
document.getElementById("dealCards").onclick=function() {
    
    if(userBetAmount == 0) {
        alert("place a bet");
    } else {

    // Card One

    var cardNumOne = 0;

    var theCard = "";

    var random = Math.random();

    random = 13 * random;

    random = Math.floor(random);

    if(random == 0) {
        theCard = "Ace";
        cardNumOne = 11;
    } else if (random == 1) {
        theCard = "Two";
        cardNumOne = 2;
    } else if (random == 2) {
        theCard = "Three";
        cardNumOne = 3;
    } else if (random == 3) {
        theCard = "Four";
        cardNumOne = 4;
    } else if (random == 4) {
        theCard = "Five";
        cardNumOne = 5;
    } else if (random == 5) {
        theCard = "Six";
        cardNumOne = 6;
    } else if (random == 6) {
        theCard = "Seven";
        cardNumOne = 7;
    } else if (random == 7) {
        theCard = "Eight";
        cardNumOne = 8;
    } else if (random == 8) {
        theCard = "Nine";
        cardNumOne = 9;
    } else if (random == 9) {
        theCard = "Ten";
        cardNumOne = 10;
    } else if (random == 10) {
        theCard = "Jack";
        cardNumOne = 10;
    } else if (random == 11) {
        theCard = "Queen";
        cardNumOne = 10;
    } else if (random == 12) {
        theCard = "King";
        cardNumOne = 10;
    }

    // Card Two

    var cardType = "";
    var cardNumTwo = 0;

    var rNumber = Math.random();
    rNumber = 13 * rNumber;
    rNumber = Math.floor(rNumber);

    if(rNumber == 0) {
        cardType = "Ace";
        cardNumTwo = 11;
    } else if (rNumber == 1) {
        cardType = "Two";
        cardNumTwo = 2;
    } else if (rNumber == 2) {
        cardType = "Three";
        cardNumTwo = 3;
    } else if (rNumber == 3) {
        cardType = "Four";
        cardNumTwo = 4;
    } else if (rNumber == 4) {
        cardType = "Five";
        cardNumTwo = 5;
    } else if (rNumber == 5) {
        cardType = "Six";
        cardNumTwo = 6;
    } else if (rNumber == 6) {
        cardType = "Seven";
        cardNumTwo = 7;
    } else if (rNumber == 7) {
        cardType = "Eight";
        cardNumTwo = 8;
    } else if (rNumber == 8) {
        cardType = "Nine";
        cardNumTwo = 9;
    } else if (rNumber == 9) {
        cardType = "Ten";
        cardNumTwo = 10;
    } else if (rNumber == 10) {
        cardType = "Jack";
        cardNumTwo = 10;
    } else if (rNumber == 11) {
        cardType = "Queen";
        cardNumTwo = 10;
    } else if (rNumber == 12) {
        cardType = "King";
        cardNumTwo = 10;
    }

    // this will change cardNumOne to 1 if both cards are Aces
    if(random == 0 && rNumber == 0) {
        cardNumOne = 1;
    }
    
    var totalNum = cardNumOne + cardNumTwo;

    // this gives a special message if you score 21

    if (totalNum != 21) {
    document.getElementById("userCards").innerHTML = document.getElementById("userCards").innerHTML + theCard + ", " + cardType + ". Your total is, " + totalNum + ".";
    } else {
       document.getElementById("userCards").innerHTML = document.getElementById("userCards").innerHTML + theCard + ", " + cardType + ". Blackjack!"; 
    }

    userCardValue = totalNum;

    document.getElementById("dealCards").style.display = "none";
    
    cardOne = theCard;
    cardTwo = cardType;
    
    if (userCardValue >= 21) {
        document.getElementById("hit").style.display="none";
        document.getElementById("hitOnceMore").style.display="none";
        document.getElementById("hitAgain").style.display = "none";
        document.getElementById("stayx").style.display="none";
        document.getElementById("playAgain").style.display = "block";
    } else if (userCardValue < 21) {
        document.getElementById("hit").style.display = "block";
        document.getElementById("hitOnceMore").style.display="none";
        document.getElementById("hitAgain").style.display = "none";
        document.getElementById("stayx").style.display = "block";
    }
    }
}


/*
- this will add another card to the players hand
*/
document.getElementById("hit").onclick=function() {

    // Card One

    var cardNumOne = 0;

    var theCard = "";

    var random = Math.random();

    random = 13 * random;

    random = Math.floor(random);

    if(random == 0) {
        theCard = "Ace";
        cardNumOne = 11;
    } else if (random == 1) {
        theCard = "Two";
        cardNumOne = 2;
    } else if (random == 2) {
        theCard = "Three";
        cardNumOne = 3;
    } else if (random == 3) {
        theCard = "Four";
        cardNumOne = 4;
    } else if (random == 4) {
        theCard = "Five";
        cardNumOne = 5;
    } else if (random == 5) {
        theCard = "Six";
        cardNumOne = 6;
    } else if (random == 6) {
        theCard = "Seven";
        cardNumOne = 7;
    } else if (random == 7) {
        theCard = "Eight";
        cardNumOne = 8;
    } else if (random == 8) {
        theCard = "Nine";
        cardNumOne = 9;
    } else if (random == 9) {
        theCard = "Ten";
        cardNumOne = 10;
    } else if (random == 10) {
        theCard = "Jack";
        cardNumOne = 10;
    } else if (random == 11) {
        theCard = "Queen";
        cardNumOne = 10;
    } else if (random == 12) {
        theCard = "King";
        cardNumOne = 10;
    }
        
    cardThree = theCard;

    userCardValue = userCardValue + cardNumOne;
    
    
    if (userCardValue > 21) {
        document.getElementById("hit").style.display="none";
        document.getElementById("hitAgain").style.display = "none";
        document.getElementById("stayx").style.display="none";
        document.getElementById("playAgain").style.display = "block";
    } else if (userCardValue < 21) {
        document.getElementById("hitAgain").style.display = "block";
        document.getElementById("hit").style.display="none";
        document.getElementById("hitOnceMore").style.display="none";
        document.getElementById("stayx").style.display = "block";
    } else {
        document.getElementById("stayx").style.display="block";
    }
        
    if(userCardValue > 21) {
        document.getElementById("userCards").innerHTML = "User's Cards: " + cardOne + ", " + cardTwo + ", " + cardThree + ". You busted, with a total of " + userCardValue + ".";
        winner = false;
    } else if (userCardValue == 21) {
        document.getElementById("userCards").innerHTML = "User's Cards: " + cardOne + ", " + cardTwo + ", " + cardThree + ". Your total is, 21. You have Blackjack.";
        winner = true;
    } else {
        document.getElementById("userCards").innerHTML = "User's Cards: " + cardOne + ", " + cardTwo + ", " + cardThree + ". Your total is " + userCardValue + ". Would you like to hit again or stay?";
    }
    
}

function showPlayAgain () {
    
    document.getElementById("hit").style.display = "none";
    document.getElementById("hitAgain").style.display = "none";
    document.getElementById("stayx").style.display = "none";
    
    document.getElementById("playAgain").style.display = "block";
}

/*
- this will add another card to the players hand
*/
document.getElementById("hitAgain").onclick=function() {

    // Card One

    var cardNumOne = 0;

    var theCard = "";

    var random = Math.random();

    random = 13 * random;

    random = Math.floor(random);

    if(random == 0) {
        theCard = "Ace";
        cardNumOne = 11;
    } else if (random == 1) {
        theCard = "Two";
        cardNumOne = 2;
    } else if (random == 2) {
        theCard = "Three";
        cardNumOne = 3;
    } else if (random == 3) {
        theCard = "Four";
        cardNumOne = 4;
    } else if (random == 4) {
        theCard = "Five";
        cardNumOne = 5;
    } else if (random == 5) {
        theCard = "Six";
        cardNumOne = 6;
    } else if (random == 6) {
        theCard = "Seven";
        cardNumOne = 7;
    } else if (random == 7) {
        theCard = "Eight";
        cardNumOne = 8;
    } else if (random == 8) {
        theCard = "Nine";
        cardNumOne = 9;
    } else if (random == 9) {
        theCard = "Ten";
        cardNumOne = 10;
    } else if (random == 10) {
        theCard = "Jack";
        cardNumOne = 10;
    } else if (random == 11) {
        theCard = "Queen";
        cardNumOne = 10;
    } else if (random == 12) {
        theCard = "King";
        cardNumOne = 10;
    }
        
    cardFour = theCard;

    userCardValue = userCardValue + cardNumOne;
        
    if(userCardValue > 21) {
        document.getElementById("userCards").innerHTML = "User's Cards: " + cardOne + ", " + cardTwo + ", " + cardThree + ", " + cardFour + ". You busted, with a total of " + userCardValue + ".";
        winner = false;
    } else if (userCardValue == 21) {
        document.getElementById("userCards").innerHTML = document.getElementById("userCards").innerHTML + cardOne + ", " + cardTwo + ", " + cardThree + ", " + cardFour + ". Your total is 21, Blackjack!";
        winner = true;
    } else if (userCardValue < 21) {
        document.getElementById("userCards").innerHTML = "User's Cards: " + cardOne + ", " + cardTwo + ", " + cardThree + ", " + cardFour + ". Your total is " + userCardValue + ". Would you like to hit again or stay?";
    }
    
    if (userCardValue >= 21) {
        document.getElementById("hit").style.display="none";
        document.getElementById("hitAgain").style.display = "none";
        document.getElementById("stay").style.display="none";
        document.getElementById("playAgain").style.display = "block";
    } else if (userCardValue < 21) {
        document.getElementById("hitOnceMore").style.display = "block";
        document.getElementById("hitAgain").style.display="none";
        document.getElementById("hit").style.display = "none";
        document.getElementById("stayx").style.display = "block";
    }

}

/*
- this will add another card to the players hand
*/
document.getElementById("hitOnceMore").onclick=function() {

    // Card One

    var cardNumOne = 0;

    var theCard = "";

    var random = Math.random();

    random = 13 * random;

    random = Math.floor(random);

    if(random == 0) {
        theCard = "Ace";
        cardNumOne = 11;
    } else if (random == 1) {
        theCard = "Two";
        cardNumOne = 2;
    } else if (random == 2) {
        theCard = "Three";
        cardNumOne = 3;
    } else if (random == 3) {
        theCard = "Four";
        cardNumOne = 4;
    } else if (random == 4) {
        theCard = "Five";
        cardNumOne = 5;
    } else if (random == 5) {
        theCard = "Six";
        cardNumOne = 6;
    } else if (random == 6) {
        theCard = "Seven";
        cardNumOne = 7;
    } else if (random == 7) {
        theCard = "Eight";
        cardNumOne = 8;
    } else if (random == 8) {
        theCard = "Nine";
        cardNumOne = 9;
    } else if (random == 9) {
        theCard = "Ten";
        cardNumOne = 10;
    } else if (random == 10) {
        theCard = "Jack";
        cardNumOne = 10;
    } else if (random == 11) {
        theCard = "Queen";
        cardNumOne = 10;
    } else if (random == 12) {
        theCard = "King";
        cardNumOne = 10;
    }
        
    cardFive = theCard;

    userCardValue = userCardValue + cardNumOne;
        
    if(userCardValue > 21) {
        document.getElementById("userCards").innerHTML = "User's Cards: " + cardOne + ", " + cardTwo + ", " + cardThree + ", " + cardFour + ", " + cardFive + ". You busted, with a total of " + userCardValue + ".";
        winner = false;
    } else if (userCardValue == 21) {
        document.getElementById("userCards").innerHTML = document.getElementById("userCards").innerHTML + cardOne + ", " + cardTwo + ", " + cardThree + ", " + cardFour + ", " + cardFive + ". Your total is 21, Blackjack!";
        winner = true;
    } else if (userCardValue < 21) {
        document.getElementById("userCards").innerHTML = "User's Cards: " + cardOne + ", " + cardTwo + ", " + cardThree + ", " + cardFour + ", " + cardFive + ". Your total is " + userCardValue + ". Would you like to hit again or stay?";
    }
    
    if (userCardValue >= 21) {
        document.getElementById("hit").style.display="none";
        document.getElementById("hitAgain").style.display = "none";
        document.getElementById("stay").style.display="none";
        document.getElementById("playAgain").style.display = "block";
    } else if (userCardValue < 21) {
        alert("need one more card");
    }

}



/*
--*-- BETTING LOGIC BELOW --*--
*/



/*
- This will add $1 to the bet amount and minus $1 from the users total money
*/
document.getElementById("bet1").onclick=function() {

    // add the amount to the total money and the bet amount
    
    alert("Bet 1 worked");

    document.getElementById("betAmount").innerHTML = betText;

    userBetAmount = userBetAmount + oneDollar;

    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;

    document.getElementById("totalMoney").innerHTML = totalText;

    userMoney = userMoney - oneDollar;

    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;


}

/*
- This will add $5 to the bet amount and minus $5 from the users total money
*/
document.getElementById("bet5").onclick=function() {

    // add the amount to the total money and the bet amount

    document.getElementById("betAmount").innerHTML = betText;

    userBetAmount = userBetAmount + fiveDollar;

    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;

    // Total Money Logic

    document.getElementById("totalMoney").innerHTML = totalText;

    userMoney = userMoney - fiveDollar;

    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;


}

/*
- This will add $10 to the bet amount and minus $10 from the users total money
*/
document.getElementById("bet10").onclick=function() {

    // add the amount to the total money and the bet amount

    document.getElementById("betAmount").innerHTML = betText;

    userBetAmount = userBetAmount + tenDollar;

    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;

    document.getElementById("totalMoney").innerHTML = totalText;

    userMoney = userMoney - tenDollar;

    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;


}

/*
- This will add $25 to the bet amount and minus $25 from the users total money
*/
document.getElementById("bet25").onclick=function() {

    // add the amount to the total money and the bet amount

    document.getElementById("betAmount").innerHTML = betText;

    userBetAmount = userBetAmount + twentyFive;

    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;

    document.getElementById("totalMoney").innerHTML = totalText;

    userMoney = userMoney - twentyFive;

    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;


}

/*
- This will add $50 to the bet amount and minus $50 from the users total money
*/
document.getElementById("bet50").onclick=function() {

    // add the amount to the total money and the bet amount

    document.getElementById("betAmount").innerHTML = betText;

    userBetAmount = userBetAmount + fiftyDollar;

    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;

    document.getElementById("totalMoney").innerHTML = totalText;

    userMoney = userMoney - fiftyDollar;

    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;


}






// changes..


/*
var card = 0;

function getCard() {
    
    
    var randOne = Math.random();
    randOne = randOne * 13;
    randOne = randOne.floor(randOne);
    
    
    if (randOne == 0) {
        randName = "Ace";
    } else if (randOne == 1) {
        randName = "Two";
    } else if (randOne == 2) {
        randName = "Three";
    } else if (randOne == 3) {
        randName = "Four";
    } else if (randOne == 4) {
        randName = "Five";
    } else if (randOne == 5) {
        randName = "Six";
    } else if (randOne == 6) {
        randName = "Seven";
    } else if (randOne == 7) {
        randName = "Eight";
    } else if (randOne == 8) {
        randName = "Nine";
    } else if (randOne == 9) {
        randName = "Ten";
    } else if (randOne == 10) {
        randName = "Jack";
    } else if (randOne == 11) {
        randName = "Queen";
    } else if (randOne == 12) {
        randName = "King";
    }
    
    card = randOne; // use card to set each card value 
    cardName = randName; // use cardName to set each card name
    
}


/* 
- first two cards
*/

/*
getCard(); // first card
firstCard = card; // stores first value
getCard(); // second card
secondCard = firstCard - card; // stores second value (subtracting may not be necessary)
cardTotalx = firstCard + secondCard; // sets card total value

/* 
- all cards after..
*/

/*
getCard(); // third card
thirdCard = secondCard - card; // stores third value
cardTotalx = cardNumberOne + cardNumberTwo + cardNumberThree; // sets card total value





function stayxl() {
    
    getCard();
    firstCard = card;
    cardTotalx = firstCard;
    firstName = cardName;
    
    getCard();
    secondCard = card;
    cardTotalx = cardTotalx + secondCard;
    secondName = cardName;
    
    document.getElementById("dealersCards").innerHTML = "Dealer Cards: " 
        + firstDealerName + ", " + secondDealerName + ". Total is " + dealerCardTotal ".";
    
    
    
    
}


document.getElementById("hitButton").onclick=function() {
    
    hitx();
    
    // print out
    document.getElementById("usersCards").innerHTML = "User Cards: "
        + firstUserName + ", " + secondUserName + ", " + thirdUserName + ". Total is " + userCardTotal + ".";
    
}

// each time player hits we need a new card

function hitx() {
    
    getCard(); // random value set to card
    thirdCard = card;
    userCardTotal = userCardTotal + thirdCard;
     = cardName;
    
}

*/







































