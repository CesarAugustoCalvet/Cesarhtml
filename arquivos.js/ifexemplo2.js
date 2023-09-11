function teste1 (num){
    if(num > 7)
    console.log(num)
    console.log("Final")
}
teste1(6)
teste1(8)
function teste2 (num){
    if(num > 7) ; // Não deve ser utilizado ";" do lado de estruturas de controle como if,else,while,switch e case.
    {
        console.log(num)
    }
}
teste2(9)
teste2(4)