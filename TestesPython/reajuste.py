salario = float(input("Digite o seu salário  : R$  "))
reajuste = salario * 15/100
salario_atual = salario + reajuste
print("O seu Salário antigo era R$ {} com reajuste devido a inflação de 15 por cento no valor de {} , sendo assim o seu Salário atual é {}".format(salario,reajuste,salario_atual))