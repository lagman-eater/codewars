function parse(data) {
    let num = 0, arr = []
    for (i = 0; i < data.length; i++) {
        data[i] === 'i' ? num += 1 :
            data[i] === 'd' ? num -= 1 :
                data[i] === 's' ? num = Math.pow(num, 2) :
                    data[i] === 'o' ? arr.push(num) :
                        null
    }
    return arr
}
let str = 'iiisdoso'
console.log(parse(str))
