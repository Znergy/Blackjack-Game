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
        
        
        // var to store the user card value
        
        var userCardValue = 0;
        
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
        - Math for random card selection.. this creates a random number between 0 and 51 (which is equal to cards)
        */
        document.getElementById("dealCards").onclick=function() {
            
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
            if(random == 0 && rNumber == 0) {
                cardNumOne = 1;
            }
        
            // this gives a special message if you score 21
            
            if (totalNum != 21) {
            document.getElementById("userCards").innerHTML = document.getElementById("userCards").innerHTML + theCard + ", " + cardType + ". Your total is, " + totalNum + ".";
            } else {
               document.getElementById("userCards").innerHTML = document.getElementById("userCards").innerHTML + theCard + ", " + cardType + ". Blackjack!"; 
            }
            
            userCardValue = totalNum;
            
            document.getElementById("dealCards").style.display = "none";
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
            
            userCardValue = userCardValue + cardNumOne;
        }
        
        
        /*
        - this will cause your hand to be final
        */
        document.getElementById("stay").onclick=function() {
            
            
        }
        
        
        
        
        /*
        --*-- BETTING LOGIC BELOW --*--
        */
        
        
        
        /*
        - This will add $1 to the bet amount and minus $1 from the users total money
        */
        document.getElementById("bet1").onclick=function() {
            
            // add the amount to the total money and the bet amount
            
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
        
        