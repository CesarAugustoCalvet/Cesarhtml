from datetime import date
ano_atual = date.today().year
nasc = int(input("Ano de Nascimento: "))
idade = ano_atual- nasc 

print("Quem nasceu em {} tem {} anos em {}".format(nasc,idade,ano_atual))
if idade == 18 :
    print("Você tem que se alistar nesse ano !")
elif idade < 18 :
    falt_alist = 18 - nasc
    print("Ainda faltam {} anos para você se alistar !".format(falt_alist))