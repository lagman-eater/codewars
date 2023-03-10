let maxSequence = (arr) => {
    let count
    let sumArr = []
    let negative = true
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                negative = false
            }
            count = arr[i]
            sumArr.push(arr[i])
            for (let j = i + 1; j < arr.length; j++) {
                count += arr[j]
                sumArr.push(count)
            }
            count = 0
        }
    } else {
        return 0
    }
    return negative ? 0 : Math.max(...sumArr)
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));