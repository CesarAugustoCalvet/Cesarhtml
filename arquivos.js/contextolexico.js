const valor = "Global"
function Minhafuncao(){
     console.log(valor)
}
function exec(){
    const valor = "Local"
    Minhafuncao()
}
exec()