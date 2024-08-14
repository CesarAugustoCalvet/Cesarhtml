num1 = float(input("Digite um primeiro número : "))
print("Seu primeiro número digitado foi {}".format(num1))
num2 = float(input("Digite um segundo número : "))
print("Seu segundo número digitado foi {}".format(num2))
soma = 0 
soma = num1 + num2
print("A soma dos números digitados foi {}".format(soma))
média = 0
média = (num1+num2)/2
print("A média dos números digitados foi {}".format(média))
if soma >= 6 :
  print("Aluno aprovado")  
elif soma < 6 and soma == 5  :
 print("Aluno em recuperação")  
elif soma < 5:
  print("Aluno reprovado")   

