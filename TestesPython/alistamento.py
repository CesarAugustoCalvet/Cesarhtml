idade = int(input("Qual a sua idade ? "))
alist = 18 - idade
alist2 = idade - 18
if idade < 18 :
 print("Você não pode se alistar ainda, pois você tem {} anos !!, ainda faltam {} anos para você se alistar ".format(idade,alist))
elif idade >= 18 :
    print("Você deve se alistar, pois você tem {} anos, já passou {} anos que você deveria ter se alistado ! ".format(idade,alist2)) 