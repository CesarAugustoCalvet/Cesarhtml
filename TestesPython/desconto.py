salario = float(input("Digite o seu salário  : R$  "))
desc = salario * 15/100
salario_liquido = salario - desc
print("O seu Salário bruto é R$ {} com desconto de 15 por cento ao mês do FGTS no valor de {} , sendo assim o seu Salário líquido é {}".format(salario,desc,salario_liquido))