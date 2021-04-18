console.log("Chrome extension ready to go !")


let p=document.querySelectorAll("p")
let h1=document.querySelectorAll("h1")
let h2=document.querySelectorAll("h2")
let h3=document.querySelectorAll("h3")
let h4=document.querySelectorAll("h4")
let h5=document.querySelectorAll("h5")
let h6=document.querySelectorAll("h6")



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
changeToEmoji(h1)
changeToEmoji(h2)
changeToEmoji(h3)
changeToEmoji(h4)
changeToEmoji(h5)
changeToEmoji(h6)
