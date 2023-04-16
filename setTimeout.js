// for(var i=0;i<5;i++){
//     function time(i){
//         setTimeout(()=>{
//             console.log(i)
//         },i*1000)
//     }
//     time(i)
   
// }

for(var i=0;i<5;i++){
    function count(i){
        setTimeout(()=>{
            console.log("i",i)
        },i*1000)
    }

    count(i)
}