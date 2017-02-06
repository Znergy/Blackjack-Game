/* 
* Application: Blackjack
* Author: Ryan Jones
* Version: 01/28/2017
* File Name: blackjack.js
*/


// variables for storing numbers

var userCardValue, dealerCardValue, userMoney, userBetAmount, cardValue;

var firstUserValue, secondUserValue, thirdUserValue, fourthUserValue, fifthUserValue;

var firstDealerValue, secondDealerValue, thirdDealerValue, fourthDealerValue, fifthDealerValue;

// variables for storing strings

var cardName, userCardName, firstUserName, secondUserName, thirdUserName, fourthUserName, fifthUserName;

var firstDealerName, secondDealerName, thirdDealerName, fourthDealerName, fifthDealerName;



// this will get a card


function getCard() {
    // logic for one card
    
    var randomNum = Math.random();
    randomNum = randomNum * 13;
    randomNum = randomNum.floor(randomNum);
    
    var randName;
    
    
    if (randomNum === 0) {
        randName = "Ace";
    } else if (randomNum === 1) {
        randName = "Two";
    } else if (randomNum === 2) {
        randName = "Three";
    } else if (randomNum === 3) {
        randName = "Four";
    } else if (randomNum === 4) {
        randName = "Five";
    } else if (randomNum === 5) {
        randName = "Six";
    } else if (randomNum === 6) {
        randName = "Seven";
    } else if (randomNum === 7) {
        randName = "Eight";
    } else if (randomNum === 8) {
        randName = "Nine";
    } else if (randomNum === 9) {
        randName = "Ten";
    } else if (randomNum === 10) {
        randName = "Jack";
    } else if (randomNum === 11) {
        randName = "Queen";
    } else if (randomNum === 12) {
        randName = "King";
    }
    
    cardValue = randomNum; // use card to set each card value 
    cardName = randName; // use cardName to set each card name
    
}


// User Card One
firstUserValue = getCard();
firstUserName = cardName;

alert(firstUserValue);



/*
--*-- BUTTONS --*--
*/

document.getElementById("dealCards").onclick = function () {
    
    // User Card One
    getCard();
    firstUserValue = cardValue;
    firstUserName = cardName;
    
    // User Card Two
    getCard();
    secondUserValue = cardValue;
    secondUserName = cardName;
    
    // Dealer Card One
    getCard();
    firstDealerValue = cardValue;
    firstDealerName = cardName;
    
    // store card value totals for dealer/player
    userCardValue = firstUserValue + secondUserValue;
    dealerCardValue += firstDealerValue;
    
};







/*
--*-- BETTING LOGIC BELOW --*--
*/



/*
- This will add $1 to the bet amount and minus $1 from the users total money
*/
//document.getElementById("bet1").onclick = function () {
//
//    // add the amount to the total money and the bet amount
//    
//    alert("Bet 1 worked");
//
//    document.getElementById("betAmount").innerHTML = betText;
//
//    userBetAmount = userBetAmount + oneDollar;
//
//    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;
//
//    document.getElementById("totalMoney").innerHTML = totalText;
//
//    userMoney = userMoney - oneDollar;
//
//    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;
//
//
//}
//
///*
//- This will add $5 to the bet amount and minus $5 from the users total money
//*/
//document.getElementById("bet5").onclick = function () {
//
//    // add the amount to the total money and the bet amount
//
//    document.getElementById("betAmount").innerHTML = betText;
//
//    userBetAmount = userBetAmount + fiveDollar;
//
//    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;
//
//    // Total Money Logic
//
//    document.getElementById("totalMoney").innerHTML = totalText;
//
//    userMoney = userMoney - fiveDollar;
//
//    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;
//
//
//}
//
///*
//- This will add $10 to the bet amount and minus $10 from the users total money
//*/
//document.getElementById("bet10").onclick = function () {
//
//    // add the amount to the total money and the bet amount
//
//    document.getElementById("betAmount").innerHTML = betText;
//
//    userBetAmount = userBetAmount + tenDollar;
//
//    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;
//
//    document.getElementById("totalMoney").innerHTML = totalText;
//
//    userMoney = userMoney - tenDollar;
//
//    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;
//
//
//}
//
///*
//- This will add $25 to the bet amount and minus $25 from the users total money
//*/
//document.getElementById("bet25").onclick = function () {
//
//    // add the amount to the total money and the bet amount
//
//    document.getElementById("betAmount").innerHTML = betText;
//
//    userBetAmount = userBetAmount + twentyFive;
//
//    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;
//
//    document.getElementById("totalMoney").innerHTML = totalText;
//
//    userMoney = userMoney - twentyFive;
//
//    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;
//
//
//}
//
///*
//- This will add $50 to the bet amount and minus $50 from the users total money
//*/
//document.getElementById("bet50").onclick = function () {
//
//    // add the amount to the total money and the bet amount
//
//    document.getElementById("betAmount").innerHTML = betText;
//
//    userBetAmount = userBetAmount + fiftyDollar;
//
//    document.getElementById("betAmount").innerHTML = document.getElementById("betAmount").innerHTML + userBetAmount;
//
//    document.getElementById("totalMoney").innerHTML = totalText;
//
//    userMoney = userMoney - fiftyDollar;
//
//    document.getElementById("totalMoney").innerHTML = document.getElementById("totalMoney").innerHTML + userMoney;
//
//
//}






// changes..




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







































