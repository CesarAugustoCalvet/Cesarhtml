dias = int(input("Quantos dias você alugou o carro ? "))
km = float(input("Quantos Kilomêtros você percorreu nestes dias ? "))
pago = (dias * 60) + (km * 0.15)
print(" O total a pagar é de R$ {}".format(pago))