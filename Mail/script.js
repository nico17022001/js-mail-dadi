const mailList = [
  "nico@gmail.com",
  "gino@gmail.com",
  "paolo@gmail.com",
  "alessio@gmail.com",
  "luca@gmail.com",
]

const mailUtente = prompt("inserisci la tua mail")

  let verificato = false 


  for (i = 0; i < mailList.length; i++){

  if (mailUtente == mailList[i]){
    verificato = true}

  if (verificato = true){
    console.log("Sei loggato con successo")
    
  }else{
    console.log("Ritenta accesso")
  }
}




  
  


