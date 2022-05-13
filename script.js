const items=["rock","paper","scissors"];
let player;
let computer;
let number;
 function OneRound(player, computer){
    player = prompt("Choose rock, paper or scissors: ");

    computer=items[Math.floor(Math.random()*items.length)];


    if((player=="paper"&&computer=="rock")||(player=="scissors"&&computer=="paper")||(player=="rock"&&computer=="scissors")){
        console.log("computer: "+computer);
        console.log("player: "+player);
        console.log("player wins");
    }else if((player=="paper"&&computer=="scissors")||(player=="scissors"&&computer=="rock")||(player=="rock"&&computer=="paper")){
        console.log("computer: "+computer);
        console.log("player: "+player);
        console.log("computer wins")
        
    }
    else if((player=="paper"&&computer=="paper")||(player=="scissors"&&computer=="scissors")||(player=="rock"&&computer=="rock")){
        console.log("computer: "+computer);
        console.log("player: "+player);
        console.log("equal");
    }
}

function game(){

    for(let i=0;i<1;i++){
        OneRound(player,computer);
    }

}

game();

