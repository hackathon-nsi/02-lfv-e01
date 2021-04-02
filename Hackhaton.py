#read file
import requests
reponse = requests.get('https://raw.githubusercontent.com/hackathon-nsi/h7n-nsi-02/main/textes/La%20Princesse%20de%20Cl%C3%A8ves/lpdc-partie1.txt')
texte = reponse.text

# lookup Dictionary 
repl_dict = {"princesse" : "\U0001F478", "PRINCESSE" : "\U0001F478", "prince": "\U0001F934" , "France":"\U0001F950"}
  
# one-liner to replace words 
fin_texte = " ".join(repl_dict.get(e, e) for e in texte.split())

# printing end result  
print(fin_texte)


