function sumPairs(ints, s) {
    let outerArr = []
    // let inArr = []
    for(let i = 0; i < ints.length; i++){
        for(let j = i + 1; j < ints.length; j++){
            if(ints[i] + ints[j] === s){
                let innerArr = []
                innerArr.push(i, j)
                outerArr.push(innerArr)
                // inArr.push(j)
                innerArr = []
            }
        }
    }
    outerArr.filter((e, i) => Math.min(...inArr) === outerArr[k][1] ? console.log(1) : console.log(2))
    console.log(outerArr);
    // for(let k = 0; k < outerArr.length; k++){
    //     if(outerArr[k][2] === Math.min(...inArr)){
    //         return [outerArr[k][0], outerArr[k][1]]
    //     }
    // }
    return undefined
}
let arr1 = [4, 3, 2, 3, 4]
let arr = [5, 9, 13, -3]
console.log(sumPairs(arr1, 6));