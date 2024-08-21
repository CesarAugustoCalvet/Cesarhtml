idade = int(input("Qual a sua idade ? "))
if idade <= 21 :
  print("Você paga meia entrada no cinema pela idade !")
elif idade > 21 :
    escpub = str(input("Você trabalha em Escola pública ? [Sim/Não] "))
    if escpub == "Sim" :
      print("Você não paga meia entrada no cinema pela idade, porém por trabalhar em Escola pública terá direito a meia entrada no cinema !")  
    elif escpub == "Não" :
      print("Você não terá direito a meia entrada no cinema pois já tem mais de 21 anos e não trabalha em Escola pública !")  
    
