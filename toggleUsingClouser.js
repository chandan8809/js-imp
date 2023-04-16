function toggler(...arg){
    index=0
    return function toggle(){
        console.log(arg[index])
        index=index+1
        if(index>=arg.length){
            index=0
        }
    }
}

let toggle=toggler(1,2,3)
toggle()
toggle()
toggle()
toggle()
toggle()


let OnOff=toggler("on","off")
OnOff()
OnOff()
OnOff()
OnOff()
OnOff()
