const pilotos = [`Schumacher`, `Vettel`, `Alonso`, `Montoya`]
pilotos.pop() // comando pop remove o último elemento do Array
console.log(pilotos)

pilotos.push(`Massa`) // comando push adiciona um novo elemento do Array(na última posição)
console.log(pilotos)

pilotos.shift() // comando shift remove o primeiro elemento do Array
console.log(pilotos)

pilotos.unshift(`Hamilton`) // comando unshift adiciona o primeiro elemento do Array
console.log(pilotos)

// splice pode adicionar ou remover elementos.

// adicionar
pilotos.splice(2,0,`Bottas`, `Raikonnen`)
console.log(pilotos)

// remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // comando slice cria um novo array, a partir de um pedaço do array antigo, neste exemplo será gerado um novo array a partir da posição 2 do array
console.log(algunsPilotos1)