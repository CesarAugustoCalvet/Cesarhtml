const pessoa = {
    nome: `Cesar`,
    idade: 31,
    peso: 75.2,
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor} `)
})
