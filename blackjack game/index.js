//1.create two variables firstcard and secondcard.
//set their values to a random number between 2-11

//2. create a variable,sum and set it to sum of the two cards


let cards=[]  //array- order list of item
let hasBlackJack=false
//1.create a variable called isAlive and assign it to true

//2.Flip its value to false in the appropriate code block
let isAlive=false

//1.declare a variable called message and assign its value to an empty string
//2.Reassign the message variable to the string we`re logging out 
let message=" "

let sum= 0
// console.log(sum);
let messageEl= document.getElementById("message-el")
// let sumEl=document.getElementById("sum-el")
let sumEl=document.querySelector("#sum-el")  //same
// let sumEl=document.querySelector(".sum-el")  //same
 
 let cardsEl=document.querySelector("#cards-el")
 let newEl=document.querySelector("#new-el")

//  console.log(cards);

let player={
 name:"Per",
 chips:145
}
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+ ":$"+ player.chips
 

 function getRandomCard(){
    let randomNumber=Math.floor(Math.random()*13)+1

    if (randomNumber>10) {
     return 10   
    }
    else if(randomNumber===1) {
        return 11
    }
    else{
        return randomNumber
    }
 }
//  console.log(getRandomCard());
 

 function startGame() {
   
    let firstCard=getRandomCard()
let secondCard=getRandomCard()
cards=[firstCard,secondCard]
sum=firstCard+secondCard
    isAlive=true
    renderGame()
 }
 
function renderGame() {
    
    cardsEl.textContent="Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent+=cards[i]+" "
        
    }
    
    sumEl.textContent="Sum:"+sum
    if (sum<=20) {
        message="Do you want to draw new card?"
        
    } else if(sum===21){
        message="you`ve got blackjack"
        hasBlackJack=true
    }
    else{
        message="you`re out of the game"
        isAlive=false
    }
        
        messageEl.textContent=message
        
    

}

    


function newCard() {
if(isAlive===true && hasBlackJack===false){
    // console.log("Drawing a new card from the deck!");
    
    let cardNew=getRandomCard()
    sum=sum+cardNew
    cards.push(cardNew)
    renderGame()
    }
    // cardsEl.textContent="Cards:"+cards[0]+" or "+cards[1]+" or "+ cards[2]
    for (let i = 0; i < cards.length[4]; i++) {
        console.log(cards[i]);
        
        
    }
 }


 

