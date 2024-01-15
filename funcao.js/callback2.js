const notas = [2.5,3.7,9.6,10,5.6,8.7] 
// Sem Callback
let notasBaixas = [] 
for ( let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
    
}
console.log(notasBaixas)

// Com Callback 
notasBaixas = notas.filter(function (nota) {
    return nota > 7
})