function padovan(n) {
    let padArr = [1, 1, 1, 2]
    if (n > 3) {
        for (let i = 4; i <= n; i++) {
            padArr.push(padArr[padArr.length - 2] + padArr[padArr.length - 3])
        }
        return padArr[n]
    } else {
        return padArr[n]
    }
}
console.log(padovan(115));