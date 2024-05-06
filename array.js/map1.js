const numeros = [1,2,3,4,5] 
// map vai modificar os dados que estão presentes no Array acima. Vai manter a mesma quantidade porém os dados serão diferentes, desta forma gerando um novo Array.
// e significa os elementos do Array
let resultado = numeros.map(function(e){
return e * 2
})
console.log(resultado)