let count = -1
function makeLooper(str) {
    count++
    if (count >= str.length) {
        return str[(count % str.length)]
    } else {
        return str[count]
    }
}
console.log(makeLooper('abcd'))
console.log(makeLooper('abcd'))
console.log(makeLooper('abcd'))
console.log(makeLooper('abcd'))
console.log(makeLooper('abcd'))
console.log(makeLooper('abcd'))
console.log(makeLooper('abcd'))
console.log(makeLooper('abcd'))
console.log(makeLooper('abcd'))
console.log(makeLooper('abcd'))
// const asd = makeLooper('abc')
// asd()