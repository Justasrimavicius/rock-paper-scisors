const items=["rock","paper","scissors"];
let player;
let computer;
let playerPoints=0;

function computerSelectionOutput(computer){
    const computerDiv=document.querySelector('.computer-selection');
    if(computerDiv.innerText.length<20) computerDiv.innerText+=` ${computer}`;
    else computerDiv.innerText='Computer selected: '+` ${computer}`;
}
function playerPointsUpdate(playerPoints){
    const playerPointsDiv=document.querySelector('.points');
    playerPointsDiv.innerText='Your points: '+`${playerPoints}`;
}

 function OneRound(player){

    let computer=items[Math.floor(Math.random()*items.length)];
    computerSelectionOutput(computer);

    if((player=="paper"&&computer=="rock")||(player=="scissors"&&computer=="paper")||(player=="rock"&&computer=="scissors")){
        console.log("computer: "+computer);
        console.log("player: "+player);
        console.log("player wins");
        playerPoints++;



    }else if((player=="paper"&&computer=="scissors")||(player=="scissors"&&computer=="rock")||(player=="rock"&&computer=="paper")){
        console.log("computer: "+computer);
        console.log("player: "+player);
        console.log("computer wins")

        
    }
    else if((player=="paper"&&computer=="paper")||(player=="scissors"&&computer=="scissors")||(player=="rock"&&computer=="rock")){
        console.log("computer: "+computer);
        console.log("player: "+player);
        console.log("equal");
        playerPoints++;
    }
}
function Game(player){
    console.log(playerPoints);
    OneRound(player);
    playerPointsUpdate(playerPoints);
    if(playerPoints>=5){
        alert('You have reached 5 points! Restart the browser to start over.');
        document.querySelector('html').remove();
    }
}
function getClass(e){

const playerID=e.target;
const playerClass=(document.querySelector(`#${e.target.id}`)).classList.value;
if(playerClass!='rock'&&playerClass!='paper'&&playerClass!='scissors') return;


player=playerClass;


Game(player);
}


document.addEventListener('click',getClass);

