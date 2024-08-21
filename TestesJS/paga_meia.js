idade = 31
escpub = "Não" 
if (idade < 21) {
    console.log("Você ainda paga meia no cinema pela idade !")
}
else if ( idade >= 21) {
    if (escpub == "Sim") {
        console.log("Você não paga meia no cinema pela idade, porém por trabalhar em Escola Pública terá direito a meia entrada")
        
    }
    else if ( escpub == "Não") {
        console.log("Você não paga meia no cinema e por ter mais de 21 Anos e por não trabalhar em Escola Pública !")
    }

   
}

