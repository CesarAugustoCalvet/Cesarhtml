function getPreco(imposto = 0, moeda = `R$`) {
return `${moeda} ${this.preco * (1-this.desc) * (1+imposto)}`
}
const produto = {
    nome: `Notebook`,
    preco: 4590,
    desc: 0.30,
    getPreco
}
console.log(produto.getPreco())

const carro = {preco: 10570, desc: 0.3}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.20, `R$`))
console.log(getPreco.call(carro, [0.20, `R$`]))


