inicio = int(input("Ínicio do Laço : "))
fim = int(input("Fim do Laço : "))
passo = int(input("Número de Passos no decorrer do Laço :"))
for cont in range (inicio,fim+1, passo):  
    print(cont)
print("Fim do Laço ! ")
 # Foi usado fim+1 para o contador não desconsiderar o número digitado como fim do laço, pois numa range se desconsidera o último termo.
 
 