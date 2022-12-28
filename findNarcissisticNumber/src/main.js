function narcissistic(value){
    let valueString = value.toString()
    let res = 0
    for(let i = 0; i < valueString.length; i++)
        res += Math.pow(Math.floor(valueString[i]), valueString.length)

    return value === res
}
console.log(narcissistic(407));

function findNarc(area){
    let arr = []
    for(i = 1; i < area; i++){
        if(narcissistic(i))
            arr.push(i)
    }
    return arr
}
console.log(findNarc(10000));
// console.log(n.toString().length);