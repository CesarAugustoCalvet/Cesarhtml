class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu Nome é ${this.nome}`)
    }
}
const pessoa1 = new Pessoa(`João`)
pessoa1.falar()
// Class  

const Criarpessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const pessoa2 = Criarpessoa("Cesar")
pessoa2.falar()
// Factory 