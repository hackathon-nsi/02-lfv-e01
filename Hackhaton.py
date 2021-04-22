#-*- coding: utf-8 -*-

# read file
with open("princesse.txt") as fin:
    texte = fin.read()

# create output file
fout = open("output.txt","w+")

# lookup Dictionary 
repl_dict = {"princesse" : "\U0001F478", "PRINCESSE" : "\U0001F478", "prince": "\U0001F934" , "France":"\U0001F950"}

# one-liner to replace words 
fout_texte = " ".join(repl_dict.get(e, e) for e in texte.split())

# printing end result  
fout.write(fout_texte)

# close files
fin.close()
fout.close()


