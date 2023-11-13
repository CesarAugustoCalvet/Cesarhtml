const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falardePessoa = pessoa.falar.bind(pessoa)
falardePessoa()