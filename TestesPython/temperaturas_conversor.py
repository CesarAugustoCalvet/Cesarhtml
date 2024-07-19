temperatura = float(input("Digite a temperatura atual em °C : "))
conversor = ((temperatura * 9) / 5) + 32 # os parenteses significam as ordens de precedência.
print("A temperatura atual {}°C significa {}°F".format(temperatura,conversor))