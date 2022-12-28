function countPhotos(road) {
    let sum = 0
    for (let i = 0; i < road.length; i++) {
        if(road[i] === '>'){
            for(let j = i; j < road.length; j++){
                road[j] === '.' ? sum++ : null
            }
        }
        if(road[i] === '<'){
            for(let d = i; d >= 0; d--){
                road[d] === '.' ? sum++ : null
            }
        }
    }
    return sum
}
let r = "..<>.>>.><>>.<<<.<>>.>.>>>>>..><<.>.>>..>.>>><><>."
console.log(countPhotos(r))