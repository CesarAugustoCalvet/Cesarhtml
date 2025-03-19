const alunos = [
    {nome: "Cesar", nota : 4.8 , bolsista: true},
    {nome: "Lílian", nota : 8.8 , bolsista: false},
    {nome: "João", nota : 7.8 , bolsista: true},
    {nome: "Katia", nota : 5.8 , bolsista: false}
]
console.log(alunos)
// Desafio 1 : Todos os alunos são bolsistas ? 
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


// Desafio 2 : Algum aluno é bolsista ? 
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista ).reduce(algumBolsista))