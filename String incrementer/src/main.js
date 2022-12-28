function incrementString(strng) {
    let strArr = strng.split('')
    let arr = []
    if (!(/\d/.test(strArr[strArr.length - 1]))) {
        return strng + '1'
    } else {
        for (let i = strArr.length - 1; i >= 0; i--) {
            if (/\1-9/.test(strArr[i])) {
                strArr.splice(i, 1)
                arr.push(Number(strng[i]))
            }
        }
        console.log(strArr);
        console.log(arr);
        // for(let i = arr.length - 1; i >= 0; i-- ){
        //     if(arr[i] === 0){
        //         strArr.push(String(arr[i]))
        //         arr.splice(i, 1)
        //     }
        // }
        // if(String(+arr.reverse().join('') + 1).length > String(+arr.reverse().join('')).length){
        //     strArr.splice(strArr.length - 1, 1)
        //     strArr.push(String(+arr.reverse().join('') + 1))
        // }
        // return strArr.join('')
    }
}

let str = 'foo'
let str2 = 'foo23'
let str3 = 'foo099'
let str4 = 'foobar00999'
let str5 = 'foobar000'
console.log(incrementString(str4));