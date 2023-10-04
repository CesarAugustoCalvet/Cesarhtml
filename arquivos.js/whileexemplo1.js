function getInteiroAleatorioEntre(min,max) {
    const valor = Math.random()*(max - min) + min
    return Math.floor(valor)
 }
 let opcao = 0
 while (opcao!= -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi:  ${opcao}.`)
 }
 console.log("Até a próxima!")
 // para usar placeholder ${} não pode usar ""(aspas duplas), e sim `(crase) !
