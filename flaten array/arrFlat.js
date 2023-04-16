arr=[1,[2,3],[1,2,[1]]]

// const flatten=(arr)=>{
//     NewArr=arr.reduce((acc,items)=>{
//         if(Array.isArray(items)){
//             acc=acc.concat(flatten(items))
//         }
//         else{
//             acc.push(items)
//         }
//         return acc
//     },[])
//     return NewArr
// }

// console.log(flatten(arr))



// const flatarr=(arr)=>{
//     newArr=arr.reduce((acc,items)=>{
//         if(Array.isArray(items)){
//             acc=acc.concat(flatarr(items))
//         }
//         else{
//             acc.push(items)
//         }
//         return acc
//     },[])
//     return newArr
// }

console.log(flatarr(arr))

function flatarr(arr){
    let newArr=[];
    newArr=arr.reduce((acc, item)=>{
        if(Array.isArray(item)){
            acc=acc.concat(flatarr(item))
        }
        else{
            acc.push(item)
        }
        return acc;

    },[])
    return newArr;
}

