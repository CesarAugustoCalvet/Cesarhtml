class Lancamento{
    constructor(nome = `Cesar`, valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}
class Ciclofinanceiro {
    constructor(mes,ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l=> {
        valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamento(`Salário`, 4800)
const contadeLuz = new Lancamento(`Luz`, -210) 

const contas = new Ciclofinanceiro(3,2024)
contas.addLancamentos(salario, contadeLuz)
console.log(contas.sumario())

