function validISBN10(isbn) {
    let sum = 0
    if (isbn.length === 10) {
        for (let i = 0; i < 9; i++) {
            sum += isbn[i] * (i + 1)
            console.log(sum);
        }
        isbn[9] === 'X' ? sum += 100 : sum += isbn[9] * 10
    } else {
        return false
    }
    console.log(sum);
    return sum % 11 === 0
}
let ex1 = "048665088X"
console.log(validISBN10(ex1));