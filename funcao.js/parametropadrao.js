// Estrategia 1 para gerar valor padrão, || significa ou, && significa e 
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}
console.log(soma1(),soma1(3),soma1(1,2,3))
// Estrategia 2, 3 e 4 para gerar valor padrão, != significa diferente
function soma2(a,b,c) {
   a = a != undefined ? a : 1
   b = 1 in arguments ? b : 1
   c =  isNaN(c) ? c : 1
   return a + b + c

}
console.log(soma1(),soma1(3),soma1(1,2,3))

// Valor padrão do Versão 2015 do JS, melhor forma de fazer o parâmetro padrão
function soma3( a = 1 , b = 1 , c = 1) {
    return a + b + c
}
console.log(soma1(),soma1(3),soma1(1,2,3))
