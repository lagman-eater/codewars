function validParentheses(parens) {
    let arr = [...parens]
    let leftSum = 0
    let rightSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            leftSum++
        }
        else if (arr[i] === ')') {
            rightSum++
        }
        if (leftSum < rightSum) {
            return false
        }
    }
    if (rightSum === leftSum) {
        return true
    } else {
        return false
    }
}
let tru = '()()';
let fal = '';
let empty = ''
console.log(validParentheses(tru));