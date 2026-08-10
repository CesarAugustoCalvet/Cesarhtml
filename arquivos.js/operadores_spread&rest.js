// Operador ... rest(juntar)/spread(espalhar)

// uso de spread com objeto
const funcionario = { nome: 'Cesar', idade: 33}
const funcionario_spread = {...funcionario}
console.log(funcionario_spread)

// uso de spread com array
const empresa = ['Fernando','Alessandro','Cesar']
const empresa_spread = ['Amanda',...empresa, 'Katia']
console.log(empresa_spread)