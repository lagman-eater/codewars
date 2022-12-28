function arrayDiff(a, b) {
    // for(let i = 0; i < b.length; i++){
    //     for(let j = a.length - 1; j >= 0; j--){
    //         if(b[i] === a[j]){
    //             a.splice(j, 1)
    //         }
    //     }
    // }
    // return a

    // return a.filter(e => !b.includes(e))

    // b = new Set(b) // for Array.dif hero
    // return a.filter(v => !b.has(v)) 
}
console.log(arrayDiff([1, 2, 2, 2, 3, 4], [1, 2]));