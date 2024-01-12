const fabricantes = ["Mercedes", "Audi","BMV", "Volvo"]
function imprimir(nome, indice) {
    console.log(`${indice }. ${nome}`)
}
fabricantes.forEach(imprimir)
fabricantes.forEach(function(a) {
    console.log(a)
})
