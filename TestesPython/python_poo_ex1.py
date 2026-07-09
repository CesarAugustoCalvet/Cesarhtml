#Declaração da Classe
class Careca:
    def __init__(self): # type: ignore
        #Atributos de Instância
       self.nome = ""
       self.idade = 0
    #Métodos de Instância    
    def aniversario(self):
        self.idade = self.idade+1
        
    def mensagem(self):
        return f"{self.nome} é Careca e tem {self.idade} anos de idade. "
        
        
        