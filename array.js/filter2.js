Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i],i,this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [ 
    {nome: `Notebook`, preco: 3000, fragil: true},
    {nome: `Desktop`, preco: 2500, fragil: false},
    {nome: `Copo de Vidro`, preco: 15.99, fragil: true},
    {nome: `Copo de Plástico`, preco: 11.99, fragil: false},
]

// abaixo serão criados 2 filters para filtrar os elementos do Array como Caro(acima de 500 reais) e Fragil(produtos fragéis)
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro).filter2(fragil))