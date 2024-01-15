function Carro(velocidadeMaxima = 200, delta = 5) {
// Atributo privado
let velocidadeAtual = 0
// Metodo Público 
this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
        velocidadeAtual += delta
    } else {
        velocidadeAtual = velocidadeMaxima
    }
}
}

// Outro Metodo Público 
this.getVelocidadeAtual = function () {
    return velocidadeAtual
}

