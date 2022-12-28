function humanReadable(seconds) {
    let str = ['0', '0', ':', '0', '0', ':', '0', '0']
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);
    if (h > 0) {
        h >= 10 ? (str.splice(0, 2, h.toString())) : str[1] = h
        str = str.join('').split('')
    }
    if (m > 0) {
        m >= 10 ? (str.splice(3, 2, m.toString())) : str[4] = m
        str = str.join('').split('')
    }
    if (s > 0) {
        s >= 10 ? (str.splice(6, 2, s.toString())) : str[7] = s
    }
    return str.join('')
}
console.log(humanReadable(45296));