function reverse(str) {
    let arr = str.split(' ')
    for (let i = 1; i < arr.length; i += 2) {
        arr.splice(i, 1, arr[i].split("").reverse().join(''))
    }
    return arr.join(' ').trim()
}
let string = '   '
console.log(reverse(string));