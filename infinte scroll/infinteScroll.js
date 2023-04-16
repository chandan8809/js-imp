const container=document.querySelector(".container")


let n=25
let i=0;
function loadImages(numImages,i){
    
    
    while(i<numImages){
        const img=document.createElement("img")
        img.src=`${URL}`
        const text=document.createElement("p")
        text.innerHTML=`masai student ${i}`
        container.append(text)
        i++
    }
}
loadImages(n,i)

window.addEventListener('scroll',()=>{
    if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight){
        n+=25
        i+=25
        loadImages(n,i)
    }
})