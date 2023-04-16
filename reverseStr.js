str="chandan"
//  function rec(str,n){
//      if(n<0) return ""

//      return str[n]+rec(str,n-1)
//  }
//  console.log(rec(str,str.length-1))


// let i=0;
// let j=str.length-1
// while(i<j){              //not possible bexause string are immutable
//     let temp=str[i];
//     str[i]=str[j]
//     str[j]=temp
//     i++
//     j--

//     console.log(str)
// }

function rec(str,n){
    if(n<0){
        return ""
    }
    return str[n]+rec(str,n-1)
}
console.log(rec(str,str.length-1))