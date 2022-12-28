function solution(roman) {
    let arr = []
    let res = 0
    for (let i = 0; i < roman.length; i++) {
        if (roman[i] === 'M') {
            arr.push(1000)
        } else if (roman[i] === 'D') {
            arr.push(500)
        } else if (roman[i] === 'C') {
            arr.push(100)
        } else if (roman[i] === 'L') {
            arr.push(50)
        } else if (roman[i] === 'X') {
            arr.push(10)
        } else if (roman[i] === 'V') {
            arr.push(5)
        } else if (roman[i] === 'I') {
            arr.push(1)
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] >= arr[j + 1] || j === (arr.length - 1)) {
            res += arr[j]
        } else {
            res += arr[j + 1] - arr[j]
            j++
        }
    }
    return res
}
console.log(solution('MDCLXVI'));