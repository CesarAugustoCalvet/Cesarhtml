let dobro = function (a) {
    return 2 * a
}
dobro = (a) => {
    return 2 * a 
}
dobro = a => 2 * a  // return está implícito
console.log(dobro(Math.PI)) // função math com o uso do número de PI
let ola = function () {
    return olá
}
ola = () => `Olá`
ola = _ => `Olá` // possui um paramêtro que está implícito com o uso do _
console.log(ola())