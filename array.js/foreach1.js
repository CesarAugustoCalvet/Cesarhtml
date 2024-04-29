const aprovados = [`Cesar`, `Lílian`, `Katia`]
aprovados.forEach(function(nome, indice) {
console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))
// Neste exemplo você só consegue passar 3 paramêtros: nome, índice e array.