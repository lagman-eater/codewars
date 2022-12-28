function moveZeros(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }
    return arr
    // arr.filter((e, i) => {
    //     e === 0 ? (arr.splice(i, 1), arr.push(0)) : null
    // })
    // return arr
}
let arr1 = [false, 1, 0, 1, 2, 0, 1, 3, "a"]
console.log(moveZeros(arr1));