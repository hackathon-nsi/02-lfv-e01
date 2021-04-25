let h1 = document.querySelector("h1");
let button = document.querySelector(".emojis");
let reset = document.querySelector(".reload")

reset.addEventListener("click",function(){
    location.reload()
});

button.addEventListener("click",function(){
    strNew=h1.textContent.split(" ");
    emojis={
        princesse:"👸",
        prince:"🤴"                                                       
    }
    for(let i=0; i < strNew.length;i++){
        for(let key in emojis){
            if(key==strNew[i]){
                strNew[i]=emojis[key]
            }
        }
        
    }
    h1.textContent=strNew.join(" ");
})
