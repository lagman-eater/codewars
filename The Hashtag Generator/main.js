function generateHashtag(str) {
    str = str.trim()
    console.log(str.trim());
    if (str.length === 0) {
        return false
    } else {
        str = str.split('')
        str.unshift('#')
        str[1] = str[1].toUpperCase()
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] === ' ') {
                str.splice(i, 1)
                str[i] = str[i].toUpperCase()
            }
        }
        if (str.length > 140) {
            return false
        }
        return str.join('')
    }
}
console.log(generateHashtag('codewars'));