function solution(string) {
    let arr = [...string]
    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === arr[i].toUpperCase())
            arr.splice(i, 0, ' ')
    }
    return arr.join('')
    // arr.filter((e, i) => )
}
let str = 'camelCase'
console.log(solution(str))