function criarProduto(nome , preco) {
    return {
        nome,
        preco,
        desconto: 0.4
    }
}
console.log(criarProduto("Notebook", 2359.99))
console.log(criarProduto("Samsung S24", 5999.99))
console.log(criarProduto("Iphone 15", 8999.99))