altura = float(input("Digite a altura da casa : "))
largura = float(input("Digite a largura da casa : "))
area = altura * largura
print(" A casa possui as dimensões de  {} cm de altura, e {} cm de largura, desta forma a área total da casa é {} m2  ".format(altura,largura,area))
pintura = area*2
print("Para pintar toda a casa serão necessárias {} L de tinta".format(pintura))