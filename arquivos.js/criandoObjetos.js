// Usando a notação literal
const obj1 = {}
console.log(obj1)
//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecocomDesconto = () => {
        return preco * (1 - desc)
    }
    }
    const prod1 = new Produto(` Caneta`, 7.99, 0.15)
    const prod2 = new Produto(` Notebook`, 2999.99, 0.25)
    console.log(prod1.getPrecocomDesconto(), prod2.getPrecocomDesconto())

  // Função Factory
  function criarFuncionario(nome,salario, faltas) {
    return {
        nome,salario, faltas, getSalario (){
            return (salario/ 30 ) * (30 - faltas)
        }
    }
  }
  const func1 = criarFuncionario(`Cesar`, 1560.70, 4)
  const func2 = criarFuncionario(`João`, 1360.70, 4)
  console.log(func1.getSalario(), func2.getSalario())