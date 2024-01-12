const soma = function (x,y) {
    return x + y
}
const imprimirResultado = function (a,b, operacao = soma ) {
    console.log(operacao(a,b))
}
imprimirResultado(5,10)
imprimirResultado(5,10, soma)
imprimirResultado(5,10, function (x,y) {
    return x - y 
})
imprimirResultado(5,10, (x,y) => x * y)