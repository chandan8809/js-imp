function sleep(time){
   return new Promise((res,rej)=>{
       if(time>500){
           res("go to hell")
       }
       else{
           rej("great work")
       }
   })
}

let prom=sleep(501).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})