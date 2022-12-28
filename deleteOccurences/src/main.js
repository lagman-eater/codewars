function deleteNth(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        let newArr = [i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                newArr.push(j)
            }
        }
        if(newArr.length > n){
            for(let k = newArr.length - 1; k >= n; k--){
                arr.splice(newArr[k], 1)
            }
        }
        newArr = []
    }
    return arr
}
let arr3 = [42, 19, 29, 38, 29, 33, 22, 33, 42, 22, 22, 38, 23, 22, 22, 23, 22, 12, 42, 42, 33, 2, 33, 29, 38, 29, 23, 23, 33, 29, 33, 2, 42, 19, 42, 42, 22, 38, 22, 12, 29, 23, 42, 22]
        // [42, 19, 29, 38, 29, 33, 22, 33, 42, 22, 22, 38, 23, 22, 22, 23, 12, 42, 42, 33, 2, 33, 29, 38, 29, 23, 23, 33, 29, 2, 42, 19, 38, 12, 23]
let arr2 = [1, 1, 3, 3, 7, 2, 2, 2, 2]
let arr1 = [20, 37, 20, 21]
console.log(deleteNth(arr1, 1));