const pai = { nome: `Cesar`, cordePele: `Branca`}
const filha1 = Object.create(pai)
filha1.nome = `Maria Eduarda`
console.log(filha1.cordePele)
