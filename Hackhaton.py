#-*- coding: utf-8 -*-

#read file
with open("princesse.txt") as f:
    texte = f.read()
    print(texte)

# lookup Dictionary 
repl_dict = {"princesse" : "\U0001F478", "PRINCESSE" : "\U0001F478", "prince": "\U0001F934" , "France":"\U0001F950"}

# one-liner to replace words 
fin_texte = " ".join(repl_dict.get(e, e) for e in texte.split())

f.close()

# printing end result  
print(fin_texte)


