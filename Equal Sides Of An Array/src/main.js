function findEvenIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0
        let rightSum = 0
        for (let j = 0; j <= i - 1; j++) {
            leftSum += arr[j]
        }
        for (let k = i + 1 ; k <= arr.length - 1; k++) {
            rightSum += arr[k]
        }
        if(leftSum === rightSum)
            return i
    }
    return -1
}
let array = [1, 2, 1, -2, 1]
console.log(findEvenIndex(array))