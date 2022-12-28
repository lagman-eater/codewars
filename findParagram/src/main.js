function isPangram(string) {
    const stringArr = [...string.toLowerCase()]
    const newArr = stringArr.filter((e, i, a) => a.indexOf(e) === i)
    const newLastArr = newArr.filter(function(item){
        if(/^[a-z]+$/.test(item))
            return item
    })
    return newLastArr.length === 26
}
console.log(isPangram('ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ'))