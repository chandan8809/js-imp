 //let str='key,value,pair,javascript'

// //use recursion to create nested object

// let arr=str.split(",")

// var rec=(arr,i=0,obj={})=>{
//     if(i==arr.length) return obj

//     return {[arr[i]]:rec(arr,i+1)}
// }

// console.log(rec(arr))


let str='key,value,pair,javascript'

let arr=str.split(",")
//console.log(arr)
function convert(arr,n){
    if(n<0){
        return {}
    }
    
    return {[arr[n]]:convert(arr,n-1)}
}

console.log(convert(arr,arr.length-1))

