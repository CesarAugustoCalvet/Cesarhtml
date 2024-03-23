function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}
const aula1 = new Aula (`Bem Vindo ao Curso !`, 123)
const aula2 = new Aula (`Até a próxima aula !`, 456)
console.log(aula1, aula2)