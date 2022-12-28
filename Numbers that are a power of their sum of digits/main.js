function powerSumDigTerm(n) {
    for (let i = 10; n > 0; i++) {
        let arr = Array.from(String(i), Number)
        let sum = arr.reduce(function (a, b) {
            return a + b;
        }, 0);
        if (i === Math.pow(sum, arr.length)) {
            n--
            if (n === 0) {
                return i
            }
        }
    }
}
console.log(powerSumDigTerm(4));
