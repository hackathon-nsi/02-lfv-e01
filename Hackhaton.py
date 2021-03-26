# initializing string
str_in = "hello world hello raphael world Gabriel hello world hello"

# lookup Dictionary 
repl_dict = {"hello" : "\U0001F44B", "world": "\U0001F30E" , "raphael":"\U0001F6B6" , "Gabriel":"\U0001F9CD"}
  
# one-liner to solve problem 
fin_str = " ".join(repl_dict.get(e, e) for e in str_in.split())

# printing end result  
print("Final String : "+ str(fin_str))
