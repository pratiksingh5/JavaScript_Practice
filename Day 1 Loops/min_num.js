// let arr = [30,10,20,40,50]

// let arr2 = arr.sort()

// console.log(arr2[0])

// let minNum = arr[0];

// for(i=1; i<arr.length; i++){
//     if(arr[i] < minNum){
//         minNum = arr[i]
//     }
// }
// console.log(minNum)


function MinNum(arr){
    let CurrentminNum = arr[0];
    for(i=1; i<arr.length; i++){
    if(arr[i] < CurrentminNum){
        CurrentminNum = arr[i]
    }
}
return CurrentminNum
}

console.log(MinNum([4,5,1]))