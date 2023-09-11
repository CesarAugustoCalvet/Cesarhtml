imprimirResultado = function (nota) {
    
    switch(Math.floor(nota)) {
        case 10 :
        case 9 : 
     console.log(" Conceito Ótimo !")
     break
       case 8 :
       case 7 :
     console.log("Conceito Bom ! ")
     break
        case 6 : 
        case 5 :
    console.log("Conceito Regular !")
    break
        case 4 :
        case 3 :
        case 2 : 
        case 1 : 
        case 0 :
    console.log("Conceito Insuficiente !")
    break
    default : 
    console.log("Nota Invalída !")   

    }
    
}
imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8)
imprimirResultado(7)
imprimirResultado(6)
imprimirResultado(5)
imprimirResultado(4)
imprimirResultado(3)
imprimirResultado(2)
imprimirResultado(1)
imprimirResultado(0)
imprimirResultado(11)

