const produtos = [ 
    {nome: `Notebook`, preco: 3000, fragil: true},
    {nome: `Desktop`, preco: 2500, fragil: false},
    {nome: `Copo de Vidro`, preco: 15.99, fragil: true},
    {nome: `Copo de Plástico`, preco: 11.99, fragil: false},
]
// filter serve para filtrar os elementos presentes no Array 
console.log(produtos.filter(function(p) {
    return p.preco <= 2500


}))
// abaixo serão criados 2 filters para filtrar os elementos do Array como Caro(acima de 500 reais) e Fragil(produtos fragéis)
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter(caro).filter(fragil))