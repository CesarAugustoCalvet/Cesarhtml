// Armazenando uma função em uma variavel
const imprimirSoma = function (a,b) {
    console.log(a + b)
}
imprimirSoma(20,10)
// Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}
console.log(soma(50,50))
// retorno implícito, não vai aparecer a palavra return nem as chaves para iniciar o bloco de código
const subtracao = (a,b) => a - b
console.log(subtracao(50,20))