// function parent(){
//     let a=10;
//     return function(){
//         setTimeout(()=>{
//             console.log(a)
//         },5000)
//     }
// }

// parent()

function alpha(){
    let a=10
    return function beta(){
        let sum =a+20;
        console.log(sum)
    }
}

let gamma=alpha();
gamma();