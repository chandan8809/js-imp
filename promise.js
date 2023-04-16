
function sleep(time){
    let sleep=new Promise((resolve,reject)=>{
        if(time){
            resolve(`you can sleep ${time}`)
        }
        else{
            reject("you cant sleep")
        }
    })
    return sleep
}

// sleep(500).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// async function test(){
//     try{
//         let sleep=await sleep(100)
//         console.log(sleep)

//     }catch(err){
//         console.log(err)
//     }
// }
// test()

var promise = []
promise[0] = sleep(100).then(res=>'promise 1')
promise[1] = sleep(500).then(res=>{
    throw new Error('error message')
}).catch(err=>err)
promise[2] = sleep(2000).then(res=>'promise 3')
promise[3] = sleep(1000).then(res=>'promise 4')

Promise.all( promise ).then(res=>console.log(res))
