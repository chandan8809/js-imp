function togger(...args){
    let a=0;
    
    return ()=>{
        console.log(args[a])
        a=a+1;
        if(a==args.length){
            a=0
        }
    }
}

let tog=togger(1,2,3)
tog()
tog()
tog()
tog()
tog()