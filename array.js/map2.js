// os elementos estão dentro de aspas simples pois os dados estão em formato JSON.
const carrinho = [ ` {"nome":"Borracha": "preco": 3.57 }`,` {"nome":"Caderno": "preco": 18.70 }`, ` {"nome":"Kit de Lapis": "preco": 41.90 }`, 

]
const paraObjeto = json => JSON.parse(json)   
const apenasPreco = produto => produto.apenasPreco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
