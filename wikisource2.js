let p=document.querySelectorAll("p")
let h=document.querySelectorAll("h1")
emojis={
    princesse:"👸",
    prince:"🤴"                                                       
}
function changeToEmoji(x){
    for(let y=0;y<x.length;y++){
        let strNew=x[y].textContent.split(" ");
        for(let i=0; i < strNew.length;i++){
            for(let key in emojis){
                if(key==strNew[i]){
                    strNew[i]=emojis[key]
                }
            }
            
        }
        x[y].textContent=strNew.join(" ");
    }    
}

changeToEmoji(p)
changeToEmoji(h)
