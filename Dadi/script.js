const playerOne = prompt("Inserisci nome giocatore");
document.querySelector("h2").innerHTML = playerOne;
const start = document.querySelector("#button");
const outputMessaggio = document.querySelector("#vincitore");


start.addEventListener("click", function(){
  numeroCasuale = Math.ceil(Math.random() * 6);
  numeroCasuale2 = Math.ceil(Math.random() * 6);

  document.querySelector(".number-extracted").innerHTML = numeroCasuale;
  document.querySelector(".number-extracted-2").innerHTML = numeroCasuale2;
  
  if (numeroCasuale > numeroCasuale2){
    outputMessaggio.innerHTML = `Il vincitore è ${playerOne}` 
  }

  else if(numeroCasuale2 > numeroCasuale){
    outputMessaggio.innerHTML ="Il vincitore è PC"
  }
  
  else {
    outputMessaggio.innerHTML = "Pareggio"
  }
});













